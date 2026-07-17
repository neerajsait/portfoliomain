import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, Download } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? "backdrop-blur-md bg-background/80 border-b border-border" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex items-center justify-between h-16">
          <a
            href="#hero"
            data-testid="nav-logo"
            className="border border-accent px-2.5 py-1 font-display font-bold text-sm text-accent tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            NS
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors underline-link"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <a
              href={portfolioData.contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-download-resume"
              className="hidden md:flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-accent transition-colors"
            >
              Resume <Download className="w-3.5 h-3.5" />
            </a>
            <button
              className="md:hidden text-foreground p-1"
              onClick={() => setOpen(true)}
              data-testid="nav-menu-open"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center gap-10"
          >
            <button
              className="absolute top-5 right-6 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setOpen(false)}
              data-testid="nav-menu-close"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setOpen(false)}
                className="font-display font-bold text-4xl sm:text-5xl text-foreground hover:text-accent transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href={portfolioData.contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.08 }}
              onClick={() => setOpen(false)}
              data-testid="nav-mobile-download-resume"
              className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-accent hover:text-foreground transition-colors"
            >
              View Resume <Download className="w-4 h-4" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Footer() {
  return (
    <footer className="py-6 border-t border-border bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest text-center">
          © 2026 Tiruveedhi Neeraj Sai · Made with React & Vite
        </p>
        <div className="flex items-center gap-6">
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            data-testid="link-footer-github"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            data-testid="link-footer-linkedin"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="text-muted-foreground hover:text-accent transition-colors"
            data-testid="link-footer-email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
