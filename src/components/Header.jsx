import React, { useContext, useEffect, useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import ProductContext from "../context/product/ProductContext";
import CartModal from "./CartModal";
import { useSearchParams } from "react-router-dom";

const Header = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const { selectedProducts } = useContext(ProductContext);
  const [isOpen, setIsOpen] = useState(false);
  const getTotalQuantity = () => {
    let total = 0;
    selectedProducts.forEach((product) => {
      total += product.quantity;
    });
    return total;
  };
  const handleToggleModal = (isOpen) => {
    setIsOpen(isOpen);
  };
  const handleSetIsOpen = () => {
    searchParams.set("isOpen", isOpen);
    setSearchParams(searchParams);
  };
  useEffect(() => {
    setIsOpen(JSON.parse(searchParams.get("isOpen")));
  }, []);

  useEffect(() => {
    handleSetIsOpen();
  }, [isOpen])
  
  return (
    <div className="header">
      <Badge count={getTotalQuantity()} size="small">
        <ShoppingCartOutlined
          style={{ fontSize: 30 }}
          onClick={() => handleToggleModal(true)}
        />
      </Badge>
      <CartModal
        isOpen={isOpen}
        handleCancel={() => handleToggleModal(false)}
      />
    </div>
  );
};

export default Header;
