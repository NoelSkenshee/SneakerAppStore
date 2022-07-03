export type Order = {
  model: string;
  brand: string;
  price: number;
  name: string;
  size: Number;
};

export type Buy = {
  creditcard: string;
  creditcardNo: string;
  client: string;
  email: string;
  totalPay: Number;
  order: Order[];
};
