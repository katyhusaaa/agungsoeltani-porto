"use client";
import { useEffect, useRef } from "react";

// --- SUB-COMPONENT: Objek 3D Orbital (Ultra-Clean SaaS Vibe) ---
const Floating3DObject = () => {
  return (
    <div className="absolute top-1/2 right-10 md:right-32 lg:right-40 -translate-y-1/2 w-[320px] h-[320px] pointer-events-none -z-10 hidden lg:block opacity-60">
      <div className="w-full h-full" style={{ perspective: "1200px" }}>
        
        {/* Kontainer Utama Animasi 3D */}
        <div 
          className="relative w-full h-full animate-[spinOrbital_20s_linear_infinite]" 
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Cincin Orbital (Tipis, Elegan, Neon Glow) */}
          <div className="absolute inset-0 border-[1px] border-violet-500/40 rounded-full shadow-[0_0_30px_rgba(139,92,246,0.15)]" style={{ transform: "rotateX(70deg) rotateY(0deg)" }}></div>
          <div className="absolute inset-0 border-[1px] border-fuchsia-500/40 rounded-full shadow-[0_0_30px_rgba(217,70,239,0.15)]" style={{ transform: "rotateX(70deg) rotateY(45deg)" }}></div>
          <div className="absolute inset-0 border-[1px] border-emerald-500/40 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.15)]" style={{ transform: "rotateX(70deg) rotateY(90deg)" }}></div>
          <div className="absolute inset-0 border-[1px] border-cyan-500/40 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.15)]" style={{ transform: "rotateX(70deg) rotateY(135deg)" }}></div>
          
          {/* Inti (Core) Pulsing */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_40px_rgba(255,255,255,0.8),_0_0_80px_rgba(139,92,246,0.6)] animate-pulse"></div>
        </div>

      </div>
    </div>
  );
};

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Efek 3D Tilt super halus pas mouse gerak
  useEffect(() => {
    const titleNode = titleRef.current;
    if (!titleNode) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = titleNode.getBoundingClientRect();
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      // Rotasi dibikin lebih subtle (kecil) biar kesan mewahnya dapet
      titleNode.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.01, 1.01, 1.01)`;
    };

    const handleMouseLeave = () => {
      titleNode.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };

    titleNode.addEventListener("mousemove", handleMouseMove);
    titleNode.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      titleNode.removeEventListener("mousemove", handleMouseMove);
      titleNode.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      
      {/* Objek 3D Orbital */}
      <Floating3DObject />
      
      {/* Background Radial Murni Ala SaaS (Bukan blur bulet, tapi radial gradient halus dari atas) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-background to-background pointer-events-none -z-20"></div>

      <div className="max-w-3xl relative z-10 pt-20">
        
        {/* Intro Badge - Animasi Border Shimmer */}
        <div className="inline-flex items-center justify-center mb-8 relative group overflow-hidden rounded-full p-[1px]">
          <span className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,rgba(139,92,246,0.8)_50%,transparent_100%)] animate-[spin_2s_linear_infinite]"></span>
          <div className="relative px-4 py-1.5 bg-card backdrop-blur-xl rounded-full text-xs md:text-sm font-bold text-foreground/80 tracking-widest uppercase flex items-center gap-2">
            Hello, I'm <span className="animate-bounce">👋</span>
          </div>
        </div>
        
        {/* Title Agung Soeltani - Shimmer Text Reveal */}
        <h1 
          ref={titleRef}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[6rem] font-black tracking-tighter mb-4 leading-[1.1] transition-transform duration-500 ease-out will-change-transform cursor-default select-none animate-in slide-in-from-bottom-8 fade-in duration-1000"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-muted-foreground">
            Agung Soeltani.
          </span>
        </h1>
        
        {/* Tagline "I build." - Gradient Nyala */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-10 animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-150 fill-mode-both">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 animate-[textShimmer_5s_ease-in-out_infinite] bg-[length:200%_auto]">
            I build.
          </span>
        </h2>
        
        {/* Action Buttons Container */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-300 fill-mode-both">
          
          {/* Primary Button (Download Resume) */}
          <a 
            href="/Assets/CV_AGUNG.pdf" 
            download 
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 rounded-full text-sm font-bold transition-all duration-300 bg-foreground text-background shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.02] h-14 px-8 overflow-hidden"
          >
            {/* Hover Glare Effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-background/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 group-hover:-translate-y-1 transition-transform duration-300">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span className="relative z-10 tracking-wide">Download Resume</span>
          </a>

          {/* Secondary Button (View Projects) */}
          <a 
            href="#projects" 
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 rounded-full text-sm font-bold transition-all duration-300 bg-transparent border border-border text-foreground hover:bg-muted/50 hover:border-violet-500/50 h-14 px-8"
          >
            View Projects
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>

        </div>
      </div>

      {/* CSS Animasi Khusus */}
      <style>{`
        /* Animasi rotasi Orbital 3D */
        @keyframes spinOrbital {
          from { transform: rotateX(15deg) rotateY(0deg) rotateZ(0deg); }
          to { transform: rotateX(15deg) rotateY(360deg) rotateZ(360deg); }
        }
        /* Animasi Shimmer Text "I build." */
        @keyframes textShimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

    </section>
  );
}