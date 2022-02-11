import { useState } from "react";

type LoginInputState = {
  hospitalId: string;
  password: string;
};

const useLoginContainer = () => {
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
    console.log(loginState);
  };
  return {
    loginState,
    handleChange,
    handleSubmit,
  };
};

export default useLoginContainer;
