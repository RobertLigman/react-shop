import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import React, { useRef } from "react";
import { connect } from "react-redux";
import "./ProductsHome.css";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import AddToCartInfo from "../AddToCartInfo/AddToCartInfo";
import Loading from "../Loading/Loading";
import { CSSTransition } from "react-transition-group";
function ProductsHome(props) {
  // const [text, setText] = useState("");
  const nodeRef = useRef(null);
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
  // const renderProducts = ;
  return (
    <>
      {props.isLoading ? (
        <Loading />
      ) : (
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
                            <button
                              className="sub-item__button"
                              onClick={() => expandModal(el)}>
                              <FontAwesomeIcon icon={faExpand} />
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
