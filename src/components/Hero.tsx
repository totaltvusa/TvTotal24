import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Tv,
  Star,
  Users,
  MessageCircle,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { HERO_IMAGE, LOGO_URL, WHATSAPP_LINKS } from '@/data';
import DynamicHeroCarousel from './DynamicHeroCarousel';

const TRUST_STATS = [
  { icon: Star, label: '4.9/5 Calificación de Clientes', accent: 'text-amber-400', fill: true },
  { icon: Users, label: 'Miles de Familias Conectadas', accent: 'text-neon-electric', fill: false },
  { icon: Zap, label: 'Servidores Rápidos Anti-Buffering 24/7', accent: 'text-neon-electric', fill: false },
];

export default function Hero() {
  const [tvStyle, setTvStyle] = useState<'oled' | 'vintage'>('oled');

  return (
    <section
      id="top"
      className="relative flex flex-col items-center pt-28 sm:pt-36 pb-12 sm:pb-16 overflow-hidden bg-transparent dark:bg-obsidian-950"
    >
      {/* Ambient neon green backlights */}
      <div className="absolute top-5 left-1/4 w-[700px] h-[700px] bg-neon-electric/15 rounded-full blur-[200px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-20 right-1/4 w-[550px] h-[550px] bg-emerald-600/12 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-lime/10 rounded-full blur-[190px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* LOGO GIGANTE EN HERO - MÁXIMO PROTAGONISMO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center mb-6 sm:mb-8"
        >
          <img
            src={LOGO_URL}
            alt="TvTotal24 Logotipo Oficial"
            className="h-24 sm:h-32 md:h-40 lg:h-44 w-auto object-contain filter drop-shadow-[0_0_35px_rgba(0,230,118,0.55)] hover:scale-105 transition-transform duration-300"
            loading="eager"
          />
        </motion.div>

        {/* 1. HERO CAROUSEL INTERACTIVO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full relative flex flex-col justify-center items-center mb-10 sm:mb-12"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-full max-w-4xl flex flex-col items-center"
          >
            {/* Backlight Neon Glow */}
            <div className="absolute -inset-4 sm:-inset-6 bg-neon-electric/20 rounded-3xl blur-3xl opacity-75 pointer-events-none" />

            {/* MODEL 1: MODERN OLED 4K TV */}
            {tvStyle === 'oled' ? (
              <motion.div
                key="oled-tv"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4 }}
                className="w-full flex flex-col items-center"
              >
                {/* TV Frame Outer Bezel */}
                <div className="relative z-10 w-full rounded-2xl sm:rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-slate-700/80 via-slate-800/95 to-obsidian-950 border border-emerald-500/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_35px_rgba(0,230,118,0.15)] ring-1 ring-neon-electric/20">
                  {/* TV Screen Display */}
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-black aspect-video flex items-center justify-center border border-black/80 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)]">
                    <DynamicHeroCarousel
                      fallbackImage={HERO_IMAGE}
                      altText="Experiencia de Televisión y Streaming TvTotal24"
                      cycleIntervalMs={4500}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.05] pointer-events-none" />
                  </div>

                  {/* Bottom TV Bezel */}
                  <div className="mt-2 sm:mt-2.5 px-2 sm:px-4 flex items-center justify-between select-none">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2" title="Encendido">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-electric opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-electric shadow-[0_0_8px_#00e676]" />
                      </span>
                      
                      <div className="flex items-center gap-1 text-[10px] sm:text-xs font-mono">
                        <button
                          type="button"
                          onClick={() => setTvStyle('oled')}
                          className="px-2 py-0.5 rounded font-bold text-neon-electric bg-obsidian-900 border border-neon-electric/40 shadow-[0_0_8px_rgba(0,230,118,0.3)] transition-all cursor-pointer"
                        >
                          OLED 4K
                        </button>
                        <button
                          type="button"
                          onClick={() => setTvStyle('vintage')}
                          className="px-2 py-0.5 rounded text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                        >
                          Retro TV
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="hidden sm:inline-block text-[10px] tracking-widest uppercase font-mono text-slate-400">
                        TvTotal24 Smart Series
                      </span>
                      <span className="text-[10px] font-mono font-bold text-neon-electric border border-neon-electric/30 px-1.5 py-0.2 rounded bg-neon-electric/10">
                        4K UHD
                      </span>
                    </div>
                  </div>
                </div>

                {/* TV Pedestal Stand */}
                <div className="w-32 sm:w-44 h-3 bg-gradient-to-b from-slate-700 to-slate-900 mx-auto rounded-b-lg border-x border-b border-white/20 shadow-lg" />
                <div className="w-48 sm:w-64 h-1.5 bg-gradient-to-r from-transparent via-slate-600 to-transparent mx-auto rounded-full" />
              </motion.div>
            ) : (
              /* MODEL 2: RETRO VINTAGE TV */
              <motion.div
                key="vintage-tv"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4 }}
                className="w-full flex flex-col items-center"
              >
                <div className="relative z-10 w-full rounded-3xl p-4 sm:p-5 bg-gradient-to-b from-amber-950 via-[#2a1708] to-amber-950 border-4 border-[#3e240f] shadow-[0_30px_70px_rgba(0,0,0,0.95)]">
                  <div className="relative rounded-2xl overflow-hidden bg-black aspect-video flex items-center justify-center border-4 border-[#1a0f06]">
                    <DynamicHeroCarousel
                      fallbackImage={HERO_IMAGE}
                      altText="TvTotal24 Clásico"
                      cycleIntervalMs={4500}
                    />
                  </div>
                  <div className="mt-3 px-3 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => setTvStyle('oled')}
                        className="px-2 py-0.5 rounded text-xs text-slate-400 hover:text-white"
                      >
                        OLED 4K
                      </button>
                      <button
                        type="button"
                        onClick={() => setTvStyle('vintage')}
                        className="px-2 py-0.5 rounded text-xs font-bold text-amber-400 bg-amber-950/60 border border-amber-500/40"
                      >
                        Retro TV
                      </button>
                    </div>
                    <span className="text-xs font-mono text-amber-400 font-bold">TvTotal24 Classic</span>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* 2. MENSAJE INICIAL */}
        <div className="w-full max-w-4xl mx-auto text-center">
          {/* Trust Pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-neon-electric/30 text-xs sm:text-sm font-semibold text-neon-electric mb-5 shadow-[0_0_20px_rgba(0,230,118,0.2)]"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-electric opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-electric" />
            </span>
            ⚡ Más de 5.000 Canales en Vivo y 25.000 Películas y Series
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-[1.14] tracking-tight"
          >
            Canales en Vivo, Películas y Series en un Solo Lugar —{' '}
            <span className="text-gradient">Incluyendo 4K UHD</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Disfruta de más de 5.000 canales de televisión en vivo, los mejores eventos deportivos y más de 25.000 títulos en películas y series completas on-demand. Todos nuestros planes incluyen 3 pantallas simultáneas.
          </motion.p>

          {/* CTAs DIRECTOS A WHATSAPP */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-3.5 justify-center items-center"
          >
            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full btn-neon-green text-sm sm:text-base uppercase tracking-wider font-extrabold transition-all duration-300 shadow-neon-glow hover:scale-105"
            >
              Ver Planes y Precios
              <ArrowRight size={18} />
            </a>

            <a
              href={WHATSAPP_LINKS.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full glass border border-slate-300 dark:border-neon-electric/40 text-slate-800 dark:text-slate-100 font-bold text-sm sm:text-base hover:text-emerald-700 dark:hover:text-white hover:border-emerald-500/60 dark:hover:border-neon-electric hover:bg-emerald-50 dark:hover:bg-neon-electric/15 transition-all duration-300 shadow-sm dark:shadow-lg group"
            >
              <MessageCircle size={18} className="text-neon-electric group-hover:scale-110 transition-transform" />
              <span>Solicitar Prueba Gratis</span>
            </a>
          </motion.div>

          {/* Guarantees Checklist */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600 dark:text-slate-300"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-neon-electric" />
              3 Pantallas incluidas en todos los planes
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-500" />
              Sin contratos ni cargos ocultos
            </span>
            <span className="flex items-center gap-1.5">
              <Tv size={14} className="text-neon-electric" />
              Activación guiada y directa por WhatsApp
            </span>
          </motion.div>

          {/* Social Proof Stats */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2.5"
          >
            {TRUST_STATS.map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <stat.icon
                  className={stat.accent}
                  size={16}
                  fill={stat.fill ? 'currentColor' : 'none'}
                />
                <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
