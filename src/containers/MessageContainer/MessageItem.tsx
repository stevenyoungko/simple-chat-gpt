import clsx from 'clsx';

import { MessageType, RoleType } from '@/types/messages';
import { Icon } from '@iconify/react/dist/iconify.js';

import Markdown from './Markdown';
import { Space, Popconfirm } from 'antd';
import CopyButton from './CopyButton';

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
  const avatarColor = isGPT ? 'bg-sky-500' : 'bg-orange-500';

  return (
    <div className="relative mt-4 text-sm md:text-base">
      <div className="absolute left-0 top-0">
        <div
          className={clsx(
            'flex items-center justify-center w-8 h-8 text-white rounded-full',
            avatarColor
          )}
        >
          <Icon icon={isGPT ? 'mdi:face-agent' : 'mdi:account'} width={26} />
        </div>
      </div>
      <div className="pl-10 dark:text-gray-100">
        <h4>{isGPT ? names.assistant : names.user}</h4>
        <Markdown content={content} />
      </div>

      <div className="absolute right-0 top-0">
        <Space>
          {isGPT && (
            <div className="w-7 h-7 rounded-md inline-flex items-center justify-center bg-gray-400 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500 cursor-pointer">
              <CopyButton text={content} />
            </div>
          )}
          <Popconfirm
            title="Are you sure to delete this message?"
            onConfirm={onDelete}
          >
            <div className="w-7 h-7 rounded-md inline-flex items-center justify-center text-white bg-gray-400 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500 cursor-pointer">
              <Icon width={20} icon="mdi:trash-can-outline" />
            </div>
          </Popconfirm>
        </Space>
      </div>
    </div>
  );
};

export default MessageItem;
