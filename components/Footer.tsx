"use client";
import { useEffect, useState } from "react";

const sections = ["home", "about", "skills", "services", "projects", "contact"];
const socials = [
  { label: "GitHub", href: "https://github.com/ashfaq-dev", icon: "⌥" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ashfaque-ahmed-bhutto-a0a44827b", icon: "in" },
  { label: "WhatsApp", href: "https://wa.me/923332758958", icon: "✆" },
];

export default function Footer() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  // Scroll-to-top button visibility
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer style={{ background: "var(--dark-bg)", borderTop: "1px solid rgba(155,93,229,0.12)", position: "relative", overflow: "hidden" }}>
      {/* Top glow */}
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 600, height: 2, background: "linear-gradient(90deg, transparent, #9B5DE5, #F15BB5, transparent)" }} />

      {/* Main footer */}
      <div className="container" style={{ padding: "60px 28px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: 48, marginBottom: 48 }} className="footer-grid">

          {/* Brand col */}
          <div>
            <button onClick={() => go("home")} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, marginBottom: 16, display: "block" }}>
              <span style={{ fontWeight: 800, fontSize: "1.6rem", letterSpacing: "-0.03em", background: "linear-gradient(135deg, #9B5DE5, #F15BB5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Ashfaq</span>
              <span style={{ fontWeight: 800, fontSize: "1.6rem", color: "rgba(248,244,255,0.85)" }}>Dev</span>
            </button>
            <p style={{ color: "rgba(248,244,255,0.4)", fontSize: "0.9rem", lineHeight: 1.8, maxWidth: 280, marginBottom: 24 }}>
              Full Stack Developer building premium web experiences. Based in Pakistan, available worldwide.
            </p>
            {/* Social links */}
            <div style={{ display: "flex", gap: 10 }}>
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                  width: 40, height: 40, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(155,93,229,0.08)", border: "1px solid rgba(155,93,229,0.2)",
                  color: "rgba(248,244,255,0.6)", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none",
                  transition: "all 0.2s",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(155,93,229,0.2)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(155,93,229,0.5)"; (e.currentTarget as HTMLElement).style.color = "#BF5AF2"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(155,93,229,0.08)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(155,93,229,0.2)"; (e.currentTarget as HTMLElement).style.color = "rgba(248,244,255,0.6)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation col */}
          <div>
            <h4 style={{ fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#BF5AF2", fontWeight: 700, marginBottom: 20 }}>Navigation</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {sections.map(s => (
                <button key={s} onClick={() => go(s)} style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: "rgba(248,244,255,0.45)", fontSize: "0.9rem", fontWeight: 500,
                  textAlign: "left", padding: 0, textTransform: "capitalize",
                  transition: "color 0.2s", fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.color = "#BF5AF2"; }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.color = "rgba(248,244,255,0.45)"; }}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Contact col */}
          <div>
            <h4 style={{ fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#F15BB5", fontWeight: 700, marginBottom: 20 }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { icon: "✉️", val: "ashfaqahmedazad@gmail.com", href: "mailto:ashfaqahmedazad@gmail.com" },
                { icon: "🌐", val: "ashfaqdev.cloud", href: "https://ashfaqdev.cloud" },
                { icon: "📍", val: "Pakistan", href: "#" },
              ].map((c, i) => (
                <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" style={{
                  display: "flex", gap: 10, alignItems: "center",
                  color: "rgba(248,244,255,0.4)", fontSize: "0.87rem", textDecoration: "none",
                  transition: "color 0.2s",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "rgba(248,244,255,0.85)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(248,244,255,0.4)"; }}>
                  <span>{c.icon}</span>
                  <span>{c.val}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(155,93,229,0.1)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "rgba(248,244,255,0.25)", fontSize: "0.82rem" }}>
            © {new Date().getFullYear()} Ashfaque Ahmed Bhutto · All rights reserved
          </p>
          <p style={{ color: "rgba(248,244,255,0.2)", fontSize: "0.82rem" }}>
            Built with ❤️ using <span style={{ color: "#BF5AF2" }}>Next.js</span> & <span style={{ color: "#F15BB5" }}>Tailwind CSS</span>
          </p>
        </div>
      </div>

      {/* Scroll-to-top floating button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        style={{
          position: "fixed",
          bottom: 28,
          right: 28,
          width: 46,
          height: 46,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #9B5DE5, #F15BB5)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "1.1rem",
          fontWeight: 700,
          boxShadow: "0 6px 24px rgba(155,93,229,0.45)",
          opacity: showTop ? 1 : 0,
          transform: showTop ? "translateY(0) scale(1)" : "translateY(12px) scale(0.9)",
          pointerEvents: showTop ? "auto" : "none",
          transition: "opacity 0.3s ease, transform 0.3s ease, box-shadow 0.2s ease",
          zIndex: 999,
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 34px rgba(155,93,229,0.65)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px) scale(1.05)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(155,93,229,0.45)"; (e.currentTarget as HTMLElement).style.transform = showTop ? "translateY(0) scale(1)" : "translateY(12px) scale(0.9)"; }}
      >
        ↑
      </button>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}































// "use client";

// const sections = ["home", "about", "skills", "services", "projects", "contact"];
// const socials = [
//   { label: "GitHub", href: "https://github.com/ashfaq-dev", icon: "⌥" },
//   { label: "LinkedIn", href: "https://www.linkedin.com/in/ashfaque-ahmed-bhutto-a0a44827b", icon: "in" },
//   { label: "WhatsApp", href: "https://wa.me/923332758958", icon: "✆" },
// ];

// export default function Footer() {
//   const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

//   return (
//     <footer style={{ background: "var(--dark-bg)", borderTop: "1px solid rgba(155,93,229,0.12)", position: "relative", overflow: "hidden" }}>
//       {/* Top glow */}
//       <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 600, height: 2, background: "linear-gradient(90deg, transparent, #9B5DE5, #F15BB5, transparent)" }} />

//       {/* Main footer */}
//       <div className="container" style={{ padding: "60px 28px 32px" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: 48, marginBottom: 48 }} className="footer-grid">

//           {/* Brand col */}
//           <div>
//             <button onClick={() => go("home")} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, marginBottom: 16, display: "block" }}>
//               <span style={{ fontWeight: 800, fontSize: "1.6rem", letterSpacing: "-0.03em", background: "linear-gradient(135deg, #9B5DE5, #F15BB5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Ashfaq</span>
//               <span style={{ fontWeight: 800, fontSize: "1.6rem", color: "rgba(248,244,255,0.85)" }}>Dev</span>
//             </button>
//             <p style={{ color: "rgba(248,244,255,0.4)", fontSize: "0.9rem", lineHeight: 1.8, maxWidth: 280, marginBottom: 24 }}>
//               Full Stack Developer building premium web experiences. Based in Pakistan, available worldwide.
//             </p>
//             {/* Social links */}
//             <div style={{ display: "flex", gap: 10 }}>
//               {socials.map((s, i) => (
//                 <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{
//                   width: 40, height: 40, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center",
//                   background: "rgba(155,93,229,0.08)", border: "1px solid rgba(155,93,229,0.2)",
//                   color: "rgba(248,244,255,0.6)", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none",
//                   transition: "all 0.2s",
//                 }}
//                   onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(155,93,229,0.2)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(155,93,229,0.5)"; (e.currentTarget as HTMLElement).style.color = "#BF5AF2"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
//                   onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(155,93,229,0.08)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(155,93,229,0.2)"; (e.currentTarget as HTMLElement).style.color = "rgba(248,244,255,0.6)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}>
//                   {s.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Navigation col */}
//           <div>
//             <h4 style={{ fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#BF5AF2", fontWeight: 700, marginBottom: 20 }}>Navigation</h4>
//             <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//               {sections.map(s => (
//                 <button key={s} onClick={() => go(s)} style={{
//                   background: "none", border: "none", cursor: "pointer",
//                   color: "rgba(248,244,255,0.45)", fontSize: "0.9rem", fontWeight: 500,
//                   textAlign: "left", padding: 0, textTransform: "capitalize",
//                   transition: "color 0.2s", fontFamily: "'Plus Jakarta Sans', sans-serif",
//                 }}
//                   onMouseEnter={e => { (e.target as HTMLElement).style.color = "#BF5AF2"; }}
//                   onMouseLeave={e => { (e.target as HTMLElement).style.color = "rgba(248,244,255,0.45)"; }}>
//                   {s}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Contact col */}
//           <div>
//             <h4 style={{ fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#F15BB5", fontWeight: 700, marginBottom: 20 }}>Contact</h4>
//             <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
//               {[
//                 { icon: "✉️", val: "ashfaqahmedazad@gmail.com", href: "mailto:ashfaqahmedazad@gmail.com" },
//                 { icon: "🌐", val: "ashfaqdev.cloud", href: "https://ashfaqdev.cloud" },
//                 { icon: "📍", val: "Pakistan", href: "#" },
//               ].map((c, i) => (
//                 <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" style={{
//                   display: "flex", gap: 10, alignItems: "center",
//                   color: "rgba(248,244,255,0.4)", fontSize: "0.87rem", textDecoration: "none",
//                   transition: "color 0.2s",
//                 }}
//                   onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "rgba(248,244,255,0.85)"; }}
//                   onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(248,244,255,0.4)"; }}>
//                   <span>{c.icon}</span>
//                   <span>{c.val}</span>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div style={{ borderTop: "1px solid rgba(155,93,229,0.1)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
//           <p style={{ color: "rgba(248,244,255,0.25)", fontSize: "0.82rem" }}>
//             © {new Date().getFullYear()} Ashfaque Ahmed Bhutto · All rights reserved
//           </p>
//           <p style={{ color: "rgba(248,244,255,0.2)", fontSize: "0.82rem" }}>
//             Built with ❤️ using <span style={{ color: "#BF5AF2" }}>Next.js</span> & <span style={{ color: "#F15BB5" }}>Tailwind CSS</span>
//           </p>
//         </div>
//       </div>

//       <style>{`
//         @media (max-width: 768px) {
//           .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
//         }
//       `}</style>
//     </footer>
//   );
// }
