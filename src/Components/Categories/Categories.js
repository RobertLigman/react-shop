import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
function Categories(props) {
  useEffect(() => {
    axios
      .get("/products/categories", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        console.log(res);
        props.updateCategories(res.data);
      });
  }, []);
  return (
    <div>
      {props.categories.length > 0 &&
        props.categories.map((el) => (
          <li key={el}>
            <Link to={`/categories/${el}`}>{el}</Link>
          </li>
        ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateCategories: (items) => dispatch({ type: "UPDATE_CATEGORIES", items }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
