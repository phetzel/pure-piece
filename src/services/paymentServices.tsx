import axios from "axios";

import { ROOT_URL } from "./config";

export const addPayment = () => {
  const url = `${ROOT_URL}/api/v1/payment_intents`;
  const data = {
    payment_intent: {
      items: [{ id: "xl-tshirt" }],
    },
  };

  return axios({
    method: "post",
    url: url,
    data: data,
  }).then((res) => {
    console.log("res", res);
    if (res.status === 200) {
      return res.data;
    } else {
      return "Unsuccessful add product request";
    }
  });
};

export const addCheckout = (
  items: {
    price: string;
    quantity: number;
  }[]
) => {
  console.log("addCheckout items", items);
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
