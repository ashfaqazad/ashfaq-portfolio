"use client";
import { useEffect, useRef, useState } from "react";

const contactInfo = [
  { icon: "✉️", label: "Email", value: "ashfaqahmedazad@gmail.com", href: "mailto:ashfaqahmedazad@gmail.com", color: "#9B5DE5" },
  { icon: "💼", label: "LinkedIn", value: "ashfaque-ahmed-bhutto", href: "https://www.linkedin.com/in/ashfaque-ahmed-bhutto-a0a44827b", color: "#F15BB5" },
  { icon: "📱", label: "WhatsApp", value: "+92 333 2758958", href: "https://wa.me/923332758958", color: "#FFD166" },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const send = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const r = await fetch("https://formsubmit.co/ajax/ashfaqahmedazad@gmail.com", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (r.ok) { setStatus("sent"); setForm({ name: "", email: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
    setTimeout(() => setStatus("idle"), 4500);
  };

  const inp: React.CSSProperties = {
    width: "100%", padding: "13px 17px", borderRadius: 13,
    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(155,93,229,0.22)",
    color: "var(--light-text)", fontSize: "0.93rem",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    outline: "none", transition: "border-color 0.2s, box-shadow 0.2s",
  };

  return (
    <section id="contact" ref={ref} style={{
      padding: "110px 0 70px", background: "var(--dark-bg)", position: "relative", overflow: "hidden",
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
      `,
      backgroundSize: "42px 42px",
      backgroundPosition: "center",
    }}>
      {/* fade mask so grid lines are subtle everywhere, stronger fade near edges */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 40%, transparent 0%, var(--dark-bg) 78%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-5%", right: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(241,91,181,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "5%", left: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(155,93,229,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontSize: "0.74rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B5DE5", fontWeight: 700 }}>Get In Touch</span>
          <div style={{ width: 40, height: 3, background: "linear-gradient(90deg, #9B5DE5, #F15BB5)", margin: "10px auto 20px", borderRadius: 2 }} />
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "var(--text)" }}>
            Let&apos;s{" "}
            <span style={{ background: "linear-gradient(135deg, #9B5DE5, #F15BB5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Work Together
            </span>
          </h2>
          <p style={{ color: "#9CA3AF", marginTop: 12, maxWidth: 400, margin: "12px auto 0", lineHeight: 1.8 }}>
            Ready to elevate your digital presence? Let&apos;s discuss your project.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.35fr", gap: 44, alignItems: "start" }} className="contact-grid">

          {/* Left info */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateX(-32px)", transition: "all 0.75s ease" }}>
            <h3 style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--light-text)", marginBottom: 22 }}>Contact Information</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 13, marginBottom: 32 }}>
              {contactInfo.map((c, i) => (
                <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" style={{
                  display: "flex", alignItems: "center", gap: 15,
                  padding: "17px 20px", borderRadius: 17,
                  background: "rgba(255,255,255,0.035)", border: `1px solid ${c.color}30`,
                  backdropFilter: "blur(14px)", textDecoration: "none",
                  boxShadow: "0 3px 16px rgba(0,0,0,0.25)",
                  transition: "all 0.22s",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${c.color}60`; (e.currentTarget as HTMLElement).style.transform = "translateX(5px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${c.color}22`; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `${c.color}30`; (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 3px 16px rgba(0,0,0,0.25)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.035)"; }}>
                  <div style={{ width: 46, height: 46, borderRadius: 14, background: `${c.color}20`, border: `1px solid ${c.color}35`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", flexShrink: 0 }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.73rem", color: c.color, fontWeight: 700, marginBottom: 2, letterSpacing: "0.05em" }}>{c.label}</div>
                    <div style={{ color: "#E5E7EB", fontSize: "0.87rem", fontWeight: 500 }}>{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability card */}
            <div style={{ padding: "20px 22px", borderRadius: 18, background: "linear-gradient(135deg, rgba(155,93,229,0.1), rgba(241,91,181,0.06))", border: "1px solid rgba(155,93,229,0.25)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E", display: "block", boxShadow: "0 0 8px #22C55E", animation: "pulse-glow 2s ease infinite" }} />
                <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#BF5AF2", letterSpacing: "0.04em" }}>Currently Available</span>
              </div>
              <p style={{ color: "#9CA3AF", fontSize: "0.88rem", lineHeight: 1.8 }}>
                Open for <strong style={{ color: "#BF5AF2" }}>freelance projects</strong> & full-time roles. Let&apos;s build something extraordinary!
              </p>
            </div>
          </div>

          {/* Right form */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateX(32px)", transition: "all 0.75s ease 0.16s" }}>
            <div style={{ padding: "36px 30px", borderRadius: 24, background: "rgba(255,255,255,0.035)", border: "1px solid rgba(155,93,229,0.2)", backdropFilter: "blur(18px)", boxShadow: "0 24px 64px rgba(0,0,0,0.3)" }}>
              <h3 style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--light-text)", marginBottom: 24 }}>Send a Message ✉️</h3>

              <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
                <input type="text" placeholder="Your Full Name" value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })} style={inp}
                  onFocus={e => { (e.target as HTMLElement).style.borderColor = "rgba(155,93,229,0.6)"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(155,93,229,0.13)"; }}
                  onBlur={e => { (e.target as HTMLElement).style.borderColor = "rgba(155,93,229,0.22)"; (e.target as HTMLElement).style.boxShadow = "none"; }} />

                <input type="email" placeholder="Your Email Address" value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })} style={inp}
                  onFocus={e => { (e.target as HTMLElement).style.borderColor = "rgba(155,93,229,0.6)"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(155,93,229,0.13)"; }}
                  onBlur={e => { (e.target as HTMLElement).style.borderColor = "rgba(155,93,229,0.22)"; (e.target as HTMLElement).style.boxShadow = "none"; }} />

                <textarea placeholder="Your Message..." rows={5} value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{ ...inp, resize: "vertical", minHeight: 130 }}
                  onFocus={e => { (e.target as HTMLElement).style.borderColor = "rgba(155,93,229,0.6)"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(155,93,229,0.13)"; }}
                  onBlur={e => { (e.target as HTMLElement).style.borderColor = "rgba(155,93,229,0.22)"; (e.target as HTMLElement).style.boxShadow = "none"; }} />

                <button onClick={send} disabled={status === "sending"} style={{
                  padding: "14px", borderRadius: 14, border: "none", cursor: status === "sending" ? "wait" : "pointer",
                  background: status === "sent"
                    ? "linear-gradient(135deg, #22C55E, #16A34A)"
                    : status === "error"
                    ? "linear-gradient(135deg, #EF4444, #DC2626)"
                    : "linear-gradient(135deg, #9B5DE5, #F15BB5)",
                  color: "#fff", fontWeight: 800, fontSize: "0.95rem",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  boxShadow: "0 6px 28px rgba(155,93,229,0.35)",
                  transition: "all 0.25s", opacity: status === "sending" ? 0.75 : 1,
                }}
                  onMouseEnter={e => { if (status === "idle") { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 36px rgba(155,93,229,0.5)"; } }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(155,93,229,0.35)"; }}>
                  {status === "idle" ? "Send Message ✉️"
                    : status === "sending" ? "Sending..."
                    : status === "sent" ? "✓ Message Sent Successfully!"
                    : "⚠ Error — Try Again"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}



























// "use client";
// import { useEffect, useRef, useState } from "react";

// const contactInfo = [
//   { icon: "✉️", label: "Email", value: "ashfaqahmedazad@gmail.com", href: "mailto:ashfaqahmedazad@gmail.com", color: "#9B5DE5" },
//   { icon: "💼", label: "LinkedIn", value: "ashfaque-ahmed-bhutto", href: "https://www.linkedin.com/in/ashfaque-ahmed-bhutto-a0a44827b", color: "#F15BB5" },
//   { icon: "📱", label: "WhatsApp", value: "+92 333 2758958", href: "https://wa.me/923332758958", color: "#FFD166" },
// ];

// export default function Contact() {
//   const ref = useRef<HTMLElement>(null);
//   const [visible, setVisible] = useState(false);
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

//   useEffect(() => {
//     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, []);

//   const send = async () => {
//     if (!form.name || !form.email || !form.message) return;
//     setStatus("sending");
//     try {
//       const r = await fetch("https://formsubmit.co/ajax/ashfaqahmedazad@gmail.com", {
//         method: "POST", headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });
//       if (r.ok) { setStatus("sent"); setForm({ name: "", email: "", message: "" }); }
//       else setStatus("error");
//     } catch { setStatus("error"); }
//     setTimeout(() => setStatus("idle"), 4500);
//   };

//   const inp: React.CSSProperties = {
//     width: "100%", padding: "13px 17px", borderRadius: 13,
//     background: "rgba(155,93,229,0.06)", border: "1px solid rgba(155,93,229,0.18)",
//     color: "var(--light-text)", fontSize: "0.93rem",
//     fontFamily: "'Plus Jakarta Sans', sans-serif",
//     outline: "none", transition: "border-color 0.2s, box-shadow 0.2s",
//   };

//   return (
//     <section id="contact" ref={ref} style={{ padding: "110px 0 70px", background: "var(--dark-bg)", position: "relative", overflow: "hidden" }}>
//       <div style={{ position: "absolute", bottom: "-5%", right: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(241,91,181,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
//       <div style={{ position: "absolute", top: "5%", left: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(155,93,229,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

//       <div className="container" style={{ position: "relative", zIndex: 1 }}>
//         {/* Header */}
//         <div style={{ textAlign: "center", marginBottom: 64 }}>
//           <span style={{ fontSize: "0.74rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B5DE5", fontWeight: 700 }}>Get In Touch</span>
//           <div style={{ width: 40, height: 3, background: "linear-gradient(90deg, #9B5DE5, #F15BB5)", margin: "10px auto 20px", borderRadius: 2 }} />
//           <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "var(--light-text)" }}>
//             Let&apos;s{" "}
//             <span style={{ background: "linear-gradient(135deg, #9B5DE5, #F15BB5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
//               Work Together
//             </span>
//           </h2>
//           <p style={{ color: "#6B7280", marginTop: 12, maxWidth: 400, margin: "12px auto 0", lineHeight: 1.8 }}>
//             Ready to elevate your digital presence? Let&apos;s discuss your project.
//           </p>
//         </div>

//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1.35fr", gap: 44, alignItems: "start" }} className="contact-grid">

//           {/* Left info */}
//           <div style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateX(-32px)", transition: "all 0.75s ease" }}>
//             <h3 style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--light-text)", marginBottom: 22 }}>Contact Information</h3>
//             <div style={{ display: "flex", flexDirection: "column", gap: 13, marginBottom: 32 }}>
//               {contactInfo.map((c, i) => (
//                 <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" style={{
//                   display: "flex", alignItems: "center", gap: 15,
//                   padding: "17px 20px", borderRadius: 17,
//                   background: "rgba(255,255,255,0.88)", border: `1px solid ${c.color}18`,
//                   backdropFilter: "blur(14px)", textDecoration: "none",
//                   boxShadow: "0 3px 16px rgba(155,93,229,0.07)",
//                   transition: "all 0.22s",
//                 }}
//                   onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${c.color}35`; (e.currentTarget as HTMLElement).style.transform = "translateX(5px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${c.color}18`; }}
//                   onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `${c.color}18`; (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 3px 16px rgba(155,93,229,0.07)"; }}>
//                   <div style={{ width: 46, height: 46, borderRadius: 14, background: `${c.color}14`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", flexShrink: 0 }}>
//                     {c.icon}
//                   </div>
//                   <div>
//                     <div style={{ fontSize: "0.73rem", color: c.color, fontWeight: 700, marginBottom: 2, letterSpacing: "0.05em" }}>{c.label}</div>
//                     <div style={{ color: "#374151", fontSize: "0.87rem", fontWeight: 500 }}>{c.value}</div>
//                   </div>
//                 </a>
//               ))}
//             </div>

//             {/* Availability card */}
//             <div style={{ padding: "20px 22px", borderRadius: 18, background: "linear-gradient(135deg, rgba(155,93,229,0.08), rgba(241,91,181,0.05))", border: "1px solid rgba(155,93,229,0.15)" }}>
//               <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
//                 <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E", display: "block", boxShadow: "0 0 8px #22C55E", animation: "pulse-glow 2s ease infinite" }} />
//                 <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#9B5DE5", letterSpacing: "0.04em" }}>Currently Available</span>
//               </div>
//               <p style={{ color: "#4B5563", fontSize: "0.88rem", lineHeight: 1.8 }}>
//                 Open for <strong style={{ color: "#9B5DE5" }}>freelance projects</strong> & full-time roles. Let&apos;s build something extraordinary!
//               </p>
//             </div>
//           </div>

//           {/* Right form */}
//           <div style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateX(32px)", transition: "all 0.75s ease 0.16s" }}>
//             <div style={{ padding: "36px 30px", borderRadius: 24, background: "rgba(255,255,255,0.88)", border: "1px solid rgba(155,93,229,0.13)", backdropFilter: "blur(18px)", boxShadow: "0 24px 64px rgba(155,93,229,0.1)" }}>
//               <h3 style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--light-text)", marginBottom: 24 }}>Send a Message ✉️</h3>

//               <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
//                 <input type="text" placeholder="Your Full Name" value={form.name}
//                   onChange={e => setForm({ ...form, name: e.target.value })} style={inp}
//                   onFocus={e => { (e.target as HTMLElement).style.borderColor = "rgba(155,93,229,0.5)"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(155,93,229,0.09)"; }}
//                   onBlur={e => { (e.target as HTMLElement).style.borderColor = "rgba(155,93,229,0.18)"; (e.target as HTMLElement).style.boxShadow = "none"; }} />

//                 <input type="email" placeholder="Your Email Address" value={form.email}
//                   onChange={e => setForm({ ...form, email: e.target.value })} style={inp}
//                   onFocus={e => { (e.target as HTMLElement).style.borderColor = "rgba(155,93,229,0.5)"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(155,93,229,0.09)"; }}
//                   onBlur={e => { (e.target as HTMLElement).style.borderColor = "rgba(155,93,229,0.18)"; (e.target as HTMLElement).style.boxShadow = "none"; }} />

//                 <textarea placeholder="Your Message..." rows={5} value={form.message}
//                   onChange={e => setForm({ ...form, message: e.target.value })}
//                   style={{ ...inp, resize: "vertical", minHeight: 130 }}
//                   onFocus={e => { (e.target as HTMLElement).style.borderColor = "rgba(155,93,229,0.5)"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(155,93,229,0.09)"; }}
//                   onBlur={e => { (e.target as HTMLElement).style.borderColor = "rgba(155,93,229,0.18)"; (e.target as HTMLElement).style.boxShadow = "none"; }} />

//                 <button onClick={send} disabled={status === "sending"} style={{
//                   padding: "14px", borderRadius: 14, border: "none", cursor: status === "sending" ? "wait" : "pointer",
//                   background: status === "sent"
//                     ? "linear-gradient(135deg, #22C55E, #16A34A)"
//                     : status === "error"
//                     ? "linear-gradient(135deg, #EF4444, #DC2626)"
//                     : "linear-gradient(135deg, #9B5DE5, #F15BB5)",
//                   color: "#fff", fontWeight: 800, fontSize: "0.95rem",
//                   fontFamily: "'Plus Jakarta Sans', sans-serif",
//                   boxShadow: "0 6px 28px rgba(155,93,229,0.35)",
//                   transition: "all 0.25s", opacity: status === "sending" ? 0.75 : 1,
//                 }}
//                   onMouseEnter={e => { if (status === "idle") { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 36px rgba(155,93,229,0.5)"; } }}
//                   onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(155,93,229,0.35)"; }}>
//                   {status === "idle" ? "Send Message ✉️"
//                     : status === "sending" ? "Sending..."
//                     : status === "sent" ? "✓ Message Sent Successfully!"
//                     : "⚠ Error — Try Again"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @media (max-width: 860px) {
//           .contact-grid { grid-template-columns: 1fr !important; }
//         }
//       `}</style>
//     </section>
//   );
// }
