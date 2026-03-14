"use client";

import { useAnimations } from "@/app/hooks/useAnimations";
import { useUI } from "@/app/hooks/useUI";
import Header from "@/app/components/layout/Header";
import Hero from "@/app/components/sections/Hero";
import About from "@/app/components/sections/About";
import Projects from "@/app/components/sections/Projects";
import Footer from "@/app/components/layout/Footer";


export default function Home() {
  // PANGGIL HOOK ANIMASINYA DI SINI BIAR JALAN
  useAnimations();
  useUI();

  return (
    <>
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
      
      <canvas id="particle-canvas"></canvas>

      <div className="content-wrapper">
        <Header />
        
        <div className="promo-banner">
          <div className="section-container">
            <p>✨ Currently available for new opportunities. <a href="#contact" className="promo-link">Let's Connect!</a></p>
          </div>
        </div>
        
        <main>
          <Hero />
          <About />
          <Projects />
        </main>

        <Footer />
      </div>

      <a href="#about" className="scroll-indicator" id="scroll-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-down"><path d="M12 5v14M19 12l-7 7-7-7"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-up"><path d="M12 19V5M5 12l7-7 7 7"></path></svg>
      </a>

      <div id="toast-notification" className="toast-notification">
        <div className="toast-icon"></div>
        <p className="toast-message"></p>
      </div>

      <div className="cookie-consent-banner" id="cookie-banner">
        <p className="cookie-text">We use cookies to ensure the site works properly and to remember your settings. By using this site, you agree to our use of cookies.</p>
        <div className="cookie-buttons">
          <button id="cookie-accept" className="btn-cookie">Accept</button>
          <button id="cookie-decline" className="btn-cookie btn-cookie-secondary">Decline</button>
        </div>
      </div>
    </>
  );
}