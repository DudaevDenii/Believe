"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}

export default Provider;
