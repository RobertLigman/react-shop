import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";
import { connect } from "react-redux";
import "./ProductsHome.css";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import AddToCartInfo from "../AddToCartInfo/AddToCartInfo";
import Loading from "../Loading/Loading";
import { CSSTransition } from "react-transition-group";
function ProductsHome(props) {
  const [text, setText] = useState("");

  const addToCartHandler = (item) => {
    const isInCart = props.cart.find((el) => el.title === item.title);
    if (isInCart) {
      console.log("item is already in cart");

      return;
    }
    setText("Added To Cart");
    props.addToCartInfoHandler();
    props.addToCart(item);
  };
  const addToFavourite = (item) => {
    const isInFavourite = props.favourite.find((el) => el === item);
    if (isInFavourite) {
      console.log("item is already in favourite");
      return;
    }
    setText("Added To Favourite");
    // console.log("added to favourite");
    props.addToCartInfoHandler();
    props.addToFavourite(item);
  };

  // const renderProducts = ;
  return (
    <>
      {props.isLoading ? (
        <Loading />
      ) : (
        <div className="Products-Home-wrapper">
          <AddToCartInfo text={text} />
          <CSSTransition
            appear={true}
            in={true}
            timeout={1000}
            unmountOnExit
            classNames="product">
            <ul className="products-list">
              {props.productList !== "" &&
                props.productList
                  .filter((el) => el.category === props.category)
                  .map((el, index) => {
                    // if (index <= 5)
                    return (
                      <li
                        key={el.id}
                        className={`products-list__item item-nb-${index}`}>
                        {/* <div className="item__title">{el.title}</div> */}
                        <div className="item__price">
                          {props.currency.currencySymbol}{" "}
                          {(el.price * props.currency.currencyValue).toFixed(2)}
                        </div>
                        <div>
                          <img
                            src={el.image}
                            alt={el.title}
                            className="product-img"
                          />
                        </div>

                        <div className="products-list__sub-item">
                          <h3 className="sub-item__title">
                            {el.title} {props.currency.currencySymbol}
                            {(el.price * props.currency.currencyValue).toFixed(
                              2
                            )}
                          </h3>
                          <p className="sub-item__description">
                            {el.description}
                          </p>
                          <div className="button-group">
                            <button
                              className="sub-item__button"
                              onClick={() => addToCartHandler(el)}>
                              <FontAwesomeIcon icon={faShoppingCart} />
                            </button>
                            <button
                              className="sub-item__button"
                              onClick={() => addToFavourite(el)}>
                              <FontAwesomeIcon icon={faHeart} />
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
            </ul>
          </CSSTransition>
        </div>
      )}
      <HorizontalLine />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    productList: state.products,
    currency: state.currency,
    cart: state.cart,
    addToCartInfo: state.addToCartInfo,
    favourite: state.favourite,
    isLoading: state.isLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch({ type: "ADD_PRODUCT_TO_CART", product }),
    addToCartInfoHandler: () => dispatch({ type: "CHANGE_ADD_TO_CART_INFO" }),
    addToFavourite: (product) =>
      dispatch({ type: "ADD_TO_FAVOURITE", product }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsHome);
