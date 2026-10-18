import { motion } from 'framer-motion';
import { WHATSAPP_LINKS } from '@/data';
import { WhatsAppIcon } from './SocialIcons';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Floating Pill Label */}
      <motion.a
        href={WHATSAPP_LINKS.general}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-emerald-500/40 dark:border-neon-electric/40 text-xs font-bold text-slate-800 dark:text-white shadow-2xl hover:border-emerald-500 dark:hover:border-neon-electric hover:shadow-neon-glow transition-all backdrop-blur-xl group"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-neon-electric animate-pulse" />
        <span className="group-hover:text-emerald-600 dark:group-hover:text-neon-electric transition-colors">¿Dudas? Chatea con nosotros</span>
      </motion.a>

      {/* Floating WhatsApp Action Button */}
      <motion.a
        href={WHATSAPP_LINKS.general}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.94 }}
        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#00c853] to-[#00e676] text-obsidian-950 flex items-center justify-center shadow-2xl shadow-neon-electric/50 border-2 border-white/50 hover:shadow-neon-glow transition-all duration-300"
        aria-label="Chatea con nosotros por WhatsApp"
        title="Chatea con nosotros por WhatsApp"
      >
        <WhatsAppIcon size={32} className="text-obsidian-950" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-electric opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-obsidian-950"></span>
        </span>
      </motion.a>
    </div>
  );
}
