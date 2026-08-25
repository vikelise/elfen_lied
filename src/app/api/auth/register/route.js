import { NextResponse } from "next/server";
import { registerSchema } from "@/lib/shemas/auth.shema";
import {
  createSessionToken,
  createUser,
  sessionCookie,
} from "@/lib/auth.server";

export async function POST(request) {
  try {
    const parsed = registerSchema.safeParse(await request.json());
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 },
      );
    }

    const user = await createUser(parsed.data.email, parsed.data.password);
    if (!user) {
      return NextResponse.json(
        { error: "Пользователь с таким E-mail уже существует" },
        { status: 409 },
      );
    }

    const response = NextResponse.json(
      { user: { id: user.id, email: user.email } },
      { status: 201 },
    );
    response.cookies.set(
      sessionCookie.name,
      createSessionToken(user.id),
      sessionCookie.options,
    );
    return response;
  } catch (error) {
    console.error("Registration failed", error);
    return NextResponse.json(
      { error: "Не удалось зарегистрироваться" },
      { status: 500 },
    );
  }
}
