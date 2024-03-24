'use client';
import { Button, Popconfirm } from 'antd';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import EditableText from '@/components/EditableText';
import useMessages, { newRoom } from '@/hooks/useMessages';
import { Icon } from '@iconify/react/dist/iconify.js';

interface SidebarProps extends PropsWithChildren {
  onClose?: () => void;
}

const Sidebar = ({ onClose }: SidebarProps) => {
  const { isInit, currentRoom, roomHistory, setChatroom } = useMessages();

  return isInit ? (
    <div className="h-full px-4 py-6 overflow-auto">
      <div>
        <Button
          className="w-full"
          icon={
            <Icon
              width={20}
              icon="mdi:chat-plus-outline"
              className="align-middle"
            />
          }
          onClick={() => {
            setChatroom(newRoom());
            onClose?.();
          }}
        >
          New Chat
        </Button>
      </div>
      <div className="base-text mt-6">
        {roomHistory.map(({ label, key }) => (
          <div key={key} className="relative group">
            <EditableText
              className={clsx(
                `px-4 py-2 pr-10 my-1 rounded-md cursor-pointer`,
                key === currentRoom.key
                  ? 'bg-sky-200 dark:bg-sky-500'
                  : 'group-hover:bg-gray-200 dark:group-hover:bg-gray-600'
              )}
              label={label}
              onClick={() => {
                setChatroom({ label, key });
                onClose?.();
              }}
              onConfirm={(newLabel) => {}}
            />
            <Popconfirm title="Are you sure you want to delete this dialog?">
              <div className="delete-icon absolute right-1 top-2 hidden group-hover:block icon-text">
                <Icon width={20} icon="mdi:delete-circle" />
              </div>
            </Popconfirm>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Sidebar;
