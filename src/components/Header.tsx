import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { NAV_LINKS, LOGO_URL } from '@/data';
import ContactModal from './ContactModal';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'glass-strong py-3 shadow-2xl shadow-black/80 border-b border-neon-electric/15'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Logo */}
            <a href="#top" className="flex items-center gap-3 group focus:outline-none">
              <img
                src={LOGO_URL}
                alt="Logo TvTotal24"
                className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
                loading="eager"
              />
            </a>

            {/* Center: Desktop navigation links */}
            <nav className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-slate-300 hover:text-white dark:text-slate-300 dark:hover:text-white transition-colors relative group py-1"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-neon-electric transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right: Action Buttons & Theme Switcher */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />

              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full btn-neon-green text-xs tracking-wide uppercase transition-all"
              >
                <Sparkles size={14} />
                Demo Gratis
              </button>
            </div>

            {/* Mobile actions: Theme Toggle + Menu */}
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-xl glass text-white hover:border-neon-electric/50 transition-colors"
                aria-label="Menú de navegación"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile navigation drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 lg:hidden px-4"
          >
            <div className="glass-strong rounded-2xl p-6 shadow-2xl border border-neon-electric/25">
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:text-neon-electric hover:bg-neon-electric/10 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-3 border-t border-white/10 mt-1">
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      setModalOpen(true);
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl btn-neon-green text-xs font-bold uppercase tracking-wider"
                  >
                    <Sparkles size={15} />
                    Solicitar Demo Gratis
                  </button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Solicitar Demo Gratis de TvTotal24"
        subtitle="Elige cómo deseas conectarte para recibir tus credenciales de prueba sin costo en menos de 5 minutos."
      />
    </>
  );
}
