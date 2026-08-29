"use client";
import { useEffect, useRef, useState } from "react";

// 👇 Apne real clients ka data yahan bharo — naam, role/company, quote, aur rating
const testimonials = [
    {
    name: "Rameez Babar",
    role: "Google Business Profile Expert",
    quote: "Ashfaque built my portfolio site exactly the way I needed it — clean, fast, and professional. He made sure it was fully responsive and SEO optimized, and within weeks it was ranking well on Google. Communication was smooth throughout and he delivered on time.",
    rating: 5,
    avatar: "/Images/client1.jpg", // apni image daal dena, ya hata kar initials use kar lena
  },
  {
    name: "Hafiz Zakaria",
    role: "Operations Manager, Huda Trading Japan",
    quote: "Ashfaque understood exactly what our car trading business needed. He built a fully dynamic platform with live vehicle listings and WhatsApp integration, so customers could reach us directly from any car listing. The site is fast, fully responsive, and has made it much easier for us to showcase our inventory online.",
    rating: 5,
    avatar: "/Images/client2.jpg",
},
  {
    name: "Adeel Ahmed",
    role: "Administrator, Bedari-e-Millat",
    quote: "Ashfaque delivered exactly what we needed — a clean, responsive WordPress site with a proper blog section for our publications and easy content management on our end. He optimized it for SEO and made sure everything, from forms to plugins, worked smoothly. Very professional and easy to work with.",
    rating: 5,
    avatar: "/Images/client3.jpg",
},
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="testimonials" ref={ref} style={{
      padding: "60px 0", background: "var(--dark-bg)", position: "relative", overflow: "hidden",
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
      `,
      backgroundSize: "42px 42px",
      backgroundPosition: "center",
    }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 40%, transparent 0%, var(--dark-bg) 78%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "15%", left: "-5%", width: 450, height: 450, borderRadius: "50%", background: "radial-gradient(circle, rgba(155,93,229,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(241,91,181,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontSize: "0.74rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#BF5AF2", fontWeight: 700 }}>Testimonials</span>
          <div style={{ width: 110, height: 3, background: "linear-gradient(90deg, #9B5DE5, #F15BB5)", margin: "10px auto 20px", borderRadius: 2 }} />
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "var(--text)" }}>
            What Clients{" "}
            <span style={{ background: "linear-gradient(135deg, #9B5DE5, #F15BB5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Say
            </span>
          </h2>
          <p style={{ color: "#9CA3AF", marginTop: 12, maxWidth: 420, margin: "12px auto 0", lineHeight: 1.8 }}>
            Feedback from people I&apos;ve worked with on real projects.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 22 }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              padding: "32px 28px", borderRadius: 22,
              background: "rgba(255,255,255,0.035)",
              border: "1px solid rgba(155,93,229,0.18)",
              backdropFilter: "blur(14px)",
              boxShadow: "0 4px 22px rgba(0,0,0,0.25)",
              opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(36px)",
              transition: `all 0.6s cubic-bezier(0.4,0,0.2,1) ${i * 0.12}s`,
              position: "relative",
              display: "flex", flexDirection: "column",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(155,93,229,0.45)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 50px rgba(155,93,229,0.2)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(155,93,229,0.18)"; (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 22px rgba(0,0,0,0.25)"; }}>

              {/* Quote mark */}
              <div style={{ fontSize: "2.6rem", lineHeight: 1, color: "#9B5DE530", fontWeight: 800, fontFamily: "Georgia, serif", marginBottom: 6 }}>
                &ldquo;
              </div>

              {/* Stars */}
              <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
                {Array.from({ length: 5 }).map((_, si) => (
                  <span key={si} style={{ color: si < t.rating ? "#FFD166" : "rgba(255,255,255,0.15)", fontSize: "0.95rem" }}>★</span>
                ))}
              </div>

              {/* Quote text */}
              <p style={{ color: "#B4B8C2", fontSize: "0.93rem", lineHeight: 1.85, flex: 1, marginBottom: 24 }}>
                {t.quote}
              </p>

              {/* Client info */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "linear-gradient(135deg, #9B5DE5, #F15BB5)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.9rem", fontWeight: 800, color: "#fff", flexShrink: 0,
                  overflow: "hidden",
                }}>
                  {/* Agar image chahiye to niche wali line uncomment karo aur upar wala initials-fallback hata do */}
                  {/* <img src={t.avatar} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
                  {t.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "var(--text)" }}>{t.name}</div>
                  <div style={{ fontSize: "0.76rem", color: "#9B5DE5", marginTop: 1 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}