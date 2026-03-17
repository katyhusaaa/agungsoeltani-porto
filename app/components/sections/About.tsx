"use client";
import { useLang } from "@/app/context/LanguageContext"; // 1. IMPORT HOOK

export default function About() {
  const { lang } = useLang(); // 2. PANGGIL HOOK

  // 3. KAMUS BAHASA
  const dict = {
    en: {
      title1: "Beyond",
      title2: "The Surface.",
      subtitle: "I build the systems that form the backbone of modern technology. My focus is on creating secure, scalable, and highly efficient solutions.",
      skills: [
        { title: "Network Infra", desc: "Designing and managing secure LAN/WAN, routing, and switching.", icon: <path d="M16.88 3.549L7.12 20.451 M4 12.001h16 M12 4.001v16" /> },
        { title: "IoT Systems", desc: "End-to-end hardware programming, sensor automation, and MQTT protocols.", icon: <><path d="M5 12.55a8 8 0 0 1 14.08 0"/><path d="M1.42 9.5a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a4 4 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12" y2="20"/></> },
        { title: "Cloud Computing", desc: "Deploying and managing scalable services on AWS and Azure.", icon: <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /> },
        { title: "Linux Server", desc: "System administration, bash scripting, and advanced troubleshooting.", icon: <><polyline points="4 17 4 10 4 17 4 21 12 17 12 21 20 17 20 10 20 17"></polyline><path d="M12 7V21"></path><path d="M16.03 9.42a2.5 2.5 0 0 1 0-3.53"></path><path d="M8 6a2.5 2.5 0 0 1 3.53 0"></path><path d="M12 2L12 2A2.5 2.5 0 0 1 12 2z"></path></> },
        { title: "Network Security", desc: "Implementing firewalls, VPNs, and conducting vulnerability assessments.", icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="2"/><path d="M12 13v2"/></> },
        { title: "Automation", desc: "Creating scripts and automated pipelines to streamline tech operations.", icon: <><path d="M12 2v4 M12 18v4 M4.93 4.93l2.83 2.83 M16.24 16.24l2.83 2.83 M2 12h4 M18 12h4 M4.93 19.07l2.83-2.83 M16.24 7.76l2.83-2.83"/></> }
      ]
    },
    id: {
      title1: "Lebih Dari",
      title2: "Sekadar Tampilan.",
      subtitle: "Gue membangun sistem yang jadi tulang punggung teknologi modern. Fokus utama gue adalah menciptakan solusi yang aman, terukur, dan efisien.",
      skills: [
        { title: "Infrastruktur Jaringan", desc: "Merancang dan mengelola LAN/WAN yang aman, routing, dan switching.", icon: <path d="M16.88 3.549L7.12 20.451 M4 12.001h16 M12 4.001v16" /> },
        { title: "Sistem IoT", desc: "Pemrograman hardware end-to-end, automasi sensor, dan protokol MQTT.", icon: <><path d="M5 12.55a8 8 0 0 1 14.08 0"/><path d="M1.42 9.5a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a4 4 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12" y2="20"/></> },
        { title: "Cloud Computing", desc: "Deploy dan manajemen layanan terukur di platform AWS dan Azure.", icon: <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /> },
        { title: "Server Linux", desc: "Administrasi sistem, bash scripting, dan troubleshooting tingkat lanjut.", icon: <><polyline points="4 17 4 10 4 17 4 21 12 17 12 21 20 17 20 10 20 17"></polyline><path d="M12 7V21"></path><path d="M16.03 9.42a2.5 2.5 0 0 1 0-3.53"></path><path d="M8 6a2.5 2.5 0 0 1 3.53 0"></path><path d="M12 2L12 2A2.5 2.5 0 0 1 12 2z"></path></> },
        { title: "Keamanan Jaringan", desc: "Implementasi firewall, VPN, dan melakukan penilaian kerentanan.", icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="2"/><path d="M12 13v2"/></> },
        { title: "Automasi", desc: "Membuat script dan pipeline otomatis untuk mempercepat operasi IT.", icon: <><path d="M12 2v4 M12 18v4 M4.93 4.93l2.83 2.83 M16.24 16.24l2.83 2.83 M2 12h4 M18 12h4 M4.93 19.07l2.83-2.83 M16.24 7.76l2.83-2.83"/></> }
      ]
    }
  };
  const t = lang === "en" ? dict.en : dict.id;

  return (
    <section id="about" className="relative py-16 md:py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[400px] bg-violet-500/10 blur-[120px] rounded-[100%] pointer-events-none -z-10"></div>
      <div className="mb-12 md:mb-20 max-w-3xl relative z-10 text-center mx-auto md:text-left md:mx-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4 md:mb-6 tracking-tighter">
          {t.title1} <span className="text-violet-500">{t.title2}</span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-medium">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 relative z-10">
        {t.skills.map((skill, index) => (
          <div key={index} className="group relative rounded-[2rem] p-[1.5px] hover:-translate-y-3 transition-transform duration-500 shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-border/50 rounded-[2rem]"></div>
            <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,rgba(139,92,246,0.8)_50%,transparent_100%)] animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
            <div className="relative flex flex-col h-full bg-card/90 backdrop-blur-2xl rounded-[calc(2rem-1.5px)] p-6 md:p-8 z-10">
              <div className="w-12 h-12 md:w-14 md:h-14 mb-6 md:mb-8 rounded-xl bg-muted/50 border border-border flex items-center justify-center text-violet-500 group-hover:bg-violet-500 group-hover:text-white transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {skill.icon}
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-violet-500 transition-colors">{skill.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{skill.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}