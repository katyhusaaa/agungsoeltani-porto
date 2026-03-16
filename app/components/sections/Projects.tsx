export default function Projects() {
  const projects = [
    {
      title: "Bytez - QoS Analysis Tool",
      location: "Depok, Indonesia",
      date: "Feb 2025 - May 2025",
      role: "Sole Developer & Application Designer",
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
      details: [
        "Developed a smart parking system using AI and Computer Vision with OpenCV for real-time space detection.",
        "Designed and developed a live dashboard to display parking data."
      ],
      link: "https://github.com/agungsoeltani/smapar-v.1",
      isPrivate: false,
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-foreground mb-2 tracking-tighter">Featured Projects</h2>
        <p className="text-muted-foreground">Beberapa project yang pernah gue bangun.</p>
      </div>

      {/* Grid Kartu */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            // bg-card bikin dia ikut tema. hover border sekarang ungu violet.
            className="flex flex-col bg-card border border-border p-6 rounded-xl hover:-translate-y-2 hover:border-violet-500/50 transition-all duration-300 group shadow-lg"
          >
            {/* Top Info */}
            <div className="mb-6">
              <div className="flex justify-between items-start gap-4 mb-2">
                <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-violet-500 transition-colors">
                  {project.title}
                </h3>
                {/* Badge Date */}
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-[10px] font-mono whitespace-nowrap">
                  {project.date}
                </span>
              </div>
              <p className="text-xs text-muted-foreground font-medium">{project.location}</p>
              <p className="text-sm text-violet-500 italic mt-1 font-medium">{project.role}</p>
            </div>

            {/* List Details */}
            <ul className="space-y-3 text-sm text-muted-foreground flex-grow mb-6">
              {project.details.map((detail, idx) => (
                <li key={idx} className="flex gap-3">
                  {/* Dot bullet ganti jadi ungu */}
                  <span className="text-violet-500 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                  <span className="leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>

            {/* Footer Links */}
            <div className="pt-4 mt-auto border-t border-border">
              {project.link && (
                <a 
                  href={project.link} 
                  target={project.isPrivate ? "_self" : "_blank"} 
                  rel="noopener noreferrer" 
                  className={`flex items-center gap-2 text-sm font-semibold transition-all ${
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
        ))}
      </div>
    </section>
  );
}