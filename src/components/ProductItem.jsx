import { PlusOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React, { useContext } from "react";
import ProductContext from "../context/product/ProductContext";

const { Meta } = Card;
const ProductItem = ({ product }) => {
  const { thumbnail, title, price, id } = product;
  const { handleAdd } = useContext(ProductContext);
  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt="example" src={thumbnail} />}
      actions={[<PlusOutlined onClick={() => handleAdd(id)} />]}
    >
      <Meta title={title} description={`${price}$`} />
    </Card>
  );
};

export default ProductItem;
