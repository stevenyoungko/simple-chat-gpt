"use client";
import { PropsWithChildren } from "react";
import { ConfigProvider, theme } from "antd";

const { defaultAlgorithm } = theme;

const AntConfigProvider = ({ children }: PropsWithChildren) => {
  const themeConfig = {
    algorithm: defaultAlgorithm,
    token: {},
    components: {},
  };
  return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>;
};

export default AntConfigProvider;
