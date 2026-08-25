import {
  createHmac,
  randomBytes,
  scrypt as scryptCallback,
  timingSafeEqual,
} from "node:crypto";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";

const scrypt = promisify(scryptCallback);
const usersFile = path.join(process.cwd(), "data", "users.json");
const sessionLifetime = 60 * 60 * 24 * 7;

function sessionSecret() {
  if (process.env.AUTH_SECRET) return process.env.AUTH_SECRET;
  if (process.env.NODE_ENV === "production") {
    throw new Error("AUTH_SECRET must be configured in production");
  }
  return "development-only-secret-change-me";
}

async function readUsers() {
  try {
    return JSON.parse(await readFile(usersFile, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

async function writeUsers(users) {
  await mkdir(path.dirname(usersFile), { recursive: true });
  const temporaryFile = `${usersFile}.tmp`;
  await writeFile(temporaryFile, JSON.stringify(users, null, 2), {
    mode: 0o600,
  });
  await rename(temporaryFile, usersFile);
}

export async function findUser(email) {
  const normalizedEmail = email.trim().toLowerCase();
  return (await readUsers()).find((user) => user.email === normalizedEmail);
}

export async function findUserById(id) {
  return (await readUsers()).find((user) => user.id === id);
}

export async function createUser(email, password) {
  const normalizedEmail = email.trim().toLowerCase();
  const users = await readUsers();
  if (users.some((user) => user.email === normalizedEmail)) return null;

  const salt = randomBytes(16).toString("hex");
  const passwordHash = (await scrypt(password, salt, 64)).toString("hex");
  const user = {
    id: randomBytes(16).toString("hex"),
    email: normalizedEmail,
    passwordHash,
    salt,
    createdAt: new Date().toISOString(),
  };
  users.push(user);
  await writeUsers(users);
  return user;
}

export async function verifyPassword(user, password) {
  const actual = await scrypt(password, user.salt, 64);
  const expected = Buffer.from(user.passwordHash, "hex");
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

export function createSessionToken(userId) {
  const payload = Buffer.from(
    JSON.stringify({
      sub: userId,
      exp: Math.floor(Date.now() / 1000) + sessionLifetime,
    }),
  ).toString("base64url");
  const signature = createHmac("sha256", sessionSecret())
    .update(payload)
    .digest("base64url");
  return `${payload}.${signature}`;
}

export function verifySessionToken(token) {
  if (!token) return null;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;

  const expected = createHmac("sha256", sessionSecret())
    .update(payload)
    .digest();
  const actual = Buffer.from(signature, "base64url");
  if (actual.length !== expected.length || !timingSafeEqual(actual, expected))
    return null;

  try {
    const session = JSON.parse(
      Buffer.from(payload, "base64url").toString("utf8"),
    );
    if (!session.sub || session.exp <= Math.floor(Date.now() / 1000))
      return null;
    return session;
  } catch {
    return null;
  }
}

export const sessionCookie = {
  name: "session",
  options: {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: sessionLifetime,
  },
};
