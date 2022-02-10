import React from "react";
import { Login } from "components";

export interface IRoute {
  path: string;
  element: React.ReactNode;
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

/*
{
    path: "/",
    element: <div></div>,
    redirect: "/",
    authorizers: [],
    key: "home",
    isProtectiveRoute: false,
  },
  {
    path: "/ipd",
    element: <div></div>,
    redirect: "/",
    authorizers: [],
    key: "ipd",
    isProtectiveRoute: false,
  },
  {
    path: "/opd",
    element: <div></div>,
    redirect: "/",
    authorizers: [],
    key: "opd",
    isProtectiveRoute: false,
  },
  {
    path: "/opt",
    element: <div></div>,
    redirect: "/",
    authorizers: [],
    key: "opt",
    isProtectiveRoute: false,
  },
  {
    path: "/inventory",
    element: <div></div>,
    redirect: "/",
    authorizers: [],
    key: "inventory",
    isProtectiveRoute: false,
  },*/
