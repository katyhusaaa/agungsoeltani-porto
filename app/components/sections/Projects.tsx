"use client";
import { useState } from "react";
import { useLang } from "@/app/context/LanguageContext"; // 1. IMPORT HOOK

// --- SUB-COMPONENT: Kartu Project ---
const ProjectCard = ({ project, t }: { project: any, t: any }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = (e: React.MouseEvent) => {
    e.preventDefault(); 
    setCurrentImg((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const prevImg = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImg((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col bg-card/60 backdrop-blur-sm border border-border p-4 md:p-5 rounded-[1.25rem] md:rounded-[1.5rem] hover:-translate-y-2 hover:border-violet-500/50 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.25)] transition-all duration-500 group relative overflow-hidden h-full">
      <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent skew-x-12 group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none z-0"></div>
      
      <div className="relative w-full h-48 md:h-52 mb-5 rounded-xl overflow-hidden group/slider z-10 shrink-0 border border-border/50 bg-muted/20">
        <div className="flex transition-transform duration-500 ease-out h-full" style={{ transform: `translateX(-${currentImg * 100}%)` }}>
          {project.images.map((img: string, i: number) => (
            <img key={i} src={img} alt={`${project.title} - ${i + 1}`} className="w-full h-full object-cover shrink-0" />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>
        <button onClick={prevImg} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white backdrop-blur-md opacity-100 md:opacity-0 group-hover/slider:opacity-100 hover:bg-violet-500 transition-all duration-300 active:scale-90">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button onClick={nextImg} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white backdrop-blur-md opacity-100 md:opacity-0 group-hover/slider:opacity-100 hover:bg-violet-500 transition-all duration-300 active:scale-90">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 px-2 py-1 rounded-full z-10">
          {project.images.map((_: any, i: number) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${currentImg === i ? "w-5 bg-violet-500" : "w-1.5 bg-white/60"}`} />
          ))}
        </div>
      </div>

      <div className="flex flex-col flex-1 z-10">
        <div className="mb-5">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
            <span className="self-start order-1 md:order-2 bg-muted text-muted-foreground px-2 py-1 rounded text-[10px] md:text-xs font-mono whitespace-nowrap border border-border/50">
              {project.date}
            </span>
            <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-violet-500 transition-colors order-2 md:order-1">
              {project.title}
            </h3>
          </div>
          <div className="flex flex-col gap-0.5 mt-2">
            <p className="text-xs text-muted-foreground font-medium">{project.location}</p>
            <p className="text-[13px] md:text-sm text-violet-500 font-semibold">{project.role}</p>
          </div>
        </div>

        <ul className="space-y-3 text-xs md:text-sm text-muted-foreground/90 flex-grow mb-6">
          {project.details.map((detail: string, idx: number) => (
            <li key={idx} className="flex gap-2.5 items-start">
              <span className="text-violet-500 mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
              <span className="leading-relaxed">{detail}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4 mt-auto border-t border-border/60">
          {project.link && (
            <a 
              href={project.link} 
              target={project.isPrivate ? "_self" : "_blank"} 
              rel="noopener noreferrer" 
              className={`flex items-center justify-center md:justify-start gap-2 text-[13px] md:text-sm font-bold transition-all w-full md:w-fit py-2 md:py-0 rounded-lg md:rounded-none ${
                project.isPrivate ? "text-muted-foreground/50 bg-muted/30 md:bg-transparent cursor-not-allowed" : "text-foreground bg-muted/50 md:bg-transparent hover:text-violet-500 hover:bg-violet-500/10 md:hover:bg-transparent"
              }`}
            >
              {project.isPrivate ? (
                <><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> {t.private}</>
              ) : (
                <><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> {t.viewGit}</>
              )}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const { lang } = useLang(); // 2. PANGGIL HOOK

  // 3. KAMUS BAHASA
  const dict = {
    en: {
      title1: "Featured",
      title2: "Projects.",
      subtitle: "A selection of tangible creations from my learning and exploration process. From IoT automation to network analysis.",
      private: "Private Repository",
      viewGit: "View on GitHub",
      projects: [
        {
          title: "Bytez - QoS Analysis Tool", location: "Depok, Indonesia", date: "Feb 2025 - May 2025", role: "Sole Developer & Application Designer",
          images: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"],
          details: ["Engineered a standalone MATLAB application to parse and analyze network traffic data from Wireshark capture files (.pcap).", "Implemented custom algorithms to automatically calculate key Quality of Service (QoS) metrics.", "Designed and developed the entire GUI and managed the full project lifecycle."],
          link: "https://github.com/agungsoeltani/Bytez", isPrivate: false,
        },
        {
          title: "FLOW.", location: "Depok, Indonesia", date: "April 2025 – Present", role: "IoT & Front-End Developer",
          images: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"],
          details: ["Developed a DHT22 sensor-based fan automation system to monitor air temperature and humidity.", "Designed and built a real-time IoT dashboard using HTML, CSS, and JavaScript with MQTT protocol."],
          link: "https://github.com/agungsoeltani", isPrivate: false,
        },
        {
          title: "SBITE - Wireless Jammer", location: "Depok, Indonesia", date: "Feb 2025 – Present", role: "Project Developer",
          images: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"],
          details: ["Designed and developed a proof-of-concept WiFi/Bluetooth jammer using NRF and ESP32 modules.", "Software development focusing on frequency management and device control."],
          link: "#", isPrivate: true,
        },
        {
          title: "SMAPAR (Smart Parking System)", location: "Depok, Indonesia", date: "June 2024 – Jan 2025", role: "IoT & Front-End Developer",
          images: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"],
          details: ["Developed a smart parking system using AI and Computer Vision with OpenCV for real-time space detection.", "Designed and developed a live dashboard to display parking data."],
          link: "https://github.com/agungsoeltani/smapar-v.1", isPrivate: false,
        }
      ]
    },
    id: {
      title1: "Proyek",
      title2: "Pilihan.",
      subtitle: "Beberapa karya nyata dari proses belajar dan eksplorasi gue. Dari automasi IoT sampai analisa jaringan.",
      private: "Repositori Pribadi",
      viewGit: "Lihat di GitHub",
      projects: [
        {
          title: "Bytez - QoS Analysis Tool", location: "Depok, Indonesia", date: "Feb 2025 - Mei 2025", role: "Developer Tunggal & Desainer Aplikasi",
          images: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"],
          details: ["Membangun aplikasi MATLAB mandiri untuk memparsing dan menganalisa data trafik jaringan dari file Wireshark (.pcap).", "Mengimplementasikan algoritma kustom untuk otomatis menghitung metrik Quality of Service (QoS).", "Mendesain seluruh GUI dan mengelola siklus hidup proyek secara penuh."],
          link: "https://github.com/agungsoeltani/Bytez", isPrivate: false,
        },
        {
          title: "FLOW.", location: "Depok, Indonesia", date: "April 2025 – Sekarang", role: "Developer IoT & Front-End",
          images: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"],
          details: ["Mengembangkan sistem automasi kipas berbasis sensor DHT22 untuk memantau suhu dan kelembapan udara.", "Mendesain dashboard IoT real-time menggunakan HTML, CSS, dan JavaScript dengan protokol MQTT."],
          link: "https://github.com/agungsoeltani", isPrivate: false,
        },
        {
          title: "SBITE - Wireless Jammer", location: "Depok, Indonesia", date: "Feb 2025 – Sekarang", role: "Developer Proyek",
          images: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"],
          details: ["Merancang dan mengembangkan proof-of-concept jammer WiFi/Bluetooth menggunakan modul NRF dan ESP32.", "Fokus pengembangan software pada manajemen frekuensi dan kontrol perangkat."],
          link: "#", isPrivate: true,
        },
        {
          title: "SMAPAR (Smart Parking System)", location: "Depok, Indonesia", date: "Juni 2024 – Jan 2025", role: "Developer IoT & Front-End",
          images: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"],
          details: ["Mengembangkan sistem parkir pintar berbasis AI dan Computer Vision dengan OpenCV untuk deteksi ruang real-time.", "Mendesain dashboard live untuk menampilkan data parkir."],
          link: "https://github.com/agungsoeltani/smapar-v.1", isPrivate: false,
        }
      ]
    }
  };
  const t = lang === "en" ? dict.en : dict.id;

  return (
    <section id="projects" className="py-20 md:py-32 px-5 sm:px-6 max-w-7xl mx-auto relative">
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-violet-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="mb-12 md:mb-20 text-center md:text-left max-w-2xl mx-auto md:mx-0">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4 tracking-tighter">
          {t.title1} <span className="text-violet-500">{t.title2}</span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Sekarang map-nya ngambil dari t.projects biar dinamis */}
        {t.projects.map((project, index) => (
          <ProjectCard key={index} project={project} t={t} />
        ))}
      </div>
    </section>
  );
}