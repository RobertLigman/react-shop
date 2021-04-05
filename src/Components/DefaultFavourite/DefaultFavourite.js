import axios from "axios";
import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import "./DefaultFavourite.css";
import BackToMainPage from "../BackToMainPage/BackToMainPage";
import Loading from "../Loading/Loading";
import AddToCartInfo from "../AddToCartInfo/AddToCartInfo";
import CartButtonGroup from "../CartButtonGroup/CartButtonGroup";
function DefaultFavourite(props) {
  const [localIsLoading, setLocalIsLoading] = useState(true);
  const setDefaultFavourite = props.setDefaultFavourite;
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        const womensFavourite = res.data
          .filter((el) => el.category === "women clothing")
          .filter((_, index) => index < 2);
        const mensFavourite = res.data
          .filter((el) => el.category === "men clothing")
          .filter((_, index) => index < 2);
        console.log({ womensFavourite }, { mensFavourite });
        setDefaultFavourite(
          props.type === "womens" ? womensFavourite : mensFavourite
        );
        setLocalIsLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        setLocalIsLoading(false);
        console.log(err);
      });
    // return () => props.setDefaultFavourite([]);
  }, [setDefaultFavourite, setLocalIsLoading, props.type]);
  return (
    <div className="DefaultFavourite">
      {localIsLoading ? (
        <Loading />
      ) : props.defaultFavourite.length > 0 ? (
        <div className="Full-cart">
          <AddToCartInfo text={props.text} />
          {props.defaultFavourite.map((el) => (
            <div className="Full-cart__product" key={el.id}>
              <img src={el.image} alt="" className="product__img" />
              <p>{el.title}</p>
              <p>
                {(el.price * props.currency.currencyValue).toFixed(2)}
                {props.currency.currencyName}
              </p>
              <CartButtonGroup product={el} />
            </div>
          ))}
          <BackToMainPage />
        </div>
      ) : (
        <div>
          <h1>No Favourite Products found</h1>
          <BackToMainPage />
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    defaultFavourite: state.storeReducer.defaultFavourite,
    currency: state.mainReducer.currency,
    productList: state.storeReducer.products,
    cart: state.storeReducer.cart,
    addToCartInfo: state.mainReducer.addToCartInfo,
    favourite: state.storeReducer.favourite,
    text: state.mainReducer.text,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch({ type: "ADD_PRODUCT_TO_CART", product }),
    addToCartInfoHandler: () => dispatch({ type: "CHANGE_ADD_TO_CART_INFO" }),
    setDefaultFavourite: (items) =>
      dispatch({ type: "SET_DEFAULT_FAVOURITE", items }),
    setIsLoading: (boolean) => dispatch({ type: "SET_IS_LOADING", boolean }),
    addToFavourite: (product) =>
      dispatch({ type: "ADD_TO_FAVOURITE", product }),
    setIsModalOpen: () => dispatch({ type: "SET_IS_MODAL_OPEN" }),
    updateModalDetails: (product) =>
      dispatch({ type: "UPDATE_MODAL_DETAILS", product }),
    setText: (text) => dispatch({ type: "SET_TEXT", text }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DefaultFavourite);
