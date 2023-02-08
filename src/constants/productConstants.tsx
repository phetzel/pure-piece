import { ProductType } from "../types/productTypes";

import packages from "../assets/images/packages.png";
import treats from "../assets/images/treats.png";

export const PRODUCTS: ProductType[] = [
  {
    id: 0,
    name: "Chiken Liver",
    description: "Its chicken liver",
    price: 29.99,
    imageUrl: packages,
  },
  {
    id: 1,
    name: "Cow Liver",
    description: "Its cow liver",
    price: 19.99,
    imageUrl: packages,
  },
  {
    id: 2,
    name: "A literal trey of liver Liver",
    description: "Its a mystery",
    price: 9.99,
    imageUrl: treats,
  },
];
