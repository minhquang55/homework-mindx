import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductContext from "./context/productContext";

function App() {
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
  const [selectedProducts, setselectedProducts] = useState([]);

  const handleAdd = (id) => {
    const index = productList.findIndex((product) => product.id === id);
    setselectedProducts([...selectedProducts, selectedProducts[index]])
  }
  
  return (
    <ProductContext.Provider value={{ selectedProducts, productList, handleAdd }}>
      <Header />
      <ProductList />
    </ProductContext.Provider>
  );
}

export default App;
