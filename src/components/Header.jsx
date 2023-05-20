import React, { useContext, useEffect, useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, List, Modal } from "antd";
import ProductContext from "../context/product/productContext";
import CartModal from "./CartModal";
import { useSearchParams } from "react-router-dom";

const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const productContext = useContext(ProductContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleToggleModal = (isOpen) => {
    setIsModalOpen(isOpen);
  };
  const handleSetParams = () => {
    setSearchParams({ isModalOpen });
  };

  useEffect(() => {
    setIsModalOpen(JSON.parse(searchParams.get("isModalOpen")))
  }, []);

  useEffect(() => {
    handleSetParams();
  }, [isModalOpen]);

  return (
    <div className="header">
      <Badge
        count={productContext.selectedProducts.length}
        size="small"
        color="blue"
      >
        <ShoppingCartOutlined
          style={{ fontSize: 30 }}
          onClick={() => handleToggleModal(true)}
        />
      </Badge>
      <CartModal
        isModalOpen={isModalOpen}
        onCancel={() => handleToggleModal(false)}
      />
    </div>
  );
};

export default Header;
