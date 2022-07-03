const urlBaseApi = 'https://sneakerstore0.herokuapp.com/';
export const Utils = {
  ROUTES: {
    menu_route: '/menu',
    cart_route: '/cart',
    details: 'details/:id',
    menu: 'menu',
    cart: 'cart',
  },
  components: {
    CART: {
      modal_style: 'max-content!important',
    },
    HEADER: {
      app_name: 'Sneaker Store',
    },
    PAY_MODAL: {
      class: {
        valid: 'valid',
        invalid: 'invalid',
      },
      bancks: [
        'Banco Popular',
        'Banco Ademy',
        'Paypal',
        'Master Card',
        'American Express',
        'Visa',
      ],
      errorsField: {
        creditcard: '',
        client: '',
        email: '',
        banckOptions: '',
        creditcardNo: '',
      },
      errorMessageField: {
        creditcard: {
          required: 'Card name is required',
        },
        creditcardNo: {
          required: 'Card No is required',
          maxLength: 'Max length exceeded',
          minlength: 'Min length  is 13 character',
        },
        client: {
          required: 'Client name is required',
        },
        email: {
          required: 'Email is required',
          email: 'Invalid email detected',
        },
        banckOptions: {
          required: 'Client name is required',
        },
      },
    },
  },

  URL: {
    logo: 'https://media.gq.com/photos/6284ff89598bc90bcc76c290/master/w_1280,c_limit/shoe-5.jpg',
    image_card:
      'https://tse1.mm.bing.net/th?id=OIP.t6Y7mst0EXjVcYYOXm2SNwAAAA&pid=Api&P=0&w=443&h=185',
    endPoints: {
      sneaker: 'sneaker',
      sneakerId: (id: string) => `sneaker/${id}`,
      sale: 'sale',
    },
    api_url: (endpoint: string) => `${urlBaseApi}${endpoint}`,
  },

  messages: {
    movileDetected:
      'Estimado usuaio, abrir esta aplicacion en un desktop le brindara una mejor experiancia!',
    order: {
      title: 'Missing',
      message: 'No one order id selected',
      htttp: 'HTTP ERROR',
    },
  },
};
