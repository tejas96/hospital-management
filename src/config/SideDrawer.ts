import { Dashboard, MonetizationOn } from "@material-ui/icons";

const SideDrawerMenus = [
  {
    label: "Dashboard",
    icon: Dashboard,
    redirect: "/",
  },
  {
    label: "Billing",
    icon: MonetizationOn,
    redirect: "/billing",
  },
];

export default SideDrawerMenus;
