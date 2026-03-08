import React, { useEffect, useState } from "react";

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M7 7h10v10"></path>
    <path d="M7 17 17 7"></path>
  </svg>
);

function App() {

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="bg-[#0B1120] min-h-screen text-slate-100 font-sans relative overflow-hidden">

      {/* Cursor Glow */}
      <div
        className="fixed w-[500px] h-[500px] bg-blue-600/20 blur-[160px] pointer-events-none transition-transform duration-200"
        style={{
          transform: `translate(${mouse.x - 250}px, ${mouse.y - 250}px)`
        }}
      />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* NAVBAR */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 backdrop-blur-xl bg-[#161F36]/70 border border-slate-700/40 rounded-full px-2 py-1.5 shadow-lg">
        <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wide">
          {["Home", "Projects", "Stack"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="px-5 py-2.5 rounded-full hover:bg-[#1C2847] hover:text-white transition">
              {item}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full hover:scale-105 transition">
            Contact
          </a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-16 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[180px]">

          {/* HERO */}
          <div className="md:col-span-4 row-span-2 bg-[#10172A]/80 border border-slate-800 rounded-3xl p-10 flex justify-between items-center group hover:border-blue-700 transition">

            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                Fullstack Engineer
              </span>

              <h1 className="text-6xl font-extrabold tracking-tighter mt-4">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Vincent
                </span>
                <br />
                Wijaya
              </h1>

              <p className="text-slate-400 max-w-lg pt-3">
                Crafting scalable digital systems using Laravel, Go and modern frontend frameworks.
              </p>
            </div>

            {/* FOTO */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 blur-lg opacity-50 group-hover:opacity-80 transition rounded-full"></div>

              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36"
                alt="profile"
                className="relative w-40 h-40 rounded-full object-cover border-4 border-[#0B1120] group-hover:scale-105 transition"
              />
            </div>

          </div>

          {/* LOCATION */}
          <div className="md:col-span-2 row-span-1 bg-[#10172A] border border-slate-800 rounded-3xl p-8 flex flex-col justify-end hover:border-blue-700 transition">
            <h3 className="text-slate-500 text-xs uppercase tracking-widest mb-1">Based In</h3>
            <p className="text-2xl font-bold">Jakarta, Indonesia</p>
          </div>

          {/* STATUS */}
          <div className="md:col-span-2 row-span-1 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border border-slate-800 rounded-3xl p-8 flex items-center justify-center">
            <p className="text-3xl font-extrabold text-blue-400 animate-pulse">AVAILABLE</p>
          </div>

          {/* STACK */}
          <div className="md:col-span-2 row-span-2 bg-[#10172A] border border-slate-800 rounded-3xl p-9 flex flex-col justify-between">

            <h2 className="text-lg font-bold">Core Stack</h2>

            <div className="flex flex-wrap gap-3">
              {["Laravel", "Go", "React", "Vue", "PostgreSQL", "Docker", "AWS"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-[#161F36] border border-slate-700 rounded-full text-xs hover:border-blue-500 hover:text-blue-300 hover:scale-105 transition"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

          {/* PROJECTS */}
          <div className="md:col-span-4 row-span-3 bg-[#10172A] border border-slate-800 rounded-3xl p-10 flex flex-col justify-between">

            <h2 className="text-3xl font-bold mb-6">Selected Work</h2>

            {[
              {
                name: "Eskalink ERP System",
                stack: "Laravel • Vue • PostgreSQL",
                year: "2026"
              },
              {
                name: "SSO Gateway",
                stack: "Java Spring Boot • OAuth",
                year: "2026"
              },
              {
                name: "Property Price Prediction",
                stack: "Python • XGBoost",
                year: "2025"
              }
            ].map((item, idx) => (

              <div key={idx} className="flex justify-between items-center py-6 border-b border-slate-800 hover:border-blue-700 group cursor-pointer transition">

                <div>
                  <span className="block text-xl font-semibold group-hover:text-blue-400 transition">
                    {item.name}
                  </span>

                  <span className="text-sm text-slate-500">
                    {item.stack}
                  </span>
                </div>

                <div className="flex items-center gap-6">
                  <span className="text-sm font-mono text-slate-600">
                    {item.year}
                  </span>
                  <ArrowIcon />
                </div>

              </div>

            ))}

          </div>

          {/* DOWNLOAD CV */}
          <div className="md:col-span-2 row-span-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 flex items-center justify-between hover:scale-[1.02] transition cursor-pointer shadow-lg">
            <p className="text-lg font-bold text-white">Download CV</p>
          </div>

        </div>

        <footer className="text-center text-slate-600 text-xs tracking-widest uppercase pt-16 pb-6">
          Vincent Wijaya — Portfolio
        </footer>

      </main>
    </div>
  );
}

export default App;