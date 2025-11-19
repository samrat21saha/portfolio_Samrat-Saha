import { motion } from "framer-motion";

const containerVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export const SectionWrapper = ({
  id,
  eyebrow,
  title,
  description,
  className = "",
  children,
}) => (
  <section
    id={id}
    data-section
    aria-label={title || eyebrow}
    className={`relative py-20 sm:py-28 ${className}`}
  >
    <div className="absolute inset-0 grid-accent pointer-events-none" />
    <div className="relative mx-auto max-w-6xl px-5 lg:px-0">
      {(eyebrow || title) && (
        <div className="mb-10 flex flex-col gap-3 text-center sm:text-left">
          {eyebrow && (
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent-strong)]">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-base text-[var(--text-muted)] max-w-3xl">
              {description}
            </p>
          )}
        </div>
      )}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative"
      >
        {children}
      </motion.div>
    </div>
  </section>
);

