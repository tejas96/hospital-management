import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "src/common/components";
import { useSession } from "src/hooks";

interface IProps {
  children: JSX.Element;
}
const ProtectiveRoutes: React.FC<IProps> = ({ children }) => {
  const { user: authUser, sessionUserLoading: authLoading } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && !authUser) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authUser, authLoading]);
  return <>{authLoading ? <Loader message="Loading..." /> : children}</>;
};

export default ProtectiveRoutes;
