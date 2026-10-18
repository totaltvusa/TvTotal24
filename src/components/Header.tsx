import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, MessageCircle } from 'lucide-react';
import { NAV_LINKS, LOGO_URL, WHATSAPP_LINKS } from '@/data';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass-strong py-2 sm:py-2.5 shadow-2xl shadow-black/80 border-b border-neon-electric/25 backdrop-blur-xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Brand Logo (MUCH BIGGER) */}
          <a
            href="#top"
            className="flex items-center gap-2 group focus:outline-none py-1"
            aria-label="TvTotal24 Inicio"
          >
            <img
              src={LOGO_URL}
              alt="Logo TvTotal24"
              className="h-14 sm:h-18 md:h-20 lg:h-22 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_22px_rgba(0,230,118,0.45)]"
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

          {/* Right: Direct Action Buttons & Theme Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />

            {/* Asistencia Técnica directo a WhatsApp */}
            <a
              href={WHATSAPP_LINKS.support}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full glass border border-neon-electric/30 text-xs font-bold text-slate-200 hover:text-white hover:border-neon-electric/60 hover:bg-neon-electric/10 transition-all shadow-md group"
              title="Asistencia técnica directa por WhatsApp"
            >
              <MessageCircle size={15} className="text-neon-electric" />
              <span>Asistencia Técnica</span>
            </a>

            {/* Demo Gratis directo a WhatsApp */}
            <a
              href={WHATSAPP_LINKS.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-neon-green text-xs font-black tracking-wide uppercase transition-all shadow-neon-glow hover:scale-105"
            >
              <Sparkles size={14} />
              <span>Demo Gratis</span>
            </a>
          </div>

          {/* Mobile actions: Theme Toggle + Menu */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex items-center justify-center w-11 h-11 rounded-xl glass text-white hover:border-neon-electric/50 transition-colors"
              aria-label="Menú de navegación"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-0 right-0 z-40 lg:hidden px-4"
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
                <div className="pt-3 border-t border-white/10 mt-1 flex flex-col gap-2">
                  <a
                    href={WHATSAPP_LINKS.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl btn-neon-green text-xs font-black uppercase tracking-wider shadow-neon-glow"
                  >
                    <Sparkles size={15} />
                    Solicitar Demo Gratis
                  </a>

                  <a
                    href={WHATSAPP_LINKS.support}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl glass border border-neon-electric/30 text-xs font-bold text-slate-200"
                  >
                    <MessageCircle size={15} className="text-neon-electric" />
                    Asistencia Técnica (+57 300 947 6271)
                  </a>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
