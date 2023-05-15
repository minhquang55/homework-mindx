import React, { useEffect, useState } from "react";
import ProductContext from "./ProductContext";

const ProductProvider = ({ children }) => {
  const productList = [
    {
      id: 1,
      title: "iPhone 9",
      price: 549,
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    },
    {
      id: 2,
      title: "iPhone X",
      price: 899,
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      price: 1249,
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    },
    {
      id: 4,
      title: "OPPOF19",
      price: 280,
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    },
  ];
  const [selectedProducts, setSelectedProducts] = useState([]);
  const handleAdd = (id) => {
    let newSelectedList = [...selectedProducts];
    const selectedIndex = productList.findIndex((product) => product.id === id);
    if (selectedIndex) {
      const newAddProduct = {
        ...productList[selectedIndex],
        quantity: 1,
      };
      newSelectedList = [...newSelectedList, newAddProduct];
      setSelectedProducts(newSelectedList);
      saveProduct(newSelectedList);
    }
  };
  const saveProduct = (newSelectedList) => {
    localStorage.setItem("cartList", JSON.stringify(newSelectedList));
  };
  useEffect(() => {
    const selectedList = JSON.parse(localStorage.getItem("cartList"));
    setSelectedProducts(selectedList || 0);
  }, []);
  return (
    <ProductContext.Provider
      value={{ selectedProducts, productList, handleAdd }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
