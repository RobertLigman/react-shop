import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import "./Categories.css";
function Categories(props) {
  const handleClick = (item) => {
    // item.siblings.classList.remove("active");
    console.log("click");
    document.querySelectorAll(".Categories__link").forEach((el) => {
      console.log(el);
      el.classList.remove("active");
    });
    item.target.classList.add("active");
  };
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        // console.log(res);
        props.updateCategories(res.data);
      });
  });
  return (
    <ul className="Categories">
      {props.categories.length > 0 &&
        props.categories.map((el, index) => (
          <li key={el}>
            <Link
              to={`/categories/${el}`}
              className={`Categories__link ${index === 0 ? "active" : ""}`}
              onClick={(e) => handleClick(e)}>
              {el}
            </Link>
          </li>
        ))}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.storeReducer.categories,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateCategories: (items) => dispatch({ type: "UPDATE_CATEGORIES", items }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
