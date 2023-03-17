import axios from "axios";
import { ROOT_URL } from "./config";

import { UserType } from "../types/adminTypes";

export const handleLogin = ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<UserType | string> => {
  const url = `${ROOT_URL}/users/sign_in`;
  const data = {
    user: {
      email: email,
      password: password,
    },
  };

  return axios({
    method: "post",
    url: url,
    data: data,
  })
    .then((res) => {
      if (res.status === 200) {
        // save token
        const headers = res.headers ? res.headers : null;
        if (headers) {
          localStorage.setItem("token", `${headers.authorization}`);
        }

        return res.data.status.data;
      } else {
        return "Unsuccessful login request";
      }
    })
    .catch((err) => {
      if (err.response && err.response.data) {
        return err.response.data;
      } else {
        return "Unsuccessful login request";
      }
    });
};

export const handleLogout = (): Promise<boolean> => {
  const url = `${ROOT_URL}/users/sign_out`;
  const headers = {
    Authorization: localStorage.getItem("token"),
  };

  return axios({
    method: "delete",
    url: url,
    headers: headers,
  })
    .then((res) => {
      if (res.status === 200) {
        localStorage.clear();
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      return false;
    });
};

export const getCurrentUser = (): Promise<UserType | string> => {
  const url = `${ROOT_URL}/api/v1/member_details`;
  const headers = {
    Authorization: localStorage.getItem("token"),
  };

  return axios({
    method: "get",
    url: url,
    headers: headers,
  })
    .then((res) => {
      console.log("res", res);
      if (res.status === 200) {
        return res.data;
      } else {
        return "Unsuccessful login request";
      }
    })
    .catch((err) => {
      console.log("err", err);
    });
};
