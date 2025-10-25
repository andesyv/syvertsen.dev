"use client";
import {
  ThemeProvider as NextThemeProvider,
  ThemeProviderProps,
  useTheme,
} from "next-themes";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { useEffect, useState } from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemeProvider>
  );
}

export const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <FaCircleHalfStroke
        className="h-[14px] w-[14px] text-[#1c1c1c]"
        aria-hidden="true"
      />
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const symbolShape = theme === "dark" ? "text-[#D4D4D4]" : "text-[#1c1c1c]";

  return (
    <button
      id="theme-toggle"
      aria-label={`${theme} mode`}
      onClick={toggleTheme}
      className="flex items-center justify-center transition-opacity duration-300 hover:opacity-90"
      type="button"
    >
      <FaCircleHalfStroke
        className={`h-[14px] w-[14px] ${symbolShape}`}
      />
    </button>
  );
};
