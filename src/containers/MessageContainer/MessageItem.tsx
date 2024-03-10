import { MessageType, RoleType } from "@/types/messages";
import { Icon } from "@iconify/react/dist/iconify.js";
import clsx from "clsx";
import Markdown from "./Markdown";

interface MessageItemProps {
  names: {
    user: string;
    assistant: string;
  };
  message: MessageType;
  onDelete?: () => void;
}

const MessageItem = ({ names, message, onDelete }: MessageItemProps) => {
  const { content, role } = message;
  const isGPT = role === RoleType.GPT;
  const avatarColor = isGPT ? "bg-sky-500" : "bg-orange-500";

  return (
    <div className="relative mt-4 text-sm md:text-base">
      <div className="absolute left-0 top-0">
        <div
          className={clsx(
            "flex items-center justify-center w-8 h-8 text-white rounded-full",
            avatarColor
          )}
        >
          <Icon icon={isGPT ? "mdi:face-agent" : "mdi:account"} width={26} />
        </div>
      </div>
      <div className="pl-10 dark:text-gray-100">
        <h4>{isGPT ? names.assistant : names.user}</h4>
        <Markdown content={content} />
      </div>
    </div>
  );
};

export default MessageItem;
