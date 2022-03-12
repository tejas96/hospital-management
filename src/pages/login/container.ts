import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useLoggedInUser, useSession } from "src/hooks";

type LoginInputState = {
  hospitalId: string;
  password: string;
};

const useLoginContainer = () => {
  const session = useSession();
  const _ = useLoggedInUser();
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState<LoginInputState>({
    hospitalId: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginState({
      ...loginState,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    session
      .login(loginState.hospitalId, loginState.password)
      .then((user) => {
        toast.success("Login Successful");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return {
    loginState,
    handleChange,
    handleSubmit,
  };
};

export default useLoginContainer;
