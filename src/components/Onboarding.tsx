import { motion } from 'framer-motion';
import { CreditCard, KeyRound, Rocket, Sparkles } from 'lucide-react';
import { REMOTE_IMAGE } from '@/data';

const SETUP_STEPS = [
  {
    icon: CreditCard,
    step: '01',
    title: 'Elige tu Plan',
    description:
      'Selecciona el tiempo que deseas (1, 3, 6 o 12 meses) y el número de pantallas para tu familia sin contratos ni compromisos.',
  },
  {
    icon: KeyRound,
    step: '02',
    title: 'Activa en Minutos',
    description:
      'Recibe tus credenciales instantáneamente por WhatsApp junto a nuestra guía sencilla y soporte paso a paso.',
  },
  {
    icon: Rocket,
    step: '03',
    title: '¡Disfruta 24/7!',
    description:
      'Abre la aplicación en tu Smart TV, Fire Stick, teléfono o computadora y comienza a disfrutar del mejor entretenimiento sin límites.',
  },
];

export default function Onboarding() {
  return (
    <section id="onboarding" className="relative py-12 sm:py-16 bg-obsidian-950 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-neon-electric/8 rounded-full blur-[170px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass border border-neon-electric/30 text-xs font-bold tracking-widest text-neon-electric uppercase mb-4">
            <Sparkles size={12} />
            Activación Fácil y Rápida
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Comienza a Disfrutar en <span className="text-gradient">3 Simples Pasos</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Sin visitas técnicas ni instalaciones complicadas. Todo listo en menos de 5 minutos.
          </p>
        </motion.div>

        {/* 3-Step Setup Cards & Remote Visual */}
        <div className="relative rounded-3xl glass p-6 sm:p-10 lg:p-12 border border-neon-electric/15 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-electric/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center">
            {/* Setup Steps */}
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 relative">
                {SETUP_STEPS.map((step) => {
                  const StepIcon = step.icon;
                  return (
                    <div
                      key={step.step}
                      className="relative rounded-2xl glass-strong p-6 border border-white/10 hover:border-neon-electric/40 transition-colors flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <div className="w-12 h-12 rounded-xl bg-neon-electric/10 border border-neon-electric/30 flex items-center justify-center text-neon-electric shadow-sm">
                            <StepIcon size={22} />
                          </div>
                          <span className="font-display font-black text-3xl text-white/20">
                            {step.step}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-lg text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Remote image visual */}
            <div className="lg:col-span-4 relative flex justify-center items-center">
              <div className="relative w-full max-w-xs rounded-2xl overflow-hidden glass p-2 border border-neon-electric/20 shadow-2xl">
                <img
                  src={REMOTE_IMAGE}
                  alt="Control Remoto y Configuración de TvTotal24"
                  className="w-full h-auto object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  width="300"
                  height="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
