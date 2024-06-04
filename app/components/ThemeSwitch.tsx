"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaRegStar, FaRegMoon, FaRegSun } from "react-icons/fa";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <button className="px-2 md:px-2 pb-2">
        <FaRegStar />
      </button>
    );
  if (resolvedTheme === "dark") {
    return (
      <button className="px-2 md:px-2 pb-2" onClick={() => setTheme("light")}>
        <FaRegSun />
      </button>
    );
  }
  if (resolvedTheme === "light") {
    return (
      <button className="px-2 md:px-2 pb-2" onClick={() => setTheme("dark")}>
        <FaRegMoon />
      </button>
    );
  }
}
