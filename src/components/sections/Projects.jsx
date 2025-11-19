import { motion } from "framer-motion";
import { projectsData } from "../../data/content";
import { SectionWrapper } from "../layout/SectionWrapper";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.6 },
  }),
};

export const Projects = () => (
  <SectionWrapper
    id="projects"
    eyebrow="Case Studies"
    title="High-impact launches shipped with accountability."
  >
    <div className="grid gap-8 lg:grid-cols-3">
      {projectsData.map((project, idx) => (
        <motion.article
          key={project.title}
          custom={idx}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="glass-panel flex h-full flex-col overflow-hidden"
        >
          <div className="relative h-40 overflow-hidden bg-gradient-to-br from-[var(--accent)]/50 to-[var(--accent-strong)]/30">
            <div className="absolute inset-0 grid-accent opacity-20" />
            <div className="relative flex h-full items-center justify-center text-sm uppercase tracking-[0.5em] text-white/80">
              Drop mockups here
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-4 p-6">
            <div>
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">{project.description}</p>
            </div>

            <div className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
              {project.impact}
            </div>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto flex gap-3 text-sm font-semibold">
              <a
                href={project.demo}
                className="flex-1 rounded-full border border-white/20 px-4 py-2 text-center text-white transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                className="flex-1 rounded-full bg-white/10 px-4 py-2 text-center text-white transition hover:bg-white/20"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </SectionWrapper>
);

