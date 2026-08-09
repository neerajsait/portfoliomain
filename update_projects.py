import sys

new_imports = 'import { ArrowRight, Download, Github, Linkedin, Mail, Monitor, Server, Database, Cloud, ArrowDown, X } from "lucide-react";'

modal_code = '''
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
              <p className="text-accent font-mono text-[10px] uppercase tracking-widest mb-1">Architecture Workflow</p>
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
            {project.workflow ? (
              <div className="relative pl-6 sm:pl-8 border-l border-border/40 space-y-8 py-2">
                {project.workflow.map((step: string, idx: number) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-card border border-accent rounded-full text-[9px] sm:text-[10px] font-mono text-accent">
                      {idx + 1}
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step}</p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">Workflow details are not available for this project.</p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

'''

projects_code = '''
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
                        Workflow <ArrowRight className="w-3.5 h-3.5" />
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
'''

with open('src/components/sections.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace imports
old_imports = 'import { ArrowRight, Download, Github, Linkedin, Mail, Monitor, Server, Database, Cloud, ArrowDown } from "lucide-react";'
content = content.replace(old_imports, new_imports)

# Find Projects component and replace it
start_str = '/* ───────────────────────── Projects ───────────────────────── */'
end_str = '/* ───────────────────────── Skills ───────────────────────── */'

start_idx = content.find(start_str)
end_idx = content.find(end_str)

if start_idx != -1 and end_idx != -1:
    new_content = content[:start_idx] + modal_code + '\n' + projects_code + '\n' + content[end_idx:]
    with open('src/components/sections.tsx', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('Successfully updated sections.tsx')
else:
    print('Could not find start or end index')
