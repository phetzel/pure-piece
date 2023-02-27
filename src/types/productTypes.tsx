export interface ProductType {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

// services
export interface GetProductInputType {
  isActiveOnly: boolean;
}

export interface AddProductInputType {
  active: boolean;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface UpdateProductInputType {
  id: string;
  field: string;
  value: string;
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
