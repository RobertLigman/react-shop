const initialState = {
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

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_STORE":
      return {
        ...state,
        products: action.items,
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
    case "ADD_PRODUCT_TO_CART":
      return {
        ...state,
        cart: state.cart.concat(action.product),
      };
    default:
      return state;
  }
};

export default storeReducer;
