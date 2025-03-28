import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { CreateUserType, loginUser } from "../../store/features/userSlice";
import { AppDispatch } from "../../store/store";

type Props = {
  closeForm: any;
  toggleCurrentFormType: (type: string) => void;
};

const UserLoginForm: FC<Props> = ({ closeForm, toggleCurrentFormType }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [values, setValues] = useState<CreateUserType>({
    email: "",
    password: "",
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const isNotEmpty = Object.values(values).every((val) => val);
    if (!isNotEmpty) return;
    dispatch(loginUser(values));
    closeForm();
  };
  return (
    <div className="absolute right-0 top-0 w-[300px] max-h-[50vh]  bg-zinc-950 text-white p-4 z-6 rounded-[8px]">
      <div className="cursor-pointer absolute top-[4px] p-2 right-[0] text-center">
        <p onClick={closeForm} className="">
          Close
        </p>
      </div>
      <div className="text-center text-[18px]">Log In</div>
      <form className="mt-4" onSubmit={handleSubmit}>
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

        <div
          onClick={() => toggleCurrentFormType("signup")}
          className="mt-4 text-center cursor-pointer"
        >
          Create an account
        </div>
        <button
          className="mt-4 bg-zinc-600 py-2 px-10 block m-auto rounded-[8px] cursor-pointer"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default UserLoginForm;
