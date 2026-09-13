import GreetingDemo from './props/Greeting.jsx'

export default function AboutSection() {
  const skills = [
    { name: 'React 19', icon: '⚛️' },
    { name: 'Tailwind CSS v4', icon: '🎨' },
    { name: 'JavaScript (ESNext)', icon: '⚡' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Vite', icon: '🚀' },
    { name: 'UI/UX Glassmorphism', icon: '💎' },
    { name: 'Git & GitHub', icon: '🐙' },
  ]

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 py-20"
    >
      <div className="glass-panel w-full max-w-4xl p-6 sm:p-10 rounded-3xl bg-white/[0.09] backdrop-blur-2xl border border-white/20 shadow-2xl relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-5">
          <div className="flex items-center gap-3">
            <span className="text-2xl">👤</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              About Me
            </h2>
          </div>
          <span className="text-xs text-white/60 font-mono">01 // Profile</span>
        </div>

        <div className="space-y-3.5 text-white/80 text-xs sm:text-sm sm:leading-relaxed font-light">
          <p>
            Saya adalah seorang Frontend & Software Developer dengan fokus pada pembuatan antarmuka modern yang memadukan keindahan visual liquid glass dengan kinerja ultra cepat.
          </p>
          <p>
            Spesialisasi saya mencakup ekosistem modern React 19, Tailwind CSS v4, serta integrasi animasi interaktif yang intuitif dan responsif di berbagai perangkat.
          </p>
        </div>

        {/* Skills Pills */}
        <div className="mt-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-3">
            Core Stack & Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.14] border border-white/15 hover:border-white/30 text-xs font-medium text-white transition-all duration-300 backdrop-blur-md cursor-default hover:scale-105"
              >
                <span>{skill.icon}</span>
                <span className="truncate">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Props Demo Component */}
        <div className="mt-12 pt-8 border-t border-white/15">
          <h3 className="text-lg font-semibold text-white mb-4">Props Demonstration</h3>
          <div className="bg-black/20 p-4 rounded-2xl border border-white/10 text-white">
            <GreetingDemo />
          </div>
        </div>
      </div>
    </section>
  )
}
