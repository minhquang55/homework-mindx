import React from "react";
import ProductProvider from "../context/product/ProductProvider";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

const ShoppingPage = () => {
  return (
    <ProductProvider>
      <Header />
      <ProductList />
    </ProductProvider>
  );
};

export default ShoppingPage;
