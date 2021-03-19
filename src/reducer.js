const initialState = {
  currency: "GBP",
  cart: [
    {
      name: "Jacket",
      price: 22.33,
      img: "",
    },
    {
      name: "T Shirt",
      price: 11.99,
      img: "",
    },
  ],
};

const reducer = (state = initialState, action) => {
  return state;
};
export default reducer;
