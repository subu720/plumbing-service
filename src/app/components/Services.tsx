import { motion } from 'motion/react';
import { Droplet, Home, Wrench, Sparkles, Thermometer } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { serviceCatalog } from '../data/services';

const iconMap = {
  droplet: Droplet,
  home: Home,
  wrench: Wrench,
  sparkles: Sparkles,
  thermometer: Thermometer,
} as const;

const services = serviceCatalog.slice(0, 3);

export function Services({ onViewPricing, onExplore }: { onViewPricing: (serviceId?: string) => void; onExplore: () => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative py-28 bg-gradient-to-br from-slate-50 via-sky-50 to-white overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),transparent_40%)]" />
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-orange-300/10 blur-3xl" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-sky-600 mb-4">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
            Premium plumbing care in Kodad for every home.
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 text-base md:text-lg leading-relaxed">
            Choose the service that best fits your needs and contact us for a fast appointment in Kodad and surrounding areas.
          </p>
        </motion.div>

        <div className="space-y-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.04, y: -4 }}
                className="rounded-[2rem] border border-transparent bg-white/90 p-6 shadow-[0_25px_80px_-35px_rgba(14,165,233,0.35)] transition-all hover:border-cyan-200 hover:bg-white"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="mt-1 rounded-3xl bg-gradient-to-br from-cyan-500 to-sky-500 p-3 text-white shadow-lg"
                    whileHover={{ scale: 1.15, rotate: 8 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                      <p className="mt-2 text-slate-600">{service.description}</p>
                      <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-800">
                        <span>Starting from</span>
                        <span className="text-[var(--plumbing-blue)]">₹{service.price}</span>
                      </div>
                    </div>
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-[1fr_180px] items-center">
                  <div>
                    <p className="text-sm text-gray-500">Preview</p>
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                      A quick visual summary of the work we complete for this service.
                    </p>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onViewPricing(service.id);
                      }}
                      className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-sky-400 transition"
                    >
                      View Pricing
                    </button>
                  </div>
                  <div className="rounded-[2rem] overflow-hidden border border-gray-200/30 bg-gradient-to-br from-slate-950 to-slate-900 p-5 shadow-lg shadow-slate-950/10">
                    <div className="flex h-40 flex-col items-center justify-center gap-3 rounded-3xl bg-gradient-to-br from-[var(--plumbing-blue)]/20 to-white/10">
                      <Icon className="w-14 h-14 text-[var(--plumbing-blue)]" />
                      <span className="text-sm font-semibold text-slate-100">{service.imageLabel}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <button
            type="button"
            onClick={onExplore}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--plumbing-blue)] to-cyan-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-shadow"
          >
            Explore Our Services
            <span className="text-lg">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
