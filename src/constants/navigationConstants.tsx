// icons for dropdown menu
import HomeIcon from "@mui/icons-material/Home";
import PetsIcon from "@mui/icons-material/Pets";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InfoIcon from "@mui/icons-material/Info";

import { MenuItemType, LocationItemType } from "../types/navigationTypes";

// Navigation Menu
export const NAV_MENU_ITEMS: MenuItemType[] = [
  {
    id: 0,
    icon: <HomeIcon />,
    label: "Home",
    route: "/",
  },
  {
    id: 1,
    icon: <PetsIcon />,
    label: "Products",
    route: "/",
  },
  {
    id: 2,
    icon: <InfoIcon />,
    label: "About",
    route: "/",
  },
  {
    id: 3,
    icon: <MailOutlineIcon />,
    label: "Contact",
    route: "/",
  },
];

// Locations to navigate to
const menuLocations = NAV_MENU_ITEMS.map((loc) => {
  return {
    location: loc.label,
    route: loc.route,
  };
});
export const LOCATION_ITEMS: LocationItemType[] = [
  ...menuLocations,
  {
    location: "Checkout",
    route: "/checkout",
  },
  {
    location: "Admin",
    route: "/admin",
  },
];
