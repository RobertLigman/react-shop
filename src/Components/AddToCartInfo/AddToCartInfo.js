import React, { useEffect } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import "./AddToCartInfo.css";
function AddToCartInfo(props) {
  //   useEffect(() => {
  //     setTimeout(() => {
  //       props.addToCartInfoHandler();
  //     }, 5000);
  //   }, []);
  console.log(props.addToCartInfo);
  return (
    <CSSTransition
      //   in={props.addToCartInfo}
      in={props.addToCartInfo}
      timeout={1000}
      classNames="cart"
      unmountOnExit
      onExit={() => props.addToCartInfoHandler()}>
      <div className="add-to-cart-modal">{props.text}</div>
    </CSSTransition>
  );
}

const mapStateToProps = (state) => {
  return {
    addToCartInfo: state.addToCartInfo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCartInfoHandler: () => dispatch({ type: "CHANGE_ADD_TO_CART_INFO" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddToCartInfo);
