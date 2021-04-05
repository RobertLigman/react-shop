import React, { useRef } from "react";
import { connect } from "react-redux";
import "./ProductsHome.css";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import AddToCartInfo from "../AddToCartInfo/AddToCartInfo";
import Loading from "../Loading/Loading";
import { CSSTransition } from "react-transition-group";
import CartButtonGroup from "../CartButtonGroup/CartButtonGroup";
function ProductsHome(props) {
  // const [text, setText] = useState("");
  const nodeRef = useRef(null);

  // const renderProducts = ;
  return (
    <>
      {props.isLoading ? (
        <Loading />
      ) : props.productList.filter((el) => el.category === props.category)
          .length > 0 ? (
        <div className="Products-Home-wrapper">
          <AddToCartInfo text={props.text} />
          <CSSTransition
            nodeRef={nodeRef}
            appear={true}
            in={true}
            timeout={1000}
            unmountOnExit
            classNames="product">
            <ul className={`${props.gallery ? "gallery" : "products-list"}`}>
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
                          <CartButtonGroup product={el} />
                        </div>
                      </li>
                    );
                  })}
            </ul>
          </CSSTransition>
        </div>
      ) : (
        <div>
          <h1>No Products Found</h1>
        </div>
      )}
      {!props.noHr && <HorizontalLine />}
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    productList: state.storeReducer.products,
    currency: state.mainReducer.currency,
    cart: state.storeReducer.cart,
    addToCartInfo: state.mainReducer.addToCartInfo,
    favourite: state.storeReducer.favourite,
    isLoading: state.mainReducer.isLoading,
    text: state.mainReducer.text,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch({ type: "ADD_PRODUCT_TO_CART", product }),
    addToCartInfoHandler: () => dispatch({ type: "CHANGE_ADD_TO_CART_INFO" }),
    addToFavourite: (product) =>
      dispatch({ type: "ADD_TO_FAVOURITE", product }),
    setIsModalOpen: () => dispatch({ type: "SET_IS_MODAL_OPEN" }),
    updateModalDetails: (product) =>
      dispatch({ type: "UPDATE_MODAL_DETAILS", product }),
    setText: (text) => dispatch({ type: "SET_TEXT", text }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsHome);
