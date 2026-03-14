"use client";
import { useVisitorCounter } from "@/app/hooks/useVisitorCounter";
import DiscordPresence from "@/app/components/ui/DiscordPresence";
import { useContactForm } from "@/app/hooks/useContactForm"; // <-- WAJIB TAMBAH

export default function Footer() {
  const visitorCount = useVisitorCounter(); 
  const { handleSubmit, isSubmitting } = useContactForm(); // <-- WAJIB TAMBAH

  return (
    <footer id="contact" className="main-footer">
      <div className="section-container">
        <h2 className="section-title">Let's Connect</h2>
        <p>I love talking about new ideas. Feel free to reach out and let's make things happen.</p>
        
        <div className="contact-layout">
          <div className="contact-form-wrapper">
            
            {/* WAJIB TAMBAH: onSubmit={handleSubmit} */}
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
                  {/* WAJIB TAMBAH: disabled dan ubah teksnya */}
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

        {/* ... (kode footer bottom biarin aja) ... */}
        
      </div>
    </footer>
  );
}