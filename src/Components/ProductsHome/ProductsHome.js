import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { connect } from "react-redux";
import "./ProductsHome.css";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
function ProductsHome(props) {
  const addToCartHandler = (item) => {
    const isInCart = props.cart.find((el) => el.title == item.title);
    if (isInCart) {
      console.log("item jest juz w koszyku");
      return;
    }
    props.addToCart(item);
  };
  return (
    <>
      <div>
        <ul className="products-list">
          {props.productList !== "" &&
            props.productList.map((el, index) => {
              if (index <= 5)
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
                        {(el.price * props.currency.currencyValue).toFixed(2)}
                      </h3>
                      <p className="sub-item__description">{el.description}</p>
                      <button
                        className="sub-item__button"
                        onClick={() => addToCartHandler(el)}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                      </button>
                    </div>
                  </li>
                );
            })}
        </ul>
      </div>
      <HorizontalLine />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    productList: state.products,
    currency: state.currency,
    cart: state.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch({ type: "ADD_PRODUCT_TO_CART", product }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsHome);
