import React from "react";
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import ShoppingPage from "./pages/ShoppingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ShoppingPage />} />
    </Routes>
  );
}

export default App;
