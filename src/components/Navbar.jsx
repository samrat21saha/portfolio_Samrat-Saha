import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = ({ items, activeSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (id) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[var(--bg-primary)]/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-0">
         <button
           type="button"
           onClick={() => handleSelect("hero")}
           className="text-lg font-semibold tracking-tight text-white transition hover:text-[var(--accent)]"
         >
           <span className="text-gradient">Samrat Saha</span>
           <span className="sr-only">Jump to hero section</span>
         </button>

        <nav className="hidden items-center gap-6 text-sm font-medium text-white/70 md:flex">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleSelect(item.id)}
              className={`relative transition hover:text-white ${
                activeSection === item.id ? "text-[var(--accent)]" : ""
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-[var(--accent)]"
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="md:hidden rounded-full border border-white/10 p-2 text-white shadow-lg"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle navigation</span>
            <MenuIcon isOpen={isOpen} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="md:hidden border-t border-white/10 bg-[var(--bg-secondary)]/95 px-5 py-6"
          >
            <div className="flex flex-col gap-4 text-base text-white/80">
              {items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(item.id)}
                  className={`text-left transition ${
                    activeSection === item.id
                      ? "text-[var(--accent)]"
                      : "hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

const MenuIcon = ({ isOpen }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="h-5 w-5"
  >
    {isOpen ? (
      <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" strokeLinejoin="round" />
    ) : (
      <>
        <path d="M4 6h16" strokeLinecap="round" />
        <path d="M4 12h16" strokeLinecap="round" />
        <path d="M4 18h16" strokeLinecap="round" />
      </>
    )}
  </svg>
);
