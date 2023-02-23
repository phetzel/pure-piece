import axios from "axios";
import { ROOT_URL } from "./config";

import {
  SubscriptionType,
  UpdateSubscriptionInput,
} from "../types/subscriptionTypes";

export const getSubscriptions = (): Promise<SubscriptionType[] | string> => {
  const url = `${ROOT_URL}/api/v1/subscriptions`;

  return axios({
    method: "get",
    url: url,
  }).then((res) => {
    if (res.status === 200) {
      return res.data;
    } else {
      return "Unsuccessful get subscriptions request";
    }
  });
};

export const addSubscription = ({
  email,
}: {
  email: string;
}): Promise<boolean | string> => {
  const url = `${ROOT_URL}/api/v1/subscriptions`;
  const data = {
    subscription: {
      email: email,
    },
  };

  return axios({
    method: "post",
    url: url,
    data: data,
  })
    .then((res) => {
      console.log("res", res);
      // jti in data
      // bearer in headers
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log("err", err);
      return false;
    });
};

export const updateSubscription = ({
  id,
  field,
  newValue,
}: UpdateSubscriptionInput): Promise<SubscriptionType> => {
  const url = `${ROOT_URL}/api/v1/subscriptions/${id}`;
  const data = {
    subscription: {
      [field]: newValue,
    },
  };

  return axios({
    method: "put",
    url: url,
    data: data,
  })
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch((err) => {
      if (err.response && err.response.data) {
        return err.response.data.data;
      }
    });
};
