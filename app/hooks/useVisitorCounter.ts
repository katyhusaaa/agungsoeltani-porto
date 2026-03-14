"use client";
import { useState, useEffect } from "react";

export const useVisitorCounter = () => {
  const [count, setCount] = useState<string>("...");

  useEffect(() => {
    const fetchCount = async () => {
      try {
        // GANTI DI SINI: Panggil API internal Next.js lo
        const response = await fetch('/api/visitor');
        
        if (!response.ok) throw new Error('Failed to fetch count');
        
        const data = await response.json();
        
        // Cek apakah data.count ada isinya
        if (data && data.count) {
          // Format angka pake standar Indonesia (id-ID) biar ada titiknya (misal: 1.234)
          setCount(data.count.toLocaleString('id-ID'));
        }
      } catch (error) {
        console.error("Error fetching visitor count:", error);
        setCount("N/A");
      }
    };

    fetchCount();
  }, []);

  return count;
};