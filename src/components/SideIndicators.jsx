export default function SideIndicators({ activeSection, scrollToSection }) {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2.5 p-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
      {['hero', 'about', 'projects', 'social'].map((id) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            activeSection === id ? 'bg-white h-6 rounded-md shadow-glow' : 'bg-white/30 hover:bg-white/60'
          }`}
          title={id}
        />
      ))}
    </div>
  )
}
