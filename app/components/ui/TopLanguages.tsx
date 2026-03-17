"use client";
import { useEffect, useState } from "react";

export default function TopLanguages() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Data bahasa lo (berdasarkan project: Bytez, FLOW, SBITE, SMAPAR)
  const languages = [
    { name: "MATLAB", percent: 35, color: "bg-orange-500" },
    { name: "C / C++", percent: 25, color: "bg-blue-600" },
    { name: "Python", percent: 20, color: "bg-yellow-400" },
    { name: "TypeScript / JS", percent: 15, color: "bg-blue-400" },
    { name: "HTML & CSS", percent: 5, color: "bg-rose-500" },
  ];

  // Efek biar bar-nya jalan mulus pas komponen baru dirender
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-card/40 backdrop-blur-2xl border border-border/50 p-6 md:p-8 rounded-[2rem] shadow-lg relative overflow-hidden group">
      
      {/* Background Ambient Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-violet-500/10 blur-[50px] rounded-full pointer-events-none transition-all duration-500 group-hover:bg-violet-500/20"></div>

      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-violet-500"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            Top Languages
          </h3>
          <span className="text-xs font-mono text-muted-foreground bg-muted/50 px-2 py-1 rounded-md border border-border/50">
            Based on recent projects
          </span>
        </div>

        <div className="flex flex-col gap-5">
          {languages.map((lang, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-foreground/90">{lang.name}</span>
                <span className="text-muted-foreground font-mono text-xs">{lang.percent}%</span>
              </div>
              
              {/* Progress Bar Track */}
              <div className="w-full h-2 md:h-2.5 bg-muted rounded-full overflow-hidden border border-border/40 relative">
                {/* Progress Bar Fill dengan animasi nyala */}
                <div 
                  className={`h-full ${lang.color} rounded-full transition-all duration-1000 ease-out relative`}
                  style={{ width: isLoaded ? `${lang.percent}%` : "0%" }}
                >
                  {/* Efek Shimmer Putih di dalem bar */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}