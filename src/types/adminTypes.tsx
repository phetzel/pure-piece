// redux
export interface UserType {
  id: number;
  email: string;
}

export interface AdminStateType {
  admin: UserType | null;
}
