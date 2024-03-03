"use client";
import React, { PropsWithChildren, useEffect } from "react";
import useAntConfig from "@/hooks/useAntConfig";
import useCommon from "@/hooks/useCommon";
import { Drawer, Input, Modal } from "antd";
import MySidebar from "@/containers/Sidebar";

const HomeApp = ({ children }: PropsWithChildren) => {
  const { initialize: initializeTheme } = useAntConfig();
  const {
    openApiKeyModal,
    apiKey,
    openDrawer,
    setApiKeyModal,
    setApiKey,
    toggleDrawer,
  } = useCommon();

  useEffect(() => {
    initializeTheme();
    setApiKeyModal(true);
  }, [initializeTheme, setApiKeyModal]);

  return (
    <>
      <Modal
        open={openApiKeyModal}
        title="Please enter your API Key:"
        closable={false}
        onOk={() => setApiKeyModal(false)}
        footer={(_, { OkBtn }) => <OkBtn />}
      >
        <Input
          value={apiKey}
          placeholder="your API key won't be saved in anywhere"
          onChange={({ target: { value } }) => setApiKey(value)}
        />
        <p className="text-xs">
          You can add API key later in settings, but you can not send message
          before entering the api key.
        </p>
      </Modal>

      <Drawer
        rootClassName="md:hidden"
        className="[&>.ant-drawer-body]:bg-gray-100 dark:[&>.ant-drawer-body]:bg-gray-800"
        placement="left"
        title="Chat History"
        width={250}
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
      >
        <MySidebar onClose={() => toggleDrawer(false)} />
      </Drawer>

      {children}
    </>
  );
};

export default HomeApp;
