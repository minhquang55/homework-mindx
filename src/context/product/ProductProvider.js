import React, { useState } from "react";
import ProductContext from "./productContext";

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
    const index = productList.findIndex((product) => product.id === id);
    const isExistProduct = selectedProducts.findIndex(
      (product) => product.id === id
    );
    if (isExistProduct > -1) {
      selectedProducts[isExistProduct].quantity =
        selectedProducts[isExistProduct].quantity + 1;
      setSelectedProducts([...selectedProducts]);
    } else {
      const newSelectedProduct = {
        ...productList[index],
        quantity: 1,
      };
      setSelectedProducts([...selectedProducts, newSelectedProduct]);
    }
  };

  return (
    <ProductContext.Provider
      value={{ selectedProducts, productList, handleAdd }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
