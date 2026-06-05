import { motion } from 'motion/react';
import { ArrowRight, BarChart3, DollarSign, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { serviceCatalog } from '../data/services';

const maxValue = Math.max(...serviceCatalog.map((item) => item.chartValue));

export function PricingPage({ selectedServiceId }: { selectedServiceId?: string | null }) {
  const [activeService, setActiveService] = useState(
    selectedServiceId && serviceCatalog.some((item) => item.id === selectedServiceId)
      ? selectedServiceId
      : serviceCatalog[0].id
  );

  useEffect(() => {
    if (selectedServiceId && serviceCatalog.some((item) => item.id === selectedServiceId)) {
      setActiveService(selectedServiceId);
    }
  }, [selectedServiceId]);

  const selectedItem = serviceCatalog.find((item) => item.id === activeService) ?? serviceCatalog[0];
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-white pt-24 text-slate-900">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--plumbing-blue)] font-semibold mb-4">Pricing</p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight bg-gradient-to-r from-[var(--plumbing-blue)] to-cyan-500 bg-clip-text text-transparent mb-6">
            Transparent pricing built for every plumbing need.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base md:text-lg text-slate-600 leading-relaxed">
            Compare our most popular service packages at a glance and choose the plan that fits your home or business. Animated cost insight helps you see value instantly.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] bg-white border border-slate-200/60 p-10 shadow-2xl shadow-slate-100"
          >
            <div className="flex flex-col gap-4 mb-10 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-slate-900">Our service cards</h2>
                <p className="mt-3 text-slate-600 max-w-2xl">
                  Each service card shows pricing, description, and a preview image. Prices come from shared catalog data so everything stays in sync.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-3 text-sm text-[var(--plumbing-blue)] font-semibold">
                <DollarSign className="w-4 h-4" />
                Shared pricing data
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {serviceCatalog.map((service) => (
                <motion.div
                  key={service.id}
                  whileHover={{ y: -4 }}
                  className="rounded-3xl border border-slate-200 bg-slate-50/50 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <img src={service.imageUrl} alt={service.title} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute left-4 bottom-4 rounded-full bg-black/45 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md border border-white/10">
                      ₹{service.price}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4 text-sm">{service.description}</p>
                    <div className="inline-flex items-center rounded-full bg-[var(--plumbing-blue)]/10 px-3 py-2 text-sm font-semibold text-[var(--plumbing-blue)]">
                      {service.imageLabel}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6">
                <h3 className="text-lg font-semibold text-slate-900">Why this layout works</h3>
                <p className="mt-3 text-slate-600 leading-relaxed text-sm">
                  Customers can compare services visually, with price and description shown side by side.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6">
                <h3 className="text-lg font-semibold text-slate-900">One source of truth</h3>
                <p className="mt-3 text-slate-600 leading-relaxed text-sm">
                  Update the shared service catalog once and both pricing and service pages update automatically.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="rounded-[2rem] border border-slate-200/60 bg-white p-8 shadow-2xl shadow-slate-100">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 mb-6">
                <div className="text-sm uppercase tracking-[0.3em] text-[var(--plumbing-blue)] font-semibold mb-2">Selected service</div>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900">{selectedItem.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">Fast, transparent pricing for the service you selected.</p>
                  </div>
                  <div className="rounded-3xl bg-[var(--plumbing-blue)]/10 px-4 py-3 text-2xl font-semibold text-[var(--plumbing-blue)]">₹{selectedItem.price}</div>
                </div>
              </div>
              <div className="inline-flex items-center gap-3 mb-6 rounded-full bg-slate-100 px-4 py-3 text-slate-700 font-semibold text-sm">
                <BarChart3 className="w-5 h-5 text-[var(--plumbing-blue)]" />
                Most requested pricing plans
              </div>
              {serviceCatalog.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveService(item.id)}
                  className={`mb-6 last:mb-0 w-full rounded-3xl p-5 text-left transition-all ${
                    activeService === item.id
                      ? 'border-[var(--plumbing-blue)] bg-blue-50/50 shadow-[0_0_0_1px_var(--plumbing-blue)]'
                      : 'border border-slate-200 bg-slate-50/50 hover:border-[var(--plumbing-blue)]/30 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-600">Starting at ₹{item.price} with full service guarantee</p>
                    </div>
                    <div className="rounded-2xl bg-[var(--plumbing-blue)]/10 px-4 py-2 text-sm font-semibold text-[var(--plumbing-blue)]">{item.chartValue}%</div>
                  </div>
                </button>
              ))}
            </div>

            <a
              href="tel:+919959910140"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--plumbing-blue)] px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-[var(--plumbing-blue-light)] transition w-full"
            >
              Book a custom quote
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="grid gap-4">
              <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6">
                <div className="flex items-center gap-3 text-slate-800 mb-3">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  <span className="text-sm font-semibold text-slate-900">No surprise fees</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Every package has clear line-item pricing so you know exactly what you pay before the work begins.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6">
                <h3 className="text-lg font-semibold text-slate-900">Trusted Service Delivery</h3>
                <p className="mt-3 text-slate-600 leading-relaxed text-sm">
                  Licensed plumbers, fast arrival times, and professional clean-up make every estimate a dependable experience.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
