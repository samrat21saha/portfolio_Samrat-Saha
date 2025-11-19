import { motion } from "framer-motion";
import { skillsData } from "../../data/content";
import { SectionWrapper } from "../layout/SectionWrapper";

export const Skills = () => (
  <SectionWrapper
    id="skills"
    eyebrow="Capabilities"
    title="Systems thinking paired with polished execution."
    description="Swap the placeholders below with the stacks you rely on day-to-day. Every card is reusable - just update the data source."
  >
    <div className="grid gap-6 md:grid-cols-2">
      {skillsData.map((group) => (
        <motion.div
          key={group.category}
          whileHover={{ y: -6 }}
          className="glass-panel h-full p-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            {group.category}
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-white/80">
            {group.items.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-white/10 px-3 py-1 text-white/90"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

