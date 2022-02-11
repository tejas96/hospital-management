import React from "react";
import { Switch, Route } from "react-router-dom";
import ProtectiveRoutes from "src/routes/ProtectiveRoutes";
import routes, { IRoute } from "./routes";

const HospitalManagement: React.FC = () => {
  return (
    <Switch>
      {routes.map((route: IRoute) => {
        return (
          <React.Fragment key={route.key}>
            {route.isProtectiveRoute ? (
              <ProtectiveRoutes
                key={route.key}
                path={route.path}
                element={route.element}
              />
            ) : (
              <Route
                key={route.key}
                path={route.path}
                component={route.element}
              />
            )}
          </React.Fragment>
        );
      })}
    </Switch>
  );
};

export default HospitalManagement;
