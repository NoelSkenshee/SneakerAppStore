export type Sneaker = {
  _id: string;
  name: string;
  price: number;
  brand: string;
  model: string;
  image: string;
  sizesaleected: Number;
  sizes: Number[];
  createdAt: string;
};

export type HtttpResponseSneaker = {
  error: boolean;
  data: Sneaker[];
  message: string;
};

export type HtttpResponseSneakerById = {
  error: boolean;
  data: Sneaker;
  message: string;
};
