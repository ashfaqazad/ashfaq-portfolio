"use client";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: "🎨", title: "UI/UX Design", color: "#9B5DE5", num: "01",
    short: "Clean, user-friendly interfaces optimized for every device and user.",
    full: "I design web interfaces that are intuitive and pleasant to use. Clean layouts, readable fonts, and well-placed elements create a natural feel. Every design is responsive across phones, tablets, and desktops with accessibility at the core.",
  },
  {
    icon: "💻", title: "Web Development", color: "#F15BB5", num: "02",
    short: "Full-stack MERN + Next.js apps — fast, scalable, production-ready.",
    full: "I build complete full-stack applications using MERN stack and Next.js. From polished React frontends to secure Node/Express APIs and MongoDB databases. Clean, maintainable, and scalable code is always the standard.",
  },
  {
    icon: "🔗", title: "API Integration", color: "#FFD166", num: "03",
    short: "Connect your app with payments, OAuth auth, and live data sources.",
    full: "I specialize in integrating third-party APIs — payment gateways, Google/Facebook OAuth login, and live data feeds. Every integration is secure, performant, and works seamlessly with your existing tech stack.",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    // <section id="services" ref={ref} style={{ padding: "110px 0", background: "var(--dark-bg)", position: "relative", overflow: "hidden" }}>
    //   <div style={{ position: "absolute", top: "10%", right: "0%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(155,93,229,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
    //   <div style={{ position: "absolute", bottom: "5%", left: "0%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(241,91,181,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

    //   <div className="container" style={{ position: "relative", zIndex: 1 }}>
    //     <div style={{ textAlign: "center", marginBottom: 64 }}>
    //       <span style={{ fontSize: "0.74rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B5DE5", fontWeight: 700 }}>What I Offer</span>
    //       <div style={{ width: 40, height: 3, background: "linear-gradient(90deg, #9B5DE5, #F15BB5)", margin: "10px auto 20px", borderRadius: 2 }} />
    //       <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "var(--light-text)" }}>
    //         My{" "}
    //         <span style={{ background: "linear-gradient(135deg, #9B5DE5, #F15BB5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
    //           Services
    //         </span>
    //       </h2>
    //       <p style={{ color: "#9CA3AF", marginTop: 12, maxWidth: 420, margin: "12px auto 0", lineHeight: 1.8 }}>
    //         I transform innovative ideas into distinctive, high-quality digital products.
    //       </p>
    //     </div>

    //     <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))", gap: 22 }}>
    //       {services.map((s, i) => (
    //         <div key={i} onClick={() => setOpen(open === i ? null : i)} style={{
    //           padding: "36px 30px", borderRadius: 24, cursor: "pointer",
    //           background: open === i
    //             ? `linear-gradient(135deg, ${s.color}1c, rgba(255,255,255,0.045))`
    //             : "rgba(255,255,255,0.035)",
    //           border: `1px solid ${open === i ? s.color + "55" : "rgba(255,255,255,0.09)"}`,
    //           backdropFilter: "blur(14px)",
    //           boxShadow: open === i ? `0 24px 64px ${s.color}22` : "0 4px 22px rgba(0,0,0,0.25)",
    //           opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(44px)",
    //           transition: `all 0.6s cubic-bezier(0.4,0,0.2,1) ${i * 0.12}s`,
    //           position: "relative", overflow: "hidden",
    //         }}
    //           onMouseEnter={e => { if (open !== i) { (e.currentTarget as HTMLElement).style.boxShadow = `0 14px 44px ${s.color}22`; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.borderColor = s.color + "40"; } }}
    //           onMouseLeave={e => { if (open !== i) { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 22px rgba(0,0,0,0.25)"; (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.09)"; } }}>

    //           {/* Top gradient accent */}
    //           <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${s.color}, transparent)`, opacity: open === i ? 1 : 0.5, transition: "opacity 0.3s" }} />

    //           {/* Number tag */}
    //           <div style={{ position: "absolute", top: 24, right: 24, fontSize: "1.8rem", fontWeight: 800, color: `${s.color}30`, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{s.num}</div>

    //           {/* Icon */}
    //           <div style={{ width: 58, height: 58, borderRadius: 17, background: `${s.color}18`, border: `1px solid ${s.color}35`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.7rem", marginBottom: 20 }}>
    //             {s.icon}
    //           </div>

    //           <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--light-text)", marginBottom: 12 }}>{s.title}</h3>
    //           <p style={{ color: "#9CA3AF", lineHeight: 1.82, fontSize: "0.92rem", marginBottom: 20 }}>
    //             {open === i ? s.full : s.short}
    //           </p>
    //           <div style={{ color: s.color, fontSize: "0.83rem", fontWeight: 700, display: "flex", alignItems: "center", gap: 4 }}>
    //             {open === i ? "Show Less ↑" : "Learn More ↓"}
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>



    <section id="services" ref={ref} style={{
      padding: "110px 0", background: "var(--dark-bg)", position: "relative", overflow: "hidden",
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
      `,
      backgroundSize: "42px 42px",
      backgroundPosition: "center",
    }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 40%, transparent 0%, var(--dark-bg) 78%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "10%", right: "0%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(155,93,229,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "5%", left: "0%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(241,91,181,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontSize: "0.74rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B5DE5", fontWeight: 700 }}>What I Offer</span>
          <div style={{ width: 40, height: 3, background: "linear-gradient(90deg, #9B5DE5, #F15BB5)", margin: "10px auto 20px", borderRadius: 2 }} />
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "var(--text)" }}>
            My{" "}
            <span style={{ background: "linear-gradient(135deg, #9B5DE5, #F15BB5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Services
            </span>
          </h2>
          <p style={{ color: "#9CA3AF", marginTop: 12, maxWidth: 420, margin: "12px auto 0", lineHeight: 1.8 }}>
            I transform innovative ideas into distinctive, high-quality digital products.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))", gap: 22 }}>
          {services.map((s, i) => (
            <div key={i} onClick={() => setOpen(open === i ? null : i)} style={{
              padding: "36px 30px", borderRadius: 24, cursor: "pointer",
              background: open === i
                ? `linear-gradient(135deg, ${s.color}1c, rgba(255,255,255,0.045))`
                : "rgba(255,255,255,0.035)",
              border: `1px solid ${open === i ? s.color + "55" : "rgba(255,255,255,0.09)"}`,
              backdropFilter: "blur(14px)",
              boxShadow: open === i ? `0 24px 64px ${s.color}22` : "0 4px 22px rgba(0,0,0,0.25)",
              opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(44px)",
              transition: `all 0.6s cubic-bezier(0.4,0,0.2,1) ${i * 0.12}s`,
              position: "relative", overflow: "hidden",
            }}
              onMouseEnter={e => { if (open !== i) { (e.currentTarget as HTMLElement).style.boxShadow = `0 14px 44px ${s.color}22`; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.borderColor = s.color + "40"; } }}
              onMouseLeave={e => { if (open !== i) { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 22px rgba(0,0,0,0.25)"; (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.09)"; } }}>

              {/* Top gradient accent */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${s.color}, transparent)`, opacity: open === i ? 1 : 0.5, transition: "opacity 0.3s" }} />

              {/* Number tag */}
              <div style={{ position: "absolute", top: 24, right: 24, fontSize: "1.8rem", fontWeight: 800, color: `${s.color}30`, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{s.num}</div>

              {/* Icon */}
              <div style={{ width: 58, height: 58, borderRadius: 17, background: `${s.color}18`, border: `1px solid ${s.color}35`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.7rem", marginBottom: 20 }}>
                {s.icon}
              </div>

              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text)", marginBottom: 12 }}>{s.title}</h3>
              <p style={{ color: "#9CA3AF", lineHeight: 1.82, fontSize: "0.92rem", marginBottom: 20 }}>
                {open === i ? s.full : s.short}
              </p>
              <div style={{ color: s.color, fontSize: "0.83rem", fontWeight: 700, display: "flex", alignItems: "center", gap: 4 }}>
                {open === i ? "Show Less ↑" : "Learn More ↓"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    
  );
}





















// "use client";
// import { useEffect, useRef, useState } from "react";

// const services = [
//   {
//     icon: "🎨", title: "UI/UX Design", color: "#9B5DE5", num: "01",
//     short: "Clean, user-friendly interfaces optimized for every device and user.",
//     full: "I design web interfaces that are intuitive and pleasant to use. Clean layouts, readable fonts, and well-placed elements create a natural feel. Every design is responsive across phones, tablets, and desktops with accessibility at the core.",
//   },
//   {
//     icon: "💻", title: "Web Development", color: "#F15BB5", num: "02",
//     short: "Full-stack MERN + Next.js apps — fast, scalable, production-ready.",
//     full: "I build complete full-stack applications using MERN stack and Next.js. From polished React frontends to secure Node/Express APIs and MongoDB databases. Clean, maintainable, and scalable code is always the standard.",
//   },
//   {
//     icon: "🔗", title: "API Integration", color: "#FFD166", num: "03",
//     short: "Connect your app with payments, OAuth auth, and live data sources.",
//     full: "I specialize in integrating third-party APIs — payment gateways, Google/Facebook OAuth login, and live data feeds. Every integration is secure, performant, and works seamlessly with your existing tech stack.",
//   },
// ];

// export default function Services() {
//   const ref = useRef<HTMLElement>(null);
//   const [visible, setVisible] = useState(false);
//   const [open, setOpen] = useState<number | null>(null);

//   useEffect(() => {
//     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <section id="services" ref={ref} style={{ padding: "110px 0", background: "var(--dark-bg)", position: "relative", overflow: "hidden" }}>
//       <div style={{ position: "absolute", top: "10%", right: "0%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(155,93,229,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
//       <div style={{ position: "absolute", bottom: "5%", left: "0%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(241,91,181,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

//       <div className="container" style={{ position: "relative", zIndex: 1 }}>
//         <div style={{ textAlign: "center", marginBottom: 64 }}>
//           <span style={{ fontSize: "0.74rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B5DE5", fontWeight: 700 }}>What I Offer</span>
//           <div style={{ width: 40, height: 3, background: "linear-gradient(90deg, #9B5DE5, #F15BB5)", margin: "10px auto 20px", borderRadius: 2 }} />
//           <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "var(--light-text)" }}>
//             My{" "}
//             <span style={{ background: "linear-gradient(135deg, #9B5DE5, #F15BB5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
//               Services
//             </span>
//           </h2>
//           <p style={{ color: "#6B7280", marginTop: 12, maxWidth: 420, margin: "12px auto 0", lineHeight: 1.8 }}>
//             I transform innovative ideas into distinctive, high-quality digital products.
//           </p>
//         </div>

//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))", gap: 22 }}>
//           {services.map((s, i) => (
//             <div key={i} onClick={() => setOpen(open === i ? null : i)} style={{
//               padding: "36px 30px", borderRadius: 24, cursor: "pointer",
//               background: open === i ? `linear-gradient(135deg, ${s.color}0a, rgba(255,255,255,0.92))` : "rgba(255,255,255,0.88)",
//               border: `1px solid ${open === i ? s.color + "38" : "rgba(155,93,229,0.1)"}`,
//               backdropFilter: "blur(14px)",
//               boxShadow: open === i ? `0 24px 64px ${s.color}16` : "0 4px 22px rgba(155,93,229,0.07)",
//               opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(44px)",
//               transition: `all 0.6s cubic-bezier(0.4,0,0.2,1) ${i * 0.12}s`,
//               position: "relative", overflow: "hidden",
//             }}
//               onMouseEnter={e => { if (open !== i) { (e.currentTarget as HTMLElement).style.boxShadow = `0 14px 44px ${s.color}14`; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; } }}
//               onMouseLeave={e => { if (open !== i) { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 22px rgba(155,93,229,0.07)"; (e.currentTarget as HTMLElement).style.transform = "none"; } }}>

//               {/* Top gradient accent */}
//               <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${s.color}, transparent)`, opacity: open === i ? 1 : 0.4, transition: "opacity 0.3s" }} />

//               {/* Number tag */}
//               <div style={{ position: "absolute", top: 24, right: 24, fontSize: "1.8rem", fontWeight: 800, color: `${s.color}18`, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{s.num}</div>

//               {/* Icon */}
//               <div style={{ width: 58, height: 58, borderRadius: 17, background: `${s.color}12`, border: `1px solid ${s.color}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.7rem", marginBottom: 20 }}>
//                 {s.icon}
//               </div>

//               <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--light-text)", marginBottom: 12 }}>{s.title}</h3>
//               <p style={{ color: "#6B7280", lineHeight: 1.82, fontSize: "0.92rem", marginBottom: 20 }}>
//                 {open === i ? s.full : s.short}
//               </p>
//               <div style={{ color: s.color, fontSize: "0.83rem", fontWeight: 700, display: "flex", alignItems: "center", gap: 4 }}>
//                 {open === i ? "Show Less ↑" : "Learn More ↓"}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
