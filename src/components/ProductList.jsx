import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import ProductContext from "../context/product/ProductContext";

const ProductList = () => {
  const productContext = useContext(ProductContext);
  const { productList } = productContext;
  return (
    <div className="product-list">
      {productList.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
};

export default ProductList;
