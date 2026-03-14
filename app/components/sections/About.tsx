export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>I am a passionate technician dedicated to designing, building, and maintaining the systems that form the backbone of modern technology. With a strong foundation in networking and a deep interest in the Internet of Things (IoT), I focus on creating efficient, secure, and scalable solutions.</p>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16.88 3.549L7.12 20.451"/><path d="M4 12.001h16"/><path d="M12 4.001v16"/></svg>
              </div>
              <h3>Networking</h3>
              <p>Designing, configuring, and managing network infrastructures (LAN/WAN, Routing, Switching).</p>
            </div>
            <div className="skill-card">
              <div className="skill-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a8 8 0 0 1 14.08 0"/><path d="M1.42 9.5a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a4 4 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12" y2="20"/></svg>
              </div>
              <h3>Internet of Things (IoT)</h3>
              <p>Developing end-to-end IoT solutions, from hardware programming to cloud data delivery.</p>
            </div>
            <div className="skill-card">
              <div className="skill-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
              </div>
              <h3>Cloud Infrastructure</h3>
              <p>Utilizing cloud platforms like AWS or Azure for hosting, data processing, and device management.</p>
            </div>
            <div className="skill-card">
              <div className="skill-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 4 10 4 17 4 21 12 17 12 21 20 17 20 10 20 17"></polyline><path d="M12 7V21"></path><path d="M16.03 9.42a2.5 2.5 0 0 1 0-3.53"></path><path d="M8 6a2.5 2.5 0 0 1 3.53 0"></path><path d="M12 2L12 2A2.5 2.5 0 0 1 12 2z"></path></svg>
              </div>
              <h3>Linux Administration</h3>
              <p>Administration, scripting, and troubleshooting on Linux servers to maintain stability and security.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}