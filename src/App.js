import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ShoppingPage from "./pages/ShoppingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ShoppingPage />} />
    </Routes>
  );
}

export default App;
