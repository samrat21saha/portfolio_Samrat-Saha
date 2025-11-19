import { useEffect, useMemo, useState } from "react";
import { navItems } from "../../data/content";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Skills } from "../sections/Skills";
import { Projects } from "../sections/Projects";
import { Experience } from "../sections/Experience";
import { Achievements } from "../sections/Achievements";
import { Contact } from "../sections/Contact";

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const Layout = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const sections = useMemo(
    () => [
      { id: "hero", component: <Hero onNavigate={scrollToId} /> },
      { id: "about", component: <About /> },
      { id: "skills", component: <Skills /> },
      { id: "projects", component: <Projects /> },
      { id: "experience", component: <Experience /> },
      { id: "achievements", component: <Achievements /> },
      { id: "contact", component: <Contact /> },
    ],
    []
  );

  useEffect(() => {
    const sectionNodes = document.querySelectorAll("[data-section]");
    if (!sectionNodes.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sectionNodes.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sections]);

  const handleNavigate = (id) => {
    scrollToId(id);
    setActiveSection(id);
  };

  return (
    <div className="relative min-h-screen bg-transparent text-white">
      <Navbar
        items={navItems}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main className="flex flex-col gap-6 pt-24">
        {sections.map((section) => (
          <div key={section.id}>{section.component}</div>
        ))}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

