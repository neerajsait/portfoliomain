import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
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

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-2xl text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed"
        >
          I build production-grade REST APIs with real security — MFA, RBAC, and rate-limiting — not just
          CRUD tutorials.
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
                <text fontSize="10.5" fill="hsl(16 100% 60%)" letterSpacing="2">
                  <textPath href="#textCircle">AVAILABLE FOR HIRE · 2026 · OPEN TO WORK · NEERAJ · </textPath>
                </text>
              </motion.svg>
              <div className="flex flex-col gap-2">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Actively looking for GET / internship roles
                </p>
                <p className="font-mono text-xs text-accent uppercase tracking-widest">
                  📍 Vijayawada, India
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 sm:mt-20 pt-10 border-t border-border flex flex-wrap gap-6 sm:gap-8 opacity-40"
        >
          {portfolioData.about.logos.map((logo, i) => (
            <span key={i} className="font-mono text-xs tracking-widest uppercase">
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────────── GitHub Stats ───────────────────────── */

interface GitHubData {
  public_repos: number;
  followers: number;
  following: number;
  public_gists: number;
}

function AnimatedNumber({ value, loaded }: { value: number; loaded: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!loaded || value === 0) return;
    let start = 0;
    const steps = 40;
    const increment = value / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(start));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [loaded, value]);

  return <>{loaded ? display : "—"}</>;
}

const GITHUB_STATS_CACHE_KEY = "github-stats-cache-v1";
const GITHUB_STATS_FALLBACK: GitHubData = {
  public_repos: 12,
  followers: 5,
  following: 8,
  public_gists: 0,
};

export function GitHubStats() {
  const [data, setData] = useState<GitHubData | null>(() => {
    try {
      const cached = sessionStorage.getItem(GITHUB_STATS_CACHE_KEY);
      return cached ? (JSON.parse(cached) as GitHubData) : null;
    } catch {
      return null;
    }
  });
  const [loaded, setLoaded] = useState(false);
  const [rateLimited, setRateLimited] = useState(false);

  useEffect(() => {
    if (data) {
      setLoaded(true);
      return;
    }

    fetch("https://api.github.com/users/neerajsait")
      .then((r) => {
        if (r.status === 403 || r.status === 429) throw new Error("rate-limited");
        if (!r.ok) throw new Error("GitHub API error");
        return r.json();
      })
      .then((d: GitHubData) => {
        setData(d);
        setLoaded(true);
        try {
          sessionStorage.setItem(GITHUB_STATS_CACHE_KEY, JSON.stringify(d));
        } catch {
          // ignore storage errors
        }
      })
      .catch((err) => {
        if (err instanceof Error && err.message === "rate-limited") setRateLimited(true);
        setData(GITHUB_STATS_FALLBACK);
        setLoaded(true);
      });
  }, [data]);

  const stats = [
    { label: "Public Repos", value: data?.public_repos ?? 0 },
    { label: "Followers", value: data?.followers ?? 0 },
    { label: "Following", value: data?.following ?? 0 },
    { label: "Gists", value: data?.public_gists ?? 0 },
  ];

  return (
    <section className="relative bg-background border-y border-border py-14 sm:py-16 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
        <span className="font-display font-bold text-[18vw] text-foreground opacity-[0.025] tracking-tighter">
          GITHUB
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12 sm:mb-14"
        >
          <div className="flex items-center gap-4">
            <div className="border border-accent p-2">
              <Github className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="font-display font-bold text-lg sm:text-xl">github.com/neerajsait</p>
              <p className="font-mono text-[11px] sm:text-xs text-muted-foreground uppercase tracking-widest mt-0.5">
                {!loaded
                  ? "Fetching live data..."
                  : rateLimited
                    ? "Cached data · GitHub API limit reached"
                    : "Live data · Updated now"}
              </p>
            </div>
          </div>

          <a
            href="https://github.com/neerajsait"
            target="_blank"
            rel="noreferrer"
            data-testid="link-github-profile"
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors underline-link self-start sm:self-auto"
          >
            View Profile →
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-border">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`flex flex-col items-center justify-center py-8 sm:py-10 px-4 sm:px-6 text-center group hover:bg-card transition-colors duration-300 ${
                i % 2 === 0 ? "border-r border-border" : ""
              } ${i < 2 ? "border-b md:border-b-0 border-border" : ""} ${
                i < stats.length - 1 && i !== 1 ? "md:border-r" : ""
              }`}
            >
              <span className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground group-hover:text-accent transition-colors duration-300 mb-2 tabular-nums">
                <AnimatedNumber value={stat.value} loaded={loaded} />
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {loaded && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {rateLimited ? "Showing cached stats — GitHub API rate limit reached" : "Live — pulled directly from GitHub API"}
            </span>
          </motion.div>
        )}

      </div>
    </section>
  );
}

/* ───────────────────────── Projects ───────────────────────── */

export function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
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
                borderLeftColor: hovered === index ? "hsl(16 100% 60%)" : "transparent",
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
                  <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
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
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      data-testid={`link-project-view-${index}`}
                      className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-accent hover:gap-3 transition-all duration-200"
                    >
                      View <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      data-testid={`link-project-github-${index}`}
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
  );
}

/* ───────────────────────── Skills ───────────────────────── */

const words = [
  { name: "Java", size: "text-3xl sm:text-4xl md:text-5xl", op: "opacity-100", nudge: "mt-0" },
  { name: "Python", size: "text-4xl sm:text-5xl md:text-6xl", op: "opacity-100", nudge: "mt-4 sm:mt-6" },
  { name: "Spring Boot", size: "text-2xl sm:text-3xl md:text-4xl", op: "opacity-90", nudge: "-mt-2 sm:-mt-4" },
  { name: "Flask", size: "text-2xl sm:text-3xl md:text-4xl", op: "opacity-85", nudge: "mt-6 sm:mt-8" },
  { name: "JavaScript", size: "text-3xl sm:text-4xl md:text-5xl", op: "opacity-95", nudge: "mt-1 sm:mt-2" },
  { name: "Redis", size: "text-xl sm:text-2xl md:text-3xl", op: "opacity-75", nudge: "mt-6 sm:mt-10" },
  { name: "MySQL", size: "text-2xl sm:text-3xl md:text-4xl", op: "opacity-70", nudge: "-mt-1 sm:-mt-2" },
  { name: "Docker", size: "text-xl sm:text-2xl md:text-3xl", op: "opacity-65", nudge: "mt-2 sm:mt-4" },
  { name: "AWS", size: "text-2xl sm:text-3xl md:text-4xl", op: "opacity-80", nudge: "-mt-2 sm:-mt-4" },
  { name: "GCP", size: "text-xl sm:text-2xl md:text-3xl", op: "opacity-60", nudge: "mt-0" },
  { name: "REST APIs", size: "text-lg sm:text-xl md:text-2xl", op: "opacity-55", nudge: "mt-3 sm:mt-6" },
  { name: "Microservices", size: "text-lg sm:text-xl md:text-2xl", op: "opacity-60", nudge: "-mt-1 sm:-mt-2" },
  { name: "Node.js", size: "text-2xl sm:text-3xl md:text-4xl", op: "opacity-80", nudge: "mt-2 sm:mt-3" },
  { name: "JUnit", size: "text-lg sm:text-xl md:text-2xl", op: "opacity-55", nudge: "mt-4 sm:mt-8" },
  { name: "Git", size: "text-lg sm:text-xl md:text-2xl", op: "opacity-55", nudge: "-mt-1 sm:-mt-3" },
  { name: "Postman", size: "text-lg sm:text-xl md:text-2xl", op: "opacity-50", nudge: "mt-1 sm:mt-2" },
  { name: "CI/CD", size: "text-lg sm:text-xl md:text-2xl", op: "opacity-60", nudge: "mt-0" },
  { name: "SQL", size: "text-2xl sm:text-3xl md:text-4xl", op: "opacity-70", nudge: "-mt-2 sm:-mt-4" },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-card border-y border-border overflow-hidden">
      <div
        className="absolute -top-8 -left-4 font-display font-bold text-[120px] sm:text-[180px] text-foreground/[0.03] select-none pointer-events-none leading-none"
        aria-hidden="true"
      >
        03
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
        <div className="border-b border-border pb-8 mb-16 sm:mb-20 flex flex-col md:flex-row md:items-end gap-4 md:gap-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight"
          >
            My Stack
          </motion.h2>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-mono text-xs uppercase tracking-widest"
          >
            Hover to explore
          </motion.span>
        </div>

        <div className="flex flex-wrap gap-x-4 sm:gap-x-6 md:gap-x-10 gap-y-1 sm:gap-y-0 items-start">
          {words.map((w, i) => (
            <motion.span
              key={w.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ color: "#ff6b35", scale: 1.07 }}
              className={`font-display font-bold ${w.size} ${w.op} ${w.nudge} text-foreground cursor-default select-none transition-colors duration-200 leading-tight`}
            >
              {w.name}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 sm:mt-24 pt-10 border-t border-border grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10"
        >
          {portfolioData.skills.categories.map((cat) => (
            <div key={cat.name} className="flex flex-col gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">{cat.name}</span>
              <div className="flex flex-col gap-1.5">
                {cat.items.map((item) => (
                  <span key={item} className="text-sm text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
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
          className="font-display font-bold tracking-tight leading-[0.88] mb-8"
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
          I'm actively looking for Graduate Engineer Trainee & internship opportunities in API
          development. Let's make something great together.
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
              <div className="flex items-center gap-3 sm:gap-4 text-sm sm:text-lg md:text-2xl font-display font-bold group-hover:text-accent transition-colors min-w-0 break-all">
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
