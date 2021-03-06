import {
  faChevronDown,
  faShoppingCart,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./ShoppingCart.css";

function ShoppingCart(props) {
  return (
    <li className="header-list__item cart" onClick={props.clicked}>
      <Link to="/yourCart" className="cart__link">
        {/* <Link to="/yourCart" className="cart__link"> */}
        <FontAwesomeIcon icon={faShoppingCart} />{" "}
        {props.cart.length > 0 ? props.cart.length : "empty"}
        <FontAwesomeIcon icon={faChevronDown} />
      </Link>
      <div className="shopping-cart">
        <h3 className="shopping-cart__title">Shopping Cart</h3>
        {props.cart.length > 0 ? (
          props.cart.map((el, index) => {
            if (index < 4)
              return (
                <div className="product" key={el.id}>
                  <img src={el.image} alt="" className="product__img" />
                  <p>{el.title.split(" ")[0]} ...</p>
                  <p>
                    {(el.price * props.currency.currencyValue).toFixed(2)}
                    {props.currency.currencyName}
                  </p>
                  <button
                    className="btn-delete"
                    onClick={() => props.deleteFromCart(el)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              );
            return <></>;
          })
        ) : (
          <div className="product">
            <p>koszyk jest pusty</p>
          </div>
        )}
        <Link to="/yourCart" className="shopping-cart__link">
          Przejdź do koszyka
        </Link>
      </div>
    </li>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.storeReducer.cart,
    currency: state.mainReducer.currency,
  };
};
const dispatchStateToProps = (dispatch) => {
  return {
    deleteFromCart: (item) => dispatch({ type: "DELETE_FROM_CART", item }),
  };
};
export default connect(mapStateToProps, dispatchStateToProps)(ShoppingCart);
