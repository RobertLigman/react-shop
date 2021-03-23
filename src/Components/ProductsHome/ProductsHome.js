import React from "react";
import { connect } from "react-redux";
function ProductsHome(props) {
  return (
    <ul>
      {props.productList !== "" &&
        props.productList.map((el) => (
          <li key={el.id}>
            <div>{el.title}</div>
            <div>{el.price}</div>
            <div>
              <img src={el.image} alt={el.title} />
            </div>
          </li>
        ))}
    </ul>
  );
}
const mapStateToProps = (state) => {
  return {
    productList: state.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsHome);
