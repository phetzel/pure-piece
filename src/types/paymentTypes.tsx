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
}
