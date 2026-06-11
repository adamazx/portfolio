"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { CONTACT_ITEMS, SOCIAL_LINKS } from "@/data";
import type { ContactFormData } from "@/types";

export function ContactSection() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const recipient =
    CONTACT_ITEMS.find((item) => item.label === "Email")?.value ?? "";

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    globalThis.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

    setSent(true);
  };

  return (
    <section
      id="contact"
      className="py-28 px-6"
      style={{ background: "var(--bg2)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="05. Contact"
          title={
            <>
              Let&apos;s <span className="text-grad">Connect</span>
            </>
          }
          subtitle="Have a project in mind or just want to say hello? My inbox is always open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {CONTACT_ITEMS.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-lg flex-shrink-0 border"
                  style={{
                    background: "rgba(59,130,246,0.1)",
                    borderColor: "rgba(59,130,246,0.2)",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-subtle mb-0.5">{item.label}</p>
                  <p className="font-medium text-sm">{item.value}</p>
                </div>
              </div>
            ))}

            <div>
              {/* Social Links */}
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    title={link.label}
                    className="w-11 h-11 rounded-xl border flex items-center justify-center text-sm font-bold transition-all duration-200 hover:text-blue-400 hover:-translate-y-0.5"
                    style={{
                      background: "var(--surface)",
                      borderColor: "var(--border)",
                      color: "var(--text2)",
                    }}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <GlassCard className="p-6">
              <h4 className="font-display font-bold text-sm mb-2 flex items-center gap-2">
                <span
                  className="w-6 h-6 rounded-md text-xs flex items-center justify-center"
                  style={{ background: "rgba(59,130,246,0.1)" }}
                >
                  ✨
                </span>{" "}
                Open to Opportunities
              </h4>
              <p className="text-muted text-sm leading-relaxed">
                Currently looking for software engineering roles where I can
                build scalable systems and grow with a great team.
              </p>
            </GlassCard>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8">
              {sent ? (
                <div className="text-center py-8">
                  <p className="font-mono text-cyan-400 text-lg mb-2">
                    ✓ Message sent!
                  </p>
                  <p className="text-muted text-sm">
                    I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {error && (
                    <p className="text-red-400 text-sm font-mono">{error}</p>
                  )}

                  {[
                    {
                      name: "name",
                      label: "Your Name",
                      type: "text",
                      placeholder: "Your Name !!",
                    },
                    {
                      name: "email",
                      label: "Email Address",
                      type: "email",
                      placeholder: "Your Email !!",
                    },
                  ].map((field) => (
                    <div key={field.name}>
                      <label
                        htmlFor={field.name}
                        className="block font-mono text-xs text-muted mb-2"
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.name}
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={form[field.name as keyof ContactFormData]}
                        onChange={handleChange}
                        className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                        style={{
                          background: "var(--bg3)",
                          border: "1px solid var(--border)",
                          color: "var(--text)",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "#3b82f6";
                          e.currentTarget.style.boxShadow =
                            "0 0 0 3px rgba(59,130,246,0.1)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "var(--border)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-mono text-xs text-muted mb-2"
                    >
                      {'Message'}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your Message !!"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 resize-none"
                      style={{
                        background: "var(--bg3)",
                        border: "1px solid var(--border)",
                        color: "var(--text)",
                        lineHeight: 1.6,
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "#3b82f6";
                        e.currentTarget.style.boxShadow =
                          "0 0 0 3px rgba(59,130,246,0.1)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background:
                        "linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)",
                      boxShadow: "0 4px 20px rgba(59,130,246,0.25)",
                    }}
                  >
                    Send Message →
                  </button>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
