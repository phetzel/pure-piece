import { ProductType } from "../types/productTypes";

// import packages from "../assets/images/packages.png";
import beefLiver from "../assets/images/beefLiver.jpg";
// import treats from "../assets/images/treats.png";

export const PRODUCTS: ProductType[] = [
  {
    id: 0,
    active: true,
    name: "Chicken Liver Treats",
    description: "Freeze dried raw chicken liver.",
    price: 10,
    images: [beefLiver],
  },
  {
    id: 1,
    active: true,
    name: "Cow Liver Treats",
    description: "Freeze dried raw cow liver.",
    price: 20,
    images: [beefLiver],
  },
];
