"use client";
import { useEffect } from "react";

export const useUI = () => {
  useEffect(() => {
    // ==========================================
    // 1. THEME SWITCHER LOGIC
    // ==========================================
    const themeToggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    const applyTheme = (theme: string) => {
      body.classList.toggle("dark-mode", theme === "dark");
    };

    // Ambil preferensi tema dari localStorage atau sistem laptop user
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(savedTheme || (systemPrefersDark ? "dark" : "light"));

    const handleThemeToggle = () => {
      body.classList.toggle("dark-mode");
      const newTheme = body.classList.contains("dark-mode") ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
    };

    if (themeToggleButton) {
      themeToggleButton.addEventListener("click", handleThemeToggle);
    }

    // ==========================================
    // 2. COOKIE CONSENT LOGIC
    // ==========================================
    const cookieBanner = document.getElementById("cookie-banner");
    const cookieAcceptBtn = document.getElementById("cookie-accept");
    const cookieDeclineBtn = document.getElementById("cookie-decline");
    let cookieTimeout: NodeJS.Timeout;

    if (cookieBanner && cookieAcceptBtn && cookieDeclineBtn) {
      const cookieConsent = localStorage.getItem("cookie_consent");
      if (!cookieConsent) {
        // Munculin banner setelah 1 detik kalo belum ada persetujuan
        cookieTimeout = setTimeout(() => cookieBanner.classList.add("active"), 1000);
      }

      cookieAcceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookie_consent", "accepted");
        cookieBanner.classList.remove("active");
      });

      cookieDeclineBtn.addEventListener("click", () => {
        localStorage.setItem("cookie_consent", "declined");
        cookieBanner.classList.remove("active");
      });
    }

    // ==========================================
    // 3. CUSTOM CURSOR LOGIC
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

    const addHover = () => {
      cursorDot?.classList.add("hover");
      cursorOutline?.classList.add("hover");
    };
    const removeHover = () => {
      cursorDot?.classList.remove("hover");
      cursorOutline?.classList.remove("hover");
    };

    const interactiveElements = document.querySelectorAll(
      "a, button, .work-item-card, .skill-card, .theme-switcher, .scroll-indicator, input, textarea"
    );

    if (cursorDot && cursorOutline) {
      window.addEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });
    }

    // ==========================================
    // 4. SCROLL INDICATOR LOGIC
    // ==========================================
    const scrollArrow = document.getElementById("scroll-arrow") as HTMLAnchorElement;
    const arrowUp = scrollArrow?.querySelector(".arrow-up") as HTMLElement;
    const arrowDown = scrollArrow?.querySelector(".arrow-down") as HTMLElement;

    const handleScroll = () => {
      if (!scrollArrow || !arrowUp || !arrowDown) return;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (scrollPosition < 50) {
        scrollArrow.classList.add("visible");
        arrowDown.style.display = "block";
        arrowUp.style.display = "none";
        scrollArrow.href = "#about";
      } else if (scrollPosition + windowHeight >= fullHeight - 50) {
        scrollArrow.classList.add("visible");
        arrowDown.style.display = "none";
        arrowUp.style.display = "block";
        scrollArrow.href = "#";
      } else {
        scrollArrow.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger sekali pas load

    // ==========================================
    // CLEANUP FUNGSI (Saat pindah halaman)
    // ==========================================
    return () => {
      if (themeToggleButton) themeToggleButton.removeEventListener("click", handleThemeToggle);
      clearTimeout(cookieTimeout);
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};