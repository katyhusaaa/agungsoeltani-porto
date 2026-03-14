"use client";
import { useState, useEffect } from "react";

export const useVisitorCounter = () => {
  const [count, setCount] = useState<string>("...");

  useEffect(() => {
    const fetchCount = async () => {
      try {
        // Ganti URL ini kalau lo mau pakai API Next.js sendiri nantinya
        const response = await fetch('https://agungsoeltani.web.id/.netlify/functions/visitor-counter');
        
        if (!response.ok) throw new Error('Failed to fetch count');
        
        const data = await response.json();
        // Format angka pake standar Indonesia (id-ID) biar ada titiknya
        setCount(data.count.toLocaleString('id-ID'));
      } catch (error) {
        console.error("Error fetching visitor count:", error);
        setCount("N/A");
      }
    };

    fetchCount();
  }, []);

  return count;
};