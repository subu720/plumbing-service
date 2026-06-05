import { motion } from 'motion/react';

interface WaterDropletProps {
  delay: number;
  scrollY: number;
}

export function WaterDroplet({ delay, scrollY }: WaterDropletProps) {
  return (
    <motion.div
      className="fixed right-8 pointer-events-none z-40"
      style={{
        top: `${Math.max(0, scrollY / 3 - delay * 100)}px`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0],
        y: [0, 100],
      }}
      transition={{
        duration: 4,
        delay: delay,
        repeat: Infinity,
        repeatDelay: 2,
        ease: 'easeInOut',
      }}
    >
      <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
        <motion.path
          d="M12 0C12 0 0 12 0 20C0 26.6274 5.37258 32 12 32C18.6274 32 24 26.6274 24 20C24 12 12 0 12 0Z"
          fill="url(#waterGradient)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: delay }}
        />
        <defs>
          <linearGradient id="waterGradient" x1="12" y1="0" x2="12" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="1" stopColor="#0ea5e9" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
