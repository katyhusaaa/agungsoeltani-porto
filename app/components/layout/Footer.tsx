"use client";
import { useVisitorCounter } from "@/app/hooks/useVisitorCounter";
import DiscordPresence from "@/app/components/ui/DiscordPresence";
import { useContactForm } from "@/app/hooks/useContactForm";

export default function Footer() {
  const visitorCount = useVisitorCounter(); 
  const { handleSubmit, isSubmitting } = useContactForm();

  return (
    <footer id="contact" className="main-footer">
      <div className="section-container">
        <h2 className="section-title">Let's Connect</h2>
        <p>I love talking about new ideas. Feel free to reach out and let's make things happen.</p>
        
        <div className="contact-layout">
          <div className="contact-form-wrapper">
            
            <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="7e18441f-699a-46b0-ba04-66122f1bb234" />
              
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Tell me your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-group full-width">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Tell me something cool" required></textarea>
                </div>
                
                <div className="form-group full-width">
                  <button type="submit" className="contact-button" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send"}
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="discord-presence-wrapper">
            <DiscordPresence />
          </div>
        </div>
        
        {/* === INI BAGIAN FOOTER BOTTOM YANG DITAMBAHIN === */}
        <div className="footer-bottom">
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/agungsoeltani/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.github.com/agungsoeltani" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.instagram.com/agungxsoeltani" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          
          <div className="visitor-counter">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span>Visitors: <b id="visitor-count">{visitorCount}</b></span>
          </div>
          
          <p>&copy; 2025 Agung Soeltani</p>
        </div>
        {/* ============================================== */}

      </div>
    </footer>
  );
}