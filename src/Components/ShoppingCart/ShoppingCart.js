import {
  faChevronDown,
  faShoppingCart,
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
                  <img src={el.img} alt="" />
                  <p>{el.title.split(" ")[0]} ...</p>
                  <p>
                    {(el.price * props.currency.currencyValue).toFixed(2)}
                    {props.currency.currencyName}
                  </p>
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
  return { cart: state.cart, currency: state.currency };
};
const dispatchStateToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, dispatchStateToProps)(ShoppingCart);
