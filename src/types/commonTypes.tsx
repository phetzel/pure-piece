export type AnchorType = "left" | "right";

export interface MenuItemType {
  id: number;
  icon: JSX.Element;
  label: string;
  route: string;
}

// redux
interface DrawerStateType {
  left: boolean;
  right: boolean;
}

export interface CommonStateType {
  drawerState: DrawerStateType;
}
