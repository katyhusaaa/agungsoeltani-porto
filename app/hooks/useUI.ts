"use client";
import { useEffect } from "react";

export const useUI = () => {
  useEffect(() => {
    // ==========================================
    // 1. THEME SWITCHER LOGIC (FIXED)
    // ==========================================
    const themeToggleButton = document.getElementById("theme-toggle");
    const html = document.documentElement; // Tailwind v4 baca class di <html>, bukan <body>

    const applyTheme = (theme: string) => {
      if (theme === "dark") {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    };

    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(savedTheme || (systemPrefersDark ? "dark" : "light"));

    const handleThemeToggle = () => {
      html.classList.toggle("dark");
      const newTheme = html.classList.contains("dark") ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
    };

    if (themeToggleButton) {
      themeToggleButton.addEventListener("click", handleThemeToggle);
    }

    // ==========================================
    // 2. COOKIE CONSENT LOGIC (FIXED)
    // ==========================================
    const cookieBanner = document.getElementById("cookie-banner");
    const cookieAcceptBtn = document.getElementById("cookie-accept");
    const cookieDeclineBtn = document.getElementById("cookie-decline");
    let cookieTimeout: NodeJS.Timeout;

    if (cookieBanner && cookieAcceptBtn && cookieDeclineBtn) {
      const cookieConsent = localStorage.getItem("cookie_consent");
      if (!cookieConsent) {
        // Pake class 'show' biar sinkron sama inline style di page.tsx
        cookieTimeout = setTimeout(() => cookieBanner.classList.add("show"), 1000);
      }

      cookieAcceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookie_consent", "accepted");
        cookieBanner.classList.remove("show");
      });

      cookieDeclineBtn.addEventListener("click", () => {
        localStorage.setItem("cookie_consent", "declined");
        cookieBanner.classList.remove("show");
      });
    }

    // ==========================================
    // 3. CUSTOM CURSOR LOGIC (STABLE)
    // ==========================================
    const cursorDot = document.querySelector(".cursor-dot") as HTMLElement;
    const cursorOutline = document.querySelector(".cursor-outline") as HTMLElement;

    const handleMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;
      if (cursorDot) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
      }
      if (cursorOutline) {
        requestAnimationFrame(() => {
          cursorOutline.style.left = `${posX}px`;
          cursorOutline.style.top = `${posY}px`;
        });
      }
    };

    const interactiveElements = document.querySelectorAll(
      "a, button, .skill-card, .theme-switcher, input, textarea"
    );

    if (cursorDot && cursorOutline) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    // ==========================================
    // 4. SCROLL INDICATOR LOGIC (FIXED)
    // ==========================================
    const scrollArrow = document.getElementById("scroll-arrow") as HTMLAnchorElement;

    const handleScroll = () => {
      if (!scrollArrow) return;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Tambah class 'scrolled' biar icon panah ganti (sinkron sama inline style page.tsx)
      if (scrollPosition > 300) {
        scrollArrow.classList.add("scrolled");
        scrollArrow.href = "#";
      } else {
        scrollArrow.classList.remove("scrolled");
        scrollArrow.href = "#about";
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      if (themeToggleButton) themeToggleButton.removeEventListener("click", handleThemeToggle);
      clearTimeout(cookieTimeout);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};