"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROJECTS } from "@/data";

export function ProjectsSection() {
  const [toast, setToast] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  const showToast = (message: string) => {
    setToast(message);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setToast(null), 4000);
  };

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  return (
    <section
      id="projects"
      className="py-28 px-6"
      style={{ background: "var(--bg2)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="03. Projects"
          title={
            <>
              Featured <span className="text-grad">Work</span>
            </>
          }
          subtitle="Production systems built with performance, scalability, and reliability in mind."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 group"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              {/* Hover border glow */}
              <div
                className="h-0.5 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)",
                }}
              />

              <div className="p-7 flex flex-col flex-1">
                <p className="font-mono text-xs text-subtle tracking-[0.08em] mb-4">
                  {/* PROJECT */}
                  {project.number}
                </p>

                <div
                  className="relative w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                  style={{
                    background:
                      project.iconGradient ??
                      "linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)",
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-xl -z-10"
                    style={{
                      background:
                        project.iconGradient ??
                        "linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)",
                      filter: "blur(12px)",
                      opacity: 0.4,
                    }}
                  />
                  {project.icon}
                </div>

                <h3 className="font-display font-bold text-lg leading-tight mb-3">
                  {project.name}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {project.highlight && (
                  <div
                    className="text-sm italic text-muted py-3 px-4 rounded-r-lg mb-4"
                    style={{
                      borderLeft: "2px solid var(--cyan)",
                      background: "rgba(6,182,212,0.06)",
                    }}
                  >
                    &ldquo;{project.highlight}&rdquo;
                  </div>
                )}

                <div className="flex flex-wrap content-start gap-1.5 mt-auto min-h-[3.75rem]">
                  {project.techStack.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-md border"
                      style={{
                        background: "var(--bg3)",
                        borderColor: "var(--border)",
                        color: "var(--text3)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="px-7 py-5 border-t flex gap-3"
                style={{ borderColor: "var(--border)" }}
              >
                {/* <a
                  href={project.liveUrl ?? '#'}
                  className="flex-1 py-2.5 text-center text-sm font-medium rounded-lg border transition-all duration-200 hover:bg-opacity-30"
                  style={{
                    background: 'rgba(59,130,246,0.1)',
                    borderColor: 'rgba(59,130,246,0.2)',
                    color: '#3b82f6',
                  }}
                >
                  🌐 Live Demo
                </a> */}
                {project.githubNote ? (
                  <button
                    type="button"
                    onClick={() =>
                      showToast(project.githubNote || "Source code is private.")
                    }
                    className="flex-1 py-2.5 text-center text-sm font-medium rounded-lg border transition-all duration-200 hover:text-main"
                    style={{
                      background: "transparent",
                      borderColor: "var(--border)",
                      color: "var(--text2)",
                    }}
                  >
                    🔒 GitHub
                  </button>
                ) : (
                  <a
                    href={project.githubUrl ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 text-center text-sm font-medium rounded-lg border transition-all duration-200 hover:text-main"
                    style={{
                      background: "transparent",
                      borderColor: "var(--border)",
                      color: "var(--text2)",
                    }}
                  >
                    ⎔ GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-8 left-1/2 z-50 max-w-sm w-[calc(100%-2rem)] flex items-start gap-3 px-5 py-4 rounded-xl border backdrop-blur-xl shadow-lg"
            style={{
              background: "var(--nav-bg)",
              borderColor: "var(--border2)",
            }}
          >
            <span className="text-lg leading-none mt-0.5" aria-hidden>
              🔒
            </span>
            <p className="text-sm text-main leading-relaxed">{toast}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
