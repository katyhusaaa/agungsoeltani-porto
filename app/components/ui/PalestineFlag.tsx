"use client";

export default function PalestineFlag() {
  return (
    <div className="inline-flex items-center justify-center">
      <style>{`
        @keyframes flagFlip {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        .animate-flag {
          animation: flagFlip 4s linear infinite;
          transform-style: preserve-3d;
        }
      `}</style>

      {/* Tambah ring-1 ring-border/10 biar ada garis pinggir tipis pas di background putih */}
      <svg
        className="w-6 h-4 animate-flag shadow-md rounded-[1px] ring-1 ring-white/10"
        viewBox="0 0 60 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Garis Hitam */}
        <path d="M0,0v13.333h60V0H0z" fill="#000000"/>
        {/* Garis Putih - Tetap putih bersih */}
        <path d="M0,13.333v13.333h60V13.333H0z" fill="#ffffff"/>
        {/* Garis Hijau */}
        <path d="M0,26.666v13.333h60V26.666H0z" fill="#007a3d"/>
        {/* Segitiga Merah */}
        <path d="M0,0v40L20,20L0,0z" fill="#e4312b"/>
      </svg>
    </div>
  );
}