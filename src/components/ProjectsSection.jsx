import { useState } from 'react'

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'LiquidGlass UI System',
      category: 'frontend',
      desc: 'Komponen UI iOS Liquid Glass modern berbasis React dan Tailwind CSS dengan efek pantulan cahaya.',
      tags: ['React', 'Tailwind CSS', 'Glassmorphism'],
      link: '#',
      stars: '1.2k',
    },
    {
      id: 2,
      title: 'NeoVite Dashboard',
      category: 'dashboard',
      desc: 'Platform analitik dan telemetri data real-time dengan antarmuka gelap transparan.',
      tags: ['React', 'Chart.js', 'Vite'],
      link: '#',
      stars: '850',
    },
    {
      id: 3,
      title: 'AeroCommerce Store',
      category: 'frontend',
      desc: 'Storefront e-commerce mutakhir dengan animasi transisi halaman ultra mulus.',
      tags: ['Next.js', 'Tailwind', 'Stripe'],
      link: '#',
      stars: '620',
    },
    {
      id: 4,
      title: 'CyberNote Studio',
      category: 'tools',
      desc: 'Aplikasi pencatatan markdown minimalis dengan fitur enkripsi dan sinkronisasi instan.',
      tags: ['React', 'TypeScript', 'IndexedDB'],
      link: '#',
      stars: '430',
    },
  ]

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section
      id="projects"
      className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 py-20"
    >
      <div className="glass-panel w-full max-w-4xl p-6 sm:p-10 rounded-3xl bg-white/[0.09] backdrop-blur-2xl border border-white/20 shadow-2xl relative overflow-hidden flex flex-col justify-between">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/15 pb-4 mb-4 gap-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Featured Projects
              </h2>
            </div>
            
            {/* Filter Pills */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-white/[0.06] border border-white/10">
              {['all', 'frontend', 'dashboard', 'tools'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium capitalize transition-all ${
                    activeFilter === cat
                      ? 'bg-white/20 text-white shadow-sm font-semibold'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group p-4 sm:p-5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/15 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 border border-white/15 text-white/80">
                      ⭐ {project.stars}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-medium">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-white/70 mt-1.5 leading-relaxed font-light">
                    {project.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.link}
                    className="text-xs text-white/90 hover:text-white font-medium flex items-center gap-1 hover:underline underline-offset-4"
                  >
                    Demo ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
