import { StripeCardExpiryElementChangeEvent } from "@stripe/stripe-js";

export interface PaymentType {
  redirect_url: string;
}

export interface GetPaymentsType {
  id: number;
  stripe_id: string;
  email: string;
  fulfilled: boolean;
}

export interface GetProductDetailsType {
  stripe_id: string;
  items: {
    description: string;
    quantity: number;
  }[];
  shipping: {
    address: {
      city: string;
      country: string;
      line1: string;
      line2: string;
      postal_code: string;
      state: string;
    };
    name: string;
  };
}
