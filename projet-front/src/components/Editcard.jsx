import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Rate,
  Upload,
} from "antd";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { updatebusiness } from "../JS/Actions/businessAction";

const { TextArea } = Input;

const Editbusiness = ({ business }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedbusiness, setUpdatedbusiness] = useState(business);

  const dispatch = useDispatch();

  useEffect(() => {
    if (business) {
      setUpdatedbusiness(business);
    }
  }, [business]);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const handleInputChange = (eOrName, value) => {
    if (typeof eOrName === "object" && eOrName?.target) {
      const { name, value } = eOrName.target;
      setUpdatedbusiness((prev) => ({ ...prev, [name]: value }));
    } else {
      const name = eOrName;
      setUpdatedbusiness((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleEditbusiness = () => {
    dispatch(updatebusiness(business._id, updatedbusiness));
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        color="default"
        variant="solid"
        onClick={showModal}
        icon={<EditOutlined />}
      >
        Edit Business
      </Button>

      <Modal
        title="Edit Business"
        open={isModalOpen}
        onOk={handleEditbusiness}
        onCancel={handleCancel}
      >
        <Form layout="vertical">
          <Form.Item label="Make">
            <Input
              value={updatedbusiness.make}
              name="make"
              onChange={handleInputChange}
            />
          </Form.Item>

          <Form.Item label="Model">
            <Input
              value={updatedbusiness.model}
              name="model"
              onChange={handleInputChange}
            />
          </Form.Item>

          <Form.Item label="Image URL">
            <Input
              value={updatedbusiness.picture}
              name="picture"
              onChange={handleInputChange}
            />
          </Form.Item>

          <Form.Item label="Year">
            <DatePicker
              picker="year"
              onChange={(date, dateString) =>
                handleInputChange("year", dateString)
              }
            />
          </Form.Item>

          <Form.Item label="Price">
            <InputNumber
              value={updatedbusiness.price}
              onChange={(value) => handleInputChange("price", value)}
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item label="Description">
            <TextArea
              value={updatedbusiness.description}
              name="description"
              onChange={handleInputChange}
              rows={4}
            />
          </Form.Item>

          <Form.Item label="Upload Image">
            <Upload action="/upload.do" listType="picture-card">
              <button
                style={{
                  border: 0,
                  background: "none",
                }}
                type="button"
              >
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </button>
            </Upload>
          </Form.Item>

          <Form.Item label="Color">
            <ColorPicker
              onChange={(color, hex) => handleInputChange("color", hex)}
            />
          </Form.Item>

          <Form.Item label="Rate">
            <Rate
              value={updatedbusiness.rate}
              onChange={(value) => handleInputChange("rate", value)}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Editbusiness;
