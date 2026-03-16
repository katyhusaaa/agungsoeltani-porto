"use client";
import WeatherWidget from "@/app/components/ui/WeatherWidget";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full">
      
      {/* 1. MAIN NAVIGATION BAR */}
      <div className="w-full bg-background/80 backdrop-blur-md border-b border-border/50 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
          <div className="flex-shrink-0">
            <WeatherWidget />
          </div>

          <nav className="main-nav hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            {/* Hover ganti ke violet-500 */}
            <a href="#about" className="hover:text-violet-500 transition-colors">About</a>
            <a href="#projects" className="hover:text-violet-500 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-violet-500 transition-colors">Contact</a>
          </nav>

          <button 
            id="theme-toggle" 
            className="theme-switcher p-2.5 rounded-full bg-card border border-border text-muted-foreground hover:text-violet-500 hover:border-violet-500/50 transition-all shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </button>
        </div>
      </div>

      {/* 2. PROMO BANNER (Ganti Emerald ke Violet) */}
      <div className="w-full bg-violet-500/10 border-b border-violet-500/20 text-violet-500 text-[13px] py-2 text-center backdrop-blur-md">
        <p className="font-medium">
          ✨ Currently available for new opportunities. <a href="#contact" className="underline font-bold">Let's Connect!</a>
        </p>
      </div>

      {/* 3. PALESTINE BANNER */}
      <div className="w-full py-2.5 flex justify-center items-center gap-2 text-[14px] border-b border-white/10" style={{
        background: 'linear-gradient(90deg, #000000, #E4312b, #FFFFFF, #149954, #000000)',
        backgroundSize: '400% 100%',
        animation: 'palestineGradientMove 8s ease infinite',
      }}>
        <style>{`
          @keyframes palestineGradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
        <span className="text-[16px]">🇵🇸</span> 
        <span className="font-medium text-white">Free Palestine.</span> 
        <a href="https://donate.unrwa.org/int/en/general" target="_blank" className="underline text-white font-bold">Donate Now</a>
      </div>
    </header>
  );
}