import { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export default function Logo({ className = '', variant = 'dark' }: LogoProps) {
  const [imgError, setImgError] = useState(false);
  const imgSrc = '/src/assets/patra-logo.png';

  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {!imgError ? (
        <img
          src={imgSrc}
          alt="Patra Plumbing & Solutions"
          onError={() => setImgError(true)}
          className="h-10 w-10 object-contain rounded-md bg-white/90 p-1 shadow"
        />
      ) : (
        <div className={`h-10 w-10 rounded-md flex items-center justify-center font-bold ${
          isLight 
            ? 'bg-white text-[var(--plumbing-blue)]' 
            : 'bg-gradient-to-br from-[var(--plumbing-blue)] to-[var(--plumbing-blue-light)] text-white'
        }`}>
          P
        </div>
      )}

      <div className="flex flex-col leading-tight">
        <span className={`font-bold text-lg ${
          isLight 
            ? 'text-white' 
            : 'bg-gradient-to-r from-[var(--plumbing-blue)] to-[var(--plumbing-blue-light)] bg-clip-text text-transparent'
        }`}>
          PATRA
        </span>
        <span className={`text-[10px] uppercase tracking-[0.25em] ${
          isLight ? 'text-blue-200' : 'text-slate-500'
        }`}>
          Plumbing & Solutions
        </span>
      </div>
    </div>
  );
}
