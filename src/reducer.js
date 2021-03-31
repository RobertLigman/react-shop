const initialState = {
  currency: {
    currencyName: "GBP",
    currencyValue: 0.73,
    currencySymbol: "£",
  },
  isLoading: true,
  addToCartInfo: false,
  currencyOptions: [
    {
      currencyName: "GBP",
      currencyValue: 0.73,
      currencySymbol: "£",
    },
    {
      currencyName: "PLN",
      currencyValue: 3.91,
      currencySymbol: "zł",
    },
    {
      currencyName: "USD",
      currencyValue: 1,
      currencySymbol: "$",
    },
  ],
  loginDetails: JSON.parse(localStorage.getItem("loginSession")) || {
    isLogged: false,
    email: "",
    password: "",
  },
  favourite: [],
  categories: [],
  cart: [
    // {
    //   id: 1,
    //   title: "Jacket",
    //   price: 22.33,
    //   img: "",
    // },
    // {
    //   id: 2,
    //   title: "T Shirt",
    //   price: 11.99,
    //   img: "",
    // },
  ],
  products: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_STORE":
      return {
        ...state,
        products: action.items,
      };
    case "SET_IS_LOADING":
      return {
        ...state,
        isLoading: false,
      };
    case "CHANGE_ADD_TO_CART_INFO":
      return {
        ...state,
        addToCartInfo: !state.addToCartInfo,
      };
    case "UPDATE_CATEGORIES":
      return {
        ...state,
        categories: action.items,
      };
    case "DELETE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((el) => el !== action.item),
      };
    case "REMOVE_FROM_FAVOURITE":
      return {
        ...state,
        favourite: state.cart.filter((el) => el !== action.product),
      };
    case "ADD_TO_FAVOURITE":
      return {
        ...state,
        favourite: state.favourite.concat(action.product),
      };
    case "CHANGE_CURRENCY":
      return {
        ...state,
        currency: state.currencyOptions.filter(
          (el) => el.currencyName === action.currencyName
        )[0],
      };
    case "ADD_PRODUCT_TO_CART":
      return {
        ...state,
        cart: state.cart.concat(action.product),
      };
    case "LOG_OUT": {
      localStorage.removeItem("loginSession");
      return {
        ...state,
        loginDetails: {
          isLogged: false,
          email: "",
          password: "",
        },
      };
    }
    case "SET_LOGIN_DETAILS":
      return {
        ...state,
        loginDetails: action.details,
      };
  }
  return state;
};
export default reducer;
