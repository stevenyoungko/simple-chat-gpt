import { Input } from "antd";
import { useState, PropsWithChildren, useEffect } from "react";
import useInput from "@/hooks/useInput";

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
  const [value, setValue, handleValue] = useInput(label);
  const [edit, setEdit] = useState(false);

  const handleConfirm = () => {
    onConfirm(value);
    setEdit(false);
  };

  useEffect(() => {
    setValue(label);
  }, [label, setValue]);

  return edit ? (
    <Input
      className={`${className} text-black bg-white dark:bg-white`}
      value={value}
      onChange={handleValue}
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
        className="line-clamp-2"
        style={{ wordWrap: "break-word", wordBreak: "break-word" }}
      >
        {label}
      </div>
    </div>
  );
};

export default EditableText;
