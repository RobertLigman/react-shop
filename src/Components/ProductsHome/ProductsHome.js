import React from "react";
import { connect } from "react-redux";
import "./ProductsHome.css";
function ProductsHome(props) {
  return (
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
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eius, deleniti.
                    </p>
                    <button onClick={() => props.addToCart(el)}>
                      Add to Cart
                    </button>
                  </div>
                </li>
              );
          })}
      </ul>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    productList: state.products,
    currency: state.currency,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch({ type: "ADD_PRODUCT_TO_CART", product }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsHome);
