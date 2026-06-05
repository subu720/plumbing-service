import { motion } from 'motion/react';
import { PlayCircle, ArrowLeft } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { BeforeAfterSlider } from './ui/BeforeAfterSlider';

const portfolioProjects = [
  {
    id: 1,
    title: 'Premium Bathroom Remodel',
    description: 'A complete bathroom renovation featuring modern fixtures, clean tile work, and efficient plumbing upgrades.',
    mediaType: 'image',
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Emergency Leak Repair',
    description: 'Fast response repairs with a customer-facing video walkthrough to show the fix from start to finish.',
    mediaType: 'video',
    video: 'https://videos.pexels.com/video-files/2519261/2519261-sd_640_360_30fps.mp4',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    id: 3,
    title: 'Smart Kitchen Upgrade',
    description: 'Modern kitchen faucet installs, water-saving systems, and before/after visuals for every project.',
    mediaType: 'image',
    beforeImage: 'https://images.unsplash.com/photo-1562137569-42b781df5a02?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 4,
    title: 'Pipe Installation Excellence',
    description: 'Professional outdoor pipe installation with precision measurements and quality workmanship.',
    mediaType: 'image',
    beforeImage: 'https://images.unsplash.com/photo-1542013936693-8848e574047a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
    image: 'https://images.unsplash.com/photo-1585974962614-f3fb079e04a0?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 5,
    title: 'Drain Cleaning Demonstration',
    description: 'See how we efficiently clear blocked drains and restore water flow with advanced equipment.',
    mediaType: 'video',
    video: 'https://videos.pexels.com/video-files/3755517/3755517-sd_640_360_24fps.mp4',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 6,
    title: 'Full Bathroom Suite Installation',
    description: 'Complete installation of bathroom fixtures with attention to every detail and finish quality.',
    mediaType: 'image',
    beforeImage: 'https://images.unsplash.com/photo-1504156069930-c733c28af3d3?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
    image: 'https://images.unsplash.com/photo-1560321051-7a8b9f80df2d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    id: 7,
    title: 'Water Tank Maintenance',
    description: 'Regular maintenance and inspection ensuring your water tanks stay clean and efficient.',
    mediaType: 'image',
    beforeImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 8,
    title: 'Residential Plumbing Inspection',
    description: 'Thorough inspection and documentation of residential plumbing systems for safety and efficiency.',
    mediaType: 'video',
    video: 'https://videos.pexels.com/video-files/3014856/3014856-sd_640_360_30fps.mp4',
    color: 'from-red-500 to-pink-500',
  },
  {
    id: 9,
    title: 'Modern Fixture Installation',
    description: 'Latest plumbing fixtures installed with precision and professional finishing touches.',
    mediaType: 'image',
    beforeImage: 'https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
    image: 'https://images.unsplash.com/photo-1584622181563-430f63602d4b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
    color: 'from-cyan-500 to-blue-500',
  },
];

export function PortfolioPage({ onBack }: { onBack: () => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof portfolioProjects[0] | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-white pt-24">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">
              <span className="bg-gradient-to-r from-[var(--plumbing-blue)] to-cyan-500 bg-clip-text text-transparent">
                Our Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Explore our complete collection of plumbing projects, from emergency repairs to full renovations.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-200 text-slate-900 font-semibold hover:bg-slate-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </motion.button>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-2xl transition-shadow"
            >
              <div className="relative overflow-hidden bg-slate-100 aspect-video">
                {project.mediaType === 'image' ? (
                  project.beforeImage ? (
                    <BeforeAfterSlider
                      beforeImage={project.beforeImage}
                      afterImage={project.image}
                      className="w-full h-full"
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  )
                ) : (
                  <>
                    <video
                      src={project.video}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                        <PlayCircle className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[var(--plumbing-blue)] uppercase">
                    {project.mediaType === 'video' ? '▶ Video' : '🖼 Image'}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 rounded-full bg-[var(--plumbing-blue)] text-white text-xs font-semibold hover:bg-[var(--plumbing-blue-light)] transition-colors"
                  >
                    View
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
            >
              <div className="relative flex-1 bg-slate-900 min-h-[400px]">
                {selectedProject.mediaType === 'image' ? (
                  selectedProject.beforeImage ? (
                    <div className="absolute inset-0 p-4 pb-8">
                      <BeforeAfterSlider
                        beforeImage={selectedProject.beforeImage}
                        afterImage={selectedProject.image}
                        className="w-full h-full rounded-xl shadow-2xl border border-slate-800"
                      />
                      <div className="absolute bottom-2 left-0 right-0 text-center text-xs text-slate-400 font-medium tracking-wide pointer-events-none select-none">
                        ← Drag the slider to compare Before and After →
                      </div>
                    </div>
                  ) : (
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-contain"
                    />
                  )
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <video
                      src={selectedProject.video}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors z-40"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 bg-white">
                <h2 className="text-2xl font-semibold text-slate-900 mb-2">{selectedProject.title}</h2>
                <p className="text-gray-600">{selectedProject.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
