import axios from "axios";
import { ROOT_URL } from "./config";

import {
  ContactEmailType,
  EmailType,
  SubscriptionType,
  UpdateSubscriptionInput,
} from "../types/emailTypes";

// subscriptions
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
      if (res.status === 200) {
        return true;
      } else {
        console.log("res", res);
        return false;
      }
    })
    .catch((err) => {
      console.log("err", err);
      if (err.response && err.response.data && err.response.data.data) {
        return err.response.data.data[0];
      } else {
        return false;
      }
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

export const unsubscribe = ({ hash }: { hash: string }): Promise<boolean> => {
  const url = `${ROOT_URL}/api/v1/unsubscribe`;
  const data = {
    subscription: {
      hash: hash,
    },
  };

  return axios({
    method: "post",
    url: url,
    data: data,
  })
    .then((res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      return false;
    });
};

// newsletter
export const addNewsletter = ({ subject, message }: EmailType) => {
  const url = `${ROOT_URL}/api/v1/newsletters`;
  const data = {
    newsletter: {
      subject: subject,
      message: message,
    },
  };

  return axios({
    method: "post",
    url: url,
    data: data,
  })
    .then((res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      return false;
    });
};

// contact
export const addContact = ({ email, subject, message }: ContactEmailType) => {
  const url = `${ROOT_URL}/api/v1/contacts`;
  const data = {
    contact: {
      email: email,
      subject: subject,
      message: message,
    },
  };

  return axios({
    method: "post",
    url: url,
    data: data,
  })
    .then((res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      return false;
    });
};
