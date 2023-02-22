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
      // jti in data
      // bearer in headers
      if (res.status === 200) {
        return res.data.status;
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
