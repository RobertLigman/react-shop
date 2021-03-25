import React from "react";
import { connect } from "react-redux";

function FullCart(props) {
  console.log(props.cart);
  return <div>here is full cart component</div>;
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = (disptach) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(FullCart);
