import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShieldCheck, Sparkles, Quote, Tv, ChevronDown } from 'lucide-react';
import { TESTIMONIALS } from '@/data';

export default function Testimonials() {
  const [expanded, setExpanded] = useState(true);

  return (
    <section id="reviews" className="relative py-12 sm:py-16 bg-obsidian-950 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[450px] bg-neon-electric/8 rounded-full blur-[170px] pointer-events-none" />

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
            Opiniones de Nuestros Clientes
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            La Experiencia de <span className="text-gradient">Nuestros Usuarios</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg leading-relaxed">
            Comentarios reales de personas y familias que disfrutan de TvTotal24 todos los días en sus hogares.
          </p>

          {/* Collapsible Toggle Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full glass border border-neon-electric/30 hover:border-neon-electric text-xs sm:text-sm font-bold text-slate-200 hover:text-white transition-all shadow-md group"
            >
              <span>{expanded ? 'Ver Menos Reseñas' : 'Ver Todas las Reseñas'}</span>
              <motion.div
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <ChevronDown size={16} className="text-neon-electric group-hover:scale-110 transition-transform" />
              </motion.div>
            </button>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden pt-4"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {TESTIMONIALS.map((review, idx) => (
                  <motion.div
                    key={review.name + review.location}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className="relative rounded-3xl glass-card p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 border border-white/10"
                  >
                    <div className="absolute top-5 right-5 text-white/10 pointer-events-none">
                      <Quote size={32} />
                    </div>

                    <div>
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={15}
                            className="text-amber-400 fill-amber-400"
                          />
                        ))}
                        <span className="text-xs font-bold text-amber-400 ml-1.5">
                          {review.rating.toFixed(1)}
                        </span>
                      </div>

                      {/* Review Text */}
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                        "{review.text}"
                      </p>
                    </div>

                    {/* Reviewer Details */}
                    <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-full btn-neon-green flex items-center justify-center font-bold text-xs text-black shadow-md shrink-0">
                          {review.avatarText}
                        </div>
                        <div>
                          <div className="font-display font-bold text-xs sm:text-sm text-white flex items-center gap-1">
                            {review.name}
                            <ShieldCheck size={13} className="text-neon-electric" />
                          </div>
                          <div className="text-[11px] text-neon-electric font-medium">
                            {review.location}
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="inline-flex items-center gap-1 text-[10px] text-slate-400">
                          <Tv size={11} />
                          {review.device}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
