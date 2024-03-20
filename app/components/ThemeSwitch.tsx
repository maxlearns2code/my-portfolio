"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { WiMoonAltFull } from "react-icons/wi";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <WiMoonAltFull size={25} />
    );
  if (resolvedTheme === "dark") {
    return <CiLight size={25} onClick={() => setTheme("light")} />;
  }
  if (resolvedTheme === "light") {
    return <CiDark size={25} onClick={() => setTheme("dark")} />;
  }
}
