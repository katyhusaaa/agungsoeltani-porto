"use client";
import { useState, useEffect, useRef } from "react";
import { useLang } from "@/app/context/LanguageContext"; 

// --- SUB-COMPONENT: Badge Tanggal buat di Timeline Desktop ---
const DateBadge = ({ date, align }: { date: string, align: 'left' | 'right' }) => (
  <div className={`flex w-full ${align === 'right' ? 'justify-end' : 'justify-start'} items-center`}>
    <span className="text-sm md:text-base font-bold text-muted-foreground bg-card/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-border/50 shadow-[0_0_15px_var(--color-brand-muted)] transition-all hover:text-primary hover:border-primary/50 cursor-default">
      {date}
    </span>
  </div>
);

// --- SUB-COMPONENT: Kartu Project (Warna udah disinkron ke --primary) ---
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
    <div className="flex flex-col bg-card/60 backdrop-blur-sm border border-border p-4 md:p-6 rounded-[1.25rem] md:rounded-[2rem] hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_15px_40px_-10px_var(--color-brand-muted)] transition-all duration-500 group relative overflow-hidden h-full">
      <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent skew-x-12 group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none z-0"></div>
      
      <div className="relative w-full h-48 md:h-56 mb-6 rounded-xl overflow-hidden group/slider z-10 shrink-0 border border-border/50 bg-muted/20">
        <div className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] h-full" style={{ transform: `translateX(-${currentImg * 100}%)` }}>
          {project.images.map((img: string, i: number) => (
            <img key={i} src={img} alt={`${project.title} - ${i + 1}`} className="w-full h-full object-cover shrink-0" />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
        <button onClick={prevImg} className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white backdrop-blur-md opacity-100 md:opacity-0 group-hover/slider:opacity-100 hover:bg-primary transition-all duration-300 active:scale-90">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button onClick={nextImg} className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white backdrop-blur-md opacity-100 md:opacity-0 group-hover/slider:opacity-100 hover:bg-primary transition-all duration-300 active:scale-90">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 px-2 py-1 rounded-full z-10">
          {project.images.map((_: any, i: number) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${currentImg === i ? "w-5 bg-primary" : "w-1.5 bg-white/60"}`} />
          ))}
        </div>
      </div>

      <div className="flex flex-col flex-1 z-10">
        <div className="mb-5">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
            {/* Tanggal Card cuma muncul di HP. Di Desktop pindah ke Node Timeline */}
            <span className="md:hidden self-start bg-muted text-muted-foreground px-2 py-1 rounded text-[10px] font-mono whitespace-nowrap border border-border/50">
              {project.date}
            </span>
            <h3 className="text-xl md:text-2xl font-black text-foreground leading-tight group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <p className="text-xs text-muted-foreground font-medium">{project.location}</p>
            <p className="text-[13px] md:text-sm text-primary font-bold">{project.role}</p>
          </div>
        </div>

        <ul className="space-y-3 text-xs md:text-sm text-muted-foreground/90 flex-grow mb-8">
          {project.details.map((detail: string, idx: number) => (
            <li key={idx} className="flex gap-3 items-start">
              <span className="text-primary mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_8px_var(--color-brand)]" />
              <span className="leading-relaxed">{detail}</span>
            </li>
          ))}
        </ul>

        <div className="pt-5 mt-auto border-t border-border/60">
          {project.link && (
            <a href={project.link} target={project.isPrivate ? "_self" : "_blank"} rel="noopener noreferrer" className={`flex items-center justify-center md:justify-start gap-2 text-[13px] md:text-sm font-bold transition-all w-full md:w-fit py-3 md:py-0 rounded-xl md:rounded-none ${project.isPrivate ? "text-muted-foreground/50 bg-muted/30 md:bg-transparent cursor-not-allowed" : "text-foreground bg-muted/50 md:bg-transparent hover:text-primary hover:bg-primary/10 md:hover:bg-transparent"}`}>
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

// --- SUB-COMPONENT: Item Timeline + Scroll Reveal ---
const TimelineItem = ({ project, index, t }: { project: any, index: number, t: any }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Efek memunculkan kartu saat di-scroll ke bawah
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Sekali muncul, tetep muncul
      }
    }, { threshold: 0.15 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`relative flex flex-col md:flex-row items-center justify-between w-full mb-16 md:mb-32 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
      
      {/* Node / Titik Bercahaya di Garis */}
      <div className="absolute left-[20px] md:left-1/2 top-10 md:top-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary ring-4 ring-background shadow-[0_0_20px_var(--color-brand)] z-20 -translate-x-1/2 md:-translate-y-1/2">
        <div className="absolute inset-0 rounded-full bg-white/40 animate-ping"></div>
      </div>

      {/* --- TAMPILAN MOBILE (HP) --- */}
      {/* Kartu di Kanan Garis */}
      <div className="w-[calc(100%-3.5rem)] ml-auto md:hidden block">
        <ProjectCard project={project} t={t} />
      </div>

      {/* --- TAMPILAN DESKTOP (PC) --- */}
      {/* Kolom Kiri */}
      <div className="hidden md:flex w-[calc(50%-3rem)] justify-end">
        {isEven ? <ProjectCard project={project} t={t} /> : <DateBadge date={project.date} align="right" />}
      </div>

      {/* Kolom Kanan */}
      <div className="hidden md:flex w-[calc(50%-3rem)] justify-start">
        {isEven ? <DateBadge date={project.date} align="left" /> : <ProjectCard project={project} t={t} />}
      </div>

    </div>
  );
};

// --- MAIN COMPONENT ---
export default function Projects() {
  const { lang } = useLang();

  // KAMUS BAHASA
  const dict = {
    en: {
      title1: "Featured", title2: "Projects.",
      subtitle: "A timeline of tangible creations from my learning and exploration process. From IoT automation to network analysis.",
      private: "Private Repository", viewGit: "View on GitHub",
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
      title1: "Jejak", title2: "Proyek.",
      subtitle: "Garis waktu dari karya nyata proses eksplorasi gue. Mulai dari automasi sensor IoT sampai analisa trafik jaringan.",
      private: "Repositori Pribadi", viewGit: "Lihat di GitHub",
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
    <section id="projects" className="py-24 md:py-40 px-5 sm:px-6 w-full overflow-hidden relative">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="mb-16 md:mb-28 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tighter">
          {t.title1} <span className="text-primary">{t.title2}</span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* --- TIMELINE CONTAINER --- */}
      <div className="relative max-w-5xl mx-auto">
        
        {/* Garis Tengah (Desktop) & Garis Kiri (Mobile) */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2 z-0">
          {/* Animasi Cahaya Jalan di dalem garis */}
          <div className="absolute top-0 left-0 w-full h-[30vh] bg-gradient-to-b from-transparent via-primary to-transparent animate-[timelineFlow_4s_ease-in-out_infinite]"></div>
        </div>

        {/* List Proyek */}
        <div className="flex flex-col relative z-10 w-full">
          {t.projects.map((project, index) => (
            <TimelineItem key={index} project={project} index={index} t={t} />
          ))}
        </div>

      </div>

      <style>{`
        @keyframes timelineFlow {
          0% { top: -30%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>

    </section>
  );
}