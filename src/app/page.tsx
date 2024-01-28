import React from "react";
import { Button } from "antd";
import AntConfigProvider from "../context/antContext";

const Home = () => {
  return (
    <AntConfigProvider>
      <Button type="link">Button</Button>
    </AntConfigProvider>
  );
};

export default Home;
