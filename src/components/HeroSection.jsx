export default function HeroSection({ scrollToSection }) {
  return (
    <section
      id="hero"
      className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 py-20"
    >
      <div className="glass-panel w-full max-w-4xl p-6 sm:p-10 md:p-12 rounded-3xl bg-white/[0.09] backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/50 flex flex-col md:flex-row items-center gap-8 md:gap-10 relative overflow-hidden group">
        
        {/* Top Shimmer Accent */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        
        {/* Profile Picture Frame */}
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl flex-shrink-0 group/avatar bg-slate-900/60">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
            alt="Clifford Justin Loing"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/avatar:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-2.5 left-2.5 right-2.5 px-2 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-[10px] text-center font-medium text-white/90">
            🟢 Online
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-[1px] h-40 bg-gradient-to-b from-transparent via-white/30 to-transparent flex-shrink-0" />

        {/* Right Content */}
        <div className="text-center md:text-left flex-1 flex flex-col items-center md:items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-white/90 mb-3.5 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>✨ Welcome to my workspace</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Halo, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Clifford Justin Loing
            </span>
          </h1>

          <p className="text-emerald-300/90 text-sm sm:text-base font-medium mt-1.5">
            Frontend Developer & Tech Enthusiast
          </p>

          <p className="mt-3.5 text-xs sm:text-sm text-white/80 leading-relaxed max-w-xl font-light">
            Crafting fluid, high-performance web applications using modern <strong>iOS Liquid Glass</strong> design principles.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-5 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 border border-white/30 text-white text-xs sm:text-sm font-semibold transition-all duration-300 backdrop-blur-md shadow-lg hover:scale-[1.03]"
            >
              🚀 Explore Projects
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white/90 text-xs sm:text-sm font-medium transition-all duration-300 backdrop-blur-md hover:scale-[1.03]"
            >
              👤 About Me
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
