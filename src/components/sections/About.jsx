import { motion } from "framer-motion";
import { aboutContent } from "../../data/content";
import { SectionWrapper } from "../layout/SectionWrapper";

export const About = () => (
  <SectionWrapper
    id="about"
    eyebrow={aboutContent.eyebrow}
    title={aboutContent.title}
  >
    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-4 text-base leading-relaxed text-[var(--text-muted)]">
        {aboutContent.paragraphs.map((paragraph) => (
          <motion.p
            key={paragraph}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>

      <div className="glass-panel p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
          Operating principles
        </p>
        <ul className="mt-6 space-y-4 text-sm text-white/80">
          {aboutContent.bulletPoints.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--accent)]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </SectionWrapper>
);

