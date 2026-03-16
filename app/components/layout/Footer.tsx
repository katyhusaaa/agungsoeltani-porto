"use client";
import { useVisitorCounter } from "@/app/hooks/useVisitorCounter";
import DiscordPresence from "@/app/components/ui/DiscordPresence";
import { useContactForm } from "@/app/hooks/useContactForm";

export default function Footer() {
  const visitorCount = useVisitorCounter(); 
  const { handleSubmit, isSubmitting } = useContactForm();

  return (
    <footer id="contact" className="relative main-footer py-24 px-6 max-w-7xl mx-auto mt-12 overflow-hidden">
      
      {/* Animated Top Border Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 max-w-md h-[1px] bg-gradient-to-r from-transparent via-violet-400 to-transparent blur-[2px]"></div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      {/* Header Section */}
      <div className="mb-16 max-w-3xl relative z-10 text-center md:text-left mx-auto md:mx-0">
        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tighter">
          Let's <span className="text-violet-500">Connect.</span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-medium">
          I love talking about new ideas, tech, and opportunities. Feel free to reach out and let's make things happen.
        </p>
      </div>
      
      {/* Layout Grid: Kiri Form, Kanan Discord */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 relative z-10">
        
        {/* Kiri: Contact Form (Glassmorphism) */}
        <div className="bg-card/40 backdrop-blur-2xl border border-border/50 p-6 md:p-8 rounded-[2rem] shadow-2xl transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(139,92,246,0.15)] group relative overflow-hidden">
          
          {/* Shimmer Hint di pojokan form */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-violet-500/20 blur-[50px] rounded-full pointer-events-none transition-all duration-500 group-hover:bg-emerald-500/20"></div>

          <form id="contact-form" onSubmit={handleSubmit} className="contact-form flex flex-col gap-6 relative z-10">
            <input type="hidden" name="access_key" value="7e18441f-699a-46b0-ba04-66122f1bb234" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="flex flex-col gap-2 group/input">
                <label htmlFor="name" className="text-sm font-bold text-muted-foreground group-focus-within/input:text-violet-500 transition-colors">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Tell me your name" 
                  required 
                  className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 focus:-translate-y-1 focus:bg-background transition-all duration-300 shadow-sm hover:border-violet-500/30"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-2 group/input">
                <label htmlFor="email" className="text-sm font-bold text-muted-foreground group-focus-within/input:text-violet-500 transition-colors">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Your Email" 
                  required 
                  className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 focus:-translate-y-1 focus:bg-background transition-all duration-300 shadow-sm hover:border-violet-500/30"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col gap-2 group/input">
              <label htmlFor="message" className="text-sm font-bold text-muted-foreground group-focus-within/input:text-violet-500 transition-colors">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                placeholder="Tell me something cool..." 
                required
                className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 focus:-translate-y-1 focus:bg-background transition-all duration-300 shadow-sm resize-none hover:border-violet-500/30"
              ></textarea>
            </div>
            
            {/* Submit Button (Shimmer + Float) */}
            <div className="mt-2">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="relative group w-full md:w-auto inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all duration-300 bg-violet-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:bg-violet-500 hover:-translate-y-1 h-14 px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
              >
                {/* Shimmer Light Inside Button */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
                
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </>
                  )}
                </span>
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
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-border/40 relative z-10">
        
        {/* Social Links (Animated Underline) */}
        <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-muted-foreground">
          {[
            { name: "LinkedIn", url: "https://www.linkedin.com/in/agungsoeltani/" },
            { name: "GitHub", url: "https://github.com/katyhusaaa" },
            { name: "Instagram", url: "https://www.instagram.com/ag300099/" }
          ].map((link, i) => (
            <a 
              key={i} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative py-1 text-foreground/80 hover:text-violet-500 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-violet-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Visitor Counter */}
          <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 px-4 py-2 rounded-full text-xs shadow-sm hover:border-violet-500/30 hover:shadow-violet-500/10 transition-all duration-300">
            <svg className="text-violet-500 animate-pulse" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span className="text-muted-foreground font-medium tracking-wide">VISITORS <b className="text-foreground font-mono ml-1">{visitorCount}</b></span>
          </div>
          
          {/* Copyright */}
          <p className="text-xs font-medium text-muted-foreground/60 tracking-wide">&copy; 2025 Agung Soeltani.</p>
        </div>
      </div>
      
      {/* CSS untuk efek shimmer di tombol */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(12deg); }
          100% { transform: translateX(200%) skewX(12deg); }
        }
      `}</style>
      
    </footer>
  );
}