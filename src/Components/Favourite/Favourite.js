import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function Favourite(props) {
  return props.favourite.length > 0 ? (
    <div className="Full-cart">
      {props.favourite.map((el) => (
        <div className="Full-cart__product" key={el.id}>
          <img src={el.image} alt="" className="product__img" />
          <p>{el.title}</p>
          <p>
            {(el.price * props.currency.currencyValue).toFixed(2)}
            {props.currency.currencyName}
          </p>
          <button
            className="btn-delete"
            onClick={() => props.removeFromFavourite(el)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      ))}
    </div>
  ) : (
    <div>
      <h1>No Favourite Products found</h1>
      <Link to="/">Return to Main Page</Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    favourite: state.favourite,
    currency: state.currency,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromFavourite: (product) =>
      dispatch({ type: "REMOVE_FROM_FAVOURITE", product }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
