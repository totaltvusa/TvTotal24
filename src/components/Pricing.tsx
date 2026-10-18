import { motion } from 'framer-motion';
import {
  Check,
  Zap,
  Crown,
  Sparkles,
  ArrowRight,
  Tv,
  Coins,
  ShieldCheck,
} from 'lucide-react';
import { PRICING_PLANS, WHATSAPP_LINKS } from '@/data';

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-14 sm:py-20 bg-transparent dark:bg-obsidian-950 overflow-hidden">
      {/* Dynamic ambient backlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-neon-electric/10 rounded-full blur-[190px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass border border-neon-electric/30 text-xs font-bold tracking-widest text-emerald-600 dark:text-neon-electric uppercase mb-4">
            <Sparkles size={12} />
            Precios Claros · 3 Pantallas en Todos los Planes
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight">
            Elige tu Plan en <span className="text-gradient">TvTotal24</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Sin contratos obligatorios ni costos sorpresa. Todos nuestros planes incluyen <strong className="text-slate-900 dark:text-white">3 pantallas simultáneas</strong> para disfrutar en familia.
          </p>
        </motion.div>

        {/* BANNER DESTACADO: SUPER DESCUENTO CON BINANCE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-12 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-amber-500/15 border border-amber-400/40 shadow-[0_0_35px_rgba(245,158,11,0.2)] flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 text-obsidian-950 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.4)]">
              <Coins size={28} className="stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-[11px] font-black uppercase tracking-widest text-amber-700 dark:text-amber-300 bg-amber-400/15 px-2.5 py-0.5 rounded-full border border-amber-400/30">
                  Promoción Especial
                </span>
                <span className="text-xs text-amber-800 dark:text-amber-200/80 font-bold hidden sm:inline">
                  Ahorro con Binance
                </span>
              </div>
              <h3 className="font-display font-black text-lg sm:text-xl text-slate-900 dark:text-white mt-1">
                ¿Pagas con Binance? ¡Tienes un SÚPER Descuento!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                Obtén un precio aún más rebajado al pagar tu suscripción a través de Binance. Consulta tu descuento especial al contratar.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/573009476271?text=${encodeURIComponent('¡Hola TvTotal24! Quiero consultar el SUPER descuento pagando con Binance.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-obsidian-950 font-black text-xs sm:text-sm uppercase tracking-wide hover:scale-105 transition-all shadow-[0_0_20px_rgba(245,158,11,0.35)]"
          >
            <Zap size={15} className="fill-obsidian-950 text-obsidian-950" />
            <span>Consultar Descuento Binance</span>
          </a>
        </motion.div>

        {/* 4 Plan Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
          {PRICING_PLANS.map((plan, idx) => {
            const isBestValue = plan.bestValue;
            const isPopular = plan.popular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 ${
                  isBestValue
                    ? 'glass-strong lg:-translate-y-3 shadow-xl dark:shadow-[0_0_50px_rgba(0,230,118,0.25)] border border-neon-electric/50'
                    : isPopular
                    ? 'glass border border-emerald-500/40 dark:border-neon-electric/40 shadow-lg dark:shadow-[0_0_30px_rgba(0,230,118,0.15)] hover:border-emerald-500/60 dark:hover:border-neon-electric/60'
                    : 'glass border border-slate-200 dark:border-white/10 hover:border-emerald-500/30 dark:hover:border-neon-electric/30'
                }`}
              >
                {/* Glow Border for 12-Month Best Value Plan */}
                {isBestValue && (
                  <div className="absolute -inset-[2px] rounded-[26px] bg-gradient-to-r from-neon-electric via-emerald-400 to-green-300 -z-10 animate-pulse-glow opacity-75" />
                )}

                {/* Top Badge */}
                {plan.badge && (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-black tracking-wider uppercase whitespace-nowrap shadow-lg ${
                      isBestValue
                        ? 'btn-neon-green border border-white/40 shadow-[0_0_20px_rgba(0,230,118,0.4)]'
                        : isPopular
                        ? 'bg-emerald-500 text-black font-bold shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                        : 'bg-slate-200 text-slate-800 dark:bg-obsidian-850 dark:text-slate-200 border border-slate-300 dark:border-white/15'
                    }`}
                  >
                    {isBestValue && <Crown size={12} className="inline mr-1 -mt-0.5 text-black" />}
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Plan Title & Devices Badge */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-white">
                        {plan.name}
                      </h3>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-neon-electric/15 text-emerald-700 dark:text-neon-electric border border-emerald-500/30 dark:border-neon-electric/30 flex items-center gap-1">
                        <Tv size={12} />
                        3 Pantallas
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {plan.billingSubtitle}
                    </span>
                  </div>

                  {/* Price Box */}
                  <div className="my-5 p-4 rounded-2xl bg-slate-100 dark:bg-obsidian-900/80 border border-slate-200 dark:border-white/10 text-center">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-2xl font-black text-slate-600 dark:text-slate-300">$</span>
                      <span className="text-4xl sm:text-5xl font-display font-black text-slate-900 dark:text-white tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase ml-1">
                        USD {plan.periodLabel}
                      </span>
                    </div>

                    {/* Binance Super Discount Callout Badge on Card */}
                    <div className="mt-3 py-1.5 px-2.5 rounded-xl bg-amber-400/10 border border-amber-400/30 text-[11px] font-bold text-amber-800 dark:text-amber-300 flex items-center justify-center gap-1.5">
                      <Zap size={13} className="text-amber-500 dark:text-amber-400 fill-amber-500 dark:fill-amber-400 shrink-0" />
                      <span>¡SUPER Descuento con Binance!</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 mb-8 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-neon-electric/20 text-emerald-600 dark:text-neon-electric flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={11} className="stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct WhatsApp Subscription Button */}
                <a
                  href={WHATSAPP_LINKS.plan(plan.durationMonths)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-md ${
                    isBestValue
                      ? 'btn-neon-green shadow-neon-glow hover:scale-105'
                      : 'bg-slate-900 text-white hover:bg-neon-electric hover:text-black dark:bg-white/10 dark:text-white dark:hover:bg-neon-electric dark:hover:text-black border border-transparent dark:border-white/15'
                  }`}
                >
                  <span>Contratar Plan</span>
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Guarantee Bar */}
        <div className="max-w-3xl mx-auto p-4 rounded-2xl glass border border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-700 dark:text-slate-300 text-center">
          <span className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-neon-electric" />
            Sin contratos de permanencia
          </span>
          <span className="flex items-center gap-2">
            <Tv size={16} className="text-neon-electric" />
            3 Pantallas en todos los planes
          </span>
          <span className="flex items-center gap-2">
            <Coins size={16} className="text-amber-500 dark:text-amber-400" />
            Aceptamos Binance, Cripto, Zelle y Bolívares
          </span>
        </div>
      </div>
    </section>
  );
}
