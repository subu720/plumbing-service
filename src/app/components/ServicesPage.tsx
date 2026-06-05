import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import ServiceModal from './ServiceModal';
import { serviceCatalog } from '../data/services';

export function ServicesPage({ initialServiceId }: { initialServiceId?: string | null }) {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(initialServiceId ?? null);
  const services = serviceCatalog;

  useEffect(() => {
    if (initialServiceId) {
      setActiveServiceId(initialServiceId);
    }
  }, [initialServiceId]);
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-white pt-24 text-slate-900">
      <section className="relative py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--plumbing-blue)] font-semibold mb-4">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight bg-gradient-to-r from-[var(--plumbing-blue)] to-cyan-500 bg-clip-text text-transparent mb-6">
              Reliable plumbing services for every need.
            </h1>
            <p className="mx-auto max-w-3xl text-base md:text-lg text-slate-600 leading-relaxed">
              We offer practical, dependable plumbing service for homes and businesses. Choose a service below, then contact us for a fast booking.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-xl shadow-slate-100"
          >
            <div className="space-y-4 text-slate-800">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.12 }}
                  whileHover={{ x: 12, backgroundColor: 'rgba(14, 165, 233, 0.05)' }}
                  className="rounded-2xl border border-slate-200/80 bg-slate-50/40 px-5 py-6 transition-colors hover:border-[var(--plumbing-blue)]/50 hover:bg-white cursor-pointer shadow-sm"
                  onClick={() => setActiveServiceId(service.id)}
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                      <p className="text-slate-600 mt-2 text-sm">{service.description}</p>
                    </div>
                    <div className="inline-flex items-center rounded-full bg-[var(--plumbing-blue)]/10 px-4 py-2 text-sm font-semibold text-[var(--plumbing-blue)]">
                      Starting from ₹{service.price}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              className="mt-10 flex flex-wrap gap-4 items-center"
            >
              <a href="tel:+919959910140" className="inline-flex items-center gap-2 rounded-full bg-[var(--plumbing-blue)] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[var(--plumbing-blue-light)] transition">
                Call us about services
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-sm text-slate-500">
                Fast, animated service list.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {activeServiceId && (
        <ServiceModal
          service={services.find((s) => s.id === activeServiceId)!}
          onClose={() => setActiveServiceId(null)}
        />
      )}
    </main>
  );
}
