import React, { useEffect, useState } from "react";

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform">
    <path d="M7 17L17 7M7 7h10v10"></path>
  </svg>
);

function App() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", removeEventListener("mousemove", move));
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-slate-100 font-sans p-6 md:p-12 selection:bg-blue-500/30">
      {/* Background Ambient Glow */}
      <div
        className="fixed w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none transition-transform duration-300 -z-0"
        style={{ transform: `translate(${mouse.x - 250}px, ${mouse.y - 250}px)` }}
      />

      <main className="max-w-6xl mx-auto space-y-4 relative z-10">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* HERO */}
          <div className="md:col-span-8 bg-[#0a0a0a]/60 border border-slate-800 p-8 md:p-10 rounded-[2rem] backdrop-blur-md">
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase">Available for new projects</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
              Vincent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Wijaya</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
              Full-stack developer at <b>Eskalink</b>. Specialized in crafting scalable architecture with Laravel, Go, and modern frontend ecosystems.
            </p>
          </div>

          {/* STATUS & LOCATION */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="bg-[#0a0a0a]/60 border border-slate-800 p-8 rounded-[2rem] flex-1 flex flex-col justify-end">
              <h3 className="text-slate-500 text-xs uppercase tracking-widest mb-1">Based In</h3>
              <p className="text-2xl font-bold">Jakarta, Indonesia</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-slate-800 p-8 rounded-[2rem]">
              <h3 className="text-blue-400 font-bold">Open to Collaboration</h3>
              <p className="text-sm text-slate-400 mt-2">Currently focused on high-scale enterprise systems.</p>
            </div>
          </div>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Eskalink ERP", stack: "Laravel • Vue • PostgreSQL", year: "2026" },
            { name: "Reon Digital", stack: "Fullstack Solutions", year: "2026" },
            { name: "Hospital System", stack: "System Architecture", year: "2026" }
          ].map((project, idx) => (
            <div key={idx} className="bg-[#0a0a0a]/60 border border-slate-800 p-6 rounded-[2rem] hover:border-blue-700 transition group cursor-pointer">
              <div className="flex justify-between items-start mb-8">
                <h2 className="text-lg font-bold">{project.name}</h2>
                <ArrowIcon />
              </div>
              <p className="text-xs text-slate-500 uppercase tracking-wider">{project.stack}</p>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <footer className="pt-10 text-center text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} Vincent Wijaya. Built with React & Tailwind.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;