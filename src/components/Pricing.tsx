import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  Zap,
  Crown,
  Sparkles,
  ArrowRight,
  Tv,
  Flame,
  Table as TableIcon,
  ShieldCheck,
  TrendingDown,
  MessageCircle,
} from 'lucide-react';
import {
  PRICING_PLANS,
  WHATSAPP_LINKS,
  type ConnectionCount,
  type PricingPlan,
} from '@/data';

export default function Pricing() {
  const [showMatrixTable, setShowMatrixTable] = useState<boolean>(false);

  // Per-plan state for connections and adult content
  const [planStates, setPlanStates] = useState<
    Record<string, { connections: ConnectionCount; includeAdult: boolean }>
  >({
    '1month': { connections: 1, includeAdult: true },
    '3months': { connections: 1, includeAdult: false },
    '6months': { connections: 1, includeAdult: false },
    '12months': { connections: 1, includeAdult: false },
  });

  const getPlanState = (planId: string) => {
    return (
      planStates[planId] || {
        connections: 1 as ConnectionCount,
        includeAdult: planId === '1month',
      }
    );
  };

  const setConnectionsForPlan = (planId: string, count: ConnectionCount) => {
    setPlanStates((prev) => ({
      ...prev,
      [planId]: {
        ...getPlanState(planId),
        connections: count,
      },
    }));
  };

  const toggleAdultForPlan = (planId: string) => {
    setPlanStates((prev) => {
      const current = getPlanState(planId);
      return {
        ...prev,
        [planId]: {
          ...current,
          includeAdult: !current.includeAdult,
        },
      };
    });
  };

  const handleSubscribe = (plan: PricingPlan) => {
    const { connections: conns, includeAdult: adult } = getPlanState(plan.id);
    const basePrice = plan.prices[conns];
    const adultAddon = adult ? plan.adultPrice : 0;
    const finalPrice = basePrice + adultAddon;

    const whatsappUrl = WHATSAPP_LINKS.plan(plan.name, conns, adult, finalPrice);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="pricing" className="relative py-12 sm:py-16 bg-obsidian-950 overflow-hidden">
      {/* Dynamic ambient backlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-neon-electric/8 rounded-full blur-[190px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-emerald-600/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass border border-neon-electric/30 text-xs font-bold tracking-widest text-neon-electric uppercase mb-4">
            <Sparkles size={12} />
            Precios Claros · Sin Contratos
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Elige tu Plan en <span className="text-gradient">TvTotal24</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Selecciona la duración de tu suscripción y el número de pantallas simultáneas. Activación instantánea y soporte garantizado.
          </p>
        </motion.div>

        {/* Cable Savings & Comparison Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-10 p-4 sm:p-5 rounded-3xl glass-card border border-neon-electric/30 shadow-[0_0_30px_rgba(0,230,118,0.12)] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-neon-electric/15 border border-neon-electric/30 flex items-center justify-center shrink-0 text-neon-electric shadow-[0_0_15px_rgba(0,230,118,0.2)]">
              <Crown size={22} />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-neon-electric bg-neon-electric/10 px-2.5 py-0.5 rounded-full border border-neon-electric/25">
                  Ahorro Inteligente
                </span>
                <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                  Comparado con TV por Cable Tradicional
                </span>
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg text-white mt-1">
                Ahorra más de $1.200 al año frente a las facturas convencionales de cable
              </h3>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2">
            <div className="px-3.5 py-1.5 rounded-xl btn-neon-green text-xs font-black uppercase tracking-wide">
              Ahorra hasta 85%
            </div>
          </div>
        </motion.div>

        {/* 4 Plan Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
          {PRICING_PLANS.map((plan, idx) => {
            const isOneMonth = plan.id === '1month';
            const isBestValue = plan.bestValue;
            const isPopular = plan.popular;

            const planState = getPlanState(plan.id);
            const planConns = planState.connections;
            const planAdult = planState.includeAdult;

            const basePrice = plan.prices[planConns];
            const adultAddon = planAdult ? plan.adultPrice : 0;
            const finalPrice = basePrice + adultAddon;
            const perMonthVal = (finalPrice / plan.durationMonths).toFixed(2);

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 ${
                  isBestValue
                    ? 'glass-strong lg:-translate-y-3 shadow-[0_0_50px_rgba(0,230,118,0.25)] border border-neon-electric/50'
                    : isPopular
                    ? 'glass border border-neon-electric/40 shadow-[0_0_30px_rgba(0,230,118,0.15)] hover:border-neon-electric/60'
                    : 'glass border border-white/10 hover:border-neon-electric/30'
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
                        : 'bg-obsidian-850 text-slate-200 border border-white/15'
                    }`}
                  >
                    {isBestValue && <Crown size={12} className="inline mr-1 -mt-0.5 text-black" />}
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Plan Title & Connections Badge */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-extrabold text-xl text-white">
                        {plan.name}
                      </h3>
                      <span
                        className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                          isBestValue
                            ? 'bg-neon-electric/20 text-neon-electric border border-neon-electric/30'
                            : 'bg-white/10 text-slate-200'
                        }`}
                      >
                        {planConns} {planConns === 1 ? 'Pantalla' : 'Pantallas'}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-medium">
                      {plan.billingSubtitle}
                    </span>
                  </div>

                  {/* In-Card Interactive Controls */}
                  <div className="space-y-3 my-4 p-3 rounded-2xl bg-obsidian-900/80 border border-white/10">
                    {/* Connections Pill Tabs */}
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 mb-1.5 text-neon-electric">
                        <Tv size={11} />
                        Dispositivos Simultáneos
                      </div>
                      <div className="grid grid-cols-3 gap-1 bg-obsidian-950 p-1 rounded-xl border border-white/10">
                        {([1, 2, 3] as ConnectionCount[]).map((num) => {
                          const isSelected = planConns === num;
                          return (
                            <button
                              key={num}
                              type="button"
                              onClick={() => setConnectionsForPlan(plan.id, num)}
                              className={`py-1.5 rounded-lg text-xs font-black transition-all ${
                                isSelected
                                  ? 'bg-neon-electric text-black shadow-md'
                                  : 'text-slate-400 hover:text-white'
                              }`}
                            >
                              {num} {num === 1 ? 'Pantalla' : 'Pantallas'}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Adult Content Toggle */}
                    <div className="pt-2 border-t border-white/10">
                      {isOneMonth ? (
                        <div className="flex items-center justify-between text-xs py-1 text-slate-300">
                          <span className="flex items-center gap-1.5 font-medium">
                            <Flame size={13} className="text-neon-electric" />
                            Adultos (18+)
                          </span>
                          <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 text-neon-electric border border-emerald-500/30">
                            Gratis Incluido
                          </span>
                        </div>
                      ) : (
                        <label className="flex items-center justify-between text-xs py-1 cursor-pointer group">
                          <span className="flex items-center gap-1.5 font-medium text-slate-300 group-hover:text-white transition-colors">
                            <Flame
                              size={13}
                              className={planAdult ? 'text-neon-electric' : 'text-slate-500'}
                            />
                            Adultos (18+)
                            <span className="text-[10px] text-slate-400">
                              (+${plan.adultPrice} USD)
                            </span>
                          </span>
                          <input
                            type="checkbox"
                            checked={planAdult}
                            onChange={() => toggleAdultForPlan(plan.id)}
                            className="w-4 h-4 rounded text-neon-electric bg-obsidian-950 border-slate-600 focus:ring-neon-electric"
                          />
                        </label>
                      )}
                    </div>
                  </div>

                  {/* Price Tag */}
                  <div className="my-5 text-center">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-sm font-bold text-slate-400">$</span>
                      <span className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
                        {finalPrice}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        USD {plan.periodLabel}
                      </span>
                    </div>

                    {plan.durationMonths > 1 && (
                      <div className="text-xs text-neon-electric font-semibold mt-1">
                        Equivalente a ${perMonthVal} USD / mes
                      </div>
                    )}
                  </div>

                  {/* Action CTA Button */}
                  <button
                    onClick={() => handleSubscribe(plan)}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl btn-neon-green text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageCircle size={16} />
                    Contratar Plan
                    <ArrowRight size={15} />
                  </button>

                  {/* Features List */}
                  <ul className="mt-6 space-y-2.5 text-left border-t border-white/10 pt-5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <Check size={14} className="text-neon-electric shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Matrix Comparison Toggle Button */}
        <div className="text-center">
          <button
            onClick={() => setShowMatrixTable((prev) => !prev)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full glass border border-neon-electric/30 text-xs sm:text-sm font-bold text-slate-200 hover:text-white hover:border-neon-electric transition-all"
          >
            <TableIcon size={16} className="text-neon-electric" />
            {showMatrixTable ? 'Ocultar Tabla Comparativa' : 'Ver Tabla Completa de Precios por Pantallas'}
          </button>
        </div>

        {/* Matrix Comparison Table */}
        <AnimatePresence>
          {showMatrixTable && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-8 max-w-4xl mx-auto overflow-hidden"
            >
              <div className="glass-strong rounded-3xl p-6 border border-neon-electric/20 overflow-x-auto">
                <h4 className="font-display font-bold text-lg text-white mb-4 text-center">
                  Matriz de Precios y Conexiones Simultáneas
                </h4>
                <table className="w-full text-left text-xs sm:text-sm text-slate-200">
                  <thead>
                    <tr className="border-b border-white/10 text-neon-electric uppercase tracking-wider text-[11px]">
                      <th className="py-3 px-3">Plan</th>
                      <th className="py-3 px-3 text-center">1 Pantalla</th>
                      <th className="py-3 px-3 text-center">2 Pantallas</th>
                      <th className="py-3 px-3 text-center">3 Pantallas</th>
                      <th className="py-3 px-3 text-center">Adultos</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-medium">
                    <tr>
                      <td className="py-3 px-3 font-bold text-white">1 Mes</td>
                      <td className="py-3 px-3 text-center">$9 USD</td>
                      <td className="py-3 px-3 text-center">$12 USD</td>
                      <td className="py-3 px-3 text-center">$15 USD</td>
                      <td className="py-3 px-3 text-center text-neon-electric">Incluido Gratis</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-bold text-white">3 Meses</td>
                      <td className="py-3 px-3 text-center">$24 USD</td>
                      <td className="py-3 px-3 text-center">$30 USD</td>
                      <td className="py-3 px-3 text-center">$36 USD</td>
                      <td className="py-3 px-3 text-center text-slate-400">+$6 USD</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-bold text-white">6 Meses</td>
                      <td className="py-3 px-3 text-center">$48 USD</td>
                      <td className="py-3 px-3 text-center">$60 USD</td>
                      <td className="py-3 px-3 text-center">$72 USD</td>
                      <td className="py-3 px-3 text-center text-slate-400">+$12 USD</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-bold text-white">12 Meses</td>
                      <td className="py-3 px-3 text-center text-neon-electric font-bold">$90 USD</td>
                      <td className="py-3 px-3 text-center text-neon-electric font-bold">$105 USD</td>
                      <td className="py-3 px-3 text-center text-neon-electric font-bold">$120 USD</td>
                      <td className="py-3 px-3 text-center text-slate-400">+$20 USD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
