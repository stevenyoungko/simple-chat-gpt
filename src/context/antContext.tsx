"use client";
import { ConfigProvider, theme } from 'antd';
import { PropsWithChildren } from 'react';

import useAntConfig from '@/hooks/useAntConfig';

const { defaultAlgorithm, darkAlgorithm } = theme;

const AntConfigProvider = ({ children }: PropsWithChildren) => {
  const { isDarkMode } = useAntConfig();
  const themeConfig = {
    algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
    token: {},
    components: {},
  };
  return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>;
};

export default AntConfigProvider;
