import { motion } from 'framer-motion';
import { Sparkles, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS } from '@/data';
import {
  WhatsAppIcon,
  InstagramIcon,
  TelegramIcon,
} from './SocialIcons';

const ICON_COMPONENTS = {
  WhatsApp: WhatsAppIcon,
  Instagram: InstagramIcon,
  Send: TelegramIcon,
  Telegram: TelegramIcon,
};

export default function SocialSection() {
  return (
    <section id="social" className="relative py-14 sm:py-20 bg-transparent dark:bg-obsidian-950 border-t border-slate-200 dark:border-white/10 overflow-hidden">
      {/* Subtle backglow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-neon-emerald/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass border border-slate-200 dark:border-neon-emerald/30 text-xs font-bold tracking-widest text-emerald-600 dark:text-neon-emerald uppercase mb-3">
            <Sparkles size={12} />
            Comunidad TvTotal24
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white tracking-tight">
            Únete y <span className="text-gradient">Síguenos</span>
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Conéctate directamente con nosotros para solicitar tu prueba gratis, activar tu plan y conocer los últimos estrenos.
          </p>
        </motion.div>

        {/* 3 Social Cards Grid (WhatsApp, Instagram, Telegram) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {SOCIAL_LINKS.map((item, idx) => {
            const Icon = ICON_COMPONENTS[item.icon as keyof typeof ICON_COMPONENTS] || WhatsAppIcon;
            return (
              <motion.a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="group relative rounded-3xl glass p-6 sm:p-7 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 border border-slate-200 dark:border-white/10 hover:border-emerald-500/50 dark:hover:border-neon-emerald/50 hover:shadow-neon-glow shadow-sm"
              >
                {/* Ambient hover glow */}
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-white mb-4 transition-transform duration-300 group-hover:scale-110 shadow-lg"
                  style={{ backgroundColor: item.color }}
                >
                  <Icon size={30} />
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white flex items-center gap-1.5 group-hover:text-emerald-600 dark:group-hover:text-neon-emerald transition-colors">
                  {item.name}
                  <ExternalLink size={13} className="opacity-60" />
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 font-medium truncate max-w-full">
                  {item.handle}
                </p>

                <span className="mt-3 text-[11px] font-bold text-emerald-600 dark:text-neon-emerald uppercase tracking-wider group-hover:underline">
                  Conectar ahora →
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
