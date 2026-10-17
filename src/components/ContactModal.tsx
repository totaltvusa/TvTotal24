import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import { WHATSAPP_LINKS, MESSENGER_LINK } from '@/data';
import { WhatsAppIcon, MessengerIcon } from './SocialIcons';

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
};

export default function ContactModal({
  isOpen,
  onClose,
  title = 'Conéctate con TvTotal24',
  subtitle = 'Elige tu canal de mensajería preferido para recibir tu demo gratis o atención personalizada inmediata.',
}: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md rounded-3xl glass-strong border border-neon-electric/30 p-6 sm:p-8 shadow-2xl shadow-black/90 overflow-hidden"
          >
            {/* Ambient corner glow */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-neon-electric/15 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-colors"
              aria-label="Cerrar"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="mb-6 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-neon-electric/10 border border-neon-electric/25 text-[11px] font-bold text-neon-electric uppercase mb-2.5">
                <Sparkles size={11} />
                Atención Inmediata
              </div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                {subtitle}
              </p>
            </div>

            {/* Options: WhatsApp and Facebook Messenger */}
            <div className="space-y-3">
              {/* WhatsApp Option */}
              <a
                href={WHATSAPP_LINKS.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="group w-full flex items-center justify-between p-4 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-neon-electric/60 transition-all duration-300"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-neon-electric text-black flex items-center justify-center shadow-lg shadow-neon-electric/30 group-hover:scale-105 transition-transform">
                    <WhatsAppIcon size={24} />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-sm text-white flex items-center gap-1.5">
                      Chatear por WhatsApp
                      <span className="w-2 h-2 rounded-full bg-neon-electric animate-pulse" />
                    </div>
                    <div className="text-[11px] text-slate-300">
                      Respuesta rápida y activación al instante
                    </div>
                  </div>
                </div>
                <ArrowRight size={17} className="text-neon-electric group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Facebook Messenger Option */}
              <a
                href={MESSENGER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="group w-full flex items-center justify-between p-4 rounded-2xl bg-[#0084FF]/10 hover:bg-[#0084FF]/20 border border-[#0084FF]/30 hover:border-[#0084FF]/60 transition-all duration-300"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#0084FF] text-white flex items-center justify-center shadow-lg shadow-[#0084FF]/30 group-hover:scale-105 transition-transform">
                    <MessengerIcon size={24} />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-sm text-white">
                      Facebook Messenger
                    </div>
                    <div className="text-[11px] text-slate-300">
                      Atención vía chat de Facebook
                    </div>
                  </div>
                </div>
                <ArrowRight size={17} className="text-[#0084FF] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="mt-5 text-center text-[11px] text-slate-400">
              🔒 Soporte 100% seguro y confidencial disponible 24/7.
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
