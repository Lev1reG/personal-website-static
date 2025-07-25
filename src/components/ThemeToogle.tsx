import { motion } from "motion/react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { DesktopIcon, MoonIcon, SunIcon } from "@phosphor-icons/react/dist/ssr";

interface ThemeToggleProps {
  iconSize?: number;
  align?: "start" | "center" | "end";
  className?: string;
  animated?: boolean;
  animationDelay?: number;
}

const ThemeToggle = ({
  iconSize = 24,
  align = "end",
  className = "",
  animated = false,
  animationDelay = 0,
}: ThemeToggleProps) => {
  const [theme, setTheme] = useState<"theme-light" | "dark" | "system">(
    "system"
  );

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setTheme(isDarkMode ? "dark" : "theme-light");
  }, []);

  useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  const getThemeIcon = () => {
    switch (theme) {
      case "theme-light":
        return <SunIcon size={iconSize} weight="bold" />;
      case "dark":
        return <MoonIcon size={iconSize} weight="bold" />;
      case "system":
        return <DesktopIcon size={iconSize} weight="bold" />;
      default:
        return <DesktopIcon size={iconSize} weight="bold" />;
    }
  };

  const content = (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          className={`text-neutral-900 dark:text-neutral-100 hover:text-brand-500 dark:hover:text-brand-500 transition-colors ${className}`}
          aria-label="Toggle theme"
          style={{
            WebkitTapHighlightColor: "transparent",
            touchAction: "manipulation",
          }}
        >
          {getThemeIcon()}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align} className="w-[70]">
        <DropdownMenuItem onClick={() => setTheme("theme-light")}>
          <SunIcon size={16} weight="bold" className="mr-2" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <MoonIcon size={16} weight="bold" className="mr-2" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <DesktopIcon size={16} weight="bold" className="mr-2" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: animationDelay }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

export default ThemeToggle;
