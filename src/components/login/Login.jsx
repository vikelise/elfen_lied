"use client";
import Exit from "../../../public/icons/exitIcon.svg";
import Arrow from "../../../public/icons/arrow.svg";
import { useForm } from "react-hook-form";

const Login = ({ close }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div
        className="fixed z-1000 top-0 left-0 right-0 bottom-0 bg-primary h-screen"
        onClick={close}
      ></div>
      <div className="fixed z-1001 rounded-[20px] top-[15px] bg-modal p-[15px] right-[15px] left-[15px]">
        <div className="text-white uppercase font-main font-medium text-[15px] flex justify-between mb-[50px]">
          вход
          <Exit onClick={close} />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[30px] mb-[30px]"
        >
          <div className="border-b-[2px] border-secondary pb-[10px]">
            <label
              htmlFor="email"
              className="uppercase text-white text-[15px] font-medium font-main"
            >
              E-mail
            </label>
            <input
              type="text"
              id="email"
              autoComplete="off"
              className={`ml-[20px] w-[75%] focus:outline-none text-secondary ${
                errors.email ? "border-red-500" : ""
              }`}
              {...register("email", {
                required: "Поле E-mail обязательно",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Неверный формат E-mail",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-[12px] absolute bottom-[-20px] left-[20px]">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="border-b-[2px] border-secondary pb-[10px]">
            <label
              htmlFor=""
              className="uppercase text-white text-[15px] font-medium font-main"
            >
              пароль
            </label>
            <input
              type="text"
              autoComplete="off"
              className={`ml-[20px] w-[70%] focus:outline-none text-secondary ${
                errors.password ? "border-red-500" : ""
              }`}
              {...register("password", {
                required: "Поле Пароль обязательно",
                minLength: {
                  value: 6,
                  message: "Пароль должен содержать минимум 6 символов",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-[12px] absolute bottom-[-20px] left-[20px]">
                {errors.password.message}
              </p>
            )}
          </div>
        </form>
        <button className="text-white mb-[30px] bg-[url('/icons/loginButtonIcon.svg')] w-[119px] h-[85px]">
          Войти
        </button>
        <div className="flex text-white uppercase gap-[20px] font-main font-medium text-[12px]">
          <div>Нет аккаунта?</div>
          <div className="flex items-center gap-[10px]">
            Регистрация <Arrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
