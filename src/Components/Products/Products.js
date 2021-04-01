import React from "react";
import { useParams } from "react-router-dom";
function Products() {
  const { name } = useParams();
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
}

export default Products;
