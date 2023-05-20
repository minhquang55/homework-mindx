import React, { useState } from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import ProductProvider from "../context/product/ProductProvider";

const ShoppingPage = () => {
  return (
    <ProductProvider>
      <Header />
      <ProductList />
    </ProductProvider>
  );
};

export default ShoppingPage;
