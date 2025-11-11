import React, { useState } from "react";
import { Button, Modal } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { deletebusiness } from "../JS/Actions/businessAction";

const DeleteBusiness = ({ id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.AuthReducer.user);
  const isAdmin = user?.role === "admin";

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => {
    dispatch(deletebusiness(id));
    setIsModalOpen(false);
  };
  const handleCancel = () => setIsModalOpen(false);

  if (!isAdmin) return null;

  return (
    <>
      <Button danger onClick={showModal} icon={<DeleteOutlined />}>
        Delete
      </Button>
      <Modal
        title={
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <DeleteOutlined style={{ color: "red" }} />
            Delete Business
          </span>
        }
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        okType="danger"
        onCancel={handleCancel}
      >
        <p>Are you sure you want to delete this business?</p>
      </Modal>
    </>
  );
};
export default DeleteBusiness;


