import { useState } from "react";
import { useSession } from "src/hooks";

type LoginInputState = {
  hospitalId: string;
  password: string;
};

const useLoginContainer = () => {
  const session = useSession();

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
      .then((user) => {});
  };
  return {
    loginState,
    handleChange,
    handleSubmit,
  };
};

export default useLoginContainer;
