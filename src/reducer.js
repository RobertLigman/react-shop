const initialState = {
  currency: "GBP",
  currencyOptions: ["GBP", "PLN", "USD"],
  loginDetails: {
    isLogged: false,
    name: "",
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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_CURRENCY": {
      console.log(
        state.currencyOptions.filter((el) => el === action.currencyName)[0]
      );
      return {
        ...state,
        currency: state.currencyOptions.filter(
          (el) => el === action.currencyName
        )[0],
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
