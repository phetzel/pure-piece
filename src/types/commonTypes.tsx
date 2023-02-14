export type AnchorType = "left" | "right";
export type TabType = "Home" | "Products" | "About" | "Contact";

export interface MenuItemType {
  id: number;
  icon: JSX.Element;
  label: TabType;
  route: string;
}

// redux
interface DrawerStateType {
  left: boolean;
  right: boolean;
}

interface DashboardStateType {
  isScrollActive: boolean;
}

interface TabStateType {
  activeTab: TabType;
}

export interface CommonStateType {
  drawerState: DrawerStateType;
  dashboardState: DashboardStateType;
  tabState: TabStateType;
}
