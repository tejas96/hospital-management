import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectiveRoutes from "./ProtectiveRoutes";
import routes, { IRoute } from "./routes";
const HospitalManagement: React.FC = () => {
  return (
    <Routes>
      {routes.map((route: IRoute) => {
        return (
          <ProtectiveRoutes
            key={route.path}
            path={route.path}
            element={route.element}
          />
        );
      })}
      <Route path="/" element={<h1>Hospital Management</h1>} />
    </Routes>
  );
};

export default HospitalManagement;
