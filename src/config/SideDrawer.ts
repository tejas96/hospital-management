import {
  Dashboard,
  LocalHospital,
  MonetizationOn,
  Store,
} from "@material-ui/icons";

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
  {
    label: "Inventory",
    icon: Store,
    redirect: "/inventory",
  },
  {
    label: "Operation Theatre",
    icon: LocalHospital,
    redirect: "/operation-theatre",
  },
];

export default SideDrawerMenus;
