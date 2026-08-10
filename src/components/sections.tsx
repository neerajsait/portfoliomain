import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Monitor, Server, Database, Cloud, ArrowDown, X } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

/* ───────────────────────── Hero ───────────────────────── */

const line1 = "NEERAJ".split("");
const line2 = "VENKATA SAI".split("");

const charVariant = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.65, delay: 0.2 + i * 0.07, ease: [0.33, 1, 0.68, 1] as const },
  }),
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <div
        className="absolute inset-0 flex items-center justify-end pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-display font-bold text-[22vw] text-foreground opacity-[0.025] tracking-tighter leading-none pr-4">
          DEV
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full pt-24 pb-32">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.28em] text-muted-foreground mb-6 sm:mb-8"
        >
          CSE Graduate · KL University · API Developer
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-2xl text-lg sm:text-xl text-foreground mb-3 font-sans font-medium"
        >
          <div className="py-3 leading-loose">{portfolioData.hero.headline}</div>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed"
        >
          {portfolioData.hero.subDescription}
        </motion.p>

        <div className="overflow-hidden leading-[0.9]">
          <h1
            className="font-display font-bold tracking-[-0.03em] flex"
            style={{ fontSize: "clamp(44px, 15vw, 164px)" }}
          >
            {line1.map((c, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={charVariant}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {c}
              </motion.span>
            ))}
          </h1>
        </div>

        <div className="overflow-hidden leading-[0.9] mb-8 sm:mb-10">
          <h1
            className="font-display font-bold tracking-[-0.03em] flex flex-wrap text-foreground/55"
            style={{ fontSize: "clamp(28px, 8vw, 164px)" }}
          >
            {line2.map((c, i) => (
              <motion.span
                key={i}
                custom={line1.length + i}
                variants={charVariant}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {c === " " ? "\u00A0" : c}
              </motion.span>
            ))}
          </h1>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 1.0, ease: [0.33, 1, 0.68, 1] }}
          style={{ transformOrigin: "left" }}
          className="h-px w-full bg-border mb-5"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-12 sm:mb-14 text-xs font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em]"
        >
          <span className="text-muted-foreground">{portfolioData.hero.role}</span>
          <span className="flex items-center gap-2 text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="flex flex-wrap gap-5 sm:gap-6 items-center"
        >
          <a
            href="#projects"
            data-testid="btn-see-work"
            className="flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-accent text-accent-foreground font-display font-bold text-xs uppercase tracking-widest hover:bg-accent/85 transition-colors"
          >
            See My Work <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.contact.resume}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="btn-download-resume"
            className="flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border border-accent text-accent font-display font-bold text-xs uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            View Resume <Download className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            data-testid="btn-contact"
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors underline-link"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="mt-12 sm:mt-14 flex flex-wrap gap-x-8 sm:gap-x-10 gap-y-3"
        >
          {[
            { label: "CGPA", value: "9.33" },
            { label: "University", value: "KL University" },
            { label: "Degree", value: "B.Tech CSE" },
            { label: "Location", value: "Vijayawada, India" },
          ].map((f) => (
            <div key={f.label} className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                {f.label}:
              </span>
              <span className="font-mono text-[10px] text-foreground uppercase tracking-widest">
                {f.value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-border py-4 overflow-hidden bg-card/30">
        <div className="marquee-container">
          <div className="marquee-track">
            {[...portfolioData.hero.techTicker, ...portfolioData.hero.techTicker].map((t, i) => (
              <span key={i} className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                {t}
                <span className="text-accent mx-4">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── About ───────────────────────── */

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-card overflow-hidden">
      <div
        className="absolute -top-8 -left-4 font-display font-bold text-[120px] sm:text-[180px] text-foreground/[0.03] select-none pointer-events-none leading-none"
        aria-hidden="true"
      >
        01
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
        <div className="border-b border-border pb-8 mb-16 sm:mb-20 flex flex-col md:flex-row md:items-end gap-4 md:gap-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight"
          >
            The Developer
          </motion.h2>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-accent font-mono text-sm uppercase tracking-widest"
          >
            Backend APIs · Spring Boot · Flask
          </motion.span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 mb-20 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col gap-7"
          >
            {portfolioData.about.paragraphs.map((p, i) => (
              <p key={i} className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}

            {portfolioData.about.highlight && (
              <div className="bg-card border border-border p-6 sm:p-8 mt-2 sm:mt-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
                <h4 className="font-display font-semibold text-foreground text-xl sm:text-2xl mb-3">
                  {portfolioData.about.highlight.title}
                </h4>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  {portfolioData.about.highlight.description}
                </p>
              </div>
            )}

            <div className="mt-4 flex flex-wrap items-center gap-6 sm:gap-8">
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                viewBox="0 0 200 200"
                className="w-24 h-24 sm:w-28 sm:h-28 shrink-0"
                aria-hidden="true"
              >
                <defs>
                  <path id="textCircle" d="M 100,100 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0" />
                </defs>
                <text fontSize="10.5" fill="hsl(var(--accent))" letterSpacing="2">
                  <textPath href="#textCircle">AVAILABLE FOR HIRE · 2026 · OPEN TO WORK · NEERAJ · </textPath>
                </text>
              </motion.svg>
              <div className="flex flex-col gap-2">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Actively looking for full-time roles & open contributions
                </p>
                <p className="font-mono text-xs text-accent uppercase tracking-widest">
                  📍India
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-5 grid grid-cols-2 gap-x-8 sm:gap-x-10 gap-y-10 sm:gap-y-14"
          >
            {portfolioData.about.stats.map((stat, i) => (
              <div key={i} className="flex flex-col border-l-2 border-accent pl-4 sm:pl-5">
                <span className="font-display font-bold text-3xl sm:text-4xl text-accent mb-1">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </span>
                <span className="font-mono text-[11px] sm:text-xs text-muted-foreground uppercase tracking-widest leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-border pt-14 sm:pt-16 mb-14 sm:mb-16"
        >
          <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight mb-8 sm:mb-10 text-foreground/60">
            Education
          </h3>
          <div className="flex flex-col gap-0">
            {portfolioData.about.education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row gap-2 md:gap-12 py-6 border-b border-border group hover:pl-2 sm:hover:pl-4 transition-all duration-300"
              >
                <span className="font-mono text-xs text-accent uppercase tracking-widest shrink-0 md:w-36 pt-1">
                  {edu.year}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-display font-bold text-base sm:text-lg group-hover:text-accent transition-colors">
                    {edu.degree}
                  </span>
                  <span className="text-muted-foreground text-sm">{edu.institution}</span>
                  <span className="font-mono text-xs text-muted-foreground/60 mt-1">{edu.detail}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-border pt-14 sm:pt-16"
        >
          <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight mb-8 sm:mb-10 text-foreground/60">
            Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {portfolioData.about.achievements.map((ach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-4 py-4 border-b border-border"
              >
                <span className="text-accent font-bold mt-0.5 shrink-0">→</span>
                <span className="text-sm text-muted-foreground leading-relaxed">{ach}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
}


/* ───────────────────────── Project Workflow Modal ───────────────────────── */

function ProjectWorkflowModal({ project, onClose }: { project: any; onClose: () => void }) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-2xl bg-card border border-border shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
        >
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div>
              <p className="text-accent font-mono text-[10px] uppercase tracking-widest mb-1">Architecture & Story</p>
              <h3 className="font-display font-bold text-xl sm:text-2xl">{project.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-muted-foreground hover:text-foreground bg-background border border-border transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
            {project.story && (
              <div className="mb-10 space-y-8 relative">
                <div>
                  <h4 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-3">{project.story.hook}</h4>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    <strong className="text-foreground font-medium">The Problem:</strong> {project.story.problem}
                  </p>
                </div>

                <div className="bg-background border border-border p-5 rounded-sm">
                  <p className="text-accent font-mono text-[10px] uppercase tracking-widest mb-4">Key Decisions</p>
                  <ul className="space-y-3">
                    {project.story.decisions.map((decision: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                        <span className="text-accent mt-0.5">▹</span> {decision}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-accent font-mono text-[10px] uppercase tracking-widest mb-3">Data Flow</p>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    {project.story.flow.map((step: string, idx: number) => (
                      <span key={idx} className="flex items-center gap-2">
                        <span className="bg-card border border-border px-3 py-1.5 rounded-sm">{step}</span>
                        {idx < project.story.flow.length - 1 && <span className="text-border">→</span>}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed border-l-2 border-accent pl-4">
                    <strong className="text-foreground font-medium block mb-1">Challenge</strong>
                    {project.story.challenge}
                  </p>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed border-l-2 border-accent pl-4">
                    <strong className="text-foreground font-medium block mb-1">Result</strong>
                    {project.story.result}
                  </p>
                </div>
                
                <hr className="border-border/50 my-8" />
              </div>
            )}

            {project.workflow && (
              <div className="relative pl-6 sm:pl-8 border-l border-border/40 space-y-8 py-2">
                {project.workflow.map((item: any, idx: number) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                    className="relative mb-12 last:mb-0"
                  >
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-card border border-accent rounded-full text-[9px] sm:text-[10px] font-mono text-accent">
                      {idx + 1}
                    </div>
                    <div className="flex flex-col gap-4">
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {typeof item === 'string' ? item : item.step}
                      </p>
                      {item.image && (
                        <div className="rounded-lg overflow-hidden border border-border shadow-md">
                          <img 
                            src={item.image} 
                            alt={`Step ${idx + 1} demo`}
                            className="w-full h-auto object-cover max-h-[400px]"
                            loading="lazy"
                          />
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}



/* ───────────────────────── Projects ───────────────────────── */

export function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeProject, setActiveProject] = useState<any>(null);

  return (
    <>
      <section id="projects" className="relative py-24 sm:py-32 bg-background overflow-hidden">
        <div
          className="absolute -top-8 -left-4 font-display font-bold text-[120px] sm:text-[180px] text-foreground/[0.03] select-none pointer-events-none leading-none"
          aria-hidden="true"
        >
          02
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
          <div className="border-b border-border pb-8 mb-0 flex flex-col md:flex-row md:items-end gap-4 md:gap-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight"
            >
              What I Build
            </motion.h2>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-accent font-mono text-sm uppercase tracking-widest"
            >
              {portfolioData.projects.length} projects
            </motion.span>
          </div>

          <div className="flex flex-col">
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="group border-b border-border relative"
                style={{
                  borderLeftWidth: "2px",
                  borderLeftColor: hovered === index ? "hsl(var(--accent))" : "transparent",
                  transition: "border-left-color 0.25s ease",
                }}
              >
                <div
                  className="flex flex-col md:flex-row md:items-center gap-5 sm:gap-6 py-7 sm:py-8 md:py-10 transition-all duration-300"
                  style={{
                    paddingLeft: hovered === index ? "1.75rem" : "0",
                    backgroundColor: hovered === index ? "rgba(255,255,255,0.018)" : "transparent",
                  }}
                >
                  <span className="font-mono text-xs text-muted-foreground/50 shrink-0 w-10">
                    0{index + 1}
                  </span>

                  <div className="flex-1 min-w-0">
                    <button 
                      onClick={() => setActiveProject(project)}
                      className="text-left focus:outline-none"
                    >
                      <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl mb-3 group-hover:text-accent transition-colors duration-300 flex items-center gap-3">
                        {project.title}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[10px] uppercase tracking-widest text-muted-foreground border border-border px-2 py-0.5 ml-2 hidden sm:inline-block">View Workflow</span>
                      </h3>
                    </button>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-foreground border border-border px-2 sm:px-2.5 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:w-80 shrink-0 flex flex-col gap-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                    <div className="flex items-center gap-6">
                      <button
                        onClick={() => setActiveProject(project)}
                        className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-accent hover:gap-3 transition-all duration-200 focus:outline-none"
                      >
                        View <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {activeProject && (
        <ProjectWorkflowModal 
          project={activeProject} 
          onClose={() => setActiveProject(null)} 
        />
      )}
    </>
  );
}

/* ───────────────────────── Skills ───────────────────────── */

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-card border-y border-border overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-accent" />
      <div className="absolute bottom-1/4 right-0 w-px h-32 bg-accent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12">
          {portfolioData.skills.categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col"
            >
              <h3 className="text-accent font-display font-bold text-[10px] sm:text-[11px] uppercase tracking-[0.2em] mb-6 sm:mb-8">
                {category.name}
              </h3>
              <ul className="flex flex-col gap-3 sm:gap-4">
                {category.items.map((item) => (
                  <li key={item} className="text-muted-foreground font-sans text-sm sm:text-[15px]">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Certifications ───────────────────────── */

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32 bg-background overflow-hidden">
      <div
        className="absolute -top-8 -left-4 font-display font-bold text-[120px] sm:text-[180px] text-foreground/[0.03] select-none pointer-events-none leading-none"
        aria-hidden="true"
      >
        04
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
        <div className="border-b border-border pb-8 mb-14 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight"
          >
            Credentials
          </motion.h2>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            Drag to explore →
          </motion.span>
        </div>

        <div className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar pb-6" style={{ scrollSnapType: "x mandatory" }}>
          {portfolioData.certifications.map((cert, i) => {
            const cardContent = (
              <>
                <div className="flex flex-col gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent flex items-center gap-1.5">
                    Certificate {String(i + 1).padStart(2, "0")}
                    {cert.link && (
                      <span className="text-[9px] px-1.5 py-0.5 bg-accent/15 rounded text-accent-foreground font-bold tracking-wider uppercase">
                        Verify ↗
                      </span>
                    )}
                  </span>
                  <h3 className="font-display font-bold text-lg sm:text-xl leading-snug group-hover:text-accent transition-colors duration-300">
                    {cert.title}
                  </h3>
                </div>
                <div className="flex items-end justify-between mt-8 sm:mt-10 pt-6 border-t border-border">
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">{cert.issuer}</span>
                  <span className="font-display font-bold text-xl sm:text-2xl text-accent">{cert.year}</span>
                </div>
              </>
            );

            if (cert.link) {
              return (
                <motion.a
                  key={i}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="shrink-0 w-[260px] sm:w-[300px] md:w-[340px] bg-card border border-border border-l-2 border-l-accent p-6 sm:p-8 flex flex-col justify-between group hover:bg-card/80 cursor-pointer transition-colors"
                  style={{ scrollSnapAlign: "start" }}
                >
                  {cardContent}
                </motion.a>
              );
            }

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="shrink-0 w-[260px] sm:w-[300px] md:w-[340px] bg-card border border-border border-l-2 border-l-accent p-6 sm:p-8 flex flex-col justify-between group hover:bg-card/80 transition-colors"
                style={{ scrollSnapAlign: "start" }}
              >
                {cardContent}
              </motion.div>
            );
          })}

          <div
            className="shrink-0 w-[180px] sm:w-[220px] bg-transparent border border-dashed border-border flex flex-col items-center justify-center gap-4 text-center p-8"
            style={{ scrollSnapAlign: "start" }}
          >
            <span className="text-4xl text-accent font-display font-bold">+</span>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">More coming</span>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 font-mono text-xs text-muted-foreground uppercase tracking-widest"
        >
          {portfolioData.certifications.length} certifications earned
        </motion.p>
      </div>
    </section>
  );
}

/* ───────────────────────── Contact ───────────────────────── */

export function Contact() {
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1400);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center bg-card border-t border-border overflow-hidden"
    >
      <div
        className="absolute -top-8 -left-4 font-display font-bold text-[120px] sm:text-[180px] text-foreground/[0.03] select-none pointer-events-none leading-none"
        aria-hidden="true"
      >
        05
      </div>

      <div
        className="absolute bottom-0 right-0 font-display font-bold text-[25vw] text-accent opacity-[0.025] select-none pointer-events-none leading-none"
        style={{ transform: "rotate(-15deg) translateX(15%) translateY(15%)" }}
        aria-hidden="true"
      >
        HELLO
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10 py-28 sm:py-32">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans font-bold tracking-tight leading-[0.88] mb-8"
          style={{ fontSize: "clamp(40px, 11vw, 120px)" }}
        >
          Let's Work
          <br />
          <span className="text-accent">Together.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-lg mb-4 leading-relaxed"
        >
          I'm actively looking for full-time engineering roles and open-source contribution opportunities. Let's build something great together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-x-8 gap-y-1 mb-12 sm:mb-14"
        >
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
            📍 {portfolioData.contact.location}
          </span>
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
            📞 {portfolioData.contact.phone}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="flex flex-col gap-0 mb-14 sm:mb-16 border-t border-border"
        >
          {[
            {
              icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />,
              label: portfolioData.contact.email,
              href: `mailto:${portfolioData.contact.email}`,
              testid: "link-contact-email-large",
            },
            {
              icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />,
              label: "github.com/neerajsait",
              href: portfolioData.contact.github,
              testid: "link-contact-github-large",
            },
            {
              icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
              label: "linkedin.com/in/neerajsait",
              href: portfolioData.contact.linkedin,
              testid: "link-contact-linkedin-large",
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              data-testid={item.testid}
              className="flex items-center justify-between py-5 sm:py-6 border-b border-border group hover:pl-2 sm:hover:pl-4 transition-all duration-300 gap-3"
            >
              <div className="flex items-center gap-3 sm:gap-4 text-sm sm:text-lg md:text-2xl font-sans font-bold group-hover:text-accent transition-colors min-w-0 break-all leading-normal pb-1">
                <span className="text-muted-foreground group-hover:text-accent transition-colors shrink-0">
                  {item.icon}
                </span>
                {item.label}
              </div>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 shrink-0" />
            </a>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.35 }}>
          <button
            onClick={() => setFormOpen(!formOpen)}
            data-testid="btn-toggle-form"
            className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-accent transition-colors flex items-center gap-2"
          >
            <span
              className="inline-block transition-transform duration-300"
              style={{ transform: formOpen ? "rotate(45deg)" : "rotate(0deg)" }}
            >
              +
            </span>
            {formOpen ? "Close form" : "Send a message directly"}
          </button>

          <AnimatePresence>
            {formOpen && (
              <motion.form
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                onSubmit={handleSubmit}
                className="overflow-hidden"
              >
                <div className="flex flex-col gap-8 pt-10 max-w-xl">
                  {[
                    { id: "name", type: "text", label: "Your name", testid: "input-contact-name" },
                    { id: "email", type: "email", label: "Your email", testid: "input-contact-email" },
                  ].map((field) => (
                    <div key={field.id} className="relative group">
                      <input
                        type={field.type}
                        id={field.id}
                        value={formData[field.id as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                        required
                        placeholder=" "
                        data-testid={field.testid}
                        className="w-full bg-transparent border-b border-border py-4 text-foreground focus:outline-none focus:border-accent transition-colors peer text-base sm:text-lg"
                      />
                      <label
                        htmlFor={field.id}
                        className="absolute left-0 top-4 text-muted-foreground text-sm font-mono uppercase tracking-widest peer-focus:-top-3 peer-focus:text-accent peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[10px] transition-all duration-200 cursor-text"
                      >
                        {field.label}
                      </label>
                    </div>
                  ))}

                  <div className="relative group">
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      placeholder=" "
                      data-testid="textarea-contact-message"
                      className="w-full bg-transparent border-b border-border py-4 text-foreground focus:outline-none focus:border-accent transition-colors peer text-base sm:text-lg resize-none"
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-0 top-4 text-muted-foreground text-sm font-mono uppercase tracking-widest peer-focus:-top-3 peer-focus:text-accent peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[10px] transition-all duration-200 cursor-text"
                    >
                      Your message
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting || submitted}
                    data-testid="button-submit-contact"
                    className="self-start px-8 sm:px-10 py-4 bg-accent text-accent-foreground font-display font-bold text-xs uppercase tracking-widest hover:bg-accent/85 transition-colors disabled:opacity-60"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-accent-foreground border-t-transparent rounded-full animate-spin" />
                        Sending
                      </span>
                    ) : submitted ? (
                      "Message sent ✓"
                    ) : (
                      "Send message"
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
