import {
  AddToQueue,
  Dashboard,
  Healing,
  LocalHospital,
  Store,
} from "@material-ui/icons";

const SideDrawerMenus = [
  {
    label: "Dashboard",
    icon: Dashboard,
    redirect: "/",
  },
  {
    label: "Inventory",
    icon: Store,
    redirect: "/inventory",
  },
  {
    label: "Operation Theatre",
    icon: Healing,
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
