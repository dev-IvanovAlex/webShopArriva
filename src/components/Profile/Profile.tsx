import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import {
  exitAccount,
  toggleForm,
  updateUser,
  User,
} from "../../store/features/userSlice";

const Profile: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { currentUser } = useSelector((state: RootState) => state.user);

  const [values, setValues] = useState<User>({
    name: "",
    email: "",
    password: "",
    avatar:
      "https://avatars.dzeninfra.ru/get-zen_doc/9835822/pub_6506b9aa40251217268b308a_6506bb0a0b441c1b5999ab25/scale_1200",
    updatedAt: "",
  });

  useEffect(() => {
    if (!currentUser) return;
    setValues(currentUser);
  }, [currentUser]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const isNotEmpty = Object.values(values).every((val) => val);
    if (!isNotEmpty) return;
    dispatch(updateUser(values));
  };

  const handleExitAccount = () => {
    dispatch(exitAccount());
  };
  return (
    <section className="px-[1%] sm:px-[2%] md:px-[3%] lg:px-[4%] xl:px-[5%] mt-[30px] text-center">
      {!currentUser ? (
        <span className="text-2xl">
          You need to{" "}
          <span
            className="cursor-pointer underline"
            onClick={() => dispatch(toggleForm(true))}
          >
            login
          </span>
        </span>
      ) : (
        <div className="text-center">
          <h2 className="text-[32px] font-semibold">Мой профиль</h2>
          <ul className="flex justify-center mt-[60px] max-w-[977px] m-auto flex-wrap gap-x-1 gap-y-2 ">
            <li className="w-[232px] border-1 border-zinc-200 rounded-[5px] p-1">
              <p className="text-[#565656]">Контакты</p>
              <a
                className="font-semibold mt-[15px] block"
                href="tel:+79999999999"
              >
                +7 (999) 999-99-99
              </a>
            </li>
            <li className="w-[232px] border-1 border-zinc-200 rounded-[5px] p-1">
              <p className="text-[#565656]">Адрес доставки</p>
              <p className="font-semibold mt-[15px] text-ellipsis overflow-hidden whitespace-nowrap ">
                г.Ульяновск, ул. Новосондецкий, дом 15, кв.3000
              </p>
            </li>
            <li className="w-[232px] border-1 border-zinc-200 rounded-[5px] p-1">
              <p className="text-[#565656]">Дата рождения</p>
              <p className="font-semibold mt-[15px] text-ellipsis overflow-hidden whitespace-nowrap">
                17.02.1990
              </p>
            </li>
            <li className="w-[232px] border-1 border-zinc-200 rounded-[5px] p-1">
              <p className="text-[#565656]">Бонусы</p>
              <p className="font-semibold  mt-[15px] text-ellipsis overflow-hidden whitespace-nowrap">
                102
              </p>
            </li>
          </ul>
          <form className="mt-4 max-w-[800px] m-auto" onSubmit={handleSubmit}>
            <div>
              <input
                className="mt-2 p-2  rounded-[8px] w-full outline-0 border-1"
                type="name"
                placeholder="Your name"
                name="name"
                value={values.name}
                autoComplete="off"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                className="mt-4 p-2  rounded-[8px] w-full outline-0 border-1"
                type="email"
                placeholder="Your email"
                name="email"
                value={values.email}
                autoComplete="off"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                className="mt-4 p-2 rounded-[8px] w-full outline-0 border-1"
                type="password"
                placeholder="Your password"
                name="password"
                value={values.password}
                autoComplete="off"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                className="mt-4 p-2  rounded-[8px] w-full outline-0 border-1"
                type="avatar"
                placeholder="Your avatar (url - http://.../)"
                name="avatar"
                value={values.avatar}
                autoComplete="off"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex justify-between">
              <button
                className="mt-4 py-2 px-10 block m-auto rounded-[8px] cursor-pointer bg-zinc-800 text-white"
                type="submit"
              >
                Обновить данные аккаунта
              </button>
              <button
                onClick={() => handleExitAccount()}
                className="mt-4 py-2 px-10 block m-auto rounded-[8px] cursor-pointer bg-zinc-800 text-white"
              >
                Выйти из аккаунта
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default Profile;
