import { useState } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  className = '',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className={`relative w-full h-full overflow-hidden select-none ${className}`}>
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt="After work"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <span className="absolute bottom-3 right-3 z-20 bg-sky-950/80 backdrop-blur-md px-2.5 py-1 rounded-md text-sky-200 text-xs font-semibold uppercase tracking-wider pointer-events-none shadow-sm border border-sky-500/20">
        {afterLabel}
      </span>

      {/* Before Image (Overlay clipped by clipPath) */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
        }}
      >
        <img
          src={beforeImage}
          alt="Before work"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <span className="absolute bottom-3 left-3 bg-orange-950/80 backdrop-blur-md px-2.5 py-1 rounded-md text-orange-200 text-xs font-semibold uppercase tracking-wider pointer-events-none shadow-sm border border-orange-500/20">
          {beforeLabel}
        </span>
      </div>

      {/* Slider Bar & Handle */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full shadow-lg flex items-center justify-center border border-slate-200 cursor-ew-resize">
          {/* Vertical line grips */}
          <div className="flex gap-[3px] items-center justify-center">
            <span className="w-[2px] h-3.5 bg-slate-400 rounded-full"></span>
            <span className="w-[2px] h-3.5 bg-slate-400 rounded-full"></span>
          </div>
        </div>
      </div>

      {/* Hidden range input to handle dragging and accessibility */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 touch-none"
        aria-label="Before and after image comparison slider"
      />
    </div>
  );
}
