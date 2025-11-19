import { navItems, contactContent } from "../data/content";

export const Footer = ({ onNavigate }) => (
  <footer className="relative border-t border-white/10 bg-[var(--bg-secondary)]/60 py-10 text-sm text-[var(--text-muted)]">
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-0">
      <div>
        <p className="text-lg font-semibold text-white">Samrat Saha</p>
        <p className="mt-1 text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
          Portfolio
        </p>
      </div>

      <nav className="flex flex-wrap items-center gap-4 text-white/70">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onNavigate(item.id)}
            className="text-sm transition hover:text-[var(--accent)]"
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="flex flex-wrap items-center gap-3">
        {contactContent.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="text-white/80 transition hover:text-[var(--accent)]"
          >
            {social.label}
          </a>
        ))}
      </div>
    </div>

    <p className="mt-6 text-center text-xs text-white/50">
      (c) {new Date().getFullYear()} Samrat Saha. Built with React + Vite.
    </p>
  </footer>
);

