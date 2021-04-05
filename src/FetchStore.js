import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
const FetchStore = (props) => {
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        // const updatedData = res.data.map((el) => {
        //   const imgSrc = el.image.split(".");
        //   imgSrc.splice(1, 0, "herokuapp");
        //   return { ...el, image: imgSrc.join(".") };
        // });
        props.updateStoreStock(res.data);
        // console.log(res.data);
        props.setIsLoading(false);
      })

      .catch((err) => {
        props.setIsLoading(false);
        console.log(err);
      });
  });
  return <></>;
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateStoreStock: (items) => dispatch({ type: "UPDATE_STORE", items }),
    setIsLoading: (boolean) => dispatch({ type: "SET_IS_LOADING", boolean }),
    setDefaultFavourite: (items) =>
      dispatch({ type: "SET_DEFAULT_FAVOURITE", items }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FetchStore);
