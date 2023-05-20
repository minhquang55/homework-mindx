import { List, Modal } from "antd";
import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../context/product/productContext";

const CartModal = ({ isModalOpen, onCancel }) => {
  const {selectedProducts} = useContext(ProductContext);
  useEffect(() => {
    console.log(selectedProducts);
  }, []);
  return (
    <Modal title="Basic Modal" open={isModalOpen} onCancel={onCancel}>
      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={selectedProducts}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            // actions={[
            //   <a key="list-loadmore-edit">edit</a>,
            //   <a key="list-loadmore-more">more</a>,
            // ]}
          >
            <List.Item.Meta title={item.title} description={`${item.price}$`} />
            <div>content</div>
          </List.Item>
        )}
      />
    </Modal>
  );
};

export default CartModal;
