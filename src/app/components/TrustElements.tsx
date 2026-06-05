import { motion, AnimatePresence } from 'motion/react';
import { Star, Trash2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';

interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  service: string;
  date: string;
  isDeletable?: boolean;
}

const defaultReviews: Review[] = [
  {
    id: 'sarah-johnson-1',
    name: 'Sarah Johnson',
    avatar: 'SJ',
    rating: 5,
    text: 'Incredible service! The plumber arrived in 20 minutes and fixed my burst pipe. The real-time tracking made me feel so secure.',
    service: 'Emergency Repair',
    date: 'May 28, 2026',
  },
  {
    id: 'michael-chen-1',
    name: 'Michael Chen',
    avatar: 'MC',
    rating: 5,
    text: 'Finally, clear pricing in plumbing! No hidden fees, no surprises. The calculator was spot-on with the final price.',
    service: 'Drain Cleaning',
    date: 'May 25, 2026',
  },
  {
    id: 'emily-rodriguez-1',
    name: 'Emily Rodriguez',
    avatar: 'ER',
    rating: 5,
    text: 'Professional, fast, and clean work. The plumber explained everything and gave me tips to prevent future issues. Highly recommend!',
    service: 'Fixture Installation',
    date: 'May 22, 2026',
  },
];

export function TrustElements() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [reviewsList, setReviewsList] = useState<Review[]>([]);

  // Load custom reviews from localStorage and combine with defaults
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

    try {
      const saved = localStorage.getItem('patra_custom_reviews');
      if (saved) {
        const customReviews = JSON.parse(saved);
        // Ensure they have the deletable flag set to true
        const loadedCustom = customReviews.map((r: Review) => ({
          ...r,
          isDeletable: true,
        }));
        setReviewsList([...loadedCustom, ...defaultReviews]);
      } else {
        setReviewsList(defaultReviews);
      }
    } catch (e) {
      console.error('Failed to load reviews from localStorage:', e);
      setReviewsList(defaultReviews);
    }

    return () => observer.disconnect();
  }, []);

  // Form State
  const [formName, setFormName] = useState('');
  const [formRating, setFormRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [formService, setFormService] = useState('Emergency Repair');
  const [formText, setFormText] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const getInitials = (nameStr: string) => {
    return nameStr
      .split(' ')
      .filter((n) => n.length > 0)
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formText.trim()) return;

    const newReview: Review = {
      id: `review-${Date.now()}`,
      name: formName.trim(),
      avatar: getInitials(formName.trim()) || 'U',
      rating: formRating,
      text: formText.trim(),
      service: formService,
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      isDeletable: true,
    };

    const updatedList = [newReview, ...reviewsList];
    setReviewsList(updatedList);

    // Persist only custom reviews to localStorage
    try {
      const customOnly = updatedList.filter((r) => r.isDeletable);
      localStorage.setItem('patra_custom_reviews', JSON.stringify(customOnly));
    } catch (err) {
      console.error('Failed to save review to localStorage:', err);
    }

    setFormName('');
    setFormRating(5);
    setFormText('');
    setSubmitSuccess(true);

    // Explode Confetti!
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.75 }
      });
    } catch (err) {
      console.error('Confetti explosion failed:', err);
    }

    setTimeout(() => {
      setSubmitSuccess(false);
    }, 4000);
  };

  const handleDeleteReview = (id: string) => {
    const updatedList = reviewsList.filter((r) => r.id !== id);
    setReviewsList(updatedList);

    // Update localStorage with the custom reviews only
    try {
      const customOnly = updatedList.filter((r) => r.isDeletable);
      localStorage.setItem('patra_custom_reviews', JSON.stringify(customOnly));
    } catch (err) {
      console.error('Failed to update localStorage on deletion:', err);
    }
  };

  return (
    <section id="pricing" ref={sectionRef} className="py-24 relative">
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
              Trusted by Thousands
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join 10,000+ happy customers who chose Patra Plumbing Services & Solutions
          </p>
        </motion.div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Rating breakdown and Review Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Stats Panel */}
            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-6 border border-slate-200 shadow-md">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-4">
                <div className="flex-shrink-0">
                  <div className="text-5xl font-semibold text-slate-800 mb-1">⭐ 4.9</div>
                  <div className="text-sm text-gray-600">2,340 reviews</div>
                </div>
                <div className="flex-1 w-full">
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((stars) => (
                      <div key={stars} className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                          {Array.from({ length: stars }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-yellow-400 to-orange-400"
                            initial={{ width: 0 }}
                            animate={isVisible ? { width: `${stars === 5 ? 92 : stars === 4 ? 6 : 2}%` } : {}}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                        </div>
                        <span className="text-xs text-gray-600 w-8">{stars === 5 ? '92%' : stars === 4 ? '6%' : '2%'}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Review Form Card */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[6px] bg-gradient-to-r from-[var(--plumbing-blue)] to-[var(--water-blue)]" />
              
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">Write a Review</h3>
              <p className="text-sm text-slate-500 mb-6">Share your experience with other customers.</p>

              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-inner">
                    ✓
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-1">Review Submitted!</h4>
                  <p className="text-sm text-slate-600">Your feedback helps us maintain premium quality service.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="customer-name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="customer-name"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Sarah J."
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--plumbing-blue)] focus:bg-white transition-all text-slate-900 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Rating
                    </label>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => {
                        const isFilled = star <= (hoverRating ?? formRating);
                        return (
                          <button
                            type="button"
                            key={star}
                            onClick={() => setFormRating(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(null)}
                            className="p-1 -m-1 focus:outline-none transition-transform active:scale-95 cursor-pointer"
                            aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                          >
                            <Star
                              className={`w-7 h-7 transition-all ${
                                isFilled
                                  ? 'fill-yellow-400 text-yellow-400 scale-110'
                                  : 'text-slate-300 hover:text-slate-400'
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service-type" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Service Received
                    </label>
                    <select
                      id="service-type"
                      value={formService}
                      onChange={(e) => setFormService(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--plumbing-blue)] focus:bg-white transition-all text-slate-900 text-sm cursor-pointer"
                    >
                      <option value="Emergency Repair">Emergency Repair</option>
                      <option value="Drain Cleaning">Drain Cleaning</option>
                      <option value="Fixture Installation">Fixture Installation</option>
                      <option value="Bathroom Remodel">Bathroom Remodel</option>
                      <option value="Water Tank Maintenance">Water Tank Maintenance</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="review-text" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Review Message
                    </label>
                    <textarea
                      id="review-text"
                      required
                      value={formText}
                      onChange={(e) => setFormText(e.target.value)}
                      placeholder="Tell us what you liked about our work..."
                      rows={4}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--plumbing-blue)] focus:bg-white transition-all text-slate-900 text-sm resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3 px-6 bg-[var(--plumbing-blue)] hover:bg-[var(--plumbing-blue-light)] text-white font-semibold rounded-xl transition-all text-sm shadow-md cursor-pointer"
                  >
                    Submit Review
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right Column: Customer Reviews List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <AnimatePresence mode="popLayout">
              {reviewsList.map((review, index) => (
                <motion.div
                  key={review.id}
                  layout
                  initial={{ opacity: 0, y: 25, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4, delay: index === 0 && reviewsList.length > 3 ? 0 : 0.05 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-slate-100 relative group/card"
                >
                  {review.isDeletable && (
                    <button
                      onClick={() => handleDeleteReview(review.id)}
                      className="absolute top-4 right-4 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-200 cursor-pointer"
                      aria-label="Delete my review"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  )}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--plumbing-blue)] to-[var(--plumbing-blue-light)] flex items-center justify-center text-white font-bold flex-shrink-0 shadow-sm">
                      {review.avatar}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-900 mb-1">{review.name}</h4>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          {Array.from({ length: 5 - review.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-slate-200" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">• {review.date}</span>
                      </div>
                      <span className="inline-block px-3 py-0.5 bg-blue-50 text-[var(--plumbing-blue)] text-xs rounded-full border border-blue-100">
                        {review.service}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{review.text}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
