"use client";

import { useAnimations } from "@/app/hooks/useAnimations";
import { useUI } from "@/app/hooks/useUI";
import Header from "@/app/components/layout/Header";
import Hero from "@/app/components/sections/Hero";
import About from "@/app/components/sections/About";
import Projects from "@/app/components/sections/Projects";
import Footer from "@/app/components/layout/Footer";

export default function Home() {
  useAnimations();
  useUI();

  return (
    <>
      {/* Trik Jenius: CSS Inline khusus buat interaksi JavaScript (Hooks lo) */}
      <style>{`
        /* Animasi Toast Notification */
        #toast-notification.show { opacity: 1; transform: translate(-50%, 0); pointer-events: auto; }
        /* Animasi Cookie Banner */
        #cookie-banner.show { transform: translateY(0); }
        /* Toggle Arrow Scroll */
        #scroll-arrow .arrow-up { display: none; }
        #scroll-arrow.scrolled .arrow-down { display: none; }
        #scroll-arrow.scrolled .arrow-up { display: block; }
      `}</style>

{/* Custom Cursor: Hapus class transform Tailwind biar diatur penuh sama JS lo */}
<div className="cursor-dot hidden md:block fixed w-2 h-2 bg-emerald-500 rounded-full pointer-events-none z-[9999]"></div>
<div className="cursor-outline hidden md:block fixed w-8 h-8 border border-emerald-500/50 rounded-full pointer-events-none z-[9998] transition-all duration-75"></div>

<canvas id="particle-canvas" className="fixed inset-0 w-full h-full pointer-events-none z-0"></canvas>


      {/* Wrapper Utama (z-10 biar di atas canvas) */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        {/* pt-20 biar banner ini nggak nabrak/ketutupan Header yang ukurannya 80px (h-20) */}
        <div className="pt-20">

        </div>

        <main>
          <Hero />
          <About />
          <Projects />
        </main>

        <Footer />
      </div>

      {/* Floating Scroll Indicator (Pojok Kanan Bawah) */}
      <a href="#about" id="scroll-arrow" className="fixed bottom-8 right-8 z-50 p-3.5 bg-[#111111]/80 backdrop-blur-sm border border-gray-800 rounded-full text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300 shadow-xl group">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="arrow-down group-hover:translate-y-1 transition-transform duration-300"><path d="M12 5v14M19 12l-7 7-7-7"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="arrow-up hidden group-hover:-translate-y-1 transition-transform duration-300"><path d="M12 19V5M5 12l7-7 7 7"></path></svg>
      </a>

      {/* Toast Notification (Buat notif sukses ngirim email) */}
      <div id="toast-notification" className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-3 bg-[#111111] border border-gray-800 rounded-full shadow-2xl opacity-0 pointer-events-none transform translate-y-4 transition-all duration-300">
        <div className="toast-icon w-6 h-6 text-emerald-500 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <p className="toast-message text-sm text-white font-medium whitespace-nowrap m-0"></p>
      </div>

      {/* Cookie Consent Banner */}
      <div id="cookie-banner" className="fixed bottom-0 left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-md border-t border-gray-800 p-4 md:p-6 z-[90] flex flex-col md:flex-row items-center justify-between gap-4 transform translate-y-full transition-transform duration-500 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <p className="cookie-text text-sm text-gray-400 text-center md:text-left max-w-3xl">
          We use cookies to ensure the site works properly and to remember your settings. By using this site, you agree to our use of cookies.
        </p>
        <div className="cookie-buttons flex items-center gap-3 shrink-0 w-full md:w-auto justify-center">
          <button id="cookie-accept" className="w-full md:w-auto px-6 py-2.5 text-sm font-bold rounded-lg bg-emerald-500 text-zinc-950 shadow-lg hover:bg-emerald-400 hover:-translate-y-0.5 transition-all">Accept</button>
          <button id="cookie-decline" className="w-full md:w-auto px-6 py-2.5 text-sm font-semibold rounded-lg bg-transparent border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 transition-all">Decline</button>
        </div>
      </div>
    </>
  );
}