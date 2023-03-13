import axios from "axios";

import { ROOT_URL } from "./config";
import {
  AddProductInputType,
  GetProductInputType,
  UpdateProductInputType,
} from "../types/productTypes";

export const getProducts = ({ isActiveOnly }: GetProductInputType) => {
  const url = `${ROOT_URL}/api/v1/products?active=${isActiveOnly}`;

  return axios({
    method: "get",
    url: url,
  }).then((res) => {
    if (res.status === 200) {
      return res.data;
    } else {
      return "Unsuccessful get products request";
    }
  });
};

export const addProduct = ({
  active,
  name,
  description,
  price,
  image,
}: AddProductInputType) => {
  const url = `${ROOT_URL}/api/v1/products`;
  const data = {
    product: {
      active: active,
      name: name,
      description: description,
      price: price,
      image: image,
    },
  };
  const headers = {
    Authorization: localStorage.getItem("token"),
  };

  return axios({
    method: "post",
    url: url,
    data: data,
    headers: headers,
  }).then((res) => {
    if (res.status === 200) {
      return res.data;
    } else {
      return "Unsuccessful add product request";
    }
  });
};

export const updateProduct = ({ id, field, value }: UpdateProductInputType) => {
  const url = `${ROOT_URL}/api/v1/products/${id}`;
  const data = {
    product: {
      id: id,
      field: field,
      value: value,
    },
  };
  const headers = {
    Authorization: localStorage.getItem("token"),
  };

  return axios({
    method: "put",
    url: url,
    data: data,
    headers: headers,
  }).then((res) => {
    if (res.status === 200) {
      return res.data;
    } else {
      return "Unsuccessful add product request";
    }
  });
};
