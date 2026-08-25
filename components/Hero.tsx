"use client";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const roles = ["Full Stack Developer", "React & Next.js Expert", "MERN Stack Builder", "UI/UX Enthusiast"];
const stats = [
  { n: 3, label: "Years Experience" },
  { n: 10, label: "Projects Shipped" },
  { n: 7, label: "Technologies" },
];

export default function Hero() {
  const [counts, setCounts] = useState([0, 0, 0]);
  const [roleIdx, setRoleIdx] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    stats.forEach((s, i) => {
      let v = 0;
      const step = s.n / 60;
      const timer = setInterval(() => {
        v = Math.min(v + step, s.n);
        setCounts(p => { const n = [...p]; n[i] = Math.floor(v); return n; });
        if (v >= s.n) clearInterval(timer);
      }, 28);
    });
    const role = setInterval(() => setRoleIdx(p => (p + 1) % roles.length), 3200);
    return () => { clearTimeout(t); clearInterval(role); };
  }, []);

  return (
    <section id="home" style={{
      minHeight: "100vh", position: "relative", overflow: "hidden",
      background: "var(--dark-bg)", display: "flex", alignItems: "center",
    }}>
      {/* Animated background orbs */}
      <div style={{ position: "absolute", top: "-15%", right: "-8%", width: 680, height: 680, borderRadius: "50%", background: "radial-gradient(circle, rgba(155,93,229,0.16) 0%, rgba(241,91,181,0.06) 50%, transparent 70%)", animation: "orb1 11s ease-in-out infinite", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-20%", left: "-12%", width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle, rgba(241,91,181,0.1) 0%, rgba(155,93,229,0.04) 50%, transparent 70%)", animation: "orb2 15s ease-in-out infinite", pointerEvents: "none" }} />
      {/* Grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(155,93,229,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(155,93,229,0.035) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

      <div className="container" style={{ width: "100%", paddingTop: 110, paddingBottom: 80, position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 56, alignItems: "center" }} className="hero-grid">

          {/* LEFT TEXT */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(44px)", transition: "all 0.9s cubic-bezier(0.4,0,0.2,1)" }}>

            {/* Available badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "7px 18px", borderRadius: 999, background: "rgba(155,93,229,0.1)", border: "1px solid rgba(155,93,229,0.28)", marginBottom: 30 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#9B5DE5", display: "block", boxShadow: "0 0 10px #9B5DE5", animation: "pulse-glow 2s ease infinite" }} />
              <span style={{ fontSize: "0.77rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#BF5AF2", fontWeight: 700 }}>Available for Work</span>
            </div>

            {/* <h1 style={{ fontSize: "clamp(2.6rem, 5.5vw, 5rem)", fontWeight: 800, lineHeight: 1.0,    marginBottom: 16, letterSpacing: "-0.03em" }}>
              Hello, I&apos;m<br />
              <span style={{
                background: "linear-gradient(135deg, #9B5DE5 0%, #F15BB5 55%, #FFD166 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                backgroundSize: "200% auto", animation: "shimmer 4s linear infinite",
              }}>Ashfaque</span>
              <br />Ahmed
            </h1> */}

          {/* <h1 style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: 16,
            letterSpacing: "-0.03em",
            fontStyle: "italic",

          }}>
            Hello, I&apos;m<br />
            <span style={{
              background: "linear-gradient(135deg, #9B5DE5 0%, #F15BB5 55%, #FFD166 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              backgroundSize: "200% auto", animation: "shimmer 4s linear infinite",
              fontStyle: "italic",
            }}>Ashfaque Ahmed</span>
          </h1> */}

            <h1
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                fontWeight: 400,
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
                marginBottom: 16,
              }}
            >
              <span style={{ fontStyle: "normal" }}>
                Hello, I&apos;m
              </span>
              <br />

              <span
                style={{
                  fontStyle: "italic",
                  background:
                    "linear-gradient(135deg, #9B5DE5 0%, #F15BB5 55%, #FFD166 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  backgroundSize: "200% auto",
                  animation: "shimmer 4s linear infinite",
                  fontWeight: "bold",
                }}
              >
                Ashfaque Ahmed
              </span>
            </h1>
            {/* Animated role */}
            <div style={{ height: 34, overflow: "hidden", marginBottom: 22 }}>
              <p key={roleIdx} style={{ fontSize: "1.1rem", color: "rgba(248,244,255,0.6)", fontWeight: 400, animation: "typeRole 0.45s ease", margin: 0 }}>
                ✦ {roles[roleIdx]}
              </p>
            </div>

            <p style={{ color: "rgba(248,244,255,0.45)", fontSize: "1rem", lineHeight: 1.9, maxWidth: 500, marginBottom: 44 }}>
              I create user-friendly web applications — simplifying complex requirements into smooth, interactive experiences that are both functional and visually premium.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 56 }}>
              <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" style={{
                padding: "13px 28px", borderRadius: 14,
                background: "linear-gradient(135deg, #9B5DE5, #F15BB5)",
                color: "#fff", fontWeight: 700, fontSize: "0.93rem", textDecoration: "none",
                boxShadow: "0 6px 28px rgba(155,93,229,0.4)", display: "inline-block",
                transition: "transform 0.22s, box-shadow 0.22s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 40px rgba(155,93,229,0.55)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(155,93,229,0.4)"; }}>
                📄 Download CV
              </a>
              <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} style={{
                padding: "13px 28px", borderRadius: 14, cursor: "pointer",
                background: "rgba(155,93,229,0.07)", border: "1px solid rgba(155,93,229,0.32)",
                color: "#BF5AF2", fontWeight: 700, fontSize: "0.93rem",
                transition: "all 0.22s", backdropFilter: "blur(8px)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(155,93,229,0.16)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(155,93,229,0.07)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}>
                View Projects →
              </button>
            </div>

            {/* Stats row */}
            <div style={{ display: "flex", gap: 0 }}>
              {stats.map((s, i) => (
                <div key={i} style={{
                  paddingRight: i < 2 ? 28 : 0, paddingLeft: i > 0 ? 28 : 0,
                  borderRight: i < 2 ? "1px solid rgba(155,93,229,0.18)" : "none",
                }}>
                  <div style={{
                    fontSize: "2.2rem", fontWeight: 800, lineHeight: 1,
                    background: "linear-gradient(135deg, #9B5DE5, #F15BB5)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}>
                    {counts[i]}+
                  </div>
                  <div style={{ fontSize: "0.79rem", color: "rgba(248,244,255,0.4)", marginTop: 4, letterSpacing: "0.04em" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>


{/* Right Image */}
<div className="hero-img" style={{
  display: "flex", justifyContent: "center", alignItems: "center",
  opacity: visible ? 1 : 0, transform: visible ? "none" : "translateX(50px)",
  transition: "all 0.85s cubic-bezier(0.4,0,0.2,1) 0.15s",
  }}>
  <div className="orbit-float" style={{ position: "relative", width: 320, height: 320 }}>

    {/* Center JavaScript Badge */}
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 80,
        height: 80,
        borderRadius: 16,
        background: "linear-gradient(135deg, #06B6D4, #A855F7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 0 40px rgba(6,182,212,0.3)",
        zIndex: 10,
      }}
    >
      <Icon icon="logos:javascript" width={42} height={42} />
    </div>

    {/* Orbit rings */}
    <div style={{ position: "absolute", inset: 0, border: "1px solid rgba(39,39,42,0.5)", borderRadius: "9999px" }} />
    <div style={{ position: "absolute", inset: -30, border: "1px solid rgba(39,39,42,0.3)", borderRadius: "9999px" }} />
    <div style={{ position: "absolute", inset: -60, border: "1px solid rgba(39,39,42,0.2)", borderRadius: "9999px" }} />

    {/* Orbiting icons */}
    <div className="orbit-ring" style={{ position: "absolute", top: "50%", left: "50%", width: 0, height: 0 }}>
      {[
        { icon: "logos:react", color: "#22D3EE" },
        { icon: "logos:nodejs-icon", color: "#4ADE80" },
        { icon: "logos:typescript-icon", color: "#60A5FA" },
        { icon: "logos:express", color: "#E4E4E7" },
        { icon: "logos:html-5", color: "#F97316" },
        { icon: "logos:css-3", color: "#3B82F6" },
        { icon: "logos:nextjs-icon", color: "#FFFFFF" },
      ].map((item, i, arr) => {
        const radius = 140;
        const angle = (360 / arr.length) * i;
        const rad = (angle * Math.PI) / 180;
        const x = radius * Math.cos(rad);
        const y = radius * Math.sin(rad);
        return (
          <div
            key={item.icon}
            className="orbit-icon"
            style={{
              position: "absolute",
              top: y,
              left: x,
              width: 40,
              height: 40,
              marginTop: -20,
              marginLeft: -20,
              borderRadius: 12,
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon icon={item.icon} width={22} style={{ color: item.color }} />
          </div>
        );
      })}
    </div>

    {/* Decorative dots */}
    <div style={{ position: "absolute", top: 16, left: "50%", width: 6, height: 6, background: "rgba(6,182,212,0.5)", borderRadius: "9999px" }} />
    <div style={{ position: "absolute", bottom: 16, left: "50%", width: 4, height: 4, background: "rgba(168,85,247,0.5)", borderRadius: "9999px" }} />
    <div style={{ position: "absolute", left: 16, top: "50%", width: 4, height: 4, background: "rgba(236,72,153,0.5)", borderRadius: "9999px" }} />
    <div style={{ position: "absolute", right: 16, top: "50%", width: 6, height: 6, background: "rgba(6,182,212,0.3)", borderRadius: "9999px" }} />
  </div>

  {/* Yahi is component ke andar scoped CSS — kisi alag file ki zarurat nahi */}
  <style jsx>{`
    .orbit-ring {
      animation: orbitRotate 16s linear infinite;
    }
    .orbit-icon {
      animation: orbitCounter 16s linear infinite;
    }
    @keyframes orbitRotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes orbitCounter {
      from { transform: rotate(0deg); }
      to { transform: rotate(-360deg); }
    }
  `}</style>
</div>


        </div>
      </div>

      <style>{`
        @keyframes orbitFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes orbitSpin {
          from { transform: rotate(0deg) translateX(140px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(140px) rotate(-360deg); }
        }
        @keyframes orbitSpinReverse {
          from { transform: rotate(0deg) translateX(140px) rotate(0deg); }
          to { transform: rotate(-360deg) translateX(140px) rotate(360deg); }
        }
        .orbit-float { animation: orbitFloat 4s ease-in-out infinite; }
        .orbit-item-1 { animation: orbitSpin 9s linear infinite; }
        .orbit-item-2 { animation: orbitSpin 12s linear infinite reverse; }
        .orbit-item-3 { animation: orbitSpinReverse 10s linear infinite; }

        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 52px !important; text-align: center; }
          .hero-grid > div:first-child > div:first-child { justify-content: center !important; }
          .hero-grid > div:first-child > div:nth-child(5) { justify-content: center !important; }
          .hero-grid > div:first-child > div:last-child { justify-content: center !important; }
          .hero-img { animation: none !important; }
          .hero-img img { width: 240px !important; height: 290px !important; }
        }
      `}</style>
    </section>
  );
}




























// "use client";
// import { useEffect, useState } from "react";

// const roles = ["Full Stack Developer", "React & Next.js Expert", "MERN Stack Builder", "UI/UX Enthusiast"];
// const stats = [
//   { n: 3, label: "Years Experience" },
//   { n: 10, label: "Projects Shipped" },
//   { n: 7, label: "Technologies" },
// ];

// export default function Hero() {
//   const [counts, setCounts] = useState([0, 0, 0]);
//   const [roleIdx, setRoleIdx] = useState(0);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const t = setTimeout(() => setVisible(true), 80);
//     stats.forEach((s, i) => {
//       let v = 0;
//       const step = s.n / 60;
//       const timer = setInterval(() => {
//         v = Math.min(v + step, s.n);
//         setCounts(p => { const n = [...p]; n[i] = Math.floor(v); return n; });
//         if (v >= s.n) clearInterval(timer);
//       }, 28);
//     });
//     const role = setInterval(() => setRoleIdx(p => (p + 1) % roles.length), 3200);
//     return () => { clearTimeout(t); clearInterval(role); };
//   }, []);

//   return (
//     <section id="home" style={{
//       minHeight: "100vh", position: "relative", overflow: "hidden",
//       background: "var(--dark-bg)", display: "flex", alignItems: "center",
//     }}>
//       {/* Animated background orbs */}
//       <div style={{ position: "absolute", top: "-15%", right: "-8%", width: 680, height: 680, borderRadius: "50%", background: "radial-gradient(circle, rgba(155,93,229,0.16) 0%, rgba(241,91,181,0.06) 50%, transparent 70%)", animation: "orb1 11s ease-in-out infinite", pointerEvents: "none" }} />
//       <div style={{ position: "absolute", bottom: "-20%", left: "-12%", width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle, rgba(241,91,181,0.1) 0%, rgba(155,93,229,0.04) 50%, transparent 70%)", animation: "orb2 15s ease-in-out infinite", pointerEvents: "none" }} />
//       {/* Grid */}
//       <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(155,93,229,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(155,93,229,0.035) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

//       <div className="container" style={{ width: "100%", paddingTop: 110, paddingBottom: 80, position: "relative", zIndex: 1 }}>
//         <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 56, alignItems: "center" }} className="hero-grid">

//           {/* LEFT TEXT */}
//           <div style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(44px)", transition: "all 0.9s cubic-bezier(0.4,0,0.2,1)" }}>

//             {/* Available badge */}
//             <div style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "7px 18px", borderRadius: 999, background: "rgba(155,93,229,0.1)", border: "1px solid rgba(155,93,229,0.28)", marginBottom: 30 }}>
//               <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#9B5DE5", display: "block", boxShadow: "0 0 10px #9B5DE5", animation: "pulse-glow 2s ease infinite" }} />
//               <span style={{ fontSize: "0.77rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#BF5AF2", fontWeight: 700 }}>Available for Work</span>
//             </div>

//             <h1 style={{ fontSize: "clamp(2.6rem, 5.5vw, 5rem)", fontWeight: 800, lineHeight: 1.0, marginBottom: 16, letterSpacing: "-0.03em" }}>
//               Hello, I&apos;m<br />
//               <span style={{
//                 background: "linear-gradient(135deg, #9B5DE5 0%, #F15BB5 55%, #FFD166 100%)",
//                 WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
//                 backgroundSize: "200% auto", animation: "shimmer 4s linear infinite",
//               }}>Ashfaque</span>
//               <br />Ahmed
//             </h1>

//             {/* Animated role */}
//             <div style={{ height: 34, overflow: "hidden", marginBottom: 22 }}>
//               <p key={roleIdx} style={{ fontSize: "1.1rem", color: "rgba(248,244,255,0.6)", fontWeight: 400, animation: "typeRole 0.45s ease", margin: 0 }}>
//                 ✦ {roles[roleIdx]}
//               </p>
//             </div>

//             <p style={{ color: "rgba(248,244,255,0.45)", fontSize: "1rem", lineHeight: 1.9, maxWidth: 500, marginBottom: 44 }}>
//               I create user-friendly web applications — simplifying complex requirements into smooth, interactive experiences that are both functional and visually premium.
//             </p>

//             {/* CTA Buttons */}
//             <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 56 }}>
//               <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" style={{
//                 padding: "13px 28px", borderRadius: 14,
//                 background: "linear-gradient(135deg, #9B5DE5, #F15BB5)",
//                 color: "#fff", fontWeight: 700, fontSize: "0.93rem", textDecoration: "none",
//                 boxShadow: "0 6px 28px rgba(155,93,229,0.4)", display: "inline-block",
//                 transition: "transform 0.22s, box-shadow 0.22s",
//               }}
//                 onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 40px rgba(155,93,229,0.55)"; }}
//                 onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(155,93,229,0.4)"; }}>
//                 📄 Download CV
//               </a>
//               <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} style={{
//                 padding: "13px 28px", borderRadius: 14, cursor: "pointer",
//                 background: "rgba(155,93,229,0.07)", border: "1px solid rgba(155,93,229,0.32)",
//                 color: "#BF5AF2", fontWeight: 700, fontSize: "0.93rem",
//                 transition: "all 0.22s", backdropFilter: "blur(8px)",
//                 fontFamily: "'Plus Jakarta Sans', sans-serif",
//               }}
//                 onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(155,93,229,0.16)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
//                 onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(155,93,229,0.07)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}>
//                 View Projects →
//               </button>
//             </div>

//             {/* Stats row */}
//             <div style={{ display: "flex", gap: 0 }}>
//               {stats.map((s, i) => (
//                 <div key={i} style={{
//                   paddingRight: i < 2 ? 28 : 0, paddingLeft: i > 0 ? 28 : 0,
//                   borderRight: i < 2 ? "1px solid rgba(155,93,229,0.18)" : "none",
//                 }}>
//                   <div style={{
//                     fontSize: "2.2rem", fontWeight: 800, lineHeight: 1,
//                     background: "linear-gradient(135deg, #9B5DE5, #F15BB5)",
//                     WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
//                   }}>
//                     {counts[i]}+
//                   </div>
//                   <div style={{ fontSize: "0.79rem", color: "rgba(248,244,255,0.4)", marginTop: 4, letterSpacing: "0.04em" }}>{s.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

















// {/* Right Image */}














//         </div>
//       </div>

//       <style>{`
//         @media (max-width: 860px) {
//           .hero-grid { grid-template-columns: 1fr !important; gap: 52px !important; text-align: center; }
//           .hero-grid > div:first-child > div:first-child { justify-content: center !important; }
//           .hero-grid > div:first-child > div:nth-child(5) { justify-content: center !important; }
//           .hero-grid > div:first-child > div:last-child { justify-content: center !important; }
//           .hero-img { animation: none !important; }
//           .hero-img img { width: 240px !important; height: 290px !important; }
//         }
//       `}</style>
//     </section>
//   );
// }
