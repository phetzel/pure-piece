import axios from "axios";
import { ROOT_URL } from "./config";

export const handleLogin = ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<any> => {
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

        console.log("res.data.status;", res.data.status);
        return res.data.status;
      } else {
        return "Unsuccessful login request";
      }
    })
    .catch((err) => {
      console.log("err.;", err);
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

export const getCurrentUser = () => {
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
      if (res.status === 200) {
        console.log("res", res);
        return res.data;
      } else {
        return "Unsuccessful login request";
      }
    })
    .catch((err) => {
      console.log("err", err);
    });
};
