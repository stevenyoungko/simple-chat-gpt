import type { Metadata } from "next";
import './globals.scss';

import { AntdRegistry } from '@ant-design/nextjs-registry';

export const metadata: Metadata = {
  title: "Simple Chat GPT",
  description: "Simple Chat GPT is a simple version of ChatGPT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
