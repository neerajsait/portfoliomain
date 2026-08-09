import sys
import json

# Update portfolio.ts
with open('src/data/portfolio.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace workflow arrays with objects
old_recruiter_wf = '''      workflow: [
        "Recruiter logs in & posts a new job requirement.",
        "Students apply via the shared business-logic layer.",
        "Recruiter tracks candidates and schedules interviews.",
        "Automated status-update notifications are dispatched."
      ],'''

new_recruiter_wf = '''      workflow: [
        { step: "Main Page & Login - The journey starts with a secure login for the recruiter.", image: "https://github.com/user-attachments/assets/c342a4a0-c3ab-4841-90ea-816bee120d88" },
        { step: "Dashboard - The recruiter views a high-level summary of active applications and candidate statuses.", image: "https://github.com/user-attachments/assets/ed8ee36d-4e13-4d6a-a7b9-31a5b24dd143" },
        { step: "Job Postings - Recruiter can create new job requirements and view existing postings.", image: "https://github.com/user-attachments/assets/1399481e-a4d2-4dad-bbff-ca08462e1d2e" },
        { step: "Profile Management - Keep recruiter profiles and company information up to date.", image: "https://github.com/user-attachments/assets/ac032a80-a4af-46c5-a5ec-ab33bdf9b10f" }
      ],'''

old_zk_wf = '''      workflow: [
        "Client derives a local key via Argon2id from the master password.",
        "Vault data is encrypted locally using AES-GCM.",
        "Encrypted blobs are sent to the Flask backend.",
        "Backend enforces quotas, RBAC, and rate-limits via Redis.",
        "Encrypted data and login verifiers are safely stored in MySQL."
      ],'''

new_zk_wf = '''      workflow: [
        { step: "Client derives a local key via Argon2id from the master password." },
        { step: "Vault data is encrypted locally using AES-GCM." },
        { step: "Encrypted blobs are sent to the Flask backend." },
        { step: "Backend enforces quotas, RBAC, and rate-limits via Redis." },
        { step: "Encrypted data and login verifiers are safely stored in MySQL." }
      ],'''

old_network_wf = '''      workflow: [
        "Scapy captures raw packets via a background multi-threaded process.",
        "Deep Packet Inspection & DLP regex analyze payloads for anomalies.",
        "External IPs are mapped dynamically using GeoIP.",
        "Flask-SocketIO pushes real-time alerts to the live dashboard.",
        "Port 9999 honeypot logs unauthorized scans."
      ],'''

new_network_wf = '''      workflow: [
        { step: "Scapy captures raw packets via a background multi-threaded process." },
        { step: "Deep Packet Inspection & DLP regex analyze payloads for anomalies." },
        { step: "External IPs are mapped dynamically using GeoIP." },
        { step: "Flask-SocketIO pushes real-time alerts to the live dashboard." },
        { step: "Port 9999 honeypot logs unauthorized scans." }
      ],'''

old_food_wf = '''      workflow: [
        "Customer scans a cryptographically signed QR code to start a B2C order.",
        "Payment processed via interactive UPI scan-to-pay.",
        "Flask backend updates stock and POS data securely in MySQL.",
        "APScheduler triggers automated HTML email digests for B2B supplier management."
      ],'''

new_food_wf = '''      workflow: [
        { step: "Customer scans a cryptographically signed QR code to start a B2C order." },
        { step: "Payment processed via interactive UPI scan-to-pay." },
        { step: "Flask backend updates stock and POS data securely in MySQL." },
        { step: "APScheduler triggers automated HTML email digests for B2B supplier management." }
      ],'''

content = content.replace(old_recruiter_wf, new_recruiter_wf)
content = content.replace(old_zk_wf, new_zk_wf)
content = content.replace(old_network_wf, new_network_wf)
content = content.replace(old_food_wf, new_food_wf)

with open('src/data/portfolio.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated portfolio.ts")

# Now update sections.tsx to render images

with open('src/components/sections.tsx', 'r', encoding='utf-8') as f:
    sections = f.read()

old_modal = '''          <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
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
          </div>'''

new_modal = '''          <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
            {project.workflow ? (
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
            ) : (
              <p className="text-muted-foreground">Workflow details are not available for this project.</p>
            )}
          </div>'''

sections = sections.replace(old_modal, new_modal)

with open('src/components/sections.tsx', 'w', encoding='utf-8') as f:
    f.write(sections)

print("Updated sections.tsx")
