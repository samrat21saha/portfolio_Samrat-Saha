import { motion } from "framer-motion";
import { achievementsData } from "../../data/content";
import { SectionWrapper } from "../layout/SectionWrapper";

export const Achievements = () => (
  <SectionWrapper
    id="achievements"
    eyebrow="Highlights"
    title="Moments that shaped my craft."
  >
    <div className="grid gap-6 md:grid-cols-3">
      {achievementsData.map((achievement, idx) => (
        <motion.div
          key={achievement.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          className="glass-panel h-full p-6"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
            {achievement.title}
          </p>
          <p className="mt-3 text-sm text-[var(--text-muted)]">{achievement.detail}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

