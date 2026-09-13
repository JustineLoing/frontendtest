export default function SpotifyPlayer() {
  return (
    <div className="fixed top-5 left-5 sm:top-6 sm:left-6 md:left-12 z-50 w-72 sm:w-80 h-[88px] rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/40 overflow-hidden group">
      {/* Shimmer Accent */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent z-10" />

      {/* Iframe Spotify */}
      <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="absolute top-[-2px] left-0 right-0 w-full rounded-2xl scale-[1.02] transform origin-top opacity-90 mix-blend-luminosity filter contrast-125"
      ></iframe>

      {/* Overlay Gradient to blend with Glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-black/20 pointer-events-none rounded-2xl border border-white/10" />
    </div>
  )
}
