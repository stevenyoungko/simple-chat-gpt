"use client";
import React, { PropsWithChildren, useEffect } from "react";
import useAntConfig from "@/hooks/useAntConfig";
import useCommon from "@/hooks/useCommon";
import { Input, Modal } from "antd";

const HomeApp = ({ children }: PropsWithChildren) => {
  const { initialize: initializeTheme } = useAntConfig();
  const { openApiKeyModal, apiKey, setApiKeyModal, setApiKey } = useCommon();

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
      {children}
    </>
  );
};

export default HomeApp;
