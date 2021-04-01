import React from "react";
import { Link } from "react-router-dom";
import ProductsHome from "../ProductsHome/ProductsHome";
import "./Mens.css";
function Mens() {
  return (
    <>
      <ProductsHome category="men clothing" gallery noHr />
      <Link to="/">Return to main Page</Link>
    </>
  );
}

export default Mens;
