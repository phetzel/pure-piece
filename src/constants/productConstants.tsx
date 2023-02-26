import { ProductType } from "../types/productTypes";

// import packages from "../assets/images/packages.png";
import beefLiver from "../assets/images/beefLiver.jpg";
// import treats from "../assets/images/treats.png";

export const PRODUCTS: ProductType[] = [
  {
    id: 0,
    name: "Chicken Liver Treats",
    description: "Freeze dried raw chicken liver.",
    price: 10,
    imageUrl: beefLiver,
  },
  {
    id: 1,
    name: "Cow Liver Treats",
    description: "Freeze dried raw cow liver.",
    price: 20,
    imageUrl: beefLiver,
  },
  // {
  //   id: 2,
  //   name: "A trey of Liver",
  //   description: "Its a lot of liver. Don;t judge me.",
  //   price: 9.99,
  //   imageUrl: treats,
  // },
];
