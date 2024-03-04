import React, { useState, PropsWithChildren } from "react";
import { Button, Form, Input, Modal, Space } from "antd";
import useCommon from "@/hooks/useCommon";
import { Icon } from "@iconify/react/dist/iconify.js";

enum FieldNames {
  Username = "username",
  GptName = "gptname",
}

const Settings = ({ children }: PropsWithChildren) => {
  const [form] = Form.useForm();
  const { settings } = useCommon();
  const initialValues = {
    [FieldNames.Username]: settings.username,
    [FieldNames.GptName]: settings.gptname,
  };
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = (values: Record<FieldNames, any>) => {};

  return (
    <div className="text-white">
      <Form
        layout="vertical"
        form={form}
        initialValues={initialValues}
        onFinish={handleSubmit}
      >
        <Space>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
          <Button
            type="dashed"
            icon={
              <Icon width={20} icon="mdi:file-find" className="align-middle" />
            }
            onClick={() => setOpenModal(true)}
          >
            Preview System Prompt
          </Button>
        </Space>

        <p className="text-red-500 text-xs">
          *remember to save for applying new settings
        </p>

        <h3 className="mb-4">
          <Form.Item name={FieldNames.Username} label="UserName">
            <Input placeholder="What's your name?" />
          </Form.Item>

          <Form.Item name={FieldNames.GptName} label="AI name">
            <Input placeholder="What AI name you like?" />
          </Form.Item>
        </h3>
      </Form>

      <Modal
        title="System Prompt Preview"
        open={openModal}
        onOk={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
      >
        <p className="text-red-500 text-xs">
          *System Prompt will placed at the top of all messages
        </p>
        <div>
          I want you to act as a professional Programmer. You are good at using
          Javascript, VueJs, ReactJs, NextJs to create website and CMS. User
          will provide some topics or questions related to programming and Ant
          Design, and it will be your job to explain them in easy-to-understand
          terms.This could include providing step-by-step instructions for
          solving a problem, demonstrating various techniques with visuals or
          suggesting online resources for further study.
        </div>
      </Modal>
    </div>
  );
};

export default Settings;
