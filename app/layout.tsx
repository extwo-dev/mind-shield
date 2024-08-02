"use client";

import "@/app/globals.css";

import React from "react";
import { trpc } from "@/utils/trpc";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

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
      <body className={fontFace.className}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
};

export default trpc.withTRPC(DefaultLayout);
