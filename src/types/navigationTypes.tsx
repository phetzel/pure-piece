import { AlertProps } from "@mui/material/Alert";

export type DrawerAnchorType = "left" | "right";
export type TabType = "Home" | "Products" | "About" | "Contact";
export type LocationType = TabType | "Checkout" | "Admin" | "Console";
export type ToastType = Pick<AlertProps, "children" | "severity">;
export interface MenuItemType {
  id: number;
  icon: JSX.Element;
  label: TabType;
  route: string;
}

export interface LocationItemType {
  location: LocationType;
  route: string;
}

// redux
interface DrawerStateType {
  left: boolean;
  right: boolean;
}

interface LoadStateType {
  isLoading: boolean;
}

interface ScrollStateType {
  isScrollActive: boolean;
}

interface TabStateType {
  activeTab: LocationType;
}

interface ToastStateType {
  toast: ToastType | null;
}

export interface NavigationStateType {
  drawerState: DrawerStateType;
  loadState: LoadStateType;
  scrollState: ScrollStateType;
  tabState: TabStateType;
  toastState: ToastStateType;
}
