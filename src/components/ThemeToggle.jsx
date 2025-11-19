import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const spring = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative flex h-10 w-20 items-center rounded-full border border-white/10 bg-[var(--bg-secondary)] px-1 text-sm text-white/70 shadow-inner transition hover:border-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
      aria-label={`Toggle ${isDark ? "light" : "dark"} mode`}
    >
      <motion.span
        layout
        transition={spring}
        className={`absolute inset-y-1 w-1/2 rounded-full bg-[var(--accent)] shadow-lg ${
          isDark ? "right-1" : "left-1"
        }`}
      />

      <span className="relative flex w-1/2 justify-center">
        <SunIcon className={`${isDark ? "opacity-70" : "opacity-100"}`} />
      </span>
      <span className="relative flex w-1/2 justify-center">
        <MoonIcon className={`${isDark ? "opacity-100" : "opacity-70"}`} />
      </span>
    </button>
  );
};

const SunIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className={`h-4 w-4 text-white ${className}`}
  >
    <circle cx="12" cy="12" r="4.5" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const MoonIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className={`h-4 w-4 text-white ${className}`}
  >
    <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5Z" />
  </svg>
);

