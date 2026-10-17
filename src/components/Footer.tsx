import { useState } from 'react';
import { ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';
import {
  LOGO_URL,
  NAV_LINKS,
  WHATSAPP_LINKS,
  MESSENGER_LINK,
} from '@/data';
import { WhatsAppIcon, MessengerIcon, TelegramIcon, InstagramIcon } from './SocialIcons';
import ContactModal from './ContactModal';

interface FooterProps {
  onNavigateLegal?: (section: 'privacy' | 'terms' | 'dmca') => void;
}

export default function Footer({ onNavigateLegal }: FooterProps = {}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <footer className="relative bg-obsidian-950 pt-20 pb-12 border-t border-white/10 overflow-hidden">
        {/* Ambient background glow with green accent */}
        <div className="absolute inset-0 bg-radial-glow opacity-25 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
            {/* Brand & Mission (col-span-5) */}
            <div className="lg:col-span-5">
              <a href="#top" className="flex items-center gap-3 mb-5 group">
                <img
                  src={LOGO_URL}
                  alt="TvTotal24 Logo"
                  className="h-11 w-auto object-contain transition-transform group-hover:scale-105"
                />
                <span className="text-[10px] font-black tracking-widest text-neon-emerald bg-neon-emerald/10 px-2.5 py-1 rounded-full border border-neon-emerald/30 uppercase">
                  TV En Vivo · Cine · 4K UHD
                </span>
              </a>

              <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-6">
                TvTotal24 reúne miles de canales de televisión en vivo, los mejores eventos deportivos y miles de películas y series en Full HD y 4K UHD para toda la familia.
              </p>

              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-neon-emerald/30 shadow-[0_0_20px_rgba(0,230,118,0.15)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-emerald opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-emerald" />
                </span>
                <span className="text-xs font-bold text-slate-200">
                  ¡Servicio confiable y activo las 24 horas!
                </span>
              </div>
            </div>

            {/* Quick Navigation Links (col-span-3) */}
            <div className="lg:col-span-3">
              <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-5 flex items-center gap-2">
                <Sparkles size={14} className="text-neon-emerald" />
                Navegación Rápida
              </h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="text-xs text-neon-emerald opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">›</span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Verified Contact & Support (col-span-4) */}
            <div className="lg:col-span-4">
              <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-5 flex items-center gap-2">
                <ShieldCheck size={16} className="text-neon-emerald" />
                Atención y Soporte Directo
              </h4>
              <div className="space-y-3">
                {/* WhatsApp link */}
                <a
                  href={WHATSAPP_LINKS.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2.5 rounded-2xl glass border border-neon-emerald/30 text-sm font-semibold text-white hover:bg-neon-emerald/10 transition-all"
                >
                  <div className="w-8 h-8 rounded-xl bg-neon-emerald/20 flex items-center justify-center text-neon-emerald">
                    <WhatsAppIcon size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-medium">WhatsApp Oficial</div>
                    <div>Chatear por WhatsApp</div>
                  </div>
                </a>

                {/* Messenger link */}
                <a
                  href={MESSENGER_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2.5 rounded-2xl glass border border-[#0084FF]/30 text-sm font-semibold text-white hover:bg-[#0084FF]/10 transition-all"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#0084FF]/20 flex items-center justify-center text-[#0084FF]">
                    <MessengerIcon size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-medium">Facebook Messenger</div>
                    <div>Chatear en Messenger</div>
                  </div>
                </a>

                {/* Telegram link */}
                <a
                  href="https://telegram.me/TotalTvUSAbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2.5 rounded-2xl glass border border-[#229ED9]/30 text-sm font-semibold text-white hover:bg-[#229ED9]/10 transition-all"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#229ED9]/20 flex items-center justify-center text-[#229ED9]">
                    <TelegramIcon size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-medium">Telegram Bot</div>
                    <div>@TotalTvUSAbot</div>
                  </div>
                </a>

                {/* Instagram link */}
                <a
                  href="https://www.instagram.com/tvtotalusa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2.5 rounded-2xl glass border border-[#E4405F]/30 text-sm font-semibold text-white hover:bg-[#E4405F]/10 transition-all"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#E4405F]/20 flex items-center justify-center text-[#E4405F]">
                    <InstagramIcon size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-medium">Instagram</div>
                    <div>@tvtotalusa</div>
                  </div>
                </a>

                {/* Free demo badge trigger */}
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full text-center py-2.5 px-4 rounded-xl bg-neon-emerald/10 border border-neon-emerald/30 hover:border-neon-emerald/60 text-xs font-bold text-neon-emerald transition-all flex items-center justify-center gap-2 mt-1"
                >
                  <MessageCircle size={14} />
                  Solicitar Prueba Gratis de 24 Horas →
                </button>
              </div>
            </div>
          </div>

          {/* Divider line */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Legal & Copyright */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} TvTotal24. Todos los derechos reservados.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="/legal#privacy"
                onClick={(e) => {
                  if (onNavigateLegal) {
                    e.preventDefault();
                    onNavigateLegal('privacy');
                  }
                }}
                className="hover:text-neon-emerald transition-colors"
              >
                Política de Privacidad
              </a>
              <a
                href="/legal#terms"
                onClick={(e) => {
                  if (onNavigateLegal) {
                    e.preventDefault();
                    onNavigateLegal('terms');
                  }
                }}
                className="hover:text-neon-emerald transition-colors"
              >
                Términos y Condiciones
              </a>
              <a
                href="/legal#dmca"
                onClick={(e) => {
                  if (onNavigateLegal) {
                    e.preventDefault();
                    onNavigateLegal('dmca');
                  }
                }}
                className="hover:text-neon-emerald transition-colors"
              >
                Cumplimiento DMCA
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Dual option contact modal */}
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Solicitar Prueba Gratis"
        subtitle="Elige tu medio de contacto preferido para recibir tus credenciales de demostración por 24 horas."
      />
    </>
  );
}
