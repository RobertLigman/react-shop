import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "./CartButtonGroup.css";
function CartButtonGroup(props) {
  const addToCartHandler = (item) => {
    const isInCart = props.cart.find((el) => el.title === item.title);
    if (isInCart) {
      props.setText("item is already in cart");
      props.addToCartInfoHandler();

      return;
    }
    props.setText("Added To Cart");
    props.addToCartInfoHandler();
    props.addToCart(item);
  };
  const addToFavourite = (item) => {
    const isInFavourite = props.favourite.find((el) => el === item);
    if (isInFavourite) {
      props.setText("item is already in favourite");
      props.addToCartInfoHandler();
      return;
    }
    props.setText("Added To Favourite");
    // console.log("added to favourite");
    props.addToCartInfoHandler();
    props.addToFavourite(item);
  };
  const expandModal = (item) => {
    props.updateModalDetails(item);
    props.setIsModalOpen();
    console.log(item);
  };
  return (
    <div className="button-group">
      <button
        className="sub-item__button"
        onClick={() => addToCartHandler(props.product)}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
      <button
        className="sub-item__button"
        onClick={() => addToFavourite(props.product)}>
        <FontAwesomeIcon icon={faHeart} />
      </button>
      <button
        className="sub-item__button"
        onClick={() => expandModal(props.product)}>
        <FontAwesomeIcon icon={faExpand} />
      </button>
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
export default connect(mapStateToProps, mapDispatchToProps)(CartButtonGroup);
