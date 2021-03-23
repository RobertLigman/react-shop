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
        const updatedData = res.data.map((el) => {
          const imgSrc = el.image.split(".");
          imgSrc.splice(1, 0, "herokuapp");
          return { ...el, image: imgSrc.join(".") };
        });
        props.updateStoreStock(updatedData);
      });
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
