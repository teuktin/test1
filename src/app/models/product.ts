// Product Interface
export interface IListProduct {
  status: string;
  data: IProduct;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  status: string;
  is_shown: number;
}