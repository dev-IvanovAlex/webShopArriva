import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { createUser, User } from "../../store/features/userSlice";
import { AppDispatch } from "../../store/store";

type Props = {
  closeForm: any;
  toggleCurrentFormType: (type: string) => void;
};

const UserSignUpForm: FC<Props> = ({ closeForm, toggleCurrentFormType }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [values, setValues] = useState<User>({
    name: "",
    email: "",
    password: "",
    avatar:
      "https://avatars.dzeninfra.ru/get-zen_doc/9835822/pub_6506b9aa40251217268b308a_6506bb0a0b441c1b5999ab25/scale_1200",
  });
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const isNotEmpty = Object.values(values).every((val) => val);
    if (!isNotEmpty) return;
    dispatch(createUser(values));
    closeForm();
  };
  return (
    <div className="absolute right-0 top-0  w-[300px] max-h-[50vh]  bg-zinc-950 text-white p-4 z-6 rounded-[8px] transition-all">
      <div className="cursor-pointer absolute top-[4px] p-2 right-[0] text-center">
        <p onClick={closeForm} className="">
          Close
        </p>
      </div>
      <div className="text-center text-[18px]">Sign Up</div>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div>
          <input
            className="mt-2 p-2 bg-zinc-600 rounded-[8px] w-full outline-0"
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
            className="mt-4 p-2 bg-zinc-600 rounded-[8px] w-full outline-0"
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
            className="mt-4 p-2 bg-zinc-600 rounded-[8px] w-full outline-0"
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
            className="mt-4 p-2 bg-zinc-600 rounded-[8px] w-full outline-0"
            type="avatar"
            placeholder="Your avatar (url - http://.../)"
            name="avatar"
            value={values.avatar}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <div
          onClick={() => toggleCurrentFormType("login")}
          className="mt-4 text-center cursor-pointer"
        >
          I already have an account
        </div>
        <button
          className="mt-4 bg-zinc-600 py-2 px-10 block m-auto rounded-[8px] cursor-pointer"
          type="submit"
        >
          Create an account
        </button>
      </form>
    </div>
  );
};

export default UserSignUpForm;
