import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Tv,
  Flame,
  Smartphone,
  Monitor,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  ChevronDown,
  type LucideIcon,
} from 'lucide-react';
import { DEVICE_CATEGORIES } from '@/data';
import ContactModal from './ContactModal';

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  Tv,
  Flame,
  Smartphone,
  Monitor,
};

export default function Devices() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('all');
  const [expanded, setExpanded] = useState(true);

  const filteredCategories =
    activeTab === 'all'
      ? DEVICE_CATEGORIES
      : DEVICE_CATEGORIES.filter((c) => c.id === activeTab);

  return (
    <>
      <section id="devices" className="relative py-12 sm:py-16 bg-obsidian-950 overflow-hidden">
        {/* Dynamic backlights */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-neon-electric/8 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-600/6 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass border border-neon-electric/30 text-xs font-bold tracking-widest text-neon-electric uppercase mb-3">
              <Sparkles size={12} />
              Compatibilidad Universal
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Disfruta en <span className="text-gradient">Cualquier Pantalla y Dispositivo</span>
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              Sin equipos costosos ni técnicos. Conecta tus Smart TVs, TV boxes, celulares, tablets y computadoras con activación inmediata y guiada.
            </p>

            {/* Collapsible Toggle Button */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full glass border border-neon-electric/30 hover:border-neon-electric text-xs sm:text-sm font-bold text-slate-200 hover:text-white transition-all shadow-md group"
              >
                <span>{expanded ? 'Ver Menos Dispositivos' : 'Ver Todos los Dispositivos'}</span>
                <motion.div
                  animate={{ rotate: expanded ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <ChevronDown size={16} className="text-neon-electric group-hover:scale-110 transition-transform" />
                </motion.div>
              </button>
            </div>
          </motion.div>

          {/* Expandable Device Showcase */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden pt-4"
              >
                {/* Category Filter Pills */}
                <div className="flex flex-wrap justify-center items-center gap-2 mb-8">
                  <button
                    onClick={() => setActiveTab('all')}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                      activeTab === 'all'
                        ? 'btn-neon-green text-black shadow-[0_0_20px_rgba(0,230,118,0.4)]'
                        : 'glass text-slate-300 hover:text-white hover:border-neon-electric/40 hover:bg-white/5'
                    }`}
                  >
                    Todos los Dispositivos
                  </button>
                  {DEVICE_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveTab(cat.id)}
                      className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                        activeTab === cat.id
                          ? 'btn-neon-green text-black shadow-[0_0_20px_rgba(0,230,118,0.4)]'
                          : 'glass text-slate-300 hover:text-white hover:border-neon-electric/40 hover:bg-white/5'
                      }`}
                    >
                      {cat.title}
                    </button>
                  ))}
                </div>

                {/* Grid of Devices */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                  {filteredCategories.map((device, idx) => {
                    const Icon = CATEGORY_ICONS[device.icon] || Tv;
                    return (
                      <motion.div
                        key={device.id}
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: idx * 0.05 }}
                        className="group relative rounded-3xl glass-card p-6 flex flex-col justify-between border border-white/10 hover:border-neon-electric/40 transition-all duration-300"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-neon-electric/10 border border-neon-electric/30 flex items-center justify-center text-neon-electric shadow-[0_0_15px_rgba(0,230,118,0.15)] group-hover:scale-105 transition-transform">
                              <Icon size={24} />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-wider text-neon-electric bg-neon-electric/10 px-2.5 py-1 rounded-full border border-neon-electric/20">
                              {device.badge}
                            </span>
                          </div>

                          <h3 className="font-display font-bold text-lg text-white mb-1 group-hover:text-neon-electric transition-colors">
                            {device.title}
                          </h3>
                          <div className="text-xs text-slate-400 mb-3 font-medium">
                            {device.subtitle}
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed mb-4">
                            {device.description}
                          </p>

                          <div className="space-y-1.5 pt-3 border-t border-white/10">
                            <div className="text-[10px] font-bold uppercase tracking-wider text-neon-electric">
                              Modelos Compatibles:
                            </div>
                            {device.examples.map((ex) => (
                              <div key={ex} className="flex items-start gap-1.5 text-xs text-slate-200">
                                <CheckCircle2 size={13} className="text-neon-electric shrink-0 mt-0.5" />
                                <span>{ex}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-5 pt-3 border-t border-white/5">
                          <div className="text-[10px] text-slate-400 mb-1 font-semibold">
                            Apps Populares Recomendadas:
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {device.popularApps.map((app) => (
                              <span
                                key={app}
                                className="px-2 py-0.5 rounded-md bg-obsidian-900 border border-white/10 text-[10px] font-mono text-slate-300"
                              >
                                {app}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Bottom Help Banner */}
                <div className="mt-10 p-5 rounded-2xl glass border border-neon-electric/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-neon-electric/15 border border-neon-electric/30 flex items-center justify-center text-neon-electric shrink-0">
                      <Tv size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">
                        ¿Tienes dudas sobre cómo instalar en tu televisor o celular?
                      </div>
                      <div className="text-xs text-slate-400">
                        Nuestro equipo te guía paso a paso con capturas de pantalla y asistencia en tiempo real.
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full btn-neon-green text-xs font-bold uppercase tracking-wider"
                  >
                    <MessageCircle size={15} />
                    Asistencia Técnica
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Asistencia de Instalación TvTotal24"
        subtitle="Escríbenos para recibir la guía exacta y los enlaces de descarga para la marca y modelo de tu dispositivo."
      />
    </>
  );
}
