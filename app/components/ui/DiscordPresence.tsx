"use client";
import { useState, useEffect } from "react";

export default function DiscordPresence() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(false);
  const [timer, setTimer] = useState<string>("");

  useEffect(() => {
    const discordUserId = '438025232150822914';
    const fetchDiscord = async () => {
      try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${discordUserId}`);
        const { data: lanyardData } = await response.json();
        setData(lanyardData);
      } catch (err) { setError(true); }
    };
    fetchDiscord();
    const interval = setInterval(fetchDiscord, 30000);
    return () => clearInterval(interval);
  }, []);

  const spotify = data?.activities?.find((act: any) => act.name === 'Spotify');
  const game = data?.activities?.find((act: any) => act.type === 0);
  const active = spotify || game;

  useEffect(() => {
    const start = active?.timestamps?.start;
    if (!start) return;
    const update = () => {
      const sec = Math.floor((Date.now() - start) / 1000);
      const m = Math.floor(sec / 60).toString().padStart(2, '0');
      const s = (sec % 60).toString().padStart(2, '0');
      setTimer(`${m}:${s}`);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [active]);

  if (!data && !error) return (
    <div className="w-full relative rounded-[2rem] p-[1px] overflow-hidden">
      <div className="absolute inset-0 bg-border/50"></div>
      <div className="relative bg-card/40 backdrop-blur-2xl h-32 rounded-[calc(2rem-1px)] animate-pulse"></div>
    </div>
  );
  if (error) return null;

  const { discord_user, discord_status } = data;
  
  const statusConfig: any = { 
    online: { color: "bg-emerald-500", shadow: "shadow-emerald-500/50", text: "text-emerald-500" },
    idle: { color: "bg-amber-500", shadow: "shadow-amber-500/50", text: "text-amber-500" },
    dnd: { color: "bg-rose-500", shadow: "shadow-rose-500/50", text: "text-rose-500" },
    offline: { color: "bg-slate-500", shadow: "shadow-slate-500/50", text: "text-slate-500" }
  };
  const currentStatus = statusConfig[discord_status] || statusConfig.offline;

  return (
    <div className="w-full relative group">
      
      {/* Ambient Glow ngikutin warna brand */}
      <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"></div>

      <div className="relative rounded-[2rem] p-[1px] transition-transform duration-500 hover:-translate-y-1 shadow-lg hover:shadow-[0_15px_40px_-15px_rgba(139,92,246,0.3)] overflow-hidden">
        
        <div className="absolute inset-0 bg-border/40 rounded-[2rem]"></div>

        {/* Laser Border Animasi */}
        <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,rgba(139,92,246,0.2)_30%,var(--primary)_50%,rgba(16,185,129,0.5)_70%,transparent_100%)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

        <div className="relative bg-card/80 backdrop-blur-3xl rounded-[calc(2rem-1px)] p-5 z-10 flex flex-col gap-4">
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative shrink-0">
                <div className={`absolute inset-0 rounded-full blur-[6px] opacity-60 ${currentStatus.color}`}></div>
                <img 
                  src={`https://cdn.discordapp.com/avatars/${discord_user.id}/${discord_user.avatar}.png`} 
                  className="relative w-11 h-11 rounded-full object-cover ring-2 ring-background z-10 shadow-xl" 
                  alt="avatar" 
                />
              </div>

              <div className="flex flex-col">
                <h3 className="font-bold text-foreground text-sm tracking-tight leading-tight">@{discord_user.username}</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="relative flex h-2 w-2">
                    {discord_status !== 'offline' && (
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${currentStatus.color}`}></span>
                    )}
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${currentStatus.color}`}></span>
                  </span>
                  <span className={`text-[9px] font-black uppercase tracking-widest ${currentStatus.text}`}>
                    {discord_status === 'dnd' ? 'Do Not Disturb' : discord_status}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 dark:bg-white/10 p-2 rounded-xl border border-white/5 transition-colors group-hover:border-primary/50">
              <svg className="w-5 h-5 text-muted-foreground/60 group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.086 2.157 2.419c0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.086 2.157 2.419c0 1.334-.946 2.419-2.157 2.419z"/>
              </svg>
            </div>
          </div>

          <div className="bg-background/50 border border-border/40 rounded-2xl p-3 relative overflow-hidden group/activity transition-all hover:bg-background/80">
            {active ? (
              <div className="flex items-center gap-3 relative z-10">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 shadow-lg">
                  <img 
                    src={active.assets?.large_image 
                      ? (active.name === 'Spotify' 
                          ? `https://i.scdn.co/image/${active.assets.large_image.replace('spotify:', '')}`
                          : `https://cdn.discordapp.com/app-assets/${active.application_id}/${active.assets.large_image}.png`)
                      : "/api/placeholder/48/48"} 
                    alt="activity"
                    className={`w-full h-full object-cover transition-transform duration-700 ${active.name === 'Spotify' ? 'group-hover/activity:rotate-3 group-hover/activity:scale-110' : ''}`}
                  />
                  {active.name === 'Spotify' && (
                    <div className="absolute -bottom-1 -right-1 bg-[#1DB954] text-black p-1 rounded-full scale-75 border-2 border-background">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.508 17.302c-.216.354-.672.468-1.026.252-2.856-1.746-6.45-2.13-10.686-1.164-.408.096-.816-.156-.912-.564-.096-.408.156-.816.564-.912 4.632-1.056 8.592-.624 11.802 1.344.348.21.468.666.258 1.044zm1.47-3.258c-.276.45-.864.594-1.308.318-3.264-2.004-8.244-2.586-12.102-1.416-.51.156-1.044-.144-1.2-.654-.156-.51.144-1.044.654-1.2 4.416-1.338 9.906-.69 13.686 1.638.438.27.588.858.312 1.314zm.144-3.414c-3.912-2.322-10.374-2.532-14.154-1.386-.6.18-1.248-.156-1.434-.756-.18-.6.156-1.248.756-1.434 4.344-1.32 11.49-1.062 16.002 1.62.54.324.72.1.396.636-.318.54-.72.72-1.566.336z"/></svg>
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary">
                      {active.name === 'Spotify' ? 'Listening' : 'Focusing'}
                    </p>
                    
                    {/* LIVE EQ VISUALIZER */}
                    {active.name === 'Spotify' && (
                      <div className="flex items-end gap-[2px] h-2.5 opacity-80">
                        <span className="w-[2px] bg-primary rounded-full animate-[eq_0.8s_ease-in-out_infinite]"></span>
                        <span className="w-[2px] bg-primary rounded-full animate-[eq_1.2s_ease-in-out_infinite_0.2s]"></span>
                        <span className="w-[2px] bg-primary rounded-full animate-[eq_1s_ease-in-out_infinite_0.4s]"></span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-sm font-bold text-foreground truncate leading-tight group-hover/activity:text-primary transition-colors">
                    {active.name === 'Spotify' ? active.details : active.name}
                  </p>
                  <p className="text-xs text-muted-foreground truncate font-medium">
                    {active.state || active.details}
                  </p>
                </div>

                {timer && (
                  <div className="text-[10px] font-mono font-bold bg-muted/80 border border-border/50 text-foreground px-2 py-1 rounded-md shadow-sm shrink-0">
                    {timer}
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center gap-3 py-3 opacity-60 grayscale hover:grayscale-0 transition-all">
                <svg className="w-5 h-5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/><path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h1.66"/><path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"/><circle cx="12" cy="12" r="10"/></svg>
                <p className="text-xs font-medium tracking-wide">Exploring the digital realm...</p>
              </div>
            )}
          </div>

        </div>
      </div>

      <style>{`
        @keyframes eq {
          0%, 100% { height: 3px; }
          50% { height: 10px; }
        }
      `}</style>

    </div>
  );
}