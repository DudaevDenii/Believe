"use client";
import { useTheme } from "next-themes";
import React from "react";

function Select() {
  const { setTheme, theme } = useTheme();
  return (
    <select className="p-3" value={theme}>
      <option onClick={() => setTheme("dark")} value="dark">
        Dark Mode
      </option>
      <option onClick={() => setTheme("light")} value="light">
        Light Mode
      </option>
    </select>
  );
}

export default Select;
