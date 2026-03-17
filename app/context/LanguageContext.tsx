"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

// Bikin Context Default
const LanguageContext = createContext<{
  lang: string;
  toggleLang: () => void;
}>({
  lang: "en",
  toggleLang: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState("en");

  // Load bahasa dari localStorage pas web pertama dibuka
  useEffect(() => {
    const savedLang = localStorage.getItem("preferred-lang");
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  // Fungsi buat ganti bahasa
  const toggleLang = () => {
    const newLang = lang === "en" ? "id" : "en";
    setLang(newLang);
    localStorage.setItem("preferred-lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom Hook biar gampang dipanggil di komponen lain
export const useLang = () => useContext(LanguageContext);