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
      <FontAwesomeIcon icon={faShoppingCart} /> empty
      <FontAwesomeIcon icon={faChevronDown} />
      <div className="shopping-cart">
        {props.cart.length > 0 ? (
          props.cart.map((el) => (
            <div className="product" key={el.id}>
              <img src={el.img} alt="" />
              <p>{el.title.split(" ")[0]} ...</p>
              <p>
                {el.price}
                {props.currency.currencyName}
              </p>
            </div>
          ))
        ) : (
          <div className="product">
            <p>koszyk jest pusty</p>
          </div>
        )}
        <Link to="/yourCart">Przejdź do koszyka</Link>
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
