import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, WHATSAPP_LINKS } from '@/data';

export default function FAQ() {
  const [expanded, setExpanded] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-14 sm:py-20 bg-transparent dark:bg-obsidian-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[450px] bg-neon-emerald/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass border border-slate-200 dark:border-neon-emerald/30 text-xs font-bold tracking-widest text-emerald-600 dark:text-neon-emerald uppercase mb-3">
            <Sparkles size={12} />
            Respuestas Claras
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight">
            Preguntas <span className="text-gradient">Frecuentes</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Todo lo que necesitas saber sobre activación rápida y directa, 3 pantallas simultáneas, calidad de transmisión y métodos de pago.
          </p>

          {/* Collapsible Toggle Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full glass border border-slate-300 dark:border-white/20 hover:border-emerald-500 dark:hover:border-neon-emerald/50 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-all shadow-md group"
            >
              <span>{expanded ? 'Mostrar Menos' : 'Ver Todas las Preguntas'}</span>
              <motion.div
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <ChevronDown size={16} className="text-emerald-600 dark:text-neon-emerald group-hover:scale-110 transition-transform" />
              </motion.div>
            </button>
          </div>
        </motion.div>

        {/* Expandable Content: Accordions & Help CTA */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden pt-4"
            >
              {/* Accordions */}
              <div className="space-y-4">
                {FAQ_ITEMS.map((item, idx) => {
                  const isOpen = openIdx === idx;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.03 }}
                      className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
                        isOpen
                          ? 'glass-strong border-emerald-500/50 dark:border-neon-emerald/50 shadow-[0_0_30px_rgba(0,230,118,0.15)]'
                          : 'glass border-slate-200 dark:border-white/10 hover:border-emerald-500/40 dark:hover:border-white/20'
                      }`}
                    >
                      <button
                        onClick={() => setOpenIdx(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors"
                      >
                        <span className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white flex items-center gap-3">
                          <HelpCircle size={18} className="text-emerald-600 dark:text-neon-emerald shrink-0" />
                          {item.question}
                        </span>
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                            isOpen
                              ? 'rotate-180 bg-emerald-500 dark:bg-neon-emerald text-white dark:text-obsidian-950'
                              : 'glass text-slate-500 dark:text-slate-400'
                          }`}
                        >
                          <ChevronDown size={18} />
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                          >
                            <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-white/5">
                              {item.answer.split(/(\*\*\*.*?\*\*\*)/g).map((part, i) => {
                                if (part.startsWith('***') && part.endsWith('***')) {
                                  return (
                                    <strong key={i} className="font-bold italic text-slate-900 dark:text-white">
                                      {part.slice(3, -3)}
                                    </strong>
                                  );
                                }
                                return part;
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>

              {/* Need more help CTA: DIRECT TO WHATSAPP */}
              <div className="mt-10 p-6 rounded-2xl glass border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
                <div>
                  <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">
                    ¿Tienes alguna duda o necesitas asistencia técnica?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Nuestro equipo de soporte técnico responde directamente por WhatsApp.
                  </p>
                </div>
                <a
                  href={WHATSAPP_LINKS.support}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-neon-emerald to-emerald-500 text-obsidian-950 font-black text-xs sm:text-sm shadow-neon-glow hover:scale-105 transition-all shrink-0"
                >
                  <MessageCircle size={16} />
                  <span>Hablar con Soporte</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
