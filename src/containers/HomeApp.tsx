'use client';
import { Drawer, Input, Modal, Spin } from 'antd';
import { PropsWithChildren, useEffect, useState } from 'react';

import MySetting from '@/containers/Settings';
import MySidebar from '@/containers/Sidebar';
import useAntConfig from '@/hooks/useAntConfig';
import useCommon from '@/hooks/useCommon';

const HomeApp = ({ children }: PropsWithChildren) => {
  const { initialize: initializeTheme } = useAntConfig();
  const [isInit, setIsInit] = useState(false);
  const {
    openApiKeyModal,
    apiKey,
    openDrawer,
    openSetting,
    setApiKeyModal,
    setApiKey,
    toggleDrawer,
    toggleSetting,
  } = useCommon();

  useEffect(() => {
    initializeTheme();
    setApiKeyModal(true);
    setIsInit(true);
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

      <Drawer
        className="[&>.ant-drawer-body]:bg-gray-100 dark:[&>.ant-drawer-body]:bg-gray-800 [&>.ant-drawer-body]:p-4"
        placement="right"
        title="Settings"
        width={350}
        open={openSetting}
        onClose={() => toggleSetting(false)}
      >
        <MySetting />
      </Drawer>

      <Spin spinning={!isInit}>
        {!isInit && <div className="min-h-screen"></div>}
      </Spin>
      {isInit && children}
    </>
  );
};

export default HomeApp;
