import React from "react";
import { Layout } from "antd";
import { Header, Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import AntConfigProvider from "../context/antContext";

const Home = () => {
  return (
    <AntConfigProvider>
      <Layout className="h-screen">
        <Header className="bg-gray-100 dark:bg-gray-800 block-border border-0 border-b pr-4">
          Header
        </Header>
        <Layout hasSider>
          <Sider className="w-1/4 hidden md:block bg-gray-100 dark:bg-gray-800 block-border border-0 border-r">
            Sider
          </Sider>
          <Content>Content</Content>
        </Layout>
      </Layout>
    </AntConfigProvider>
  );
};

export default Home;
