import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "src/common/components";
import { useSession } from "src/hooks";
import { UserRoles } from "src/model";

interface IProps {
  children: JSX.Element;
  authorization: UserRoles[];
}
const ProtectiveRoutes: React.FC<IProps> = ({
  children,
  authorization,
  ...props
}) => {
  const { user: authUser, sessionUserLoading: authLoading } = useSession();
  const navigate = useNavigate();

  if (authUser) {
    if (authorization.includes(UserRoles.ADMIN)) {
    } else {
      // take action if user is not authorized
    }
  }
  useEffect(() => {
    if (!authLoading && !authUser) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authUser, authLoading]);
  return <>{authLoading ? <Loader message="Loading..." /> : children}</>;
};

export default ProtectiveRoutes;
