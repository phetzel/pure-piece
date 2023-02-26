import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { RootState } from "../../redux/store";

interface Props {
  children: JSX.Element;
}

const AuthRoute = ({ children }: Props) => {
  const adminState = useSelector((state: RootState) => state.admin.adminState);

  return adminState ? children : <Navigate to={{ pathname: "/admin" }} />;
};

export default AuthRoute;
