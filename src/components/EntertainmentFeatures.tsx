import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  Film,
  Tv,
  Baby,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Layers,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { CAROUSEL_SLIDES, type CarouselSlide } from '@/data';

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  sports: Trophy,
  movies: Film,
  series: Layers,
  livetv: Tv,
  family: Baby,
};

export default function EntertainmentFeatures() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalSlides = CAROUSEL_SLIDES.length;
  const currentSlide: CarouselSlide = CAROUSEL_SLIDES[currentIdx];

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % totalSlides);
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, totalSlides]);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % totalSlides);
  };

  return (
    <section id="features" className="relative py-12 sm:py-16 bg-transparent dark:bg-obsidian-950 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-neon-electric/8 rounded-full blur-[190px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass border border-neon-electric/30 text-xs font-bold tracking-widest text-emerald-600 dark:text-neon-electric uppercase mb-4">
            <Sparkles size={12} />
            Catálogo y Entretenimiento Total
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight">
            Todo en un Mismo Lugar con <span className="text-gradient">TvTotal24</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
            Televisión en directo, los mejores eventos deportivos, cine de estreno y series completas en una sola plataforma disponible 24/7.
          </p>
        </motion.div>

        {/* Carousel Category Selector Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-10">
          {CAROUSEL_SLIDES.map((slide, idx) => {
            const Icon = CATEGORY_ICONS[slide.id] || Tv;
            const isActive = idx === currentIdx;
            return (
              <button
                key={slide.id}
                onClick={() => setCurrentIdx(idx)}
                className={`relative flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? 'text-black btn-neon-green shadow-[0_0_25px_rgba(0,230,118,0.4)]'
                    : 'glass text-slate-700 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-white border-slate-300 dark:border-white/10 hover:border-emerald-500/40 hover:bg-emerald-50/50 dark:hover:bg-white/5'
                }`}
              >
                <Icon size={16} />
                <span>{slide.category}</span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Showcase Card */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative rounded-3xl glass p-6 sm:p-10 lg:p-12 border border-slate-200 dark:border-neon-electric/20 overflow-hidden shadow-xl dark:shadow-2xl"
        >
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-electric/10 border border-neon-electric/30 text-[11px] font-bold text-emerald-600 dark:text-neon-electric uppercase tracking-wider">
                    {currentSlide.badge}
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white leading-tight">
                    {currentSlide.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                    {currentSlide.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="grid sm:grid-cols-2 gap-3 pt-2">
                    {currentSlide.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-neon-electric shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Platforms / Channels Badges */}
                  <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-2">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mr-1">Incluye:</span>
                    {currentSlide.platforms.map((p) => (
                      <span
                        key={p}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-obsidian-900 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-800 dark:text-slate-200"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Anterior categoría"
                    className="w-10 h-10 rounded-full glass border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-white hover:border-emerald-500/50 transition-colors"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Siguiente categoría"
                    className="w-10 h-10 rounded-full glass border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-white hover:border-emerald-500/50 transition-colors"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                <div className="flex items-center gap-1.5">
                  {CAROUSEL_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIdx(i)}
                      aria-label={`Ir a la diapositiva ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === currentIdx ? 'w-8 bg-neon-electric' : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>

                <a
                  href="#pricing"
                  className="ml-auto inline-flex items-center gap-1.5 text-xs font-bold text-neon-electric hover:underline"
                >
                  Ver planes disponibles
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Right Media Preview Column */}
            <div className="lg:col-span-5 relative flex justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden glass p-2 border border-neon-electric/25 shadow-2xl"
                >
                  <img
                    src={currentSlide.image}
                    alt={currentSlide.title}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                    width="600"
                    height="450"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent pointer-events-none rounded-xl" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
