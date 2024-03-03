import { Input } from "antd";
import React, { useState, PropsWithChildren } from "react";

interface EditableTextProps extends PropsWithChildren {
  label: string;
  className: string;
  onClick: () => void | Promise<void>;
  onConfirm: (newLabel: string) => void | Promise<void>;
}

const EditableText = ({
  label,
  className,
  onClick,
  onConfirm,
}: EditableTextProps) => {
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState(label);

  const handleConfirm = () => {
    onConfirm(input);
    setEdit(false);
  };

  return edit ? (
    <Input
      className={`${className} text-black bg-white dark:bg-white`}
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onBlur={handleConfirm}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleConfirm();
        }
      }}
    />
  ) : (
    <div
      onDoubleClick={() => setEdit(true)}
      onClick={onClick}
      className={className}
    >
      <div
        style={{ wordWrap: "break-word", wordBreak: "break-word" }}
        className={className ?? ""}
      >
        {label}
      </div>
    </div>
  );
};

export default EditableText;
