import React from "react";
import { Route } from "react-router-dom";

interface IProps {
  path: string;
  element: React.ReactElement;
}
const ProtectiveRoutes: React.FC<IProps> = ({ path, element }) => {
  return <Route path="/" element={element} />;
};

export default ProtectiveRoutes;
