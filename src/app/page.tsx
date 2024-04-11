import dynamic from 'next/dynamic';
import { Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';

import MyHeader from '@/containers/Header';
import HomeApp from '@/containers/HomeApp';
// import MessageBoard from '@/containers/MessageBoard';
import MySidebar from '@/containers/Sidebar';

import AntConfigProvider from '../context/antContext';

const MessageBoard = dynamic(() => import('@/containers/MessageBoard'), {
  ssr: false,
});

const Home = () => {
  return (
    <AntConfigProvider>
      <Layout className="h-screen">
        <HomeApp>
          <Header className="bg-gray-100 dark:bg-gray-800 block-border border-0 border-b pr-4">
            <MyHeader />
          </Header>
          <Layout hasSider>
            <Sider className="w-1/4 hidden md:block bg-gray-100 dark:bg-gray-800 block-border border-0 border-r">
              <MySidebar />
            </Sider>
            <Content>
              <MessageBoard />
            </Content>
          </Layout>
        </HomeApp>
      </Layout>
    </AntConfigProvider>
  );
};

export default Home;
