import axios from "axios";

import { ROOT_URL } from "./config";
import { PaymentType } from "../types/paymentTypes";

export const addCheckout = (
  items: {
    price: string;
    quantity: number;
  }[]
): Promise<PaymentType | string> => {
  const url = `${ROOT_URL}/api/v1/checkout`;
  const data = {
    checkout: {
      items: JSON.stringify(items),
    },
  };

  return axios({
    method: "post",
    url: url,
    data: data,
  }).then((res) => {
    console.log("res", res);
    if (res.status === 200) {
      window.location = res.data.redirect_url;
      return res.data;
    } else {
      return "Unsuccessful add product request";
    }
  });
};

export const getPurchases = () => {
  const url = `${ROOT_URL}/api/v1/purchase`;

  const headers = {
    Authorization: localStorage.getItem("token"),
  };

  return axios({
    method: "get",
    url: url,
    headers: headers,
  }).then((res) => {
    console.log("getPurchases", res);
  });
};
