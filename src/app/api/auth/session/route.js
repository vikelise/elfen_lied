import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  findUserById,
  sessionCookie,
  verifySessionToken,
} from "@/lib/auth.server";

export async function GET() {
  const cookieStore = await cookies();
  const session = verifySessionToken(
    cookieStore.get(sessionCookie.name)?.value,
  );
  const user = session ? await findUserById(session.sub) : null;

  if (!user) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  return NextResponse.json({ user: { id: user.id, email: user.email } });
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set(sessionCookie.name, "", {
    ...sessionCookie.options,
    maxAge: 0,
  });
  return response;
}
