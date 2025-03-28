import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserSignUpForm from "./UserSignUpForm";
import { AppDispatch, RootState } from "../../store/store";
import { toggleForm, toggleFormType } from "../../store/features/userSlice";
import UserLoginForm from "./UserLoginForm";

type Props = {};

const UserForm: FC = (props: Props) => {
  const { showForm, formType } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const closeForm = () => {
    dispatch(toggleForm(false));
  };
  const toggleCurrentFormType = (type: string) => {
    dispatch(toggleFormType(type));
  };
  return showForm ? (
    <>
      <div
        onClick={closeForm}
        className="fixed top-0 bottom-0 right-0 left-0 bg-black opacity-40 z-5 h-[100vh]"
      ></div>
      {formType === "signup" ? (
        <UserSignUpForm
          toggleCurrentFormType={toggleCurrentFormType}
          closeForm={closeForm}
        />
      ) : (
        <UserLoginForm
          toggleCurrentFormType={toggleCurrentFormType}
          closeForm={closeForm}
        />
      )}
    </>
  ) : (
    <></>
  );
};

export default UserForm;
