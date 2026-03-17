"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/app/context/LanguageContext"; // 1. IMPORT HOOK BAHASA

const Floating3DObject = () => {
  return (
    <div className="absolute top-1/2 right-10 md:right-32 lg:right-40 -translate-y-1/2 w-[320px] h-[320px] pointer-events-none -z-10 hidden lg:block opacity-60">
      <div className="w-full h-full" style={{ perspective: "1200px" }}>
        <div className="relative w-full h-full animate-[spinOrbital_20s_linear_infinite]" style={{ transformStyle: "preserve-3d" }}>
          <div className="absolute inset-0 border-[1px] border-violet-500/40 rounded-full shadow-[0_0_30px_rgba(139,92,246,0.15)]" style={{ transform: "rotateX(70deg) rotateY(0deg)" }}></div>
          <div className="absolute inset-0 border-[1px] border-emerald-500/40 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.15)]" style={{ transform: "rotateX(70deg) rotateY(90deg)" }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_40px_rgba(255,255,255,0.8)] animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { lang } = useLang(); // 2. PANGGIL STATE BAHASA

  // 3. KAMUS BAHASA HERO
  const dict = {
    en: {
      hello: "Hello, I'm",
      build: "I build.",
      resume: "Download Resume",
      projects: "View Projects"
    },
    id: {
      hello: "Halo, gue",
      build: "Gue Membangun.",
      resume: "Unduh CV",
      projects: "Lihat Proyek"
    }
  };
  const t = lang === "en" ? dict.en : dict.id;

  // Efek Spotlight ngikutin Mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      
      {/* FEATURE #1: MAGIC SPOTLIGHT GRID */}
      <div 
        className="absolute inset-0 -z-20 opacity-30 pointer-events-none"
        style={{
          background: `
            radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, var(--color-brand-muted), transparent 80%),
            radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)
          `,
          backgroundSize: `100% 100%, 40px 40px`
        }}
      ></div>

      <Floating3DObject />

      <div className="max-w-3xl relative z-10 pt-20">
        
        {/* Intro Badge */}
        <div className="inline-flex items-center justify-center mb-8 relative group overflow-hidden rounded-full p-[1px]">
          <span className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,var(--primary)_50%,transparent_100%)] animate-[spin_3s_linear_infinite]"></span>
          <div className="relative px-4 py-1.5 bg-card backdrop-blur-xl rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-2">
            {t.hello} <span className="animate-bounce">👋</span>
          </div>
        </div>
        
        {/* Title Agung Soeltani */}
        <h1 ref={titleRef} className="text-6xl md:text-8xl font-black tracking-tighter mb-4 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-muted-foreground">
            Agung Soeltani.
          </span>
        </h1>
        
        {/* Tagline */}
        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-400 animate-[textShimmer_5s_ease-in-out_infinite] bg-[length:200%_auto]">
            {t.build}
          </span>
        </h2>
        
        {/* Tombol Aksi */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <a href="/Assets/CV_AGUNG.pdf" download className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 rounded-xl text-sm font-bold transition-all bg-primary text-primary-foreground h-14 px-8 overflow-hidden shadow-[0_0_20px_var(--color-brand-muted)]">
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
            {t.resume}
          </a>
          <a href="#projects" className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl text-sm font-bold border border-border bg-card/50 backdrop-blur-sm hover:bg-muted transition-all h-14 px-8">
            {t.projects} &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}