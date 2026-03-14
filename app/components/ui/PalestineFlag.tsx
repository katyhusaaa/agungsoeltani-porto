"use client";
import React from 'react';

const flagAnimationCSS = `
  @keyframes flagRotate {
    0% { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
  }

  .palestinian-flag-svg {
    width: 24px;
    height: 16px;
    animation: flagRotate 5s linear infinite;
    transform-style: preserve-3d;
  }
`;

export default function PalestineFlag() {
  return (
    <>
      <style>{flagAnimationCSS}</style>
      <svg
        className="palestinian-flag-svg"
        viewBox="0 0 60 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="60" height="40" fill="#222"/>
        <path d="M0,0v13.333h60V0H0z" fill="#000"/>
        <path d="M0,13.333v13.333h60V13.333H0z" fill="#fff"/>
        <path d="M0,26.666v13.333h60V26.666H0z" fill="#007a3d"/>
        <path d="M0,0v40L20,20L0,0z" fill="#f00"/>
      </svg>
    </>
  );
}