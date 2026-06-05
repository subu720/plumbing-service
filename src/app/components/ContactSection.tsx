import { motion } from 'motion/react';
import { MapPin, Clock, Phone, MessageSquare } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [plumberProgress, setPlumberProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setPlumberProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-cyan-500 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="bg-gradient-to-r from-[var(--plumbing-blue)] to-[var(--water-blue)] bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Reach our support team instantly via call or WhatsApp for fast service and project inquiries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: 3D Phone Mockup with Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              className="relative w-full max-w-md mx-auto"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
              whileHover={{ rotateY: 5, rotateX: -5 }}
            >
              {/* Phone Frame */}
              <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  {/* Phone Screen Content */}
                  <div className="relative h-full bg-gradient-to-b from-blue-50 to-white">
                    {/* Status Bar */}
                    <div className="px-6 py-3 flex items-center justify-between text-xs text-gray-900">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-4 rounded-full bg-green-500" />
                        <div className="w-4 h-4 rounded-full bg-green-500" />
                        <div className="w-4 h-4 rounded-full bg-gray-300" />
                      </div>
                    </div>

                    {/* Header */}
                    <div className="px-6 py-4 bg-white shadow-sm">
                      <h3 className="text-lg mb-1">Your Plumber is on the way!</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>Arriving in {Math.max(5, Math.floor(20 - plumberProgress / 5))} minutes</span>
                      </div>
                    </div>

                    {/* Contact Panel */}
                    <div className="relative h-64 bg-gradient-to-br from-blue-100 via-cyan-50 to-teal-100 m-4 rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.3),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.2),_transparent_30%)]" />
                      <div className="relative h-full p-5 sm:p-6 flex flex-col justify-between text-gray-900">
                        <div>
                          <div className="text-sm uppercase tracking-[0.25em] text-slate-500 mb-3">Instant Contact</div>
                          <h3 className="text-2xl font-semibold mb-2">Call or WhatsApp Us</h3>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            Tap to start a call or open our WhatsApp chat on your mobile device.
                          </p>
                        </div>

                        <div className="space-y-4">
                          <a
                            href="tel:+919959910140"
                            className="block rounded-2xl bg-white py-4 px-5 shadow-lg text-center text-sm font-semibold text-[var(--plumbing-blue)] hover:bg-slate-50 transition-colors"
                          >
                            <span className="inline-flex items-center gap-2">
                              <Phone className="w-4 h-4" />
                              Call Now
                            </span>
                          </a>
                          <a
                            href="https://wa.me/919959910140"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="block rounded-2xl bg-[var(--plumbing-blue)] py-4 px-5 shadow-lg text-center text-sm font-semibold text-white hover:bg-[var(--plumbing-blue-light)] transition-colors"
                          >
                            <span className="inline-flex items-center gap-2">
                              <MessageSquare className="w-4 h-4" />
                              WhatsApp Us
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Support Info Card */}
                    <div className="mx-4 mt-4 bg-white rounded-2xl shadow-lg p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--plumbing-blue)] to-[var(--plumbing-blue-light)] flex items-center justify-center text-white text-xl">
                          HS
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm">Help Support</h4>
                          <div className="flex items-center gap-1 text-xs text-gray-600">
                            <span>⭐ 4.9</span>
                            <span>•</span>
                            <span>24/7 Response</span>
                          </div>
                        </div>
                        <motion.a
                          href="tel:+919959910140"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-lg text-white"
                        >
                          <Phone className="w-5 h-5" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3D Shadow */}
              <div className="absolute inset-0 bg-black/20 blur-2xl rounded-[3rem] translate-y-8 -z-10" />
            </motion.div>
          </motion.div>

          {/* Right: Features List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {[
              {
                icon: Phone,
                title: 'Instant Call Support',
                description: 'Tap to call our support team immediately for urgent plumbing help.',
              },
              {
                icon: MessageSquare,
                title: 'WhatsApp Chat',
                description: 'Open a WhatsApp conversation for easy messaging and photo sharing.',
              },
              {
                icon: Clock,
                title: '24/7 Availability',
                description: 'Our contact line is available around the clock for fast response.',
              },
              {
                icon: MapPin,
                title: 'Local Service',
                description: 'Get connected with nearby technicians for quicker arrival times.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg mb-1 text-gray-900">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
