import React from 'react';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans p-6 md:p-12">
      <div className="max-w-5xl mx-auto">

        {/* Navbar */}
        <nav className="flex justify-between items-center mb-16">
          <span className="font-bold text-2xl tracking-tighter">VW<span className="text-blue-600">.</span></span>
          <div className="flex gap-4">
            <button className="text-sm font-medium hover:text-blue-600">Work</button>
            <button className="text-sm font-medium hover:text-blue-600">Resume</button>
            <button className="px-4 py-1.5 text-sm font-medium bg-slate-900 text-white rounded-full hover:bg-blue-600 transition">Let's Talk</button>
          </div>
        </nav>

        {/* Hero & Profile Section */}
        <header className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2 space-y-6">
            <h1 className="text-5xl font-bold tracking-tight leading-tight">
              Crafting scalable digital solutions as a Full-stack Developer.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              I specialize in <strong>Laravel</strong>, <strong>Go</strong>, and <strong>Vue.js</strong>. Building systems that are fast, secure, and user-focused. Currently based in Jakarta.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-slate-500 bg-white px-4 py-2 border rounded-lg shadow-sm">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for new projects
              </div>
            </div>
          </div>

          <div className="bg-white p-2 rounded-3xl border shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover rounded-2xl aspect-[4/5]"
            />
          </div>
        </header>

        {/* Stats & Tech (Modular Features) */}
        <section className="grid md:grid-cols-4 gap-4 mb-16">
          {[
            { label: 'Experience', value: '3+ Years' },
            { label: 'Projects', value: '15+ Done' },
            { label: 'Languages', value: 'Go, PHP, JS' },
            { label: 'Frameworks', value: 'Laravel, Vue' }
          ].map((item) => (
            <div key={item.label} className="bg-white p-6 rounded-2xl border shadow-sm">
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-xl font-semibold">{item.value}</p>
            </div>
          ))}
        </section>

        {/* Selected Projects (Feature Utama) */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Selected Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="group bg-white p-6 rounded-2xl border hover:border-blue-300 transition-all shadow-sm">
                <div className="h-40 bg-slate-100 rounded-xl mb-6 group-hover:bg-blue-50 transition" />
                <h3 className="font-bold text-lg mb-2">Hospital Management System</h3>
                <p className="text-slate-500 text-sm mb-4">An integrated platform for patient check-ins, ticketing, and license management.</p>
                <a href="#" className="text-blue-600 font-semibold text-sm hover:underline">View Case Study →</a>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;