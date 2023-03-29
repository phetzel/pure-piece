import { CartItem } from "../types/productTypes";
// validations
export const isValidEmail = (email: string): boolean => {
  const regex: RegExp =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return regex.test(email);
};

// format cents into dollars
export const formatCheckoutItems = (cart: CartItem[]) => {
  const formattedItems = cart.map((item) => {
    return {
      price: item.priceId,
      quantity: item.count,
    };
  });

  return formattedItems;
};
