import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  CheckCircle2,
  Tv,
  MessageCircle,
} from 'lucide-react';
import { TRIAL_IMAGE } from '@/data';
import ContactModal from './ContactModal';

export default function FreeDemo() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="demo" className="relative py-12 sm:py-16 bg-obsidian-950 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[400px] bg-neon-electric/10 rounded-full blur-[170px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[400px] bg-emerald-600/10 rounded-full blur-[170px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl glass p-6 sm:p-10 lg:p-12 border border-neon-electric/25 shadow-[0_0_50px_rgba(0,230,118,0.12)] overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-neon-electric/15 to-transparent rounded-bl-full pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Visual Artwork */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 relative flex justify-center items-center"
              >
                <div className="relative w-full max-w-md lg:max-w-none rounded-2xl overflow-hidden glass p-2.5 sm:p-3 border border-neon-electric/20 shadow-2xl">
                  <div className="relative rounded-xl overflow-hidden aspect-[16/11] bg-obsidian-950 flex items-center justify-center">
                    <img
                      src={TRIAL_IMAGE}
                      alt="Demostración Gratis de TvTotal24"
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                      width="600"
                      height="412"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-black/20 pointer-events-none" />
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Demo Info & Actions */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-6 text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neon-electric/10 border border-neon-electric/30 text-xs font-bold text-neon-electric uppercase mb-4">
                  <Sparkles size={13} />
                  Prueba Antes de Comprar
                </div>

                <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                  Descubre la Calidad de TvTotal24 con una{' '}
                  <span className="text-gradient">Demo Gratis</span>
                </h2>

                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                  Prueba nuestra grilla de canales en vivo, películas de estreno, series y deportes en tu propio dispositivo antes de contratar. Te entregamos tus credenciales de prueba en minutos.
                </p>

                {/* Benefits Checklist */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2.5 text-sm text-slate-200 justify-center lg:justify-start">
                    <CheckCircle2 size={17} className="text-neon-electric shrink-0" />
                    <span>Sin necesidad de tarjeta de crédito ni compromiso</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-200 justify-center lg:justify-start">
                    <CheckCircle2 size={17} className="text-neon-electric shrink-0" />
                    <span>Acceso a deportes en vivo, cine y series</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-200 justify-center lg:justify-start">
                    <CheckCircle2 size={17} className="text-neon-electric shrink-0" />
                    <span>Compatible con Smart TV, Fire Stick, Android, iPhone y PC</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-200 justify-center lg:justify-start">
                    <CheckCircle2 size={17} className="text-neon-electric shrink-0" />
                    <span>Asistencia guiada de instalación paso a paso</span>
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start items-center">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full btn-neon-green text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300"
                  >
                    <MessageCircle size={18} />
                    Solicitar Demo Gratis
                  </button>

                  <a
                    href="#pricing"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full glass border border-neon-electric/25 text-slate-200 font-semibold text-sm hover:text-white hover:border-neon-electric/60 hover:bg-neon-electric/10 transition-all"
                  >
                    <Tv size={16} className="text-neon-electric" />
                    Ver Todos los Planes
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Solicitar Demo Gratis de TvTotal24"
        subtitle="Elige tu canal preferido (WhatsApp o Facebook Messenger) para recibir tus accesos de demostración sin costo."
      />
    </>
  );
}
