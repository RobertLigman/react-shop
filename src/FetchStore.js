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
      .then((res) => console.log(res.data));
  }, []);
  return <></>;
};

export default FetchStore;
