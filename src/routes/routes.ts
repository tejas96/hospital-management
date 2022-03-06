import { Login, DashBoard, ContactUs, About, Billing } from "src/pages";
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
  {
    path: "/",
    element: DashBoard,
    authorizers: [],
    isProtectiveRoute: true,
    key: "dashboard",
  },
  {
    path: "/contact-us",
    element: ContactUs,
    authorizers: [],
    isProtectiveRoute: false,
    key: "contact-us",
  },
  {
    path: "/about",
    element: About,
    authorizers: [],
    isProtectiveRoute: false,
    key: "about",
  },
  {
    path: "/billing",
    element: Billing,
    authorizers: [],
    isProtectiveRoute: true,
    key: "billing",
  },
];

export default routes;
