"use client";
import { Space } from 'antd';

import ThemeSwitch from '@/components/ThemeSwitch';
import useAntConfig from '@/hooks/useAntConfig';
import useCommon from '@/hooks/useCommon';
import { Icon } from '@iconify/react';

const Header = () => {
  const { toggleDrawer, toggleSetting } = useCommon();
  const { isDarkMode, toggleDarkMode } = useAntConfig();

  return (
    <div className="flex items-center h-full">
      <div
        className="absolute left-4 top-3 mr-2 cursor-pointer md:hidden"
        onClick={() => toggleDrawer(true)}
      >
        <Icon width={32} icon="mdi:menu-close" />
      </div>
      <div className="base-text text-lg font-bold tracking-wide select-none ml-3 md:ml-0">
        Simple ChatGPT
      </div>
      <Space className="ml-auto">
        <ThemeSwitch isDark={isDarkMode} onChange={() => toggleDarkMode()} />
        <div
          className="flex items-center icon-text"
          onClick={() => toggleSetting(true)}
        >
          <Icon width={32} icon="mdi:cog-box" />
        </div>
      </Space>
    </div>
  );
};

export default Header;
