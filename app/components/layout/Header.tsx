import WeatherWidget from "@/app/components/ui/WeatherWidget";

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-content">
        <WeatherWidget />

        <nav className="main-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        
        <button className="theme-switcher" id="theme-toggle" title="Change Theme">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}