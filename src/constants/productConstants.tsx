import { ProductType } from "../types/productTypes";

import packages from "../assets/images/packages.png";
import treats from "../assets/images/treats.png";

export const PRODUCTS: ProductType[] = [
  {
    id: 0,
    name: "Chiken Liver",
    description: "It was chicken liver, now its treats",
    price: 29.99,
    imageUrl: packages,
  },
  {
    id: 1,
    name: "Cow Liver",
    description: "It was cow liver, now its treats",
    price: 19.99,
    imageUrl: packages,
  },
  {
    id: 2,
    name: "A trey of Liver",
    description: "Its a lot of liver. Don;t judge me.",
    price: 9.99,
    imageUrl: treats,
  },
];
