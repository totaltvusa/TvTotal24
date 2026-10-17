import { motion } from 'framer-motion';
import { Sparkles, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS } from '@/data';
import {
  WhatsAppIcon,
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
} from './SocialIcons';

const ICON_COMPONENTS = {
  WhatsApp: WhatsAppIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  Send: TelegramIcon,
  Telegram: TelegramIcon,
};

export default function SocialSection() {
  return (
    <section id="social" className="relative py-12 sm:py-16 bg-obsidian-950 border-t border-white/10 overflow-hidden">
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass border border-neon-emerald/30 text-xs font-bold tracking-widest text-neon-emerald uppercase mb-3">
            <Sparkles size={12} />
            Comunidad TvTotal24
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
            Únete y <span className="text-gradient">Síguenos</span>
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base">
            Entérate de nuevos canales, eventos deportivos en directo y promociones exclusivas.
          </p>
        </motion.div>

        {/* 4 Social Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
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
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="group relative rounded-2xl glass p-5 sm:p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 border border-white/10 hover:border-neon-emerald/40 hover:shadow-neon-glow"
              >
                {/* Ambient hover glow */}
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-white mb-3.5 transition-transform duration-300 group-hover:scale-110 shadow-lg"
                  style={{ backgroundColor: item.color }}
                >
                  <Icon size={26} />
                </div>

                <h3 className="font-display font-bold text-sm sm:text-base text-white flex items-center gap-1 group-hover:text-neon-emerald transition-colors">
                  {item.name}
                  <ExternalLink size={12} className="opacity-60" />
                </h3>

                <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 truncate max-w-full">
                  {item.handle}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
