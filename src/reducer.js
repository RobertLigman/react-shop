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
  text: "",
  modalDetails: {},
  isModalOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return {
        ...state,
        text: action.text,
      };
    case "SET_IS_LOADING":
      return {
        ...state,
        isLoading: false,
      };
    case "UPDATE_MODAL_DETAILS":
      return {
        ...state,
        modalDetails: action.product,
      };
    case "CHANGE_ADD_TO_CART_INFO":
      return {
        ...state,
        addToCartInfo: !state.addToCartInfo,
      };

    case "CHANGE_CURRENCY":
      return {
        ...state,
        currency: state.currencyOptions.filter(
          (el) => el.currencyName === action.currencyName
        )[0],
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
    case "SET_IS_MODAL_OPEN":
      return {
        ...state,
        isModalOpen: state.isModalOpen === true ? false : true,
      };
    case "SET_LOGIN_DETAILS":
      return {
        ...state,
        loginDetails: action.details,
      };
    default:
      return state;
  }
};
export default reducer;
