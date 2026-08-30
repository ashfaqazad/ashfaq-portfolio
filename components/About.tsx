"use client";
import { useEffect, useRef, useState } from "react";

const highlights = [
  { icon: "🎯", label: "Self-Taught", desc: "Passionate & driven learner" },
  { icon: "⚡", label: "Fast Delivery", desc: "Clean, efficient code" },
  { icon: "🌐", label: "SEO Ready", desc: "Optimized & Google indexed" },
  { icon: "📱", label: "Responsive", desc: "All screens, all devices" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.14 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="about-section"
      style={{
        padding: "110px 0 60px",
        background: "var(--dark-bg)",
        position: "relative",
        overflow: "hidden",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
        `,
        backgroundSize: "42px 42px",
        backgroundPosition: "center",
      }}>

      {/* grid lines ka fade mask */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 40%, transparent 0%, var(--dark-bg) 78%)", pointerEvents: "none" }} />

      {/* Background blobs */}
      <div style={{ position: "absolute", top: "5%", right: "-5%", width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(155,93,229,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "0%", left: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(241,91,181,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ position: "absolute", top: "5%", right: "-5%", width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(155,93,229,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "0%", left: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(241,91,181,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.15fr",
            gridTemplateAreas: `"image heading" "image body"`,
            gap: 80,
            alignItems: "center",
          }}
        >

          {/* IMAGE */}
          <div style={{
            gridArea: "image",
            opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(44px)",
            transition: "all 0.9s cubic-bezier(0.4,0,0.2,1) 0.18s",
            display: "flex", justifyContent: "center",
            animation: visible ? "float 7s ease-in-out infinite" : "none",
          }} className="hero-img">
            <div className="photo-frame" style={{ position: "relative", width: 320, height: 390 }}>

              <div className="photo-layer" style={{
                position: "absolute",
                top: 14, left: -14,
                width: 320, height: 390,
                borderRadius: 20,
                background: "linear-gradient(135deg, #9B5DE5, #F15BB5)",
                zIndex: 0,
              }} />

              <div className="photo-layer" style={{
                position: "absolute",
                top: 7, left: -7,
                width: 320, height: 390,
                borderRadius: 22,
                background: "var(--dark-bg)",
                border: "1px solid rgba(255,255,255,0.08)",
                zIndex: 1,
              }} />

              <div className="photo-layer" style={{ position: "relative", zIndex: 2, width: 320, height: 390, borderRadius: 24, overflow: "hidden" }}>
                <img src="/Images/image.jpg" alt="Ashfaque Ahmed"
                  className="photo-img"
                  style={{ width: 320, height: 390, objectFit: "cover", objectPosition: "top center", display: "block", filter: "contrast(1.04) saturate(0.92)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "35%", background: "linear-gradient(to top, rgba(7,5,15,0.55), transparent)" }} />
              </div>

              <div className="chip chip-tr" style={{ position: "absolute", top: -20, right: -30, zIndex: 3, padding: "9px 16px", borderRadius: 12, background: "rgba(13,10,26,0.88)", border: "1px solid rgba(155,93,229,0.35)", backdropFilter: "blur(16px)", color: "#BF5AF2", fontSize: "0.8rem", fontWeight: 700, whiteSpace: "nowrap", boxShadow: "0 4px 20px rgba(155,93,229,0.2)" }}>
                ⚡ Full Stack Dev
              </div>
              <div className="chip chip-bl" style={{ position: "absolute", bottom: -20, left: -44, zIndex: 3, padding: "9px 16px", borderRadius: 12, background: "rgba(13,10,26,0.88)", border: "1px solid rgba(241,91,181,0.3)", backdropFilter: "blur(16px)", color: "#F15BB5", fontSize: "0.8rem", fontWeight: 700, whiteSpace: "nowrap", boxShadow: "0 4px 20px rgba(241,91,181,0.15)" }}>
                🚀 Open to Work
              </div>
            </div>
          </div>

          {/* HEADING block */}
          {/* <div style={{ gridArea: "heading", opacity: visible ? 1 : 0, transform: visible ? "none" : "translateX(50px)", transition: "all 0.85s cubic-bezier(0.4,0,0.2,1) 0.15s" }}>
            <span style={{ fontSize: "0.74rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B5DE5", fontWeight: 700 }}>About Me</span>
            <div style={{ width: 80, height: 3, background: "linear-gradient(90deg, #9B5DE5, #F15BB5)", margin: "10px 0 22px", borderRadius: 2 }} />
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, lineHeight: 1.1, color: "var(--text)", marginBottom: 0 }}>
              Crafting Digital{" "}
              <span style={{ background: "linear-gradient(135deg, #9B5DE5, #F15BB5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Experiences
              </span>
            </h2>
          </div> */}

          {/* HEADING block */}
          <div className="about-heading" style={{ gridArea: "heading", opacity: visible ? 1 : 0, transform: visible ? "none" : "translateX(50px)", transition: "all 0.85s cubic-bezier(0.4,0,0.2,1) 0.15s" }}>
            <span style={{ fontSize: "0.74rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B5DE5", fontWeight: 700 }}>About Me</span>
            <div className="about-heading-bar" style={{ width: 80, height: 3, background: "linear-gradient(90deg, #9B5DE5, #F15BB5)", margin: "10px 0 22px", borderRadius: 2 }} />
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, lineHeight: 1.1, color: "var(--text)", marginBottom: 0 }}>
              Crafting Digital{" "}
              <span style={{ background: "linear-gradient(135deg, #9B5DE5, #F15BB5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Experiences
              </span>
            </h2>
          </div>

          {/* BODY block: paragraphs + highlights */}
          <div style={{ gridArea: "body", opacity: visible ? 1 : 0, transform: visible ? "none" : "translateX(50px)", transition: "all 0.85s cubic-bezier(0.4,0,0.2,1) 0.15s" }}>
            <p style={{ color: "#9CA3AF", lineHeight: 1.9, fontSize: "1rem", marginTop: 20, marginBottom: 16 }}>
              I&apos;m <strong style={{ color: "var(--text)" }}>Ashfaque Ahmed Bhutto</strong>, a self-taught full-stack developer with 3+ years of hands-on experience building with React, Next.js, Node.js, MongoDB, and Python/FastAPI. Beyond client work, I design and ship my own SaaS products — including PDFLinx and ConvertLinx — from idea to production.
            </p>
            <p style={{ color: "#9CA3AF", lineHeight: 1.9, fontSize: "1rem", marginBottom: 36 }}>
              I care about the full picture: clean architecture, fast load times, and SEO that actually gets found — not just code that works, but products that perform. Every project I ship is built to be maintainable, scalable, and genuinely useful to the people using it.
            </p>

            <div className="about-highlights" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {highlights.map((h, i) => (
                <div key={i} style={{
                  padding: "15px 18px", borderRadius: 14,
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(155,93,229,0.18)",
                  backdropFilter: "blur(10px)", display: "flex", alignItems: "center", gap: 12,
                  boxShadow: "0 2px 14px rgba(0,0,0,0.2)",
                  transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(155,93,229,0.2)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(155,93,229,0.4)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 14px rgba(0,0,0,0.2)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(155,93,229,0.18)"; }}>
                  <span style={{ fontSize: "1.4rem" }}>{h.icon}</span>
                  <div>
                    <div style={{ fontSize: "0.87rem", fontWeight: 700, color: "var(--light-text)" }}>{h.label}</div>
                    <div style={{ fontSize: "0.74rem", color: "#BF5AF2", marginTop: 1 }}>{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-section {
            padding: 80px 0 40px !important;
          }
          .about-grid {
            grid-template-columns: 1fr !important;
            grid-template-areas: "heading" "image" "body" !important;
            gap: 32px !important;
          }
          .photo-frame { width: 260px !important; height: 316px !important; }
          .photo-layer { width: 260px !important; height: 316px !important; }
          .photo-img { width: 260px !important; height: 316px !important; }
          .about-heading,
          .about-heading * {
            text-align: center !important;
          }
          .about-heading-bar {
            margin: 10px auto 22px !important;
          }
        }
        @media (max-width: 480px) {
          .about-section {
            padding: 64px 0 30px !important;
          }
          .photo-frame { width: 220px !important; height: 268px !important; }
          .photo-layer { width: 220px !important; height: 268px !important; }
          .photo-img { width: 220px !important; height: 268px !important; }
          .about-highlights { grid-template-columns: 1fr !important; }
          .chip { font-size: 0.7rem !important; padding: 7px 12px !important; }
          .chip-tr { top: -14px !important; right: -8px !important; }
          .chip-bl { bottom: -14px !important; left: -8px !important; }
        }
      `}</style>
      
    </section>
  );
}