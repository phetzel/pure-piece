import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// services
import { getCurrentUser } from "../../services/userServices";
// types
import { UserType } from "../../types/adminTypes";

// redux
import { adminLoggedIn } from "../../redux/slices/adminSlice";
import { RootState } from "../../redux/store";

interface Props {
  children: JSX.Element;
}

const AuthRoute = ({ children }: Props) => {
  const [isGettingUser, setIsGettingUser] = useState<boolean>(true);
  const adminState = useSelector((state: RootState) => state.admin.adminState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!adminState && localStorage.getItem("token")) {
      handleFetchUser();
    } else {
      setIsGettingUser(false);
    }
  }, []);

  const handleFetchUser = async () => {
    const user = await getCurrentUser();

    if (user && typeof user !== "string") {
      dispatch(adminLoggedIn(user));
    } else {
      setIsGettingUser(false);
    }
  };

  if (adminState) {
    return children;
  } else if (isGettingUser) {
    return null;
  } else {
    return <Navigate to={{ pathname: "/admin" }} />;
  }
};

export default AuthRoute;
