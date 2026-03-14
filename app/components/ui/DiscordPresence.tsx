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
        if (!response.ok) throw new Error('Failed to fetch Lanyard data');
        const { data: lanyardData } = await response.json();
        if (!lanyardData || !lanyardData.discord_user) throw new Error('Incomplete Lanyard data');
        setData(lanyardData);
      } catch (err) {
        console.error('Error fetching Discord presence:', err);
        setError(true);
      }
    };

    fetchDiscord();
  }, []);

  const spotifyActivity = data?.activities?.find((act: any) => act.name === 'Spotify');

  // Logic Timer Spotify
  useEffect(() => {
    if (!spotifyActivity?.timestamps?.start) return;

    const updateTimer = () => {
      const ms = spotifyActivity.timestamps.start;
      const totalSeconds = Math.floor((Date.now() - ms) / 1000);
      const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
      const seconds = (totalSeconds % 60).toString().padStart(2, '0');
      setTimer(`${minutes}:${seconds} elapsed`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [spotifyActivity]);

  if (error) return <p style={{ color: 'var(--secondary-text-color)' }}>Failed to load Discord status.</p>;
  if (!data) return <div className="discord-user-info"><h3 id="discord-username">Loading...</h3></div>;

  const { discord_user, discord_status } = data;
  const statusFormatted = discord_status.charAt(0).toUpperCase() + discord_status.slice(1);

  return (
    <div className="discord-presence-card" id="lanyard-card">
      <div className="discord-card-header">
        <div className="discord-avatar-wrapper">
          <img 
            src={`https://cdn.discordapp.com/avatars/${discord_user.id}/${discord_user.avatar}.png`} 
            alt="Discord Avatar" 
            className="discord-avatar" 
          />
          <div className={`discord-status-indicator ${discord_status}`}></div>
        </div>
        <div className="discord-user-info">
          <h3>{discord_user.username}</h3>
          <p>{spotifyActivity ? "Listening to Spotify" : statusFormatted}</p>
        </div>
      </div>
      
      {spotifyActivity && spotifyActivity.assets && (
        <div className="discord-activity visible">
          <img src={spotifyActivity.assets.large_image_url} alt="Album Art" className="activity-album-art" />
          <div className="activity-details">
            <p className="activity-song">{spotifyActivity.details || ''}</p>
            <p className="activity-artist">by {spotifyActivity.state || ''}</p>
            <p className="activity-artist">{timer}</p>
          </div>
        </div>
      )}
    </div>
  );
}