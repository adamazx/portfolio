"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { HERO_DATA } from "@/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] },
});

type Orb = {
  size: number;
  bg: string;
  delay: string;
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
};

export function HeroSection() {
  const orbs: Orb[] = [
    {
      size: 600,
      bg: "#3b82f6",
      top: "-100px",
      left: "-200px",
      delay: "0s",
    },
    {
      size: 500,
      bg: "#8b5cf6",
      bottom: "-150px",
      right: "-100px",
      delay: "3s",
    },
    {
      size: 400,
      bg: "#06b6d4",
      top: "50%",
      left: "50%",
      delay: "1.5s",
    },
  ];
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-[72px] relative overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {orbs.map((orb, i) => (
          <div
            key={`${orb.bg}-${orb.size}-${orb.top ?? orb.left ?? orb.bottom ?? orb.right ?? i}`}
            className="absolute rounded-full animate-orb-float"
            style={{
              width: orb.size,
              height: orb.size,
              background: orb.bg,
              top: orb.top,
              left: orb.left,
              bottom: orb.bottom,
              right: orb.right,
              transform: i === 2 ? "translate(-50%,-50%)" : undefined,
              filter: "blur(80px)",
              opacity: 0.18,
              animationDelay: orb.delay,
            }}
          />
        ))}
      </div>

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <motion.div {...fadeUp(0.1)}>
              <span
                className="inline-flex items-center gap-2 font-mono text-xs px-4 py-2 rounded-full mb-6 border"
                style={{
                  background: "rgba(59,130,246,0.1)",
                  borderColor: "rgba(59,130,246,0.25)",
                  color: "#3b82f6",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-dot" />
                {HERO_DATA.badge}
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-display font-extrabold leading-[1.05] tracking-tight mb-3"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              <span className="text-grad">{HERO_DATA.name.split(" ")[0]}</span>
              <br />
              {HERO_DATA.name.split(" ").slice(1).join(" ")}
            </motion.h1>

            <motion.p
              {...fadeUp(0.3)}
              className="font-mono text-cyan-400 mb-6 tracking-wide text-sm md:text-base"
            >
              {HERO_DATA.role}
            </motion.p>

            <motion.p
              {...fadeUp(0.4)}
              className="text-muted text-lg leading-relaxed max-w-lg mb-10"
            >
              {HERO_DATA.tagline}
            </motion.p>

            <motion.div {...fadeUp(0.5)} className="flex gap-4 flex-wrap">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)",
                  boxShadow: "0 0 30px rgba(59,130,246,0.25)",
                }}
              >
                📧 Contact Me
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm border transition-all duration-200 hover:text-blue-400 hover:-translate-y-0.5"
                style={{ borderColor: "var(--border2)", color: "var(--text)" }}
              >
                🚀 View Projects
              </a>
              <a
                href="/resume/Chayangkoon-Tachao-Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm border transition-all duration-200 hover:text-blue-400 hover:-translate-y-0.5"
                style={{ borderColor: "var(--border2)", color: "var(--text)" }}
              >
                ⬇ Download CV
              </a>
            </motion.div>
          </div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
              {["Node.js", "NestJS", "Redis", "Docker", "WebSocket"].map(
                (t, i) => (
                  <span
                    key={t}
                    className="absolute font-mono text-xs px-2 py-1.5 rounded-md animate-float"
                    style={{
                      background: "rgba(59,130,246,0.08)",
                      border: "1px solid rgba(59,130,246,0.15)",
                      color: "#3b82f6",
                      opacity: 0.5,
                      animationDelay: `${i * 0.8}s`,
                      top: ["10%", "20%", "70%", "80%", "50%"][i],
                      left:
                        ["-5%", undefined, "-8%", undefined, "-10%"][i] ??
                        undefined,
                      right:
                        [undefined, "-8%", undefined, "-5%", undefined][i] ??
                        undefined,
                    }}
                  >
                    {t}
                  </span>
                ),
              )}
            </div>

            <div
              className="rounded-2xl border p-8 relative overflow-hidden"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(59,130,246,0.05), rgba(139,92,246,0.05))",
                }}
              />
              <div className="relative">
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-6 p-0.5"
                  style={{
                    background:
                      "linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)",
                  }}
                >
                  <Image
                    src="/images/profile.jpg"
                    alt={HERO_DATA.name}
                    width={96}
                    height={96}
                    priority
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <p className="font-display text-xl font-bold text-center mb-1">
                  {HERO_DATA.name}
                </p>
                <p className="font-mono text-xs text-cyan-400 text-center mb-6">
                  @ Software Developer
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {HERO_DATA.techStack.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-3 py-1.5 rounded-md border transition-all duration-200 hover:text-blue-400"
                      style={{
                        background: "var(--bg3)",
                        borderColor: "var(--border)",
                        color: "var(--text2)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div
                  className="grid grid-cols-2 gap-4 border-t pt-6"
                  style={{ borderColor: "var(--border)" }}
                >
                  {HERO_DATA.stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="font-display text-3xl font-extrabold text-grad">
                        {s.value}
                      </div>
                      <div className="text-xs text-subtle mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 animate-bounce-scroll flex flex-col items-center gap-2 text-subtle text-xs font-mono">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
        Scroll to explore
      </div>
    </section>
  );
}
