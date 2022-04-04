import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useLoggedInUser, useSession } from "src/hooks";

type LoginInputState = {
  hospitalId: string;
  password: string;
};

const useLoginContainer = () => {
  const session = useSession();
  const loggedInUser = useLoggedInUser();
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState<LoginInputState>({
    hospitalId: "",
    password: "",
  });

  useEffect(() => {
    if (!session.sessionUserLoading && loggedInUser.user?.role === "Admin")
      navigate("/");
    else if (
      !session.sessionUserLoading &&
      !loggedInUser.loading &&
      loggedInUser.user?.role === "Finance"
    )
      navigate("/rfpApproval");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, loggedInUser]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginState({
      ...loginState,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    session
      .login(loginState.hospitalId, loginState.password)
      .then(() => {
        toast.success("Login Successful");
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
