import { motion } from "framer-motion";
import { experienceData } from "../../data/content";
import { SectionWrapper } from "../layout/SectionWrapper";

export const Experience = () => (
  <SectionWrapper
    id="experience"
    eyebrow="Experience"
    title="Led delivery across startups and enterprise orgs."
  >
    <div className="relative pl-6 before:absolute before:left-2 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-[var(--accent)] before:to-transparent before:content-[''] sm:pl-10">
      {experienceData.map((role) => (
        <motion.article
          key={role.company}
          className="relative mb-12 rounded-2xl border border-white/10 bg-[var(--bg-secondary)]/50 p-6 shadow-lg last:mb-0"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute -left-[34px] top-6 flex h-6 w-6 items-center justify-center rounded-full border border-white/30 bg-[var(--bg-primary)]">
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--accent)]" />
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <div>
              <p className="text-base font-semibold text-white">{role.title}</p>
              <p className="text-sm text-[var(--accent)]">{role.company}</p>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">{role.period}</p>
          </div>
          <p className="mt-4 text-sm text-[var(--text-muted)]">{role.summary}</p>
          <ul className="mt-5 space-y-3 text-sm text-white/85">
            {role.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="text-[var(--accent)]">&gt;</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  </SectionWrapper>
);

