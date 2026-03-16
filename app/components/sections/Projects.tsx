"use client";
import { useState } from "react";

// --- SUB-COMPONENT: Kartu Project ---
const ProjectCard = ({ project }: { project: any }) => {
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
    <div className="flex flex-col bg-card/60 backdrop-blur-sm border border-border p-4 md:p-5 rounded-2xl md:rounded-[1.5rem] hover:-translate-y-2 hover:border-violet-500/50 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.25)] transition-all duration-500 group relative overflow-hidden h-full">
      
      {/* EFEK ANIMASI SEAMLESS LIGHT (Shimmer Sweep) */}
      <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent skew-x-12 group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none z-0"></div>
      
      {/* --- IMAGE CAROUSEL SECTION --- */}
      {/* Tinggi gambar lebih pendek di HP (h-40) dan normal di Desktop (md:h-48) */}
      <div className="relative w-full h-40 md:h-48 mb-4 md:mb-5 rounded-xl overflow-hidden group/slider z-10 shrink-0 border border-border/50">
        
        {/* Images */}
        <div 
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentImg * 100}%)` }}
        >
          {project.images.map((img: string, i: number) => (
            <img key={i} src={img} alt={`${project.title} - ${i + 1}`} className="w-full h-full object-cover shrink-0" />
          ))}
        </div>

        {/* Shadow overlay di bawah gambar biar dot indicator selalu kebaca */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>

        {/* Navigation Arrows 
            Perubahan penting: opacity-100 di HP (biar bisa di-tap), md:opacity-0 di Desktop (nunggu di-hover) 
        */}
        <button onClick={prevImg} className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 md:p-2 rounded-full bg-black/50 text-white backdrop-blur-md opacity-100 md:opacity-0 group-hover/slider:opacity-100 hover:bg-violet-500 transition-all duration-300 active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button onClick={nextImg} className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 md:p-2 rounded-full bg-black/50 text-white backdrop-blur-md opacity-100 md:opacity-0 group-hover/slider:opacity-100 hover:bg-violet-500 transition-all duration-300 active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 px-2 py-1 rounded-full z-10">
          {project.images.map((_: any, i: number) => (
            <div key={i} className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${currentImg === i ? "w-4 md:w-5 bg-violet-500" : "w-1.5 md:w-2 bg-white/50"}`} />
          ))}
        </div>
      </div>

      {/* --- CARD CONTENT SECTION --- */}
      <div className="flex flex-col flex-1 z-10">
        <div className="mb-4">
          {/* Ubah flex jadi col di layar super kecil (biar judul sama tanggal ga tabrakan) */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-2">
            <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight group-hover:text-violet-500 transition-colors">
              {project.title}
            </h3>
            <span className="self-start sm:self-auto bg-muted text-muted-foreground px-2 py-1 rounded text-[10px] md:text-xs font-mono whitespace-nowrap">
              {project.date}
            </span>
          </div>
          <p className="text-xs text-muted-foreground font-medium">{project.location}</p>
          <p className="text-xs md:text-sm text-violet-500 italic mt-1.5 font-medium">{project.role}</p>
        </div>

        <ul className="space-y-2.5 text-xs md:text-sm text-muted-foreground flex-grow mb-6">
          {project.details.map((detail: string, idx: number) => (
            <li key={idx} className="flex gap-2 md:gap-3">
              <span className="text-violet-500 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
              <span className="leading-relaxed">{detail}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4 mt-auto border-t border-border">
          {project.link && (
            <a 
              href={project.link} 
              target={project.isPrivate ? "_self" : "_blank"} 
              rel="noopener noreferrer" 
              className={`flex items-center gap-2 text-xs md:text-sm font-semibold transition-all w-fit ${
                project.isPrivate 
                  ? "text-muted-foreground/50 cursor-not-allowed" 
                  : "text-muted-foreground hover:text-violet-500"
              }`}
            >
              {project.isPrivate ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  Private Repository
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  View on GitHub
                </>
              )}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const projects = [
    {
      title: "Bytez - QoS Analysis Tool",
      location: "Depok, Indonesia",
      date: "Feb 2025 - May 2025",
      role: "Sole Developer & Application Designer",
      images: [
        "/api/placeholder/600/400", 
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ],
      details: [
        "Engineered a standalone MATLAB application to parse and analyze network traffic data from Wireshark capture files (.pcap).",
        "Implemented custom algorithms to automatically calculate key Quality of Service (QoS) metrics.",
        "Designed and developed the entire GUI and managed the full project lifecycle."
      ],
      link: "https://github.com/agungsoeltani/Bytez",
      isPrivate: false,
    },
    {
      title: "FLOW.",
      location: "Depok, Indonesia",
      date: "April 2025 – Present",
      role: "IoT & Front-End Developer",
      images: [
        "/api/placeholder/600/400", 
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ],
      details: [
        "Developed a DHT22 sensor-based fan automation system to monitor air temperature and humidity.",
        "Designed and built a real-time IoT dashboard using HTML, CSS, and JavaScript with MQTT protocol."
      ],
      link: "https://github.com/agungsoeltani",
      isPrivate: false,
    },
    {
      title: "SBITE - Wireless Jammer",
      location: "Depok, Indonesia",
      date: "Feb 2025 – Present",
      role: "Project Developer",
      images: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ],
      details: [
        "Designed and developed a proof-of-concept WiFi/Bluetooth jammer using NRF and ESP32 modules.",
        "Software development focusing on frequency management and device control."
      ],
      link: "#",
      isPrivate: true,
    },
    {
      title: "SMAPAR (Smart Parking System)",
      location: "Depok, Indonesia",
      date: "June 2024 – Jan 2025",
      role: "IoT & Front-End Developer",
      images: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ],
      details: [
        "Developed a smart parking system using AI and Computer Vision with OpenCV for real-time space detection.",
        "Designed and developed a live dashboard to display parking data."
      ],
      link: "https://github.com/agungsoeltani/smapar-v.1",
      isPrivate: false,
    }
  ];

  return (
    // Padding disesuaikan biar di HP ga terlalu numpuk atas-bawah
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* CSS Tambahan buat keyframe animasi Shimmer */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(12deg); }
          100% { transform: translateX(200%) skewX(12deg); }
        }
      `}</style>

      {/* Header Section */}
      <div className="mb-10 md:mb-16 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-3 tracking-tighter">
          Featured <span className="text-violet-500">Projects.</span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground font-medium">
          Beberapa karya nyata dari proses belajar dan eksplorasi gue.
        </p>
      </div>

      {/* Grid Kartu */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}