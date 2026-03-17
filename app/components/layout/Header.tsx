"use client";
import { useState, useEffect } from "react";
import WeatherWidget from "@/app/components/ui/WeatherWidget";
import { useLang } from "@/app/context/LanguageContext"; // 1. Tarik Hook Bahasa

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, toggleLang } = useLang(); // 2. Panggil state & fungsi bahasa

  // 3. Kamus Bahasa Header
  const dict = {
    en: {
      available: "Available for new opportunities.",
      connect: "Let's Connect!",
      menus: ['About', 'Projects', 'Contact']
    },
    id: {
      available: "Tersedia untuk peluang baru.",
      connect: "Mari Diskusi!",
      menus: ['Tentang', 'Proyek', 'Kontak']
    }
  };
  const t = lang === "en" ? dict.en : dict.id;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full pointer-events-none transition-all duration-500 animate-in fade-in slide-in-from-top-4">
      
      {/* Banner Atas (Palestine & Promo) */}
      <div className={`w-full transition-all duration-700 origin-top pointer-events-auto flex flex-col ${isScrolled ? "max-h-0 opacity-0 -translate-y-full" : "max-h-[200px] opacity-100 translate-y-0"}`}>
        
        {/* Palestine Banner */}
        <div className="w-full py-2 flex justify-center items-center gap-2 text-[13px] border-b border-white/10" style={{ background: 'linear-gradient(90deg, #000000, #E4312b, #FFFFFF, #149954, #000000)', backgroundSize: '400% 100%', animation: 'palestineGradientMove 8s ease infinite' }}>
          <span className="text-[14px]">🇵🇸</span> 
          <span className="font-bold text-white tracking-wide">Free Palestine.</span> 
          <a href="https://donate.unrwa.org/int/en/general" target="_blank" className="underline text-white font-bold hover:text-white/80 transition-colors">Donate Now</a>
        </div>

        {/* Promo Banner */}
        <div className="w-full bg-background/95 backdrop-blur-xl border-b border-border/50 text-foreground text-[12px] md:text-[13px] py-2.5 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/10 to-transparent animate-[shimmer_3s_infinite]"></div>
          <p className="font-medium relative z-10 flex items-center justify-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            {t.available} <a href="#contact" className="text-violet-500 font-bold hover:underline ml-1">{t.connect} &rarr;</a>
          </p>
        </div>
      </div>

      {/* Navbar Utama */}
      <div className={`w-full pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] px-4 md:px-6 pt-4`}>
        <div className={`mx-auto flex items-center justify-between transition-all duration-700 overflow-hidden ${isScrolled ? "max-w-4xl bg-card/60 backdrop-blur-2xl border border-border/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full py-2.5 px-4 md:px-6" : "max-w-7xl bg-transparent border-transparent py-2 px-0"}`}>
          
          {/* Widget Kiri */}
          <div className="flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]">
            <WeatherWidget />
          </div>

          {/* Menu Tengah */}
          <nav className="hidden md:flex items-center gap-2">
            {t.menus.map((item, idx) => {
              const links = ['#about', '#projects', '#contact'];
              return (
                <a key={item} href={links[idx]} className="relative px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground group">
                  <span className="absolute inset-0 rounded-full bg-violet-500/10 scale-50 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 -z-10"></span>
                  {item}
                </a>
              )
            })}
          </nav>

          {/* --- KANAN: TOMBOL BAHASA & THEME --- */}
          <div className="flex items-center gap-2">
            
            {/* TOMBOL GANTI BAHASA (EN/ID) */}
            <button 
              onClick={toggleLang}
              className={`relative flex items-center justify-center font-bold text-[11px] tracking-wider rounded-full transition-all duration-300 hover:border-violet-500 hover:text-violet-500 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] active:scale-90 ${
                isScrolled ? "w-10 h-10 bg-background/50 border border-border/50 text-foreground" : "w-10 h-10 bg-card border border-border shadow-sm text-muted-foreground"
              }`}
              title="Toggle Language"
            >
              {/* Kalau lagi Inggris tulisannya EN, kalau Indo tulisannya ID */}
              {lang === "en" ? "EN" : "ID"}
            </button>

            {/* TOMBOL THEME (Dark Mode) */}
            <button id="theme-toggle" className={`theme-switcher relative flex items-center justify-center rounded-full transition-all duration-300 group ${isScrolled ? "w-10 h-10 bg-background/50 border border-border/50 hover:bg-violet-500 hover:border-violet-500 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] text-foreground hover:text-white" : "w-10 h-10 bg-card border border-border shadow-sm hover:border-violet-500/50 hover:text-violet-500 text-muted-foreground"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-45 transition-transform duration-500 ease-out"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </button>
            
          </div>

        </div>
      </div>
      
      <style>{` 
        @keyframes palestineGradientMove { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } } 
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } } 
      `}</style>
    </header>
  );
}