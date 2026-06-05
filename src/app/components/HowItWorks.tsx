import { motion } from 'motion/react';
import { PlayCircle, CheckCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function HowItWorks({ onExplorePortfolio }: { onExplorePortfolio: () => void }) {
  const [isVisible, setIsVisible] = useState(false);
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

  const projects = [
    {
      title: 'Premium Bathroom Remodel',
      description: 'A complete bathroom renovation featuring modern fixtures, clean tile work, and efficient plumbing upgrades.',
      mediaType: 'image',
      label: 'View Gallery',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Emergency Leak Repair',
      description: 'Fast response repairs with a customer-facing video walkthrough to show the fix from start to finish.',
      mediaType: 'video',
      label: 'Watch Video',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      title: 'Smart Kitchen Upgrade',
      description: 'Modern kitchen faucet installs, water-saving systems, and before/after visuals for every project.',
      mediaType: 'image',
      label: 'View Photos',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="our-work" ref={sectionRef} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="bg-gradient-to-r from-[var(--plumbing-blue)] to-[var(--water-blue)] bg-clip-text text-transparent">
              Our Work
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse our latest project images and video demos to see the quality and care we bring to every job.
          </p>
        </motion.div>

        {/* Project Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200"
            >
              <div className="relative overflow-hidden bg-slate-100">
                <div
                  className={`aspect-[16/9] bg-gradient-to-br ${project.color} opacity-90 flex items-center justify-center`}
                >
                  {project.mediaType === 'video' ? (
                    <div className="flex items-center gap-3 text-white text-lg font-semibold">
                      <PlayCircle className="w-14 h-14" />
                      <span>Project Video</span>
                    </div>
                  ) : (
                    <div className="text-white text-lg font-semibold">Image Gallery</div>
                  )}
                </div>
                {project.mediaType === 'video' ? (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-20 h-20 rounded-full bg-black/30 flex items-center justify-center">
                      <PlayCircle className="w-10 h-10 text-white" />
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--plumbing-blue)] text-white text-sm font-semibold shadow-lg hover:bg-[var(--plumbing-blue-light)] transition-colors"
                >
                  <span>{project.label}</span>
                  {project.mediaType === 'video' ? <PlayCircle className="w-4 h-4" /> : null}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onExplorePortfolio}
            className="px-10 py-4 bg-gradient-to-r from-[var(--plumbing-blue)] to-[var(--plumbing-blue-light)] text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <span className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Explore the Full Portfolio
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
