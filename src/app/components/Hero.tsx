import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Shield, Clock, Wrench, Droplet } from 'lucide-react';

export function Hero({ onViewPricing }: { onViewPricing: () => void }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.16),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.12),_transparent_28%)]"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 blur-3xl"
          animate={{
            x: mousePosition.x * 50,
            y: mousePosition.y * 50,
          }}
          transition={{ type: 'spring', stiffness: 50 }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-orange-400/20 to-pink-400/20 blur-3xl"
          animate={{
            x: mousePosition.x * -30,
            y: mousePosition.y * -30,
          }}
          transition={{ type: 'spring', stiffness: 50 }}
        />
        <div className="absolute top-1/3 left-8 h-24 w-24 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute bottom-16 right-10 h-32 w-32 rounded-full bg-orange-400/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-emerald-100 text-slate-700 px-4 py-2 rounded-full mb-6 shadow-sm"
          >
            <Zap className="w-4 h-4 text-[var(--plumbing-orange)]" />
            <span className="text-sm">24/7 Premium Plumbing Support</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[var(--plumbing-blue)] via-[var(--plumbing-blue-light)] to-[var(--water-blue)] bg-clip-text text-transparent">
              Premium Plumbing
            </span>
            <br />
            <span className="text-gray-900">
              at Your Doorstep
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 mb-8 leading-relaxed">
            Book expert plumbers in seconds in Kodad and surrounding areas. Track them in real-time. Get your plumbing fixed right the first time with premium service, backed by our satisfaction guarantee.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 items-stretch">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onViewPricing}
              className="group w-full sm:w-auto relative overflow-hidden rounded-full bg-gradient-to-r from-[var(--plumbing-orange)] to-[var(--plumbing-orange)]/90 px-8 py-4 text-white shadow-2xl shadow-[rgba(249,115,22,0.35)] transition-all"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View Pricing
                <ArrowRight className="w-5 h-5" />
              </span>
              <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">Same-Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="text-gray-700">4.9/5 (2,340 reviews)</span>
            </div>
          </div>
        </motion.div>

        {/* Right 3D Animated Element */}
        <motion.div
          className="relative"
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1000px',
          }}
        >
          <motion.div
            className="relative"
            animate={{
              rotateY: mousePosition.x * 10,
              rotateX: -mousePosition.y * 10,
            }}
            transition={{ type: 'spring', stiffness: 100 }}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <motion.div
              className="absolute -top-8 right-0 z-20 w-64 rounded-[2rem] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl text-white"
              initial={{ opacity: 0, y: -20, rotate: -5 }}
              animate={{ opacity: 1, y: [0, -6, 0], rotate: [-5, 5, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-cyan-200/80">Patra Platinum</p>
                  <h3 className="text-lg font-semibold text-white">Luxury Service Card</h3>
                </div>
                <div className="h-10 w-10 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-200">
                  <Zap className="w-5 h-5" />
                </div>
              </div>
              <div className="space-y-2 text-sm text-slate-200">
                <p>Priority arrival within 30 min*</p>
                <p>Dedicated service manager</p>
              </div>
            </motion.div>

            {/* 3D Plumbing System Visualization */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main Container */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--plumbing-blue)] to-[var(--plumbing-blue-dark)] shadow-2xl"
                style={{ transform: 'translateZ(0px)' }}
              >
                {/* Animated Pipes */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  {/* Vertical Pipe */}
                  <motion.path
                    d="M 50 200 L 200 200"
                    stroke="url(#pipeGradient)"
                    strokeWidth="20"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.3, repeat: Infinity, repeatDelay: 1 }}
                  />
                  <motion.path
                    d="M 200 250 L 350 250"
                    stroke="url(#pipeGradient)"
                    strokeWidth="20"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.6, repeat: Infinity, repeatDelay: 1 }}
                  />

                  <defs>
                    <linearGradient id="pipeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0ea5e9" stopOpacity="1" />
                    </linearGradient>
                  </defs>

                  {/* Animated Water Flow */}
                  <motion.circle
                    cx="200"
                    cy="0"
                    r="8"
                    fill="#06b6d4"
                    animate={{ cy: [50, 350] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.circle
                    cx="0"
                    cy="150"
                    r="8"
                    fill="#0ea5e9"
                    animate={{ cx: [50, 200] }}
                    transition={{ duration: 2, delay: 0.3, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.circle
                    cx="200"
                    cy="250"
                    r="8"
                    fill="#06b6d4"
                    animate={{ cx: [200, 350] }}
                    transition={{ duration: 2, delay: 0.6, repeat: Infinity, ease: "linear" }}
                  />
                </svg>

                {/* Floating Icons */}
                <motion.div
                  className="absolute top-8 left-8 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ transform: 'translateZ(50px)' }}
                >
                  <Zap className="w-8 h-8 text-[var(--plumbing-cyan)]" />
                </motion.div>

                <motion.div
                  className="absolute bottom-8 right-8 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
                  style={{ transform: 'translateZ(50px)' }}
                >
                  <Shield className="w-8 h-8 text-[var(--plumbing-orange)]" />
                </motion.div>
              </motion.div>

              {/* Plumbing preview icons (replaces price/response badges) */}
              <motion.div
                className="absolute left-8 bottom-16 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ transform: 'translateZ(50px)' }}
                aria-hidden={false}
              >
                <Wrench className="w-8 h-8 text-[var(--plumbing-cyan)]" />
              </motion.div>

              <motion.div
                className="absolute right-12 top-12 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, delay: 0.3, repeat: Infinity }}
                style={{ transform: 'translateZ(60px)' }}
                aria-hidden={false}
              >
                <Droplet className="w-10 h-10 text-[var(--water-blue)]" />
              </motion.div>

              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ transform: 'translateZ(70px)' }}
                aria-hidden={false}
              >
                <Zap className="w-7 h-7 text-cyan-300" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
