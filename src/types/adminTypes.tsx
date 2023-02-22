// redux
export interface UserType {
  id: number;
  email: string;
}

export interface AdminStateType {
  adminState: UserType | null;
}
