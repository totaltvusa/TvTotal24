import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Onboarding from '@/components/Onboarding';
import EntertainmentFeatures from '@/components/EntertainmentFeatures';
import FreeDemo from '@/components/FreeDemo';
import Pricing from '@/components/Pricing';
import WhyChooseUs from '@/components/WhyChooseUs';
import Devices from '@/components/Devices';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import SocialSection from '@/components/SocialSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LegalPage from '@/components/LegalPage';
import { ThemeProvider } from '@/context/ThemeContext';
import { Analytics } from '@vercel/analytics/react';

type ViewMode = 'home' | 'legal';
type LegalSection = 'privacy' | 'terms' | 'dmca';

function AppContent() {
  const [view, setView] = useState<ViewMode>(() => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname;
      const h = window.location.hash;
      const s = window.location.search;
      if (p.startsWith('/legal') || h.startsWith('#/legal') || s.includes('page=legal')) {
        return 'legal';
      }
    }
    return 'home';
  });

  const [legalSection, setLegalSection] = useState<LegalSection>(() => {
    if (typeof window !== 'undefined') {
      const hashPart = window.location.hash.replace(/^#\/?(legal#?)?/, '');
      if (hashPart === 'terms' || hashPart === 'dmca' || hashPart === 'privacy') {
        return hashPart as LegalSection;
      }
    }
    return 'privacy';
  });

  useEffect(() => {
    const updateRoute = () => {
      const p = window.location.pathname;
      const h = window.location.hash;
      const s = window.location.search;
      if (p.startsWith('/legal') || h.startsWith('#/legal') || s.includes('page=legal')) {
        setView('legal');
        const hashPart = window.location.hash.replace(/^#\/?(legal#?)?/, '');
        if (hashPart === 'terms' || hashPart === 'dmca' || hashPart === 'privacy') {
          setLegalSection(hashPart as LegalSection);
        }
      } else {
        setView('home');
      }
    };

    window.addEventListener('popstate', updateRoute);
    window.addEventListener('hashchange', updateRoute);
    return () => {
      window.removeEventListener('popstate', updateRoute);
      window.removeEventListener('hashchange', updateRoute);
    };
  }, []);

  // Dismiss instant preloader smoothly once app mounts
  useEffect(() => {
    const preloader = document.getElementById('tvtotal24-preloader');
    if (preloader && !preloader.classList.contains('fade-out')) {
      const timer = setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
          if (preloader.parentNode) {
            preloader.parentNode.removeChild(preloader);
          }
        }, 550);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleNavigateLegal = (section: LegalSection) => {
    setLegalSection(section);
    setView('legal');
    window.history.pushState(null, '', `/legal#${section}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setView('home');
    window.history.pushState(null, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (view === 'legal') {
    return <LegalPage initialSection={legalSection} onNavigateHome={handleNavigateHome} />;
  }

  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-100 overflow-x-hidden font-sans transition-colors duration-300">
      <Header />
      <main>
        {/* 1. Hero con Carrusel Dinámico y Presentación */}
        <Hero />

        {/* 2. Onboarding / 3 Pasos Simples */}
        <Onboarding />

        {/* 3. Canales, Deportes, Películas y Series */}
        <EntertainmentFeatures />

        {/* 4. Prueba Gratis */}
        <FreeDemo />

        {/* 5. Planes de Suscripción */}
        <Pricing />

        {/* 6. Por qué Elegir TvTotal24 */}
        <WhyChooseUs />

        {/* 7. Compatibilidad de Dispositivos */}
        <Devices />

        {/* 8. Opiniones de Clientes */}
        <Testimonials />

        {/* 9. Preguntas Frecuentes */}
        <FAQ />

        {/* 10. Canales de Comunidad y Redes */}
        <SocialSection />
      </main>

      {/* 11. Pie de Página */}
      <Footer onNavigateLegal={handleNavigateLegal} />

      {/* Botón flotante directo a WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
      <Analytics />
    </ThemeProvider>
  );
}
