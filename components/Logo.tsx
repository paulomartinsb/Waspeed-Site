import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <img 
    src="/logo.png" 
    alt="WaSpeed Logo" 
    width="399" 
    height="112"
    className={`object-contain ${className}`}
  />
);

export const LogoIcon: React.FC<{ className?: string }> = ({ className = "h-10" }) => (
  <svg 
    viewBox="0 0 120 90" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    width="120"
    height="90"
    aria-label="WaSpeed Ícone"
    role="img"
  >
     <path 
      d="M60 10C28 10 5 26 5 46C5 56 10 65 18 70C15 75 11 80 5 83C18 83 29 78 36 73C43 78 51 81 60 81C92 81 115 65 115 46C115 26 92 10 60 10Z" 
      stroke="#2563eb" 
      strokeWidth="7"
      fill="white"
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <text 
      x="60" 
      y="63" 
      fontFamily="'Nunito', sans-serif" 
      fontWeight="900" 
      fontSize="52" 
      fill="#ef4444" 
      textAnchor="middle"
    >
      wa
    </text>
  </svg>
);