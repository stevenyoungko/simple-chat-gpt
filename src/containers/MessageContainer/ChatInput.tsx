"use client";
import { Button, Input, Space } from "antd";
import { PropsWithChildren } from "react";
import useInput from "@/hooks/useInput";
import { Icon } from "@iconify/react/dist/iconify.js";

interface ChatInputType extends PropsWithChildren {
  loading: boolean;
  onSubmit: (input: string) => Promise<void>;
}

const ChatInput = ({ loading, onSubmit }: ChatInputType) => {
  const [input, setInput, handleInput] = useInput("");

  const handleSubmit = async () => {
    await onSubmit(input);
    setInput("");
  };

  return (
    <Space.Compact style={{ width: "100%" }}>
      <Input
        placeholder="Send message to ChatGPT..."
        size="large"
        disabled={loading}
        value={input}
        onChange={handleInput}
      />
      <Button
        type="primary"
        size="large"
        disabled={loading}
        onClick={handleSubmit}
      >
        <div className="h-full flex items-center">
          <Icon icon="mdi:send" />
        </div>
      </Button>
    </Space.Compact>
  );
};

export default ChatInput;
