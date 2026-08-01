import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion } from "motion/react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-full border border-slate-300 dark:border-white/20 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors text-slate-900 dark:text-white shadow-sm backdrop-blur-md"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </motion.button>
  );
}
