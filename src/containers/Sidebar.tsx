"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Popconfirm } from "antd";
import React, { PropsWithChildren } from "react";
import useMessage from "@/hooks/useMessages";

interface SidebarProps extends PropsWithChildren {
  onClose?: () => void;
}

const Sidebar = ({ onClose }: SidebarProps) => {
  const { isInit } = useMessage();
  const roomHistory = [{ label: "123", key: "123" }];

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
            onClose?.();
          }}
        >
          New Chat
        </Button>
      </div>
      <div className="base-text mt-6">
        {roomHistory.map(({ label, key }) => (
          <div key={key} className="relative group">
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
