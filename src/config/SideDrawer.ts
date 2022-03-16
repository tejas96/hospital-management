import {
  Dashboard,
  MonetizationOn,
  Store,
  LocalHospital,
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
    label: "IPD/OPD",
    icon: LocalHospital,
    redirect: "/ipd-opd",
  },
];

export default SideDrawerMenus;
