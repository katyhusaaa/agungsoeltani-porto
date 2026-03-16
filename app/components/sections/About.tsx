"use client";

export default function About() {
  const skills = [
    {
      title: "Network Infra",
      desc: "Designing and managing secure LAN/WAN, routing, and switching.",
      icon: <path d="M16.88 3.549L7.12 20.451 M4 12.001h16 M12 4.001v16" />
    },
    {
      title: "IoT Systems",
      desc: "End-to-end hardware programming, sensor automation, and MQTT protocols.",
      icon: <><path d="M5 12.55a8 8 0 0 1 14.08 0"/><path d="M1.42 9.5a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a4 4 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12" y2="20"/></>
    },
    {
      title: "Cloud Computing",
      desc: "Deploying and managing scalable services on AWS and Azure.",
      icon: <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    },
    {
      title: "Linux Server",
      desc: "System administration, bash scripting, and advanced troubleshooting.",
      icon: <><polyline points="4 17 4 10 4 17 4 21 12 17 12 21 20 17 20 10 20 17"></polyline><path d="M12 7V21"></path><path d="M16.03 9.42a2.5 2.5 0 0 1 0-3.53"></path><path d="M8 6a2.5 2.5 0 0 1 3.53 0"></path><path d="M12 2L12 2A2.5 2.5 0 0 1 12 2z"></path></>
    },
    {
      title: "Network Security",
      desc: "Implementing firewalls, VPNs, and conducting vulnerability assessments.",
      icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="2"/><path d="M12 13v2"/></> // Shield Lock Icon
    },
    {
      title: "Automation",
      desc: "Creating scripts and automated pipelines to streamline tech operations.",
      icon: <><path d="M12 2v4 M12 18v4 M4.93 4.93l2.83 2.83 M16.24 16.24l2.83 2.83 M2 12h4 M18 12h4 M4.93 19.07l2.83-2.83 M16.24 7.76l2.83-2.83"/></> // Gear/Automation Icon
    }
  ];

  return (
    // Tambah overflow-hidden dan penyesuaian padding (py-16 untuk HP, py-24 untuk Desktop)
    <section id="about" className="relative py-16 md:py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Glow Decor & Particle Hint - Ukuran disesuaikan untuk HP dan Desktop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[400px] bg-violet-500/10 blur-[80px] md:blur-[120px] rounded-[100%] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-0 md:right-10 w-48 md:w-64 h-48 md:h-64 bg-emerald-500/10 blur-[80px] md:blur-[100px] rounded-full pointer-events-none -z-10"></div>

      {/* Header & Intro */}
      <div className="mb-12 md:mb-20 max-w-3xl relative z-10 text-center mx-auto md:text-left md:mx-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4 md:mb-6 tracking-tighter">
          Beyond <span className="text-violet-500">The Surface.</span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-medium">
          I build the systems that form the backbone of modern technology. From routing complex networks to deploying automated IoT sensors, my focus is on creating secure, scalable, and highly efficient solutions.
        </p>
      </div>

      {/* Skills Grid - 1 kolom HP, 2 kolom Tablet, 3 kolom Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 relative z-10">
        {skills.map((skill, index) => (
          
          /* OUTER WRAPPER */
          <div 
            key={index}
            className="group relative rounded-[2rem] p-[1.5px] hover:-translate-y-2 md:hover:-translate-y-3 transition-transform duration-500 shadow-md hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.4)] overflow-hidden"
          >
            {/* INVISIBLE BASE BORDER */}
            <div className="absolute inset-0 bg-border/50 rounded-[2rem]"></div>

            {/* THE MAGIC: Flowing Light Border (Akan menyala pas di-tap di HP atau di-hover di Desktop) */}
            <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,rgba(139,92,246,0.1)_30%,rgba(139,92,246,0.8)_50%,rgba(16,185,129,0.8)_70%,transparent_100%)] animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

            {/* INNER CARD - Padding dinamis: p-6 di HP, p-8 di Desktop */}
            <div className="relative flex flex-col h-full bg-card/90 backdrop-blur-2xl rounded-[calc(2rem-1.5px)] p-6 md:p-8 z-10">
              
              {/* Top Right Glowing Dot */}
              <div className="absolute top-5 md:top-6 right-5 md:right-6 w-2 h-2 rounded-full bg-violet-500/30 group-hover:bg-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.8)] transition-all duration-500"></div>

              {/* Icon Box */}
              <div className="w-12 h-12 md:w-14 md:h-14 mb-6 md:mb-8 rounded-xl md:rounded-2xl bg-muted/50 border border-border flex items-center justify-center text-violet-500 group-hover:bg-violet-500 group-hover:border-violet-400 group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {skill.icon}
                </svg>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3 group-hover:text-violet-500 transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed transition-colors duration-300">
                  {skill.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}