import { useState } from "react";
import { Button, Form, Input, Modal, Space, Switch } from "antd";
import useCommon from "@/hooks/useCommon";
import { Icon } from "@iconify/react/dist/iconify.js";

enum FieldNames {
  Username = "username",
  GptName = "gptname",
  EnableSystemPrompt = "enableSystemPrompt",
  Role = "role",
  GoodAt = "goodAt",
  Topics = "topics",
}

const Settings = () => {
  const [form] = Form.useForm();
  const { settings, computed } = useCommon();
  const initialValues = {
    [FieldNames.Username]: settings.username,
    [FieldNames.GptName]: settings.gptname,
    [FieldNames.EnableSystemPrompt]: settings.enableSystemPrompt,
    [FieldNames.Role]: settings.role,
    [FieldNames.GoodAt]: settings.goodAt,
    [FieldNames.Topics]: settings.topics,
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

        <h3 className="mb-4">System Prompt</h3>
        <Form.Item
          name={FieldNames.EnableSystemPrompt}
          label=""
          className="mb-0"
        >
          <Switch checkedChildren="Enabled" unCheckedChildren="Closed" />
        </Form.Item>

        <p className="text-xs">
          *System Prompt will help you ask question with more focused and
          accurate result, but cost more tokens(fee).
        </p>

        <Form.Item name={FieldNames.Role} label="Role">
          <Input placeholder="I am a professional ..." />
        </Form.Item>

        <Form.Item name={FieldNames.GoodAt} label="Good At">
          <Input.TextArea rows={3} placeholder="I am good at ..." />
        </Form.Item>

        <Form.Item name={FieldNames.Topics} label="Topics">
          <Input.TextArea rows={3} placeholder="Question domain" />
        </Form.Item>
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
        <div>{computed.getPromptDescription}</div>
      </Modal>
    </div>
  );
};

export default Settings;
