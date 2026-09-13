export default function Footer({ scrollToSection }) {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 bg-white/[0.06] backdrop-blur-2xl border-t border-white/15 py-3.5 px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between text-xs text-white/70 shadow-2xl gap-3">
      <div className="font-light">
        © 2026 <strong>Clifford Justin Loing</strong>. All rights reserved.
      </div>

      <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-md shadow-sm">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[11px] font-medium text-white/90">Available for Collaboration</span>
      </div>

      <button
        onClick={() => scrollToSection('hero')}
        className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-medium transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5 shadow-sm"
      >
        <span>↑</span> Back to Top
      </button>
    </footer>
  )
}
