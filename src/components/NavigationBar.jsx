export default function NavigationBar({ activeSection, scrollToSection }) {
  return (
    <header className="fixed top-5 right-5 sm:top-6 sm:right-8 md:right-12 z-50">
      <nav className="flex items-center gap-1 sm:gap-2 p-1.5 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/50">
        <button
          onClick={() => scrollToSection('hero')}
          className={`glass-light-beam relative px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 ${
            activeSection === 'hero' ? 'bg-white/20 text-white shadow-md' : 'text-white/80 hover:text-white'
          }`}
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection('about')}
          className={`glass-light-beam relative px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 ${
            activeSection === 'about' ? 'bg-white/20 text-white shadow-md' : 'text-white/80 hover:text-white'
          }`}
        >
          About Me
        </button>
        <button
          onClick={() => scrollToSection('projects')}
          className={`glass-light-beam relative px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 ${
            activeSection === 'projects' ? 'bg-white/20 text-white shadow-md' : 'text-white/80 hover:text-white'
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection('social')}
          className={`glass-light-beam relative px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 ${
            activeSection === 'social' ? 'bg-white/20 text-white shadow-md' : 'text-white/80 hover:text-white'
          }`}
        >
          Social Media
        </button>
      </nav>
    </header>
  )
}
