import axios from "axios";
import { ROOT_URL } from "./config";

export const getProducts = () => {
  const url = `${ROOT_URL}/api/v1/products`;

  return axios({
    method: "get",
    url: url,
  }).then((res) => {
    console.log("res", res);
    if (res.status === 200) {
      return res.data;
    } else {
      return "Unsuccessful get subscriptions request";
    }
  });
};
