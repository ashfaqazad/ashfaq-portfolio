// Projects.tsx
'use client';
import { useState } from 'react';

interface Project {
  title: string;
  category: 'Full-Stack' | 'Front-End';
  desc: string;
  stack: string[];
  image: string;
  live: string | null;
}

const projects: Project[] = [
  {
    title: 'PDF Linx',
    category: 'Full-Stack',
    desc: 'PDF Linx is my flagship full-stack SaaS — a complete PDF & document toolkit with 31+ tools, built and refined over two years. Beyond the standard convert, merge, split, and compress tools, I built AI-powered features including an AI Summarizer and a Chat with PDF assistant that lets users ask questions directly about their document content. Other tools I engineered include PDF to Excel and PowerPoint converters (Python, Camelot/pdfplumber), a Ghostscript-based merge engine, Puppeteer-driven HTML to PDF conversion, PDF to PNG/image export, a QR Code Generator, and OCR (pytesseract) for scanned/image-based PDFs — with a parallel-processing pipeline (ThreadPoolExecutor) for faster PDF-to-Word conversion. Frontend built with Next.js and Tailwind CSS, backend powered by Node.js, Express.js, and a Python/FastAPI microservice, all deployed on a self-managed VPS.',
    stack: ['Next.js', 'Node.js', 'Express.js', 'Python', 'FastAPI', 'Tailwind CSS', 'AI/OCR', 'VPS'],
    image: '/Images/pdflinxfinalcopy.jpg',
    live: 'https://pdflinx.com',
  },
  {
    title: 'ConvertLinx',
    category: 'Full-Stack',
    desc: 'ConvertLinx is a free, all-in-one converter and utility tools platform built entirely with Next.js — 20+ browser-based tools across images, text, developer, and everyday utilities. Image tools include Compressor, Converter (JPG/PNG/WebP/GIF), Resizer, Cropper, HEIC to JPG, Rotate & Flip, Add Watermark, and Image to Text (OCR). Utility tools cover a QR Code Generator, Password Generator, Unit Converter (50+ units), YouTube Thumbnail Downloader, Signature Maker, Text to PDF, and Text to Speech. For developers and writers there\u2019s a Word Counter, Case Converter, Lorem Ipsum Generator, JSON Formatter, Base64 Tool, Color Picker, Meta Tag Generator, and Text to Slug. Every tool runs client-side in the browser — no file uploads to a server, no signup, and no ads — built from scratch including domain setup, SEO schema (BreadcrumbList/HowTo/FAQ), sitemap, and a consistent reusable component structure across every tool page.',
    stack: ['Next.js', 'Tailwind CSS', 'Client-side Processing', 'SEO'],
    image: '/Images/convertlinx.jpg',
    live: 'https://convertlinx.com',
  },
  {
    title: 'SnackStation',
    category: 'Full-Stack',
    desc: 'A modern full-stack food ordering web app built with Next.js. Features Server Components, App Router, MongoDB for data storage, Material-UI, a dynamic shopping cart powered by Context API, and JWT-based authentication for secure user sessions from browsing to checkout.',
    stack: ['Next.js', 'MongoDB', 'MUI', 'Context API', 'JWT'],
    image: '/Images/onlinefoodimg.jpg',
    live: 'https://onlinefood-tau.vercel.app/',
  },
  {
    title: 'Ecommerce Hub',
    category: 'Full-Stack',
    desc: 'Full-stack ecommerce platform built entirely with Next.js. Uses the App Router with API routes and server-side rendering for performance, Material-UI for a polished interface, MongoDB for product/order data, and dynamic product showcases with interactive carousels for a seamless shopping experience.',
    stack: ['Next.js', 'MongoDB', 'MUI', 'Context API', 'JWT'],
    image: '/Images/EcomHub.png',
    live: 'https://ecommercehub-tau.vercel.app/',
  },
  {
    title: 'Admin Dashboard',
    category: 'Full-Stack',
    desc: 'Full-stack responsive Admin Dashboard built with Next.js for managing freelance service data — users, orders, products, and analytics all in one place. Protected via JWT authentication with role-based access control, giving different permission levels for admins and staff, wrapped in a clean, modern UI.',
    stack: ['Next.js', 'MongoDB', 'JWT Auth', 'MUI'],
    image: '/Images/Dashpage.png',
    live: 'https://admin-panel-jade-seven.vercel.app/',
  },
  {
    title: 'Huda Trading Japan',
    category: 'Full-Stack',
    desc: 'Full-stack car trading platform enabling users to browse and purchase vehicles imported from Japan. Features dynamic, filterable car listings managed through Strapi CMS with a PostgreSQL database, direct WhatsApp integration for instant buyer-seller communication, and a fully responsive UI across devices.',
    stack: ['React', 'Strapi', 'PostgreSQL', 'Tailwind CSS'],
    image: '/Images/hudatrading.jpg',
    live: 'https://www.hudatradingjapanltd.com/en',
  },
  {
    title: 'Client Portfolio (Rameez Babar)',
    category: 'Front-End',
    desc: 'A real-world client project built for a Google Business Expert. Fully responsive frontend developed with React.js, deployed on a custom domain, Google-indexed, and SEO optimized with a clean, professional design that reflects the client\u2019s brand.',
    stack: ['React', 'CSS Modules'],
    image: '/Images/Rameez.jpg',
    live: 'https://rameezbabar.com/',
  },
  {
    title: 'Freelance Services Website',
    category: 'Front-End',
    desc: 'A modern, responsive freelance services portfolio built with Next.js. Showcases my expertise and service offerings with smooth GSAP scroll effects and engaging transitions, designed specifically to attract and convert potential clients browsing the site.',
    stack: ['Next.js', 'GSAP', 'Tailwind CSS'],
    image: '/Images/AzadDevImg.png',
    live: 'https://azad-dev-x9xh.vercel.app/',
  },
  {
    title: 'Bedari Millat (WordPress)',
    category: 'Front-End',
    desc: 'A WordPress project built with a custom template, fully responsive design, and on-page SEO optimization. Includes a blog section, interactive contact forms, and plugin integrations, showcasing hands-on WordPress theme customization and performance optimization expertise.',
    stack: ['WordPress', 'Theme Customization', 'Plugin Integration'],
    image: '/Images/bedari1.PNG',
    live: 'https://www.bedarimillat.com',
  },
  {
    title: 'FastFood',
    category: 'Full-Stack',
    desc: 'Full-stack food ordering app with a React.js frontend and Lenis-powered smooth scrolling for a polished browsing feel. Backend built with Node.js and Express.js, MongoDB for data storage, JWT authentication, and SwiperJS product carousels for an engaging, app-like ordering experience.',
    stack: ['React.js', 'Express.js', 'MongoDB', 'MUI', 'JWT'],
    image: '/Images/fastfood.png',
    live: null,
  },
];

const categories = ['All', 'Full-Stack', 'Front-End'] as const;
type Category = (typeof categories)[number];

export default function Projects() {
  const [active, setActive] = useState<Category>('All');
  const [modal, setModal] = useState<Project | null>(null);

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="projects">
      {/* subtle grid bg, same language as Contact */}
      <div className="gridOverlay" />
      <div className="blobPink" />
      <div className="blobPurple" />

      <div className="container" style={{ position: 'relative', zIndex: 1, }}>
        <div className="header">
          <span className="eyebrow">Portfolio</span>
          <div className="headBar" />
          <h2 className="heading">
            Featured{' '}
            <span className="headGrad">Projects</span>
          </h2>
          <p className="subtitle">
            Real-world projects built and deployed in production.
          </p>
        </div>

        <div className="filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filterBtn ${active === cat ? 'filterActive' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid">
          {filtered.map((p, i) => (
            <div key={i} className="card" onClick={() => setModal(p)}>
              <div className="imgWrap">
                <img src={p.image} alt={p.title} className="img" />
                <div className="imgOverlay">
                  <span className="viewBtn">View Details →</span>
                </div>
              </div>
              <div className="cardBody">
                <div className="cardTop">
                  <span className="catTag">{p.category}</span>
                  {p.live && (
                    
                    <a href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="liveLink"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live ↗
                    </a>
                  )}
                </div>
                <h3 className="cardTitle">{p.title}</h3>
                <p className="cardDesc">{p.desc.substring(0, 100)}...</p>
                <div className="techRow">
                  {p.stack.slice(0, 3).map((t, ti) => (
                    <span key={ti} className="techPill">
                      {t}
                    </span>
                  ))}
                  {p.stack.length > 3 && <span className="techPill">+{p.stack.length - 3}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modal && (
        <div className="overlay" onClick={() => setModal(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="closeBtn" onClick={() => setModal(null)}>
              ✕
            </button>
            <img src={modal.image} alt={modal.title} className="modalImg" />
            <div className="modalBody">
              <span className="catTag">{modal.category}</span>
              <h3 className="modalTitle">{modal.title}</h3>
              <p className="modalDesc">{modal.desc}</p>
              <div className="techRow" style={{ marginBottom: 20 }}>
                {modal.stack.map((t, i) => (
                  <span key={i} className="techPill">
                    {t}
                  </span>
                ))}
              </div>
              {modal.live && (
                <a href={modal.live} target="_blank" rel="noopener noreferrer" className="liveBtn">
                  Visit Live Site ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .projects {
          padding: 20px 0 60px;
          background: var(--dark-bg);
          position: relative;
          overflow: hidden;
        }

        .gridOverlay {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
          background-size: 42px 42px;
          background-position: center;
          -webkit-mask-image: radial-gradient(circle at 50% 40%, black 0%, transparent 78%);
          mask-image: radial-gradient(circle at 50% 40%, black 0%, transparent 78%);
          pointer-events: none;
        }
        .blobPink {
          position: absolute;
          bottom: -5%;
          right: -5%;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(241, 91, 181, 0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .blobPurple {
          position: absolute;
          top: 5%;
          left: -5%;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(155, 93, 229, 0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .header {
          text-align: center;
          margin-bottom: 56px;
        }
        .eyebrow {
          font-size: 0.74rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #bf5af2;
          font-weight: 700;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .headBar {
          width: 90px;
          height: 3px;
          background: linear-gradient(90deg, #9b5de5, #f15bb5);
          margin: 10px auto 20px;
          border-radius: 2px;
        }
        .heading {
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 800;
          color: var(--text);
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .headGrad {
          background: linear-gradient(135deg, #9b5de5, #f15bb5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .subtitle {
          color: #9ca3af;
          margin: 12px auto 0;
          max-width: 420px;
          line-height: 1.8;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .filters {
          display: flex;
          gap: 10px;
          margin-bottom: 56px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .filterBtn {
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(155, 93, 229, 0.22);
          color: #9ca3af;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 10px 22px;
          border-radius: 12px;
          transition: all 0.25s;
          cursor: pointer;
        }
        .filterBtn:hover {
          border-color: rgba(155, 93, 229, 0.5);
          color: #e5e7eb;
          background: rgba(255, 255, 255, 0.06);
        }
        .filterActive {
          background: linear-gradient(135deg, #9b5de5, #f15bb5) !important;
          border-color: transparent !important;
          color: #fff !important;
          box-shadow: 0 6px 28px rgba(155, 93, 229, 0.35);
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .card {
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(155, 93, 229, 0.2);
          border-radius: 18px;
          cursor: pointer;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          backdrop-filter: blur(14px);
          box-shadow: 0 3px 16px rgba(0, 0, 0, 0.25);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease;
        }
        .card:hover {
          transform: translateY(-6px);
          border-color: rgba(155, 93, 229, 0.5);
          background: rgba(255, 255, 255, 0.06);
          box-shadow: 0 16px 40px rgba(155, 93, 229, 0.22);
        }
        .imgWrap {
          position: relative;
          overflow: hidden;
          aspect-ratio: 16 / 10;
        }
        .img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .card:hover .img {
          transform: scale(1.06);
        }
        .imgOverlay {
          position: absolute;
          inset: 0;
          background: rgba(10, 8, 15, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .card:hover .imgOverlay {
          opacity: 1;
        }
        .viewBtn {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 1.5px;
          color: #fff;
          text-transform: uppercase;
          border: 1px solid rgba(255, 255, 255, 0.35);
          padding: 10px 22px;
          border-radius: 12px;
        }
        .cardBody {
          padding: 26px 24px 30px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .cardTop {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
        }
        .catTag {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #9b5de5;
          text-transform: uppercase;
        }
        .liveLink,
        .liveBtn {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 10.5px;
          letter-spacing: 0.5px;
          color: #f15bb5;
          text-transform: uppercase;
          transition: color 0.3s;
        }
        .liveLink:hover,
        .liveBtn:hover {
          color: #fff;
        }
        .liveBtn {
          display: inline-block;
          padding: 12px 28px;
          background: linear-gradient(135deg, #9b5de5, #f15bb5);
          color: #fff;
          font-size: 12px;
          border-radius: 12px;
          box-shadow: 0 6px 28px rgba(155, 93, 229, 0.35);
          transition: opacity 0.3s, transform 0.3s;
        }
        .liveBtn:hover {
          opacity: 0.9;
          transform: translateY(-2px);
          color: #fff;
        }
        .cardTitle {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 16px;
          letter-spacing: 0.2px;
          color: var(--text);
          margin-bottom: 10px;
        }
        .cardDesc {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px;
          color: #9ca3af;
          line-height: 1.75;
          flex: 1;
          margin-bottom: 20px;
          font-weight: 400;
        }
        .techRow {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .techPill {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.5px;
          padding: 5px 12px;
          border-radius: 20px;
          border: 1px solid rgba(155, 93, 229, 0.25);
          background: rgba(155, 93, 229, 0.08);
          color: #c4b5fd;
          text-transform: uppercase;
        }

        /* Modal */
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(5, 4, 8, 0.92);
          backdrop-filter: blur(10px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 70px 20px 20px;   /* pehle 90px 20px 30px tha */
          overflow-y: auto;
        }

        .modal {
          background: rgba(20, 17, 26, 0.98);
          border: 1px solid rgba(155, 93, 229, 0.28);
          border-radius: 20px;
          max-width: 720px;      /* pehle 520px tha */
          width: 100%;
          max-height: 88vh;      /* pehle 78vh tha */
          position: relative;
          animation: modalIn 0.28s ease;
          overflow-y: auto;
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.6);
        }

        @keyframes modalIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .closeBtn {
          position: absolute;
          top: 14px;
          right: 14px;
          background: rgba(5, 4, 8, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 50%;
          color: #e5e7eb;
          width: 32px;
          height: 32px;
          font-size: 13px;
          z-index: 1;
          cursor: pointer;
          transition: color 0.3s;
        }
        .closeBtn:hover {
          color: #fff;
        }
        .modalImg {
          width: 100%;
          aspect-ratio: 16 / 8;
          object-fit: cover;
          border-radius: 20px 20px 0 0;
        }
        .modalBody {
          padding: 22px 24px 26px;
        }
        .modalTitle {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 19px;
          letter-spacing: 0.2px;
          color: var(--text);
          margin: 8px 0 10px;
        }
        .modalDesc {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px;
          color: #9ca3af;
          line-height: 1.75;
          margin-bottom: 18px;
          font-weight: 400;
        }
        @media (max-width: 1000px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        // @media (max-width: 640px) {
        //   .grid {
        //     grid-template-columns: 1fr;
        //   }
        //   .projects {
        //     padding: 80px 0;
        //   }
        //   .overlay {
        //     padding: 70px 16px 16px;
        //   }
        // }  

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .projects {
    padding: 40px 0 40px;   /* pehle "80px 0 40px" tha */
  }
  .overlay {
    padding: 70px 16px 16px;
  }
}
      `}</style>
    </section>
  );
}





































// // Projects.tsx
// 'use client';
// import { useState } from 'react';

// interface Project {
//   title: string;
//   category: 'Full-Stack' | 'Front-End';
//   desc: string;
//   stack: string[];
//   image: string;
//   live: string | null;
// }

// const projects: Project[] = [
//   {
//     title: 'PDF Linx',
//     category: 'Full-Stack',
//     desc: 'A modern full-stack web application providing free online tools for PDF and document management — convert, merge, split, compress PDFs, QR Code Generator, OCR, and more. Built with Next.js, Node.js, and Python on a VPS.',
//     stack: ['Next.js', 'Node.js', 'Express.js', 'Python', 'Tailwind CSS', 'VPS'],
//     image: '/Images/pdflinxfinalcopy.jpg',
//     live: 'https://pdflinx.com',
//   },
//   {
//     title: 'SnackStation',
//     category: 'Full-Stack',
//     desc: 'A modern full-stack food ordering web app built with Next.js. Features Server Components, App Router, MongoDB for data storage, Material-UI, dynamic shopping cart with Context API, and JWT-based authentication.',
//     stack: ['Next.js', 'MongoDB', 'MUI', 'Context API', 'JWT'],
//     image: '/Images/onlinefoodimg.jpg',
//     live: 'https://onlinefood-tau.vercel.app/',
//   },
//   {
//     title: 'Ecommerce Hub',
//     category: 'Full-Stack',
//     desc: 'Full-stack ecommerce platform built entirely with Next.js. App Router, API routes, server-side rendering, Material-UI, MongoDB, dynamic product showcases, and interactive carousels for a seamless shopping experience.',
//     stack: ['Next.js', 'MongoDB', 'MUI', 'Context API', 'JWT'],
//     image: '/Images/EcomHub.png',
//     live: 'https://ecommercehub-tau.vercel.app/',
//   },
//   {
//     title: 'Admin Dashboard',
//     category: 'Full-Stack',
//     desc: 'Full-stack responsive Admin Dashboard built with Next.js for managing freelance service data — users, orders, products, and analytics. Protected via JWT authentication with role-based access and modern UI.',
//     stack: ['Next.js', 'MongoDB', 'JWT Auth', 'MUI'],
//     image: '/Images/Dashpage.png',
//     live: 'https://admin-panel-jade-seven.vercel.app/',
//   },
//   {
//     title: 'Huda Trading Japan',
//     category: 'Full-Stack',
//     desc: 'Full-stack car trading platform enabling users to browse and purchase vehicles from Japan. Dynamic car listings, Strapi CMS, PostgreSQL, WhatsApp integration, and a fully responsive UI.',
//     stack: ['React', 'Strapi', 'PostgreSQL', 'Tailwind CSS'],
//     image: '/Images/hudatrade.png',
//     live: 'https://huda-trading.vercel.app/en',
//   },
//   {
//     title: 'Client Portfolio (Rameez Babar)',
//     category: 'Front-End',
//     desc: 'Real-world client project for a Google Business Expert. Fully responsive frontend built with React.js, deployed on a custom domain, Google-indexed, SEO optimized with a professional design.',
//     stack: ['React', 'CSS Modules'],
//     image: '/Images/RameezPort.png',
//     live: 'https://rameezbabar.com/',
//   },
//   {
//     title: 'Freelance Services Website',
//     category: 'Front-End',
//     desc: 'Modern responsive freelance services portfolio built with Next.js. Showcases expertise and services with smooth GSAP scroll effects and engaging transitions. Designed to attract potential clients.',
//     stack: ['Next.js', 'GSAP', 'Tailwind CSS'],
//     image: '/Images/AzadDevImg.png',
//     live: 'https://azad-dev-x9xh.vercel.app/',
//   },
//   {
//     title: 'Bedari Millat (WordPress)',
//     category: 'Front-End',
//     desc: 'WordPress project with custom template, responsive design, SEO optimization, blog section, interactive forms, plugin integration, and performance optimization showcasing WordPress expertise.',
//     stack: ['WordPress', 'Theme Customization', 'Plugin Integration'],
//     image: '/Images/bedari1.PNG',
//     live: 'https://www.bedarimillat.com',
//   },
//   {
//     title: 'FastFood',
//     category: 'Full-Stack',
//     desc: 'Full-stack food ordering app with React.js frontend, Lenis smooth scrolling, Node.js + Express.js backend, MongoDB database, and SwiperJS product carousels for an engaging browsing experience.',
//     stack: ['React.js', 'Express.js', 'MongoDB', 'MUI', 'JWT'],
//     image: '/Images/fastfood.png',
//     live: null,
//   },
// ];

// const categories = ['All', 'Full-Stack', 'Front-End'] as const;
// type Category = (typeof categories)[number];

// export default function Projects() {
//   const [active, setActive] = useState<Category>('All');
//   const [modal, setModal] = useState<Project | null>(null);

//   const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

//   return (
//     <section id="projects" className="projects">
//       {/* subtle grid bg, same language as Contact */}
//       <div className="gridOverlay" />
//       <div className="blobPink" />
//       <div className="blobPurple" />

//       <div className="container" style={{ position: 'relative', zIndex: 1 }}>
//         <span className="section-label">04 — Projects</span>
//         <h2 className="section-title">
//           FEATURED
//           <br />
//           <span className="grad-text">WORK</span>
//         </h2>

//         <div className="filters">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               className={`filterBtn ${active === cat ? 'filterActive' : ''}`}
//               onClick={() => setActive(cat)}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         <div className="grid">
//           {filtered.map((p, i) => (
//             <div key={i} className="card" onClick={() => setModal(p)}>
//               <div className="imgWrap">
//                 <img src={p.image} alt={p.title} className="img" />
//                 <div className="imgOverlay">
//                   <span className="viewBtn">View Details →</span>
//                 </div>
//               </div>
//               <div className="cardBody">
//                 <div className="cardTop">
//                   <span className="catTag">{p.category}</span>
//                   {p.live && (
                    
//                     <a href={p.live}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="liveLink"
//                       onClick={(e) => e.stopPropagation()}
//                     >
//                       Live ↗
//                     </a>
//                   )}
//                 </div>
//                 <h3 className="cardTitle">{p.title}</h3>
//                 <p className="cardDesc">{p.desc.substring(0, 100)}...</p>
//                 <div className="techRow">
//                   {p.stack.slice(0, 3).map((t, ti) => (
//                     <span key={ti} className="techPill">
//                       {t}
//                     </span>
//                   ))}
//                   {p.stack.length > 3 && <span className="techPill">+{p.stack.length - 3}</span>}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {modal && (
//         <div className="overlay" onClick={() => setModal(null)}>
//           <div className="modal" onClick={(e) => e.stopPropagation()}>
//             <button className="closeBtn" onClick={() => setModal(null)}>
//               ✕
//             </button>
//             <img src={modal.image} alt={modal.title} className="modalImg" />
//             <div className="modalBody">
//               <span className="catTag">{modal.category}</span>
//               <h3 className="modalTitle">{modal.title}</h3>
//               <p className="modalDesc">{modal.desc}</p>
//               <div className="techRow" style={{ marginBottom: 20 }}>
//                 {modal.stack.map((t, i) => (
//                   <span key={i} className="techPill">
//                     {t}
//                   </span>
//                 ))}
//               </div>
//               {modal.live && (
//                 <a href={modal.live} target="_blank" rel="noopener noreferrer" className="liveBtn">
//                   Visit Live Site ↗
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         .projects {
//           padding: 120px 0;
//           background: var(--dark-bg);
//           position: relative;
//           overflow: hidden;
//         }
//         .gridOverlay {
//           position: absolute;
//           inset: 0;
//           background-image: linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
//           linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
//           background-size: 42px 42px;
//           background-position: center;
//           -webkit-mask-image: radial-gradient(circle at 50% 40%, black 0%, transparent 78%);
//           mask-image: radial-gradient(circle at 50% 40%, black 0%, transparent 78%);
//           pointer-events: none;
//         }
//         .blobPink {
//           position: absolute;
//           bottom: -5%;
//           right: -5%;
//           width: 500px;
//           height: 500px;
//           border-radius: 50%;
//           background: radial-gradient(circle, rgba(241, 91, 181, 0.07) 0%, transparent 70%);
//           pointer-events: none;
//         }
//         .blobPurple {
//           position: absolute;
//           top: 5%;
//           left: -5%;
//           width: 400px;
//           height: 400px;
//           border-radius: 50%;
//           background: radial-gradient(circle, rgba(155, 93, 229, 0.06) 0%, transparent 70%);
//           pointer-events: none;
//         }
//         .filters {
//           display: flex;
//           gap: 10px;
//           margin-bottom: 56px;
//           flex-wrap: wrap;
//         }
//         .filterBtn {
//           background: rgba(255, 255, 255, 0.035);
//           border: 1px solid rgba(155, 93, 229, 0.22);
//           color: #9ca3af;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           font-weight: 700;
//           font-size: 11px;
//           letter-spacing: 1.5px;
//           text-transform: uppercase;
//           padding: 10px 22px;
//           border-radius: 12px;
//           transition: all 0.25s;
//           cursor: pointer;
//         }
//         .filterBtn:hover {
//           border-color: rgba(155, 93, 229, 0.5);
//           color: #e5e7eb;
//           background: rgba(255, 255, 255, 0.06);
//         }
//         .filterActive {
//           background: linear-gradient(135deg, #9b5de5, #f15bb5) !important;
//           border-color: transparent !important;
//           color: #fff !important;
//           box-shadow: 0 6px 28px rgba(155, 93, 229, 0.35);
//         }
//         .grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 28px;
//         }
//         .card {
//           background: rgba(255, 255, 255, 0.035);
//           border: 1px solid rgba(155, 93, 229, 0.2);
//           border-radius: 18px;
//           cursor: pointer;
//           overflow: hidden;
//           display: flex;
//           flex-direction: column;
//           backdrop-filter: blur(14px);
//           box-shadow: 0 3px 16px rgba(0, 0, 0, 0.25);
//           transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease;
//         }
//         .card:hover {
//           transform: translateY(-6px);
//           border-color: rgba(155, 93, 229, 0.5);
//           background: rgba(255, 255, 255, 0.06);
//           box-shadow: 0 16px 40px rgba(155, 93, 229, 0.22);
//         }
//         .imgWrap {
//           position: relative;
//           overflow: hidden;
//           aspect-ratio: 16 / 10;
//         }
//         .img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 0.5s ease;
//         }
//         .card:hover .img {
//           transform: scale(1.06);
//         }
//         .imgOverlay {
//           position: absolute;
//           inset: 0;
//           background: rgba(10, 8, 15, 0.8);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           opacity: 0;
//           transition: opacity 0.3s;
//         }
//         .card:hover .imgOverlay {
//           opacity: 1;
//         }
//         .viewBtn {
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           font-weight: 700;
//           font-size: 11px;
//           letter-spacing: 1.5px;
//           color: #fff;
//           text-transform: uppercase;
//           border: 1px solid rgba(255, 255, 255, 0.35);
//           padding: 10px 22px;
//           border-radius: 12px;
//         }
//         .cardBody {
//           padding: 26px 24px 30px;
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//         }
//         .cardTop {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 14px;
//         }
//         .catTag {
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: 1.5px;
//           color: #9b5de5;
//           text-transform: uppercase;
//         }
//         .liveLink,
//         .liveBtn {
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           font-weight: 700;
//           font-size: 10.5px;
//           letter-spacing: 0.5px;
//           color: #f15bb5;
//           text-transform: uppercase;
//           transition: color 0.3s;
//         }
//         .liveLink:hover,
//         .liveBtn:hover {
//           color: #fff;
//         }
//         .liveBtn {
//           display: inline-block;
//           padding: 12px 28px;
//           background: linear-gradient(135deg, #9b5de5, #f15bb5);
//           color: #fff;
//           font-size: 12px;
//           border-radius: 12px;
//           box-shadow: 0 6px 28px rgba(155, 93, 229, 0.35);
//           transition: opacity 0.3s, transform 0.3s;
//         }
//         .liveBtn:hover {
//           opacity: 0.9;
//           transform: translateY(-2px);
//           color: #fff;
//         }
//         .cardTitle {
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           font-weight: 800;
//           font-size: 16px;
//           letter-spacing: 0.2px;
//           color: var(--white-text);
//           margin-bottom: 10px;
//         }
//         .cardDesc {
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           font-size: 14px;
//           color: #9ca3af;
//           line-height: 1.75;
//           flex: 1;
//           margin-bottom: 20px;
//           font-weight: 400;
//         }
//         .techRow {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 8px;
//         }
//         .techPill {
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           font-size: 9.5px;
//           font-weight: 600;
//           letter-spacing: 0.5px;
//           padding: 5px 12px;
//           border-radius: 20px;
//           border: 1px solid rgba(155, 93, 229, 0.25);
//           background: rgba(155, 93, 229, 0.08);
//           color: #c4b5fd;
//           text-transform: uppercase;
//         }

//         /* Modal */
//         .overlay {
//           position: fixed;
//           inset: 0;
//           background: rgba(5, 4, 8, 0.92);
//           backdrop-filter: blur(10px);
//           z-index: 9999;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 70px 20px 20px;   /* pehle 90px 20px 30px tha */
//           overflow-y: auto;
//         }

//         .modal {
//           background: rgba(20, 17, 26, 0.98);
//           border: 1px solid rgba(155, 93, 229, 0.28);
//           border-radius: 20px;
//           max-width: 720px;      /* pehle 520px tha */
//           width: 100%;
//           max-height: 88vh;      /* pehle 78vh tha */
//           position: relative;
//           animation: modalIn 0.28s ease;
//           overflow-y: auto;
//           box-shadow: 0 30px 70px rgba(0, 0, 0, 0.6);
//         }

//         @keyframes modalIn {
//           from {
//             opacity: 0;
//             transform: scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
//         .closeBtn {
//           position: absolute;
//           top: 14px;
//           right: 14px;
//           background: rgba(5, 4, 8, 0.85);
//           border: 1px solid rgba(255, 255, 255, 0.12);
//           border-radius: 50%;
//           color: #e5e7eb;
//           width: 32px;
//           height: 32px;
//           font-size: 13px;
//           z-index: 1;
//           cursor: pointer;
//           transition: color 0.3s;
//         }
//         .closeBtn:hover {
//           color: #fff;
//         }
//         .modalImg {
//           width: 100%;
//           aspect-ratio: 16 / 8;
//           object-fit: cover;
//           border-radius: 20px 20px 0 0;
//         }
//         .modalBody {
//           padding: 22px 24px 26px;
//         }
//         .modalTitle {
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           font-weight: 800;
//           font-size: 19px;
//           letter-spacing: 0.2px;
//           color: var(--white-text);
//           margin: 8px 0 10px;
//         }
//         .modalDesc {
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           font-size: 13px;
//           color: #9ca3af;
//           line-height: 1.75;
//           margin-bottom: 18px;
//           font-weight: 400;
//         }
//         @media (max-width: 1000px) {
//           .grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }

//         @media (max-width: 640px) {
//           .grid {
//             grid-template-columns: 1fr;
//           }
//           .projects {
//             padding: 80px 0;
//           }
//           .overlay {
//             padding: 70px 16px 16px;
//           }
//         }          
//       `}</style>
//     </section>
//   );
// }

















// // "use client";
// // import { useEffect, useRef, useState } from "react";

// // const projects = [
// //   {
// //     title: "PDF Linx", cat: "Full-Stack", featured: true,
// //     desc: "Full-stack web app with free online PDF tools — convert, merge, split, compress, QR codes, OCR. Next.js + Node.js + Python.",
// //     stack: ["Next.js", "Node.js", "Python", "Tailwind"],
// //     live: "https://pdflinx.com", image: "/Images/HomePage.png",
// //   },
// //   {
// //     title: "Huda Trading Japan", cat: "Full-Stack",
// //     desc: "Car trading platform with dynamic listings, WhatsApp integration, Strapi CMS & PostgreSQL backend for international vehicle exports.",
// //     stack: ["React", "Strapi", "PostgreSQL", "Tailwind"],
// //     live: "https://huda-trading.vercel.app/en", image: "/Images/hudatrade.png",
// //   },
// //   {
// //     title: "Admin Dashboard", cat: "Full-Stack",
// //     desc: "Full-stack admin panel with user, product & order management, analytics, JWT auth, and role-based access control.",
// //     stack: ["Next.js", "MongoDB", "JWT", "MUI"],
// //     live: "https://admin-panel-jade-seven.vercel.app/", image: "/Images/Dashpage.png",
// //   },
// //   {
// //     title: "SnackStation", cat: "Full-Stack",
// //     desc: "Food ordering web app with dynamic shopping cart, Context API, JWT authentication, and clean MUI design system.",
// //     stack: ["Next.js", "MongoDB", "MUI", "JWT"],
// //     live: "https://foodhub-next-eight.vercel.app/", image: "/Images/FastFoodHub2.png",
// //   },
// //   {
// //     title: "Ecommerce Hub", cat: "Full-Stack",
// //     desc: "Full e-commerce platform with Next.js API routes, SSR, MongoDB, and interactive product carousels.",
// //     stack: ["Next.js", "MongoDB", "MUI", "Context API"],
// //     live: "https://ecommercehub-tau.vercel.app/", image: "/Images/EcomHub.png",
// //   },
// //   {
// //     title: "Client Portfolio – Rameez Babar", cat: "Front-End",
// //     desc: "Real client project for a Google Business Expert. Fully responsive, SEO optimized, custom domain, indexed by Google.",
// //     stack: ["React", "CSS Modules"],
// //     live: "https://rameezbabar.com/", image: "/Images/RameezPort.png",
// //   },
// //   {
// //     title: "Freelance Services Site", cat: "Front-End",
// //     desc: "Modern portfolio with Next.js + GSAP smooth animations, professional interactive feel, deployed on Vercel.",
// //     stack: ["Next.js", "GSAP", "Tailwind"],
// //     live: "https://azad-dev-x9xh.vercel.app/", image: "/Images/AzadDevImg.png",
// //   },
// //   {
// //     title: "BedarMillat – WordPress", cat: "Front-End",
// //     desc: "WordPress site with custom theme, SEO optimization, blog section, interactive forms, and plugin integrations.",
// //     stack: ["WordPress", "Theme Customization", "SEO"],
// //     live: "https://www.bedarimillat.com", image: "/Images/bedari1.PNG",
// //   },
// // ];

// // const cats = ["All", "Full-Stack", "Front-End"];
// // const catColor: Record<string, string> = { "Full-Stack": "#9B5DE5", "Front-End": "#F15BB5" };

// // export default function Projects() {
// //   const ref = useRef<HTMLElement>(null);
// //   const [visible, setVisible] = useState(false);
// //   const [filter, setFilter] = useState("All");

// //   useEffect(() => {
// //     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.06 });
// //     if (ref.current) obs.observe(ref.current);
// //     return () => obs.disconnect();
// //   }, []);

// //   const filtered = filter === "All" ? projects : projects.filter(p => p.cat === filter);

// //   return (
// //     <section id="projects" ref={ref} style={{
// //       padding: "110px 0", background: "var(--dark-bg)", position: "relative", overflow: "hidden",
// //       backgroundImage: `
// //         linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
// //         linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
// //       `,
// //       backgroundSize: "42px 42px",
// //       backgroundPosition: "center",
// //     }}>
// //       <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 40%, transparent 0%, var(--dark-bg) 78%)", pointerEvents: "none" }} />
// //       <div style={{ position: "absolute", top: "25%", right: "-8%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(241,91,181,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />
// //       <div style={{ position: "absolute", bottom: "15%", left: "-6%", width: 450, height: 450, borderRadius: "50%", background: "radial-gradient(circle, rgba(155,93,229,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />

// //       <div className="container" style={{ position: "relative", zIndex: 1 }}>
// //         {/* Header */}
// //         <div style={{ textAlign: "center", marginBottom: 48 }}>
// //           <span style={{ fontSize: "0.74rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#BF5AF2", fontWeight: 700 }}>Portfolio</span>
// //           <div style={{ width: 40, height: 3, background: "linear-gradient(90deg, #9B5DE5, #F15BB5)", margin: "10px auto 20px", borderRadius: 2 }} />
// //           <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "var(--light-text)" }}>
// //             Featured{" "}
// //             <span style={{ background: "linear-gradient(135deg, #9B5DE5, #F15BB5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
// //               Projects
// //             </span>
// //           </h2>
// //           <p style={{ color: "#9CA3AF", marginTop: 12, maxWidth: 400, margin: "12px auto 0" }}>
// //             Real-world projects built and deployed in production.
// //           </p>
// //         </div>

// //         {/* Filters */}
// //         <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 52, flexWrap: "wrap" }}>
// //           {cats.map(c => (
// //             <button key={c} onClick={() => setFilter(c)} style={{
// //               padding: "9px 26px", borderRadius: 999, cursor: "pointer",
// //               background: filter === c ? "linear-gradient(135deg, #9B5DE5, #F15BB5)" : "rgba(255,255,255,0.04)",
// //               border: filter === c ? "none" : "1px solid rgba(155,93,229,0.25)",
// //               color: filter === c ? "#fff" : "#B4B8C2",
// //               fontWeight: 700, fontSize: "0.85rem",
// //               boxShadow: filter === c ? "0 4px 22px rgba(155,93,229,0.38)" : "none",
// //               transition: "all 0.25s", fontFamily: "'Plus Jakarta Sans', sans-serif",
// //             }}>
// //               {c}
// //             </button>
// //           ))}
// //         </div>

// //         {/* Grid */}
// //         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 20 }}>
// //           {filtered.map((p, i) => (
// //             <div key={`${p.title}-${i}`} style={{
// //               borderRadius: 22, overflow: "hidden",
// //               background: "rgba(255,255,255,0.035)",
// //               border: "1px solid rgba(155,93,229,0.18)",
// //               backdropFilter: "blur(18px)",
// //               boxShadow: "0 4px 22px rgba(0,0,0,0.25)",
// //               opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(36px)",
// //               transition: `all 0.65s cubic-bezier(0.4,0,0.2,1) ${(i % 4) * 0.09}s`,
// //               display: "flex", flexDirection: "column",
// //             }}
// //               onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(155,93,229,0.45)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-7px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 64px rgba(155,93,229,0.22)"; }}
// //               onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(155,93,229,0.18)"; (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 22px rgba(0,0,0,0.25)"; }}>

// //               {/* Image */}
// //               <div style={{ height: 200, overflow: "hidden", position: "relative", flexShrink: 0 }}>
// //                 <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
// //                   onMouseEnter={e => { (e.target as HTMLElement).style.transform = "scale(1.08)"; }}
// //                   onMouseLeave={e => { (e.target as HTMLElement).style.transform = "none"; }} />
// //                 <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,5,15,0.65) 0%, transparent 55%)" }} />
// //                 {p.featured && (
// //                   <div style={{ position: "absolute", top: 14, left: 14, padding: "5px 14px", borderRadius: 999, background: "linear-gradient(135deg, #9B5DE5, #F15BB5)", color: "#fff", fontSize: "0.7rem", fontWeight: 800, boxShadow: "0 4px 14px rgba(155,93,229,0.4)" }}>
// //                     ⭐ FEATURED
// //                   </div>
// //                 )}
// //                 <div style={{ position: "absolute", top: 14, right: 14, padding: "5px 14px", borderRadius: 999, background: `${catColor[p.cat]}22`, border: `1px solid ${catColor[p.cat]}55`, color: catColor[p.cat], fontSize: "0.7rem", fontWeight: 700, backdropFilter: "blur(8px)" }}>
// //                   {p.cat}
// //                 </div>
// //               </div>

// //               {/* Content */}
// //               <div style={{ padding: "22px 24px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
// //                 <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "var(--light-text)", marginBottom: 9, lineHeight: 1.3 }}>{p.title}</h3>
// //                 <p style={{ color: "#9CA3AF", fontSize: "0.85rem", lineHeight: 1.78, flex: 1, marginBottom: 16 }}>{p.desc}</p>
// //                 <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 18 }}>
// //                   {p.stack.map(t => (
// //                     <span key={t} style={{ padding: "3px 10px", borderRadius: 7, background: "rgba(155,93,229,0.12)", border: "1px solid rgba(155,93,229,0.25)", color: "#C9B8F0", fontSize: "0.73rem" }}>
// //                       {t}
// //                     </span>
// //                   ))}
// //                 </div>
// //                 <a href={p.live} target="_blank" rel="noopener noreferrer" style={{
// //                   color: "#BF5AF2", fontSize: "0.84rem", fontWeight: 700, textDecoration: "none",
// //                   display: "inline-flex", alignItems: "center", gap: 6, transition: "gap 0.2s",
// //                 }}
// //                   onMouseEnter={e => { (e.currentTarget as HTMLElement).style.gap = "12px"; }}
// //                   onMouseLeave={e => { (e.currentTarget as HTMLElement).style.gap = "6px"; }}>
// //                   View Live ↗
// //                 </a>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       <style>{`
// //         @media (max-width: 768px) {
// //           #projects .container > div:last-child { grid-template-columns: 1fr !important; }
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }


























// // // "use client";
// // // import { useEffect, useRef, useState } from "react";

// // // const projects = [
// // //   {
// // //     title: "PDF Linx", cat: "Full-Stack", featured: true,
// // //     desc: "Full-stack web app with free online PDF tools — convert, merge, split, compress, QR codes, OCR. Next.js + Node.js + Python.",
// // //     stack: ["Next.js", "Node.js", "Python", "Tailwind"],
// // //     live: "https://pdflinx.com", image: "/Images/HomePage.png",
// // //   },
// // //   {
// // //     title: "Huda Trading Japan", cat: "Full-Stack",
// // //     desc: "Car trading platform with dynamic listings, WhatsApp integration, Strapi CMS & PostgreSQL backend for international vehicle exports.",
// // //     stack: ["React", "Strapi", "PostgreSQL", "Tailwind"],
// // //     live: "https://huda-trading.vercel.app/en", image: "/Images/hudatrade.png",
// // //   },
// // //   {
// // //     title: "Admin Dashboard", cat: "Full-Stack",
// // //     desc: "Full-stack admin panel with user, product & order management, analytics, JWT auth, and role-based access control.",
// // //     stack: ["Next.js", "MongoDB", "JWT", "MUI"],
// // //     live: "https://admin-panel-jade-seven.vercel.app/", image: "/Images/Dashpage.png",
// // //   },
// // //   {
// // //     title: "SnackStation", cat: "Full-Stack",
// // //     desc: "Food ordering web app with dynamic shopping cart, Context API, JWT authentication, and clean MUI design system.",
// // //     stack: ["Next.js", "MongoDB", "MUI", "JWT"],
// // //     live: "https://foodhub-next-eight.vercel.app/", image: "/Images/FastFoodHub2.png",
// // //   },
// // //   {
// // //     title: "Ecommerce Hub", cat: "Full-Stack",
// // //     desc: "Full e-commerce platform with Next.js API routes, SSR, MongoDB, and interactive product carousels.",
// // //     stack: ["Next.js", "MongoDB", "MUI", "Context API"],
// // //     live: "https://ecommercehub-tau.vercel.app/", image: "/Images/EcomHub.png",
// // //   },
// // //   {
// // //     title: "Client Portfolio – Rameez Babar", cat: "Front-End",
// // //     desc: "Real client project for a Google Business Expert. Fully responsive, SEO optimized, custom domain, indexed by Google.",
// // //     stack: ["React", "CSS Modules"],
// // //     live: "https://rameezbabar.com/", image: "/Images/RameezPort.png",
// // //   },
// // //   {
// // //     title: "Freelance Services Site", cat: "Front-End",
// // //     desc: "Modern portfolio with Next.js + GSAP smooth animations, professional interactive feel, deployed on Vercel.",
// // //     stack: ["Next.js", "GSAP", "Tailwind"],
// // //     live: "https://azad-dev-x9xh.vercel.app/", image: "/Images/AzadDevImg.png",
// // //   },
// // //   {
// // //     title: "BedarMillat – WordPress", cat: "Front-End",
// // //     desc: "WordPress site with custom theme, SEO optimization, blog section, interactive forms, and plugin integrations.",
// // //     stack: ["WordPress", "Theme Customization", "SEO"],
// // //     live: "https://www.bedarimillat.com", image: "/Images/bedari1.PNG",
// // //   },
// // // ];

// // // const cats = ["All", "Full-Stack", "Front-End"];
// // // const catColor: Record<string, string> = { "Full-Stack": "#9B5DE5", "Front-End": "#F15BB5" };

// // // export default function Projects() {
// // //   const ref = useRef<HTMLElement>(null);
// // //   const [visible, setVisible] = useState(false);
// // //   const [filter, setFilter] = useState("All");

// // //   useEffect(() => {
// // //     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.06 });
// // //     if (ref.current) obs.observe(ref.current);
// // //     return () => obs.disconnect();
// // //   }, []);

// // //   const filtered = filter === "All" ? projects : projects.filter(p => p.cat === filter);

// // //   return (
// // //     <section id="projects" ref={ref} style={{ padding: "110px 0", background: "var(--dark-bg)", position: "relative", overflow: "hidden" }}>
// // //       <div style={{ position: "absolute", top: "25%", right: "-8%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(241,91,181,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />
// // //       <div style={{ position: "absolute", bottom: "15%", left: "-6%", width: 450, height: 450, borderRadius: "50%", background: "radial-gradient(circle, rgba(155,93,229,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />

// // //       <div className="container" style={{ position: "relative", zIndex: 1 }}>
// // //         {/* Header */}
// // //         <div style={{ textAlign: "center", marginBottom: 48 }}>
// // //           <span style={{ fontSize: "0.74rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#BF5AF2", fontWeight: 700 }}>Portfolio</span>
// // //           <div style={{ width: 40, height: 3, background: "linear-gradient(90deg, #9B5DE5, #F15BB5)", margin: "10px auto 20px", borderRadius: 2 }} />
// // //           <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "var(--text)" }}>
// // //             Featured{" "}
// // //             <span style={{ background: "linear-gradient(135deg, #9B5DE5, #F15BB5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
// // //               Projects
// // //             </span>
// // //           </h2>
// // //           <p style={{ color: "rgba(248,244,255,0.4)", marginTop: 12, maxWidth: 400, margin: "12px auto 0" }}>
// // //             Real-world projects built and deployed in production.
// // //           </p>
// // //         </div>

// // //         {/* Filters */}
// // //         <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 52, flexWrap: "wrap" }}>
// // //           {cats.map(c => (
// // //             <button key={c} onClick={() => setFilter(c)} style={{
// // //               padding: "9px 26px", borderRadius: 999, cursor: "pointer",
// // //               background: filter === c ? "linear-gradient(135deg, #9B5DE5, #F15BB5)" : "rgba(155,93,229,0.07)",
// // //               border: filter === c ? "none" : "1px solid rgba(155,93,229,0.2)",
// // //               color: filter === c ? "#fff" : "rgba(248,244,255,0.55)",
// // //               fontWeight: 700, fontSize: "0.85rem",
// // //               boxShadow: filter === c ? "0 4px 22px rgba(155,93,229,0.38)" : "none",
// // //               transition: "all 0.25s", fontFamily: "'Plus Jakarta Sans', sans-serif",
// // //             }}>
// // //               {c}
// // //             </button>
// // //           ))}
// // //         </div>

// // //         {/* Grid */}
// // //         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 20 }}>
// // //           {filtered.map((p, i) => (
// // //             <div key={`${p.title}-${i}`} style={{
// // //               borderRadius: 22, overflow: "hidden",
// // //               background: "rgba(255,255,255,0.025)",
// // //               border: "1px solid rgba(155,93,229,0.13)",
// // //               backdropFilter: "blur(18px)",
// // //               opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(36px)",
// // //               transition: `all 0.65s cubic-bezier(0.4,0,0.2,1) ${(i % 4) * 0.09}s`,
// // //               display: "flex", flexDirection: "column",
// // //             }}
// // //               onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(155,93,229,0.38)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-7px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 64px rgba(155,93,229,0.2)"; }}
// // //               onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(155,93,229,0.13)"; (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>

// // //               {/* Image */}
// // //               <div style={{ height: 200, overflow: "hidden", position: "relative", flexShrink: 0 }}>
// // //                 <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
// // //                   onMouseEnter={e => { (e.target as HTMLElement).style.transform = "scale(1.08)"; }}
// // //                   onMouseLeave={e => { (e.target as HTMLElement).style.transform = "none"; }} />
// // //                 <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,5,15,0.65) 0%, transparent 55%)" }} />
// // //                 {p.featured && (
// // //                   <div style={{ position: "absolute", top: 14, left: 14, padding: "5px 14px", borderRadius: 999, background: "linear-gradient(135deg, #9B5DE5, #F15BB5)", color: "#fff", fontSize: "0.7rem", fontWeight: 800, boxShadow: "0 4px 14px rgba(155,93,229,0.4)" }}>
// // //                     ⭐ FEATURED
// // //                   </div>
// // //                 )}
// // //                 <div style={{ position: "absolute", top: 14, right: 14, padding: "5px 14px", borderRadius: 999, background: `${catColor[p.cat]}1A`, border: `1px solid ${catColor[p.cat]}40`, color: catColor[p.cat], fontSize: "0.7rem", fontWeight: 700, backdropFilter: "blur(8px)" }}>
// // //                   {p.cat}
// // //                 </div>
// // //               </div>

// // //               {/* Content */}
// // //               <div style={{ padding: "22px 24px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
// // //                 <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "var(--text)", marginBottom: 9, lineHeight: 1.3 }}>{p.title}</h3>
// // //                 <p style={{ color: "rgba(248,244,255,0.42)", fontSize: "0.85rem", lineHeight: 1.78, flex: 1, marginBottom: 16 }}>{p.desc}</p>
// // //                 <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 18 }}>
// // //                   {p.stack.map(t => (
// // //                     <span key={t} style={{ padding: "3px 10px", borderRadius: 7, background: "rgba(155,93,229,0.09)", border: "1px solid rgba(155,93,229,0.18)", color: "rgba(248,244,255,0.48)", fontSize: "0.73rem" }}>
// // //                       {t}
// // //                     </span>
// // //                   ))}
// // //                 </div>
// // //                 <a href={p.live} target="_blank" rel="noopener noreferrer" style={{
// // //                   color: "#BF5AF2", fontSize: "0.84rem", fontWeight: 700, textDecoration: "none",
// // //                   display: "inline-flex", alignItems: "center", gap: 6, transition: "gap 0.2s",
// // //                 }}
// // //                   onMouseEnter={e => { (e.currentTarget as HTMLElement).style.gap = "12px"; }}
// // //                   onMouseLeave={e => { (e.currentTarget as HTMLElement).style.gap = "6px"; }}>
// // //                   View Live ↗
// // //                 </a>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       <style>{`
// // //         @media (max-width: 768px) {
// // //           #projects .container > div:last-child { grid-template-columns: 1fr !important; }
// // //         }
// // //       `}</style>
// // //     </section>
// // //   );
// // // }
