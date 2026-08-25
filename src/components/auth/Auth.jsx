"use client";
import Exit from "../../../public/icons/exitIcon.svg";
import Arrow from "../../../public/icons/arrow.svg";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, registerSchema } from "@/lib/shemas/auth.shema";
import { useRouter } from "next/navigation";
import Eye from "../../../public/icons/eye.svg";
import EyeCrossed from "../../../public/icons/eye-crossed.svg";

const fields = {
  login: [
    { id: "email", label: "E-mail", type: "text" },
    { id: "password", label: "Пароль", type: "password" },
  ],
  register: [
    { id: "email", label: "E-mail", type: "text" },
    { id: "password", label: "Пароль", type: "password" },
    { id: "confirmPassword", label: "Повторите пароль", type: "password" },
  ],
};

const Auth = ({ close, defaultRegistration = false }) => {
  const isRegistration = defaultRegistration;
  const router = useRouter();
  const [showPasswords, setShowPasswords] = useState({});
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(isRegistration ? registerSchema : loginSchema),
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  const onSubmit = async (data) => {
    setServerError("");

    try {
      const response = await fetch(
        `/api/auth/${isRegistration ? "register" : "login"}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        },
      );
      const result = await response.json();

      if (!response.ok) {
        setServerError(result.error || "Не удалось выполнить запрос");
        return;
      }

      reset();
      router.replace("/");
      router.refresh();
    } catch {
      setServerError("Нет соединения с сервером. Попробуйте ещё раз");
    }
  };

  const togglePasswordVisibility = (fieldId) => {
    setShowPasswords((prev) => ({
      ...prev,
      [fieldId]: !prev[fieldId],
    }));
  };

  const activeFields = isRegistration ? fields.register : fields.login;

  return (
    <>
      <div className="fixed inset-0 z-[1000] bg-primary" onClick={close} />

      <div className="fixed z-[1001] rounded-[20px] top-[15px] bg-modal p-[15px] right-[15px] left-[15px]">
        <div className="flex justify-between items-center mb-[50px]">
          <span className="text-white uppercase font-main font-medium text-[15px]">
            {isRegistration ? "Регистрация" : "Вход"}
          </span>
          <button onClick={close} aria-label="Закрыть">
            <Exit />
          </button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[30px] mb-[30px]"
        >
          {activeFields.map(({ id, label, type }) => {
            const isPasswordField = type === "password";
            const isVisible = showPasswords[id];
            const inputType = isPasswordField && isVisible ? "text" : type;
            return (
              <div
                key={id}
                className="relative border-b-[2px] border-secondary pb-[10px]"
              >
                <label
                  htmlFor={id}
                  className="uppercase text-white text-[15px] font-medium font-main"
                >
                  {label}
                </label>
                <input
                  type={inputType}
                  id={id}
                  autoComplete={
                    id === "email"
                      ? "email"
                      : isRegistration
                        ? "new-password"
                        : "current-password"
                  }
                  className={`ml-[20px] focus:outline-none text-secondary ${
                    errors[id] ? "border-red-500" : ""
                  }`}
                  {...register(id)}
                />
                {type === "password" && (
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility(id)}
                    className="ml-2 cursor-pointer"
                    aria-label={isVisible ? "Скрыть пароль" : "Показать пароль"}
                  >
                    {isVisible ? <EyeCrossed /> : <Eye />}
                  </button>
                )}
                {errors[id] && (
                  <p className="text-[#FFEB3B] text-[12px] absolute bottom-[-20px] left-0">
                    {errors[id]?.message}
                  </p>
                )}
              </div>
            );
          })}
          <button
            className="text-white mb-[30px] bg-[url('/icons/loginButtonIcon.svg')] w-[154px] h-[110px]"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Подождите..."
              : isRegistration
                ? "Регистрация"
                : "Войти"}
          </button>
          {serverError && (
            <p role="alert" className="text-[#FFEB3B] text-[13px]">
              {serverError}
            </p>
          )}
        </form>

        <button
          className="flex items-center gap-[20px] text-white uppercase font-main font-medium text-[12px]"
          onClick={() => {
            isRegistration ? router.push("/login") : router.push("/register");
          }}
        >
          {isRegistration
            ? "Уже есть аккаунт? Войти"
            : "Нет аккаунта? Регистрация"}
          <Arrow />
        </button>
      </div>
    </>
  );
};

export default Auth;
