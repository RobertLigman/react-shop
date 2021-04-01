import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
const FetchStore = (props) => {
  useEffect(() => {
    axios
      .get("/products", {
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
        props.setIsLoading(false);
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
    setIsLoading: () => dispatch({ type: "SET_IS_LOADING" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FetchStore);
