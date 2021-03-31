import React from "react";
import { connect } from "react-redux";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./FullCart.css";
function FullCart(props) {
  console.log(props.cart);
  return props.cart.length > 0 ? (
    <div className="Full-cart">
      {props.cart.map((el, index) => (
        <div className="Full-cart__product" key={el.id}>
          <img src={el.image} alt="" className="product__img" />
          <p>{el.title}</p>
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
      ))}
      <Link to="/">Return to main page</Link>
      <button className="btn-checkout">Checkout</button>
    </div>
  ) : (
    <div>
      <h1>Cart is Empty</h1>
      <Link to="/">Return to main page</Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    currency: state.currency,
  };
};
const mapDispatchToProps = (disptach) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(FullCart);
