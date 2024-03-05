"use client";
import { FloatButton } from "antd";
import { useRef } from "react";

const MessageBoard = () => {
  const ref = useRef(null);

  return (
    <div ref={ref} className="h-full overflow-auto">
      <FloatButton.BackTop />
    </div>
  );
};

export default MessageBoard;
