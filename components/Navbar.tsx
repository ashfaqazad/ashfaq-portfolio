"use client";
import { useState, useEffect } from "react";

const sections = ["home", "about", "skills", "services", "projects", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 55);
      const cur = sections.find(s => {
        const el = document.getElementById(s);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 130 && r.bottom >= 130;
      });
      if (cur) setActive(cur);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? "10px 0" : "20px 0",
        background: scrolled ? "rgba(7,5,15,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(155,93,229,0.14)" : "none",
        transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
      }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <button onClick={() => go("home")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 1 }}>
            <span style={{ fontWeight: 800, fontSize: "1.45rem", letterSpacing: "-0.03em", background: "linear-gradient(135deg, #9B5DE5, #F15BB5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Ashfaq</span>
            <span style={{ fontWeight: 800, fontSize: "1.45rem", letterSpacing: "-0.03em", color: "rgba(248,244,255,0.85)" }}>Dev</span>
          </button>

          {/* Desktop links */}
          <div className="nav-links" style={{ display: "flex", gap: 2, alignItems: "center", padding: "5px", background: scrolled ? "rgba(155,93,229,0.07)" : "transparent", borderRadius: 16, border: scrolled ? "1px solid rgba(155,93,229,0.12)" : "none", transition: "all 0.3s" }}>
            {sections.map(s => (
              <button key={s} onClick={() => go(s)} style={{
                background: active === s ? "linear-gradient(135deg, rgba(155,93,229,0.22), rgba(241,91,181,0.14))" : "transparent",
                border: active === s ? "1px solid rgba(155,93,229,0.38)" : "1px solid transparent",
                borderRadius: 10, padding: "8px 17px", cursor: "pointer",
                color: active === s ? "#BF5AF2" : "rgba(248,244,255,0.55)",
                fontSize: "0.87rem", fontWeight: 600, textTransform: "capitalize",
                fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "all 0.2s",
              }}
                onMouseEnter={e => { if (active !== s) (e.currentTarget as HTMLElement).style.color = "#F8F4FF"; }}
                onMouseLeave={e => { if (active !== s) (e.currentTarget as HTMLElement).style.color = "rgba(248,244,255,0.55)"; }}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>

          {/* Resume CTA */}
          <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="nav-cta" style={{
            padding: "10px 22px", borderRadius: 12,
            background: "linear-gradient(135deg, #9B5DE5, #F15BB5)",
            color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700, fontSize: "0.87rem", textDecoration: "none",
            boxShadow: "0 4px 18px rgba(155,93,229,0.35)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(155,93,229,0.52)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 18px rgba(155,93,229,0.35)"; }}>
            Resume ↗
          </a>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger" style={{
            display: "none", background: "rgba(155,93,229,0.1)",
            border: "1px solid rgba(155,93,229,0.28)", borderRadius: 10,
            padding: "9px 14px", cursor: "pointer", color: "#BF5AF2", fontSize: "1.1rem",
          }}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Full screen mobile menu */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 999,
        background: "rgba(7,5,15,0.97)", backdropFilter: "blur(28px)",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6,
        opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? "all" : "none",
        transform: menuOpen ? "none" : "scale(0.96)",
        transition: "opacity 0.3s, transform 0.3s",
      }}>
        <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: 24, right: 28, background: "none", border: "none", color: "rgba(248,244,255,0.5)", fontSize: "1.5rem", cursor: "pointer" }}>✕</button>
        {sections.map((s, i) => (
          <button key={s} onClick={() => go(s)} style={{
            background: "none", border: "none", cursor: "pointer",
            fontSize: "2.4rem", fontWeight: 800, textTransform: "capitalize",
            color: active === s ? "transparent" : "rgba(248,244,255,0.75)",
            backgroundImage: active === s ? "linear-gradient(135deg, #9B5DE5, #F15BB5)" : "none",
            WebkitBackgroundClip: active === s ? "text" : undefined,
            fontFamily: "'Plus Jakarta Sans', sans-serif", padding: "8px 0",
            transition: "opacity 0.2s",
            animationDelay: `${i * 0.06}s`,
          }}>
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
        <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" style={{ marginTop: 24, padding: "14px 40px", borderRadius: 14, background: "linear-gradient(135deg, #9B5DE5, #F15BB5)", color: "#fff", fontWeight: 700, fontSize: "1rem", textDecoration: "none" }}>
          Download CV ↗
        </a>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .nav-links { display: none !important; }
          .nav-cta { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
}
