import React, { useContext } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import ProductContext from "../context/productContext";

const Header = () => {
  const productContext = useContext(ProductContext);
  return (
    <div className="header">
      <Badge count={productContext.selectedProducts.length} size="small" color="blue">
        <ShoppingCartOutlined style={{ fontSize: 30 }} />
      </Badge>
    </div>
  );
};

export default Header;
