import React, { useEffect, useState } from "react";
import myPhoto from "./assets/Me1.png";
import CV from "./assets/CV_2026.pdf";

/* ---------------- ICON ---------------- */

const ArrowIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
  >
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
);

/* ---------------- BADGE ---------------- */
const TechBadge = ({ tech }) => (
  <span className="relative px-3 py-1.5 md:px-4 text-xs rounded-full bg-slate-900 border border-slate-700 hover:border-blue-500 transition group whitespace-nowrap">
    <span className="relative z-10">{tech}</span>
    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 blur-md group-hover:opacity-30 transition" />
  </span>
);

/* ---------------- APP ---------------- */

function App() {
  const [lang, setLang] = useState("en");
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const stack = [
    "Laravel",
    "Go",
    "React",
    "Vue",
    "PostgreSQL",
    "SQL Server",
    "Python",
  ];

  const text = {
    en: {
      blog: "Blog",
      projects: "Projects",
      timeline: "Timeline",
      contact: "Contact",
      role: "Fullstack Engineer",
      name: "Vincent Wijaya",
      heroDesc: "Crafting scalable backend systems and modern frontend experiences using",
      based: "Based In",
      location: "Jakarta, Indonesia",
      time: "Local Time GMT+7",
      focus: "Focus",
      focusTitle: "Backend Architecture",
      focusDesc: "APIs • Microservices • System Design",
      coreStack: "Core Stack",
      download: "Download CV",
    },
    id: {
      blog: "Blog",
      projects: "Proyek",
      timeline: "Timeline",
      contact: "Kontak",
      role: "Fullstack Engineer",
      name: "Vincent Wijaya",
      heroDesc: "Membangun sistem backend yang skalabel dan pengalaman frontend modern menggunakan",
      based: "Berlokasi di",
      location: "Jakarta, Indonesia",
      time: "Waktu Lokal GMT+7",
      focus: "Fokus",
      focusTitle: "Arsitektur Backend",
      focusDesc: "API • Microservices • Desain Sistem",
      coreStack: "Teknologi Utama",
      download: "Unduh CV",
    },
  };

  return (
    <div className="bg-[#0B1120] min-h-screen text-slate-100 font-sans relative overflow-hidden">
      {/* CURSOR GLOW (Disembunyikan di mobile agar tidak mengganggu performa/scroll) */}
      <div
        className="hidden md:block fixed w-[500px] h-[500px] bg-blue-600/20 blur-[160px] pointer-events-none transition-transform duration-200"
        style={{
          transform: `translate(${mouse.x - 250}px, ${mouse.y - 250}px)`,
        }}
      />

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* NAVBAR */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-lg bg-[#0a0f1d]/80 border border-slate-800 rounded-2xl p-2 flex items-center gap-1 md:gap-2 shadow-xl w-[90%] md:w-auto max-w-fit overflow-x-auto no-scrollbar">
        {[text[lang].blog, text[lang].projects, text[lang].timeline].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative px-3 py-2 text-xs md:text-sm text-slate-400 hover:text-blue-400 transition whitespace-nowrap"
          >
            {item}
          </a>
        ))}

        <div className="w-px h-6 bg-slate-700 mx-1 flex-shrink-0" />

        <a
          href="#contact"
          className="px-3 py-2 text-xs md:text-sm text-blue-400 hover:text-blue-300 transition whitespace-nowrap"
        >
          {text[lang].contact} →
        </a>

        {/* LANGUAGE SWITCH */}
        <div className="flex ml-1 md:ml-2 border border-slate-700 rounded-lg overflow-hidden text-[10px] md:text-xs flex-shrink-0">
          <button
            onClick={() => setLang("en")}
            className={`px-2 md:px-3 py-1 ${lang === "en" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
              }`}
          >
            EN
          </button>
          <button
            onClick={() => setLang("id")}
            className={`px-2 md:px-3 py-1 ${lang === "id" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
              }`}
          >
            ID
          </button>
        </div>
      </nav>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 pt-28 md:pt-32 pb-20 relative z-10">
        {/* Perubahan utama: auto-rows-[180px] hanya di-apply di medium ke atas (md:) */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 md:auto-rows-[180px]">

          {/* HERO */}
          <div className="md:col-span-4 md:row-span-2 bg-[#0F172A] border border-slate-800/60 rounded-3xl p-6 md:p-10 flex flex-col-reverse md:flex-row justify-between items-center text-center md:text-left relative overflow-hidden group gap-6 md:gap-0">
            {/* Efek Glow */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />

            {/* Bagian Teks */}
            <div className="relative z-10 max-w-lg">
              <span className="text-blue-400 font-semibold tracking-wider text-xs md:text-sm">
                {text[lang].role}
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-2 md:mt-3 leading-tight">
                {text[lang].name.split(" ")[0]} <br className="hidden md:block" />
                <span className="text-slate-500">{text[lang].name.split(" ")[1]}</span>
              </h1>

              <p className="text-slate-400 mt-4 md:mt-6 text-sm md:text-lg leading-relaxed">
                {text[lang].heroDesc} <span className="text-white font-medium">Laravel</span>,
                <span className="text-white font-medium"> Go</span>, and modern frameworks.
              </p>
            </div>

            {/* Bagian Foto */}
            <div className="relative z-10 md:-mr-10 transition-transform duration-700 group-hover:scale-105">
              <img
                src={myPhoto}
                alt="Vincent Wijaya"
                className="w-48 md:w-80 h-auto object-cover mask-fade-right"
                style={{
                  WebkitMaskImage: "linear-gradient(to left, black 80%, transparent 100%)",
                }}
              />
            </div>
          </div>

          {/* LOCATION */}
          <div className="md:col-span-2 bg-[#10172A] border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-blue-700 transition relative overflow-hidden min-h-[160px] md:min-h-0">
            {/* GLOBE */}
            <div className="absolute -top-10 -right-10 opacity-20">
              <svg
                width="160"
                height="160"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-blue-400 animate-spin"
                style={{ animationDuration: "20s" }}
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M2 12h20"></path>
                <path d="M12 2a15 15 0 010 20"></path>
                <path d="M12 2a15 15 0 000 20"></path>
              </svg>
            </div>

            <div>
              <p className="text-xs text-slate-500 uppercase tracking-widest">{text[lang].based}</p>
              <p className="text-xl md:text-2xl font-bold mt-2">{text[lang].location}</p>
            </div>

            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-xs text-slate-400">{text[lang].time}</span>
            </div>
          </div>

          {/* FOCUS */}
          <div className="md:col-span-2 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col justify-center min-h-[160px] md:min-h-0">
            <p className="text-xs text-slate-500 uppercase tracking-widest">{text[lang].focus}</p>
            <p className="text-lg md:text-xl font-bold mt-2">{text[lang].focusTitle}</p>
            <p className="text-xs md:text-sm text-slate-400 mt-2">{text[lang].focusDesc}</p>
          </div>

          {/* STACK */}
          {/* Perubahan: Ganti tinggi tetap h-32 jadi min-h agar chip tidak terpotong saat layar mengecil */}
          <div className="md:col-span-4 bg-[#10172A] border border-slate-800 rounded-3xl p-6 flex flex-col gap-4 min-h-[8rem]">
            <h2 className="text-base md:text-lg font-bold">{text[lang].coreStack}</h2>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <TechBadge key={tech} tech={tech} />
              ))}
            </div>
          </div>

          {/* CV */}
          <a
            href={CV}
            download="Vincent_Wijaya_CV.pdf"
            className="md:col-span-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-6 md:p-8 flex items-center justify-between hover:scale-[1.02] transition cursor-pointer shadow-lg min-h-[6rem] md:min-h-[8rem]"
          >
            <p className="text-base md:text-lg font-bold">{text[lang].download}</p>
            <ArrowIcon />
          </a>
        </div>

        {/* FOOTER */}
        <footer className="pt-10 md:pt-14 text-center text-slate-600 text-xs md:text-sm">
          © {new Date().getFullYear()} Vincent Wijaya. Built with React & Tailwind.
        </footer>
      </main>

      {/* Tambahkan style di bawah ini ke file CSS global kamu jika mau hide scrollbar di navbar */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}

export default App;