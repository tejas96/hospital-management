import { BILLING, DASHBOARD } from "src/routes/routersName";
import { Dashboard, MonetizationOn } from "@material-ui/icons";

const SideDrawerMenus = [
  {
    label: "Dashboard",
    icon: Dashboard,
    redirect: DASHBOARD,
  },
  {
    label: "Billing",
    icon: MonetizationOn,
    redirect: BILLING,
  },
];

export default SideDrawerMenus;
