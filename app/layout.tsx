"use client";

import "@/app/globals.css";

import React from "react";
import { Inter } from "next/font/google";
import { trpc } from "@/utils/trpc";

type LayoutProps = {
  children: React.ReactNode;
};

const fontFace = Inter({
  subsets: ["latin", "cyrillic"],
});

const DefaultLayout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <html lang="en">
      <body className={fontFace.className}>{children}</body>
    </html>
  );
};

export default trpc.withTRPC(DefaultLayout);
