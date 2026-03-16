export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header & Intro */}
      <div className="mb-16 max-w-3xl">
        <h2 className="text-4xl font-bold text-foreground mb-6 tracking-tighter transition-colors duration-300">About Me</h2>
        <p className="text-lg text-muted-foreground leading-relaxed transition-colors duration-300">
          I am a passionate technician dedicated to designing, building, and maintaining the systems that form the backbone of modern technology. With a strong foundation in networking and a deep interest in the Internet of Things (IoT), I focus on creating efficient, secure, and scalable solutions.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1: Networking */}
        <div className="bg-card border border-border p-8 rounded-xl hover:-translate-y-1 hover:border-violet-500/50 transition-all duration-300 group shadow-lg flex flex-col gap-5">
          {/* Icon Box: bg-muted & text-violet-500 */}
          <div className="w-14 h-14 rounded-lg bg-muted flex items-center justify-center text-violet-500 group-hover:bg-violet-500/10 group-hover:scale-110 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16.88 3.549L7.12 20.451"/><path d="M4 12.001h16"/><path d="M12 4.001v16"/></svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-violet-500 transition-colors duration-300">Networking</h3>
            <p className="text-sm text-muted-foreground leading-relaxed transition-colors duration-300">
              Designing, configuring, and managing network infrastructures (LAN/WAN, Routing, Switching).
            </p>
          </div>
        </div>

        {/* Card 2: IoT */}
        <div className="bg-card border border-border p-8 rounded-xl hover:-translate-y-1 hover:border-violet-500/50 transition-all duration-300 group shadow-lg flex flex-col gap-5">
          <div className="w-14 h-14 rounded-lg bg-muted flex items-center justify-center text-violet-500 group-hover:bg-violet-500/10 group-hover:scale-110 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a8 8 0 0 1 14.08 0"/><path d="M1.42 9.5a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a4 4 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12" y2="20"/></svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-violet-500 transition-colors duration-300">Internet of Things (IoT)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed transition-colors duration-300">
              Developing end-to-end IoT solutions, from hardware programming to cloud data delivery.
            </p>
          </div>
        </div>

        {/* Card 3: Cloud Infrastructure */}
        <div className="bg-card border border-border p-8 rounded-xl hover:-translate-y-1 hover:border-violet-500/50 transition-all duration-300 group shadow-lg flex flex-col gap-5">
          <div className="w-14 h-14 rounded-lg bg-muted flex items-center justify-center text-violet-500 group-hover:bg-violet-500/10 group-hover:scale-110 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-violet-500 transition-colors duration-300">Cloud Infrastructure</h3>
            <p className="text-sm text-muted-foreground leading-relaxed transition-colors duration-300">
              Utilizing cloud platforms like AWS or Azure for hosting, data processing, and device management.
            </p>
          </div>
        </div>

        {/* Card 4: Linux Administration */}
        <div className="bg-card border border-border p-8 rounded-xl hover:-translate-y-1 hover:border-violet-500/50 transition-all duration-300 group shadow-lg flex flex-col gap-5">
          <div className="w-14 h-14 rounded-lg bg-muted flex items-center justify-center text-violet-500 group-hover:bg-violet-500/10 group-hover:scale-110 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 4 10 4 17 4 21 12 17 12 21 20 17 20 10 20 17"></polyline><path d="M12 7V21"></path><path d="M16.03 9.42a2.5 2.5 0 0 1 0-3.53"></path><path d="M8 6a2.5 2.5 0 0 1 3.53 0"></path><path d="M12 2L12 2A2.5 2.5 0 0 1 12 2z"></path></svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-violet-500 transition-colors duration-300">Linux Administration</h3>
            <p className="text-sm text-muted-foreground leading-relaxed transition-colors duration-300">
              Administration, scripting, and troubleshooting on Linux servers to maintain stability and security.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}