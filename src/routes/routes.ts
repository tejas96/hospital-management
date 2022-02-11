import { Login } from "src/components";

export interface IRoute {
  path: string;
  element: any;
  exact?: boolean;
  authorizers: string[];
  redirect?: string;
  isProtectiveRoute: boolean;
  key: string;
}

const routes: Array<IRoute> = [
  {
    path: "/login",
    element: Login,
    authorizers: [],
    isProtectiveRoute: false,
    key: "login",
  },
];

export default routes;
