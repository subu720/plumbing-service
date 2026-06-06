import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ServicesPage } from './components/ServicesPage';
import { PortfolioPage } from './components/PortfolioPage';
import { PricingPage } from './components/PricingPage';
import { HowItWorks } from './components/HowItWorks';
import { ContactSection } from './components/ContactSection';
import { TrustElements } from './components/TrustElements';
import { WaterDroplet } from './components/WaterDroplet';
import Logo from './components/Logo';
import { Menu, X } from 'lucide-react';

function HomePage({ onViewPricing, onExplore, onExplorePortfolio }: { onViewPricing: (serviceId?: string) => void; onExplore: () => void; onExplorePortfolio: () => void }) {
  return (
    <div className="pt-20">
      <Hero onViewPricing={() => onViewPricing()} />
      <Services onViewPricing={onViewPricing} onExplore={onExplore} />
      <HowItWorks onExplorePortfolio={onExplorePortfolio} />
      <ContactSection />
      <TrustElements />
    </div>
  );
}

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [route, setRoute] = useState(() => window.location.pathname);
  const [selectedPricingService, setSelectedPricingService] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handlePopState = () => {
      setRoute(window.location.pathname);
      window.scrollTo(0, 0);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigate = (path: string, anchor?: string, serviceId?: string) => {
    window.history.pushState(null, '', path);
    setRoute(path);
    setSelectedPricingService(serviceId ?? null);

    if (anchor) {
      setTimeout(() => {
        document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden relative bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.15),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.12),_transparent_28%),linear-gradient(180deg,_#ffffff_0%,_#eff6ff_40%,_#f8fbff_100%)]">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute -bottom-20 right-10 h-96 w-96 rounded-full bg-orange-300/10 blur-3xl" />
      </div>
      {/* Animated Water Droplets */}
      <WaterDroplet delay={0} scrollY={scrollY} />
      <WaterDroplet delay={2} scrollY={scrollY} />
      <WaterDroplet delay={4} scrollY={scrollY} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a
              href="/"
              aria-label="Home"
              onClick={(event) => {
                event.preventDefault();
                navigate('/');
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-2"
            >
              <Logo />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/services"
              onClick={(event) => {
                event.preventDefault();
                navigate('/services');
              }}
              className="text-sm md:text-base text-gray-700 hover:text-[var(--plumbing-blue)] transition-colors"
            >
              Services
            </a>
            <a
              href="/#our-work"
              onClick={(event) => {
                event.preventDefault();
                navigate('/', '#our-work');
              }}
              className="text-sm md:text-base text-gray-700 hover:text-[var(--plumbing-blue)] transition-colors"
            >
              Our Work
            </a>
            <a
              href="/pricing"
              onClick={(event) => {
                event.preventDefault();
                navigate('/pricing');
              }}
              className="text-sm md:text-base text-gray-700 hover:text-[var(--plumbing-blue)] transition-colors"
            >
              Pricing
            </a>
            <a
              href="tel:+919959910140"
              className="px-5 py-2 rounded-lg bg-[var(--plumbing-orange)] text-white hover:bg-[var(--plumbing-orange)]/90 transition-all shadow-lg hover:shadow-xl text-sm md:text-base font-semibold"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Navigation controls */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="tel:+919959910140"
              className="px-4 py-2 rounded-lg bg-[var(--plumbing-orange)] text-white hover:bg-[var(--plumbing-orange)]/90 transition-all shadow-md text-sm font-semibold"
            >
              Call Now
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-[var(--plumbing-blue)] focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top duration-200">
            <a
              href="/services"
              onClick={(event) => {
                event.preventDefault();
                navigate('/services');
                setIsMenuOpen(false);
              }}
              className="text-base text-gray-700 hover:text-[var(--plumbing-blue)] hover:bg-slate-50 p-2 rounded-lg transition-all font-medium"
            >
              Services
            </a>
            <a
              href="/#our-work"
              onClick={(event) => {
                event.preventDefault();
                navigate('/', '#our-work');
                setIsMenuOpen(false);
              }}
              className="text-base text-gray-700 hover:text-[var(--plumbing-blue)] hover:bg-slate-50 p-2 rounded-lg transition-all font-medium"
            >
              Our Work
            </a>
            <a
              href="/pricing"
              onClick={(event) => {
                event.preventDefault();
                navigate('/pricing');
                setIsMenuOpen(false);
              }}
              className="text-base text-gray-700 hover:text-[var(--plumbing-blue)] hover:bg-slate-50 p-2 rounded-lg transition-all font-medium"
            >
              Pricing
            </a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      {route === '/services' ? (
        <ServicesPage initialServiceId={selectedPricingService} />
      ) : route === '/portfolio' ? (
        <PortfolioPage onBack={() => navigate('/')} />
      ) : route === '/pricing' ? (
        <PricingPage selectedServiceId={selectedPricingService} />
      ) : (
        <HomePage
          onViewPricing={(serviceId?: string) => navigate('/pricing', undefined, serviceId)}
          onExplore={() => navigate('/services')}
          onExplorePortfolio={() => navigate('/portfolio')}
        />
      )}

      {/* Footer */}
      <footer className="bg-[var(--plumbing-blue)] text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <Logo variant="light" />
              </div>
              <p className="text-blue-200 text-sm">Premium on-demand plumbing service at your doorstep.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Services</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>
                  <a
                    href="/services"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/services', undefined, 'leak-detection');
                    }}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Leak Detection
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/services', undefined, 'drain-cleaning');
                    }}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Drain Cleaning
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/services', undefined, 'water-tank-repair');
                    }}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Water Tank Repair
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/services', undefined, 'outdoor-plumbing');
                    }}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Outdoor Plumbing
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/services', undefined, 'fixture-installation');
                    }}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Fixture Installation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>
                  <a href="tel:+919959910140" className="hover:text-white transition-colors">
                    📞 +91 99599 10140
                  </a>
                </li>
                <li>
                  <a href="mailto:patradamodar42@gmail.com" className="hover:text-white transition-colors">
                    ✉️ patradamodar42@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/919959910140"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-white transition-colors"
                  >
                    💬 WhatsApp Chat
                  </a>
                </li>
                <li>
                  🕒 24/7 Emergency Response
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-blue-200">
            © 2026 Patra Plumbing Services & Solutions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
