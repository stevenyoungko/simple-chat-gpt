"use client";
import { FloatButton } from "antd";
import { useRef } from "react";
import MessageContainer from "./MessageContainer";
import useCommon from "@/hooks/useCommon";

const MessageBoard = () => {
  const ref = useRef(null);
  const { settings } = useCommon();

  return (
    <div ref={ref} className="h-full overflow-auto">
      <FloatButton.BackTop />
      <MessageContainer
        names={{
          user: settings.username,
          assistant: settings.gptname,
        }}
      />
    </div>
  );
};

export default MessageBoard;
