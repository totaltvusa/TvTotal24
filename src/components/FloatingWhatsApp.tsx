import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_LINKS } from '@/data';
import { WhatsAppIcon } from './SocialIcons';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Floating Popup Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="mb-3 w-80 rounded-2xl glass-strong border border-neon-electric/30 p-4 shadow-2xl shadow-black/80 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-neon-electric text-black flex items-center justify-center font-bold shadow-md shadow-neon-electric/30">
                  <WhatsAppIcon size={20} />
                </div>
                <div>
                  <div className="font-bold text-xs text-white flex items-center gap-1.5">
                    TvTotal24 Soporte
                    <span className="w-2 h-2 rounded-full bg-neon-electric animate-pulse" />
                  </div>
                  <div className="text-[10px] text-neon-electric font-medium">En línea ahora · 24/7</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Cerrar ventana"
              >
                <X size={16} />
              </button>
            </div>

            {/* Body Message */}
            <div className="py-3 text-xs text-slate-200 leading-relaxed">
              👋 ¡Hola! ¿Deseas probar nuestra <strong>demo gratis</strong> o necesitas ayuda con la activación de tu plan?
            </div>

            {/* Action CTA */}
            <a
              href={WHATSAPP_LINKS.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl btn-neon-green text-xs font-bold transition-all shadow-md"
            >
              <WhatsAppIcon size={16} />
              Chatear con un Asesor
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-14 h-14 rounded-full bg-neon-electric text-black flex items-center justify-center shadow-2xl shadow-neon-electric/40 border-2 border-white/40 hover:shadow-neon-electric/70 transition-all duration-300"
        aria-label="Atención por WhatsApp"
      >
        {isOpen ? <X size={26} /> : <MessageCircle size={28} className="fill-black" />}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300 border-2 border-black"></span>
        </span>
      </motion.button>
    </div>
  );
}
