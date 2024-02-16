"use client";
import React, { PropsWithChildren, useEffect } from "react";
import useAntConfig from "@/hooks/useAntConfig";

const HomeApp = ({ children }: PropsWithChildren) => {
  const { initialize: initializeTheme } = useAntConfig();

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return <>{children}</>;
};

export default HomeApp;
