import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
