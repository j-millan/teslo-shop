import type { Metadata } from "next";
import { defaultFont } from "../config/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teslo Shop",
  description: "Clothing Online Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={defaultFont.className}>
        {children}
      </body>
    </html>
  );
}
