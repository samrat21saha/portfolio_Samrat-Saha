import { motion } from "framer-motion";
import { heroContent } from "../../data/content";
import profileImage from "../../assets/img.jpg";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90 } },
};

export const Hero = ({ onNavigate }) => (
  <section
    id="hero"
    data-section
    className="relative isolate overflow-hidden pt-32 pb-16 sm:pb-24"
  >
    <div className="absolute inset-0 grid-accent opacity-50" />
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 lg:flex-row lg:items-center lg:gap-16 lg:px-0">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex-1 space-y-6"
      >
        <motion.p variants={item} className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
          {heroContent.greeting}
        </motion.p>
        <motion.h1
          variants={item}
          className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          {heroContent.greeting}{" "}
          <span className="text-gradient">{heroContent.name}</span>
          <br />
          {heroContent.role}
        </motion.h1>
        <motion.p variants={item} className="text-lg text-[var(--text-muted)] max-w-2xl">
          {heroContent.summary}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-3">
          {heroContent.ctas.map((cta) => (
            <button
              key={cta.label}
              type="button"
              onClick={() =>
                cta.href.startsWith("#")
                  ? onNavigate(cta.href.replace("#", ""))
                  : window.open(cta.href, "_blank", "noreferrer")
              }
              className={`rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                cta.style === "primary"
                  ? "bg-[var(--accent)] text-black hover:bg-[var(--accent-strong)]"
                  : "border border-white/30 text-white hover:border-[var(--accent)] hover:text-[var(--accent)]"
              }`}
            >
              {cta.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          className="grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-center sm:grid-cols-3"
        >
          {heroContent.highlights.map((highlight) => (
            <div key={highlight.label} className="rounded-xl bg-white/5 px-4 py-3 backdrop-blur">
              <p className="text-2xl font-semibold text-white">{highlight.value}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
                {highlight.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap gap-4 text-sm text-white/70">
          {heroContent.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-medium transition hover:text-[var(--accent)]"
            >
              <span>{link.label}</span>
              <span aria-hidden="true">-&gt;</span>
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1"
      >
        <div className="glass-panel relative overflow-hidden rounded-[2.5rem] p-8 text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/20 to-transparent" />
          <div className="relative flex flex-col items-center justify-center gap-4">
            <div className="h-48 w-48 overflow-hidden rounded-full border border-white/20 shadow-2xl animate-float">
              <img
                src={profileImage}
                alt="Portrait of Samrat Saha"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-sm text-[var(--text-muted)]">
              Swap this photo anytime by updating `src/assets/img.jpg`.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

