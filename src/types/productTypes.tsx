export interface ProductType {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

// redux
export interface CartItem extends ProductType {
  count: number;
}

export interface ProductStateType {
  cartState: CartItem[];
}

export interface CartChangeType {
  count: number;
  product: ProductType;
}
