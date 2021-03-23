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
      .then((res) => props.updateStoreStock(res.data));
  }, []);
  return <></>;
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateStoreStock: (items) => dispatch({ type: "UPDATE_STORE", items }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FetchStore);
