"use client";
import { useVisitorCounter } from "@/app/hooks/useVisitorCounter";
import DiscordPresence from "@/app/components/ui/DiscordPresence";
import { useContactForm } from "@/app/hooks/useContactForm";

export default function Footer() {
  const visitorCount = useVisitorCounter(); 
  const { handleSubmit, isSubmitting } = useContactForm();

  return (
    <footer id="contact" className="main-footer py-24 px-6 max-w-7xl mx-auto border-t border-border/30 mt-12 transition-colors duration-300">
      
      {/* Header Section */}
      <div className="mb-16 max-w-3xl">
        <h2 className="text-4xl font-bold text-foreground mb-6 tracking-tighter transition-colors duration-300">Let's Connect</h2>
        <p className="text-lg text-muted-foreground leading-relaxed transition-colors duration-300">
          I love talking about new ideas. Feel free to reach out and let's make things happen.
        </p>
      </div>
      
      {/* Layout Grid: Kiri Form, Kanan Discord */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        
        {/* Kiri: Contact Form */}
        <div className="bg-card border border-border p-6 md:p-8 rounded-2xl shadow-lg transition-all duration-300">
          <form id="contact-form" onSubmit={handleSubmit} className="contact-form flex flex-col gap-6">
            <input type="hidden" name="access_key" value="7e18441f-699a-46b0-ba04-66122f1bb234" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Tell me your name" 
                  required 
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Your Email" 
                  required 
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5} 
                placeholder="Tell me something cool" 
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all resize-none"
              ></textarea>
            </div>
            
            {/* Submit Button (Warna Violet) */}
            <div className="mt-2">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="contact-button w-full md:w-auto inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-all duration-300 bg-violet-600 text-white shadow-lg hover:bg-violet-500 hover:-translate-y-1 h-12 px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Sending...
                  </span>
                ) : "Send Message"}
              </button>
            </div>
          </form>
        </div>

        {/* Kanan: Discord Presence */}
        <div className="flex flex-col justify-start lg:pt-2">
          <DiscordPresence />
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-border/50 transition-colors duration-300">
        
        {/* Social Links (Hover Violet) */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="https://www.linkedin.com/in/agungsoeltani/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500 transition-colors">LinkedIn</a>
          <a href="https://github.com/katyhusaaa" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500 transition-colors">GitHub</a>
          <a href="https://www.instagram.com/ag300099/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500 transition-colors">Instagram</a>
        </div>
        
        {/* Visitor Counter (Icon Violet) */}
        <div className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full text-sm shadow-sm transition-all duration-300">
          <svg className="text-violet-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <span className="text-muted-foreground">Visitors: <b className="text-foreground font-mono ml-1">{visitorCount}</b></span>
        </div>
        
        {/* Copyright */}
        <p className="text-sm text-muted-foreground/60 transition-colors duration-300">&copy; 2025 Agung Soeltani</p>
      </div>
      
    </footer>
  );
}