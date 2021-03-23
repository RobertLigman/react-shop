const initialState = {
  currency: "GBP",
  currencyOptions: ["GBP", "PLN", "USD"],
  loginDetails: {
    isLogged: false,
    email: "",
    password: "",
  },
  cart: [
    {
      id: 1,
      name: "Jacket",
      price: 22.33,
      img: "",
    },
    {
      id: 2,
      name: "T Shirt",
      price: 11.99,
      img: "",
    },
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

    case "CHANGE_CURRENCY":
      return {
        ...state,
        currency: state.currencyOptions.filter(
          (el) => el === action.currencyName
        )[0],
      };

    case "LOG_OUT":
      return {
        ...state,
        loginDetails: initialState.loginDetails,
      };
    case "SET_LOGIN_DETAILS":
      return {
        ...state,
        loginDetails: action.details,
      };
  }
  return state;
};
export default reducer;
