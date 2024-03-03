"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "antd";
import React, { PropsWithChildren } from "react";
import useMessage from "@/hooks/useMessages";

interface SidebarProps extends PropsWithChildren {
  onClose?: () => void;
}

const Sidebar = ({ onClose }: SidebarProps) => {
  const { isInit } = useMessage();

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
    </div>
  ) : (
    <></>
  );
};

export default Sidebar;
