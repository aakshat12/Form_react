import React, { useState } from 'react';
import { Form, Modal, Input, Button, Select } from 'antd';

function FormComponent() {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = (values) => {
    setIsModalOpen(false);
    console.log('Form values submitted:', values);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { Option } = Select;

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        onCancel={handleCancel}
        visible={isModalOpen} // Changed 'open' to 'visible'
        title="Network Setting"
        style={{ textAlign: 'center' }}
        footer={[]}
      >
        <Form
          labelCol={{
            span: 7,
          }}
          labelAlign="left"
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
            textAlign: 'center',
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
          form={form}
          onFinish={handleSubmit} // Moved onFinish to the Form component
        >
          <Form.Item
            name="E1IPAddress"
            label="E1 IP Address"
            rules={[{ required: true, message: 'E1 IP Address is required' }]}
          >
            <Select>
              <Option value="hi">hi</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="E1PPort"
            label="E1 IP Port"
            rules={[{ required: true, message: 'E1 IP Port is required' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="PortransferIP"
            label="Port Transfer Port"
            rules={[{ required: true, message: 'Port Transfer Port is required' }]}
          >
            <Select>
              <Option value="hi">hi</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="PortTransferIP" // Removed space from the name
            label="Port Transfer IP"
            rules={[{ required: true, message: 'Port Transfer IP is required' }]}
          >
            <Input />
          </Form.Item>

          <div style={{ alignItems: 'center' }}>
            <Button type="primary" htmlType="submit">
              OK
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
}

export default FormComponent;
