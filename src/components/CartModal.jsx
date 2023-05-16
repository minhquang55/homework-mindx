import { Card, Input, List, Modal } from "antd";
import React, { useContext } from "react";
import ProductContext from "../context/product/ProductContext";

const CartModal = ({ isOpen, handleCancel }) => {
  const { selectedProducts, handleChangeQuantity } = useContext(ProductContext);
  const getTotalPrice = () => {
    let total = 0;
    selectedProducts.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };
  return (
    <Modal open={isOpen} title="Đơn hàng" width={700} onCancel={handleCancel}>
      <Card style={{ marginTop: "20px" }}>
        <List
          itemLayout="horizontal"
          dataSource={selectedProducts}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta title={item.title} description={item.price} />
              <b>{item.price}$</b>
              <span style={{ padding: "0 10px" }}>x</span>
              <Input
                type="number"
                style={{ width: 90 }}
                value={item.quantity}
                onChange={(e) => handleChangeQuantity(e, item.id)}
              />
            </List.Item>
          )}
        />
      </Card>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px 0",
        }}
      >
        <h3>Tổng hóa đơn:</h3>
        <h3>={getTotalPrice()}$</h3>
      </div>
    </Modal>
  );
};

export default CartModal;
