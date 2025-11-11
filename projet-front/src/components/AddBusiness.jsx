import React, { useState } from "react";
import { Modal, Button, Form, Input, InputNumber } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addbusiness } from "../JS/Actions/businessAction";

const { TextArea } = Input;

const AddBusiness = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.AuthReducer.user);
  const isAdmin = user?.role === "admin";
  const [newBusiness, setNewBusiness] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const handleInputChange = (eOrValue, name) => {
    if (typeof eOrValue === "object" && eOrValue?.target) {
      const { name, value } = eOrValue.target;
      setNewBusiness((prev) => ({ ...prev, [name]: value }));
    } else {
      setNewBusiness((prev) => ({ ...prev, [name]: eOrValue }));
    }
  };

  const handleSubmit = () => {
    dispatch(addbusiness(newBusiness));
    handleCancel();
  };

  if (!isAdmin) return null;

  return (
    <>
      <Button className="my-4" type="primary" onClick={showModal}>
        Add new Business
      </Button>
      <Modal
        title="Adding a new Business"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal" style={{ maxWidth: 600 }}>
          <Form.Item label="Make">
            <Input name="make" placeholder="Brand" onChange={handleInputChange} />
          </Form.Item>
          <Form.Item label="Model">
            <Input name="model" placeholder="Model" onChange={handleInputChange} />
          </Form.Item>
          <Form.Item label="Year">
            <InputNumber onChange={(value) => handleInputChange(value, "year")} />
          </Form.Item>
          <Form.Item label="Price">
            <InputNumber onChange={(value) => handleInputChange(value, "price")} />
          </Form.Item>
          <Form.Item label="Description">
            <TextArea name="description" rows={4} onChange={handleInputChange} />
          </Form.Item>
          <Form.Item label="Color">
            <Input name="color" placeholder="Color" onChange={handleInputChange} />
          </Form.Item>
          <Form.Item label="ImageUrl">
            <Input name="picture" placeholder="http://example.com/image.png" onChange={handleInputChange} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddBusiness;


