import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Film,
  Trophy,
  Tv,
  Layers,
  Smartphone,
  Bot,
  type LucideIcon,
  Sparkles,
  Check,
  ChevronDown,
} from 'lucide-react';
import { CORE_FEATURES } from '@/data';

const FEATURE_ICONS: Record<string, LucideIcon> = {
  Film,
  Trophy,
  Tv,
  Layers,
  Smartphone,
  Bot,
};

export default function WhyChooseUs() {
  const [expanded, setExpanded] = useState(true);

  return (
    <section id="why-us" className="relative py-12 sm:py-16 bg-obsidian-950 overflow-hidden">
      {/* Subtle radial lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-neon-electric/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass border border-neon-electric/30 text-xs font-bold tracking-widest text-neon-electric uppercase mb-3">
            <Sparkles size={12} />
            Ventajas Exclusivas
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            ¿Por Qué Elegir <span className="text-gradient">TvTotal24</span>?
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
            Reúne tus películas, series completas, canales de televisión en vivo y los deportes más intensos en un solo servicio confiable con calidad 4K UHD.
          </p>

          {/* Collapsible Toggle Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full glass border border-neon-electric/30 hover:border-neon-electric text-xs sm:text-sm font-bold text-slate-200 hover:text-white transition-all shadow-md group"
            >
              <span>{expanded ? 'Ver Menos Beneficios' : 'Ver Todos los Beneficios'}</span>
              <motion.div
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <ChevronDown size={16} className="text-neon-electric group-hover:scale-110 transition-transform" />
              </motion.div>
            </button>
          </div>
        </motion.div>

        {/* 3x2 Hover-Glow Card Grid */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden pt-4"
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {CORE_FEATURES.map((feature, idx) => {
                  const Icon = FEATURE_ICONS[feature.icon] || Sparkles;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: idx * 0.04 }}
                      className="group relative rounded-3xl glass-card p-7 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                    >
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neon-electric/0 via-transparent to-transparent group-hover:from-neon-electric/10 transition-all duration-500 pointer-events-none" />

                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <div className="w-12 h-12 rounded-2xl bg-neon-electric/10 border border-neon-electric/30 flex items-center justify-center text-neon-electric shadow-[0_0_20px_rgba(0,230,118,0.15)] transition-transform duration-300 group-hover:scale-105">
                            <Icon size={24} />
                          </div>
                          <span className="text-[10px] font-extrabold tracking-wider text-neon-electric bg-neon-electric/10 px-3 py-1 rounded-full border border-neon-electric/25">
                            {feature.tag}
                          </span>
                        </div>

                        <h3 className="font-display font-bold text-lg text-white mb-2.5 group-hover:text-neon-electric transition-colors">
                          {feature.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-white/5 flex items-center text-[11px] font-semibold text-neon-electric opacity-90 group-hover:opacity-100 transition-opacity">
                        <span className="flex items-center gap-1.5">
                          <Check size={13} className="text-neon-electric" />
                          Incluido en todas las suscripciones
                        </span>
                        <span className="ml-auto text-slate-400 font-mono">TvTotal24</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
