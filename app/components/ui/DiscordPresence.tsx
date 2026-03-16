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
      setTimer(`${Math.floor(sec / 60).toString().padStart(2, '0')}:${(sec % 60).toString().padStart(2, '0')}`);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [active]);

  if (!data && !error) return <div className="w-full h-20 bg-card/20 rounded-2xl animate-pulse" />;
  if (error) return null;

  const { discord_user, discord_status } = data;
  const statusColors: any = { online: "bg-emerald-500", idle: "bg-amber-500", dnd: "bg-red-500" };

  return (
    <div className="w-full group">
      <div className="bg-card/30 backdrop-blur-md border border-border/40 p-5 rounded-[1.5rem] transition-all duration-300 hover:border-violet-500/30">
        
        <div className="flex items-center gap-5">
          {/* Avatar Area */}
          <div className="relative shrink-0">
            <img 
              src={`https://cdn.discordapp.com/avatars/${discord_user.id}/${discord_user.avatar}.png`} 
              className="w-14 h-14 rounded-2xl object-cover" 
              alt="avatar" 
            />
            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-4 border-background ${statusColors[discord_status] || 'bg-gray-500'}`} />
          </div>

          {/* Info Area */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-bold text-foreground text-lg truncate">@{discord_user.username}</h3>
              {timer && <span className="text-[10px] font-mono font-bold text-violet-500/80 bg-violet-500/5 px-2 py-0.5 rounded">{timer}</span>}
            </div>

            {active ? (
              <div className="flex items-center gap-2">
                {/* Logo Kecil (Spotify/VSCode) */}
                <div className="w-5 h-5 rounded-md overflow-hidden shrink-0 grayscale-[0.3]">
                   <img 
                    src={active.assets?.large_image 
                      ? (active.name === 'Spotify' 
                          ? `https://i.scdn.co/image/${active.assets.large_image.replace('spotify:', '')}`
                          : `https://cdn.discordapp.com/app-assets/${active.application_id}/${active.assets.large_image}.png`)
                      : "/api/placeholder/20/20"} 
                    alt="act-icon"
                  />
                </div>
                <p className="text-sm text-muted-foreground truncate">
                  <span className="text-foreground font-medium">{active.name === 'Spotify' ? active.details : active.name}</span>
                  <span className="mx-1.5 opacity-30">•</span>
                  <span className="text-xs italic">{active.state || active.details}</span>
                </p>
              </div>
            ) : (
              <p className="text-xs text-muted-foreground/50 italic tracking-wide">Offline or no activity</p>
            )}
          </div>

          {/* Discord Icon Simple */}
          <svg className="w-5 h-5 text-muted-foreground/20 hidden sm:block" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.086 2.157 2.419c0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.086 2.157 2.419c0 1.334-.946 2.419-2.157 2.419z"/></svg>
        </div>

      </div>
    </div>
  );
}