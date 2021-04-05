import { useParams } from "react-router-dom";
import BackToMainPage from "../BackToMainPage/BackToMainPage";
import ProductsHome from "../ProductsHome/ProductsHome";
import "./ProductsCategory.css";
const ProductsCategory = () => {
  const { name } = useParams();

  return (
    <div className="ProductsCategory">
      <ProductsHome category={name} noHr />
      <BackToMainPage />
    </div>
  );
};

export default ProductsCategory;
