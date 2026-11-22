"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  function toggle() {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className="bg-background/60 hover:bg-accent relative inline-flex size-10 items-center justify-center rounded-full border backdrop-blur-md transition-colors"
    >
      <Sun className="size-4.5 scale-100 rotate-0 transition-all duration-500 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute size-4.5 scale-0 rotate-90 transition-all duration-500 dark:scale-100 dark:rotate-0" />
    </button>
  );
}

export default ThemeToggle;
