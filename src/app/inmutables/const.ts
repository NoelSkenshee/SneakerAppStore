export const CART = {
  modal_style: 'max-content!important',
};

export const ROUTES = {
  menu_route: '/menu',
  cart_route: '/cart',
};

export const PATH_ROUTE={
  menu:"menu",
  cart:"cart",
  details:"details/:id"

}

const ends=['sneaker','sel'];
export const URL = {
  logo: 'https://media.gq.com/photos/6284ff89598bc90bcc76c290/master/w_1280,c_limit/shoe-5.jpg',
  image_card:
    'https://tse1.mm.bing.net/th?id=OIP.t6Y7mst0EXjVcYYOXm2SNwAAAA&pid=Api&P=0&w=443&h=185',

  api_url:(endpoint:number)=>`http://localhost:9090/${ends[endpoint]}`
};

export const HEADER = {
  app_name: 'Sneaker Store',
};

export const PAY_MODAL = {
  bancks: [
    'Banco Popular',
    'Banco Ademy',
    'Paypal',
    'Master Card',
    'American Express',
    'Visa',
  ],
};


