import { NextResponse } from "next/server";
import { loginSchema } from "@/lib/shemas/auth.shema";
import { createSessionToken, findUser, sessionCookie, verifyPassword } from "@/lib/auth.server";

export async function POST(request) {
  try {
    const parsed = loginSchema.safeParse(await request.json());
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 });
    }

    const user = await findUser(parsed.data.email);
    if (!user || !(await verifyPassword(user, parsed.data.password))) {
      return NextResponse.json({ error: "Неверный E-mail или пароль" }, { status: 401 });
    }

    const response = NextResponse.json({ user: { id: user.id, email: user.email } });
    response.cookies.set(sessionCookie.name, createSessionToken(user.id), sessionCookie.options);
    return response;
  } catch (error) {
    console.error("Login failed", error);
    return NextResponse.json({ error: "Не удалось войти" }, { status: 500 });
  }
}
