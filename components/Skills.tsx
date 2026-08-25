"use client";
import { useEffect, useRef, useState } from "react";

const groups = [
  {
    cat: "Frontend", icon: "🎨", color: "#9B5DE5",
    skills: [
      { name: "React.js", pct: 90 }, { name: "Next.js", pct: 88 },
      { name: "HTML & CSS", pct: 95 }, { name: "JavaScript", pct: 85 },
      { name: "Tailwind CSS", pct: 80 }, { name: "GSAP", pct: 70 },
    ],
  },
  {
    cat: "Backend", icon: "⚙️", color: "#F15BB5",
    skills: [
      { name: "Node.js", pct: 78 }, { name: "Express.js", pct: 75 },
      { name: "Next.js API", pct: 82 }, { name: "MongoDB", pct: 75 },
      { name: "REST APIs", pct: 80 },
    ],
  },
  {
    cat: "Tools & Others", icon: "🛠️", color: "#FFD166",
    skills: [
      { name: "Git & GitHub", pct: 82 }, { name: "Figma", pct: 65 },
      { name: "Postman", pct: 72 }, { name: "WordPress", pct: 78 },
      { name: "VS Code", pct: 95 },
    ],
  },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} style={{ padding: "110px 0", background: "var(--dark-bg)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 900, height: 900, borderRadius: "50%", background: "radial-gradient(circle, rgba(155,93,229,0.05) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontSize: "0.74rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#BF5AF2", fontWeight: 700 }}>Expertise</span>
          <div style={{ width: 40, height: 3, background: "linear-gradient(90deg, #9B5DE5, #F15BB5)", margin: "10px auto 20px", borderRadius: 2 }} />
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "var(--text)" }}>
            My{" "}
            <span style={{ background: "linear-gradient(135deg, #9B5DE5, #F15BB5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Skills
            </span>
          </h2>
          <p style={{ color: "rgba(248,244,255,0.4)", marginTop: 12, maxWidth: 420, margin: "12px auto 0", lineHeight: 1.8 }}>
            Technologies I use to build complete, production-ready web applications.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 22 }}>
          {groups.map((g, i) => (
            <div key={i} style={{
              padding: "32px 28px", borderRadius: 24,
              background: "rgba(255,255,255,0.025)",
              border: `1px solid ${g.color}20`,
              backdropFilter: "blur(20px)",
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(44px)",
              transition: `all 0.65s cubic-bezier(0.4,0,0.2,1) ${i * 0.12}s`,
              position: "relative", overflow: "hidden",
            }}>
              {/* Top accent bar */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${g.color}, transparent)` }} />

              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
                <div style={{ width: 50, height: 50, borderRadius: 15, background: `${g.color}15`, border: `1px solid ${g.color}28`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>
                  {g.icon}
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: g.color }}>{g.cat}</h3>
              </div>

              {/* Skills */}
              {g.skills.map((s, j) => (
                <div key={j} style={{ marginBottom: 17 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
                    <span style={{ fontSize: "0.87rem", color: "rgba(248,244,255,0.72)", fontWeight: 500 }}>{s.name}</span>
                    <span style={{ fontSize: "0.77rem", color: g.color, fontWeight: 700 }}>{s.pct}%</span>
                  </div>
                  <div style={{ height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 4, overflow: "hidden" }}>
                    <div style={{
                      height: "100%", borderRadius: 4,
                      background: `linear-gradient(90deg, ${g.color}, ${g.color}88)`,
                      width: visible ? `${s.pct}%` : "0%",
                      transition: `width 1.4s cubic-bezier(0.4,0,0.2,1) ${i * 0.1 + j * 0.07}s`,
                      boxShadow: `0 0 12px ${g.color}44`,
                    }} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
