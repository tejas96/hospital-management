import {
  Dashboard,
  MonetizationOn,
  Store,
  LocalHospital,
  AddToQueue,
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
  {
    label: "IPD/OPD",
    icon: LocalHospital,
    redirect: "/ipd-opd",
  },
  {
    label: "Online Appointment",
    icon: AddToQueue,
    redirect: "/online-appointment",
  },
];

export default SideDrawerMenus;
