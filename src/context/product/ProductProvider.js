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
    if (selectedIndex > -1) {
      const index = newSelectedList.findIndex((product) => product.id === id);
      const newAddProduct = {
        ...productList[selectedIndex],
        quantity: 1,
      };
      if (index > -1) {
        newAddProduct.quantity = newSelectedList[index].quantity + 1;
        newSelectedList[index] = newAddProduct;
      } else {
        newSelectedList = [...newSelectedList, newAddProduct];
      }
      setSelectedProducts(newSelectedList);
      saveProduct(newSelectedList);
    }
  };
  const saveProduct = (newSelectedList) => {
    localStorage.setItem("cartList", JSON.stringify(newSelectedList));
  };
  const handleChangeQuantity = (e, id) => {
    const index = selectedProducts.findIndex((item) => item.id === id);
    if (e.target.value <= 0) return;
    const newSelectedProducts = [...selectedProducts];
    newSelectedProducts[index] = {
      ...newSelectedProducts[index],
      quantity: Number(e.target.value),
    };
    setSelectedProducts(newSelectedProducts);
  };
  useEffect(() => {
    const selectedList = JSON.parse(localStorage.getItem("cartList"));
    setSelectedProducts(selectedList || []);
  }, []);
  return (
    <ProductContext.Provider
      value={{ selectedProducts, productList, handleAdd, handleChangeQuantity }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
