export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      
      {/* Efek Glow Ungu di Background (Biar vibe-nya makin mewah) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-violet-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-3xl relative z-10">
        {/* Intro - Pakai violet-500 biar kontras di Light/Dark */}
        <p className="text-violet-500 font-mono text-sm md:text-base mb-6 tracking-wide">
         Hello, I'm <span className="inline-block animate-bounce">:)))))))</span>
        </p>
        
        {/* Title Agung Soeltani */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tighter mb-2 leading-tight transition-colors duration-300">
          Agung Soeltani.
        </h1>
        
        {/* Tagline "I build." */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-muted-foreground tracking-tighter mb-10 transition-colors duration-300">
          I build.
        </h2>
        
        {/* Tombol Download Resume (Sekarang Warna Violet) */}
        <div className="mt-8">
          <a 
            href="/Assets/CV_AGUNG.pdf" 
            download 
            className="group inline-flex items-center justify-center gap-3 rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 bg-violet-600 text-white shadow-lg hover:bg-violet-500 hover:shadow-violet-500/25 hover:-translate-y-1 h-12 px-8 py-3"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="group-hover:translate-y-1 transition-transform duration-300"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}