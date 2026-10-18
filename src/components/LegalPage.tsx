import { useState, useEffect } from 'react';
import {
  Shield,
  FileText,
  Copyright,
  ArrowLeft,
  Lock,
  AlertTriangle,
  CheckCircle2,
  Mail,
  Scale,
} from 'lucide-react';
import { LOGO_URL } from '@/data';
import ThemeToggle from './ThemeToggle';

type LegalSection = 'privacy' | 'terms' | 'dmca';

interface LegalPageProps {
  initialSection?: LegalSection;
  onNavigateHome: () => void;
}

export default function LegalPage({ initialSection = 'privacy', onNavigateHome }: LegalPageProps) {
  const [activeSection, setActiveSection] = useState<LegalSection>(initialSection);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as LegalSection;
    if (hash === 'privacy' || hash === 'terms' || hash === 'dmca') {
      setActiveSection(hash);
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const handleHashChange = () => {
      const currentHash = window.location.hash.replace('#', '') as LegalSection;
      if (currentHash === 'privacy' || currentHash === 'terms' || currentHash === 'dmca') {
        setActiveSection(currentHash);
        const element = document.getElementById(currentHash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const scrollToSection = (section: LegalSection) => {
    setActiveSection(section);
    window.location.hash = section;
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-100 selection:bg-neon-emerald/30 selection:text-white font-sans transition-colors duration-300">
      {/* Top sticky navigation bar */}
      <header className="sticky top-0 z-50 glass-strong border-b border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass border border-white/10 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white hover:border-neon-emerald/40 transition-all group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span>Volver al Inicio</span>
            </button>

            <div className="h-6 w-px bg-white/10 hidden sm:block" />

            <div onClick={onNavigateHome} className="cursor-pointer flex items-center gap-3">
              <img src={LOGO_URL} alt="TvTotal24" className="h-14 sm:h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(0,230,118,0.4)]" />
              <span className="hidden md:inline-block text-xs font-bold uppercase tracking-widest text-slate-400">
                Centro Legal
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </div>

        {/* Section Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-3 pt-1">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <button
              onClick={() => scrollToSection('privacy')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                activeSection === 'privacy'
                  ? 'bg-neon-emerald text-obsidian-950 shadow-[0_0_15px_rgba(0,230,118,0.35)]'
                  : 'glass text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              <Lock size={14} />
              Política de Privacidad
            </button>

            <button
              onClick={() => scrollToSection('terms')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                activeSection === 'terms'
                  ? 'bg-neon-emerald text-obsidian-950 shadow-[0_0_15px_rgba(0,230,118,0.35)]'
                  : 'glass text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              <FileText size={14} />
              Términos del Servicio
            </button>

            <button
              onClick={() => scrollToSection('dmca')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                activeSection === 'dmca'
                  ? 'bg-neon-emerald text-obsidian-950 shadow-[0_0_15px_rgba(0,230,118,0.35)]'
                  : 'glass text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              <Copyright size={14} />
              Cumplimiento DMCA
            </button>
          </div>
        </div>
      </header>

      {/* Main Legal Content Container */}
      <main className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-20">
        {/* Ambient backglow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-neon-emerald/5 rounded-full blur-[180px] pointer-events-none" />

        {/* ========================================================================= */}
        {/* 1. POLÍTICA DE PRIVACIDAD */}
        {/* ========================================================================= */}
        <section id="privacy" className="scroll-mt-36 space-y-8">
          <div className="border-b border-white/10 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-neon-emerald/30 text-xs font-bold text-neon-emerald uppercase mb-3">
              <Shield size={13} />
              Protección de Datos y Confidencialidad
            </div>
            <h1 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              Política de Privacidad
            </h1>
            <p className="text-sm text-slate-400 mt-2">
              Última actualización: 2026 · TvTotal24
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed">
            <div className="rounded-2xl glass p-6 border border-emerald-500/20 bg-emerald-500/5">
              <h3 className="font-bold text-white text-base flex items-center gap-2 mb-2">
                <CheckCircle2 size={18} className="text-emerald-400" />
                Nuestra Garantía Principal: Ninguna Venta o Transferencia de Datos Personales
              </h3>
              <p className="text-slate-300 text-sm">
                En TvTotal24, tu privacidad y confianza son lo más importante. Garantizamos estrictamente que <strong>ninguna información personal, números telefónicos de contacto, correos electrónicos o datos de mensajería compartidos por nuestros clientes será vendida, alquilada, cedida ni transferida a corredores de datos, terceros comercializadores o agencias publicitarias</strong>.
              </p>
            </div>

            <h3 className="font-display font-bold text-xl text-white pt-4">
              1. Información que Recopilamos
            </h3>
            <p>
              Cuando interactúas con TvTotal24 (por ejemplo al solicitar una prueba gratuita, suscribirte a un plan o solicitar soporte técnico), podemos recopilar únicamente la información indispensable para el servicio:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li><strong>Datos de Contacto:</strong> Número de teléfono de WhatsApp, usuario de Telegram o correo electrónico utilizado para la comunicación.</li>
              <li><strong>Detalles del Plan:</strong> Duración de la suscripción seleccionada (1, 3, 6 o 12 meses, todos con 3 pantallas simultáneas) e identificador de confirmación de pago.</li>
              <li><strong>Datos Técnicos de Diagnóstico:</strong> Modelo de dispositivo o aplicación reproductora utilizada (p. ej. Fire TV Stick, Smart TV, TiviMate, Android TV) con el único objetivo de orientarte durante la instalación.</li>
            </ul>

            <h3 className="font-display font-bold text-xl text-white pt-4">
              2. Cómo Utilizamos tu Información
            </h3>
            <p>
              Utilizamos y procesamos tus datos exclusivamente para los siguientes fines operativos y legítimos:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>Entrega de credenciales de acceso (usuario, contraseña, URL o enlace M3U) y tutoriales de instalación paso a paso.</li>
              <li>Brindar asistencia y soporte técnico personalizado 24/7.</li>
              <li><strong>Comunicaciones Importantes:</strong> Notificaciones sobre renovaciones de servicio, actualizaciones de listas de canales y alertas de transmisiones deportivas especiales.</li>
            </ul>

            <h3 className="font-display font-bold text-xl text-white pt-4">
              3. Seguridad y Almacenamiento
            </h3>
            <p>
              Aplicamos protocolos de seguridad estándar de la industria y medidas de protección administrativa para resguardar tus comunicaciones y metadatos de transacciones contra accesos no autorizados o alteraciones. No almacenamos datos sensibles de tarjetas de crédito o débito en nuestros servidores.
            </p>

            <h3 className="font-display font-bold text-xl text-white pt-4">
              4. Tus Derechos de Privacidad
            </h3>
            <p>
              Tienes el derecho de solicitar el acceso a los datos de contacto asociados a tu cuenta o la supresión de tu historial de mensajería al finalizar tu ciclo de suscripción. Para optar por no recibir notificaciones de renovación o promociones, solo indícalo a nuestro equipo de atención por WhatsApp.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* ========================================================================= */}
        {/* 2. TÉRMINOS Y CONDICIONES */}
        {/* ========================================================================= */}
        <section id="terms" className="scroll-mt-36 space-y-8">
          <div className="border-b border-white/10 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-neon-emerald/30 text-xs font-bold text-neon-emerald uppercase mb-3">
              <Scale size={13} />
              Acuerdo del Usuario y Condiciones de Servicio
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              Términos y Condiciones
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Por favor revisa cuidadosamente estos términos antes de utilizar los servicios de TvTotal24.
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed">
            {/* No Refunds Policy */}
            <div className="rounded-2xl glass p-6 border border-amber-500/30 bg-amber-500/5">
              <h3 className="font-bold text-white text-base flex items-center gap-2 mb-2">
                <AlertTriangle size={18} className="text-amber-400" />
                Política de No Reembolsos (Ventas Finales)
              </h3>
              <p className="text-slate-300 text-sm">
                TvTotal24 pone a disposición de todos los usuarios interesados una <strong>demostración de prueba gratuita</strong> previa a la compra para que puedan evaluar exhaustivamente la estabilidad, calidad de imagen, catálogo y compatibilidad con sus equipos. En consecuencia, <strong>todas las contrataciones y pagos de suscripción son definitivos, no reembolsables y no reversibles</strong> una vez emitidas las credenciales.
              </p>
            </div>

            <h3 className="font-display font-bold text-xl text-white pt-4">
              1. Restricciones de Proveedores de Internet y Regulaciones Externas
            </h3>
            <p>
              TvTotal24 no se hace responsable ni podrá ser considerada responsable si el acceso al servicio se ve temporalmente interrumpido, limitado o restringido por:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>Bloqueos técnicos, filtrado de DNS, estrangulamiento de ancho de banda o cortafuegos aplicados por tu proveedor de servicios de internet (ISP).</li>
              <li>Leyes, normativas o regulaciones de telecomunicaciones locales, regionales o nacionales aplicables en tu país o jurisdicción.</li>
              <li>Incidencias de enrutamiento internacional o saturación de enlaces troncales fuera de nuestro control.</li>
            </ul>

            <h3 className="font-display font-bold text-xl text-white pt-4">
              2. Conectividad, Buffering y Red Local del Usuario
            </h3>
            <p>
              Una reproducción fluida y sin pausas requiere de un ancho de banda estable provisto por tu empresa de internet. <strong>TvTotal24 no se responsabiliza por cortes de señal, buffering o congelamiento de imagen</strong> originados por:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>Saturación, pérdida de paquetes o enrutamiento inestable de la conexión de tu proveedor de internet local.</li>
              <li>Distancia al router WiFi, interferencias electromagnéticas o saturación de la red doméstica por múltiples descargas simultáneas.</li>
              <li>Rendimiento insuficiente, falta de memoria libre o recalentamiento del dispositivo físico utilizado por el usuario.</li>
            </ul>

            <h3 className="font-display font-bold text-xl text-white pt-4">
              3. Control Parental y Contenido para Adultos
            </h3>
            <p>
              TvTotal24 incluye acceso a una amplia parrilla de entretenimiento global, que opcionalmente puede contener categorías para adultos (+18). <strong>TvTotal24 no administra de forma remota los controles parentales en los hogares</strong>.
            </p>
            <p>
              Las aplicaciones compatibles disponen de sistemas integrados de bloqueo mediante código PIN. <strong>Es responsabilidad exclusiva del cliente activar y configurar las contraseñas de control parental</strong> para restringir el acceso a menores de edad en sus dispositivos.
            </p>

            <h3 className="font-display font-bold text-xl text-white pt-4">
              4. Dispositivos del Cliente y Aplicaciones de Terceros
            </h3>
            <p>
              TvTotal24 no asume responsabilidad por el funcionamiento, integridad del sistema operativo, fallas eléctricas o actualizaciones de software de los dispositivos físicos de terceros (Smart TVs, Amazon Firesticks, TV Boxes, computadoras o teléfonos móviles) en los cuales el cliente decida ejecutar las aplicaciones de reproducción.
            </p>

            <h3 className="font-display font-bold text-xl text-white pt-4">
              5. Dispositivos Simultáneos
            </h3>
            <p>
              Todos los planes de suscripción de TvTotal24 te autorizan a reproducir contenido de forma simultánea en hasta 3 pantallas o dispositivos conectados. El intento de transmitir en más de 3 pantallas al mismo tiempo resultará en el cierre automático de la conexión excedente por parte de la plataforma.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* ========================================================================= */}
        {/* 3. CUMPLIMIENTO DMCA */}
        {/* ========================================================================= */}
        <section id="dmca" className="scroll-mt-36 space-y-8">
          <div className="border-b border-white/10 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-neon-emerald/30 text-xs font-bold text-neon-emerald uppercase mb-3">
              <Copyright size={13} />
              Propiedad Intelectual y Notificaciones
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              Aviso de Cumplimiento DMCA
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Declaración de Cumplimiento conforme a 17 U.S.C. § 512 (Digital Millennium Copyright Act)
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              TvTotal24 respeta los derechos de propiedad intelectual y cumple con las disposiciones de la <strong>17 U.S.C. § 512</strong> y la <strong>Digital Millennium Copyright Act (DMCA)</strong>. Es nuestra política atender con prontitud y diligencia cualquier notificación formal de presunta infracción de derechos de autor y tomar las medidas oportunas conforme a la legislación aplicable.
            </p>

            {/* Non-Hosting Disclaimer Card */}
            <div className="rounded-2xl glass p-6 border border-neon-emerald/30 bg-neon-emerald/5">
              <h3 className="font-display font-bold text-white text-lg flex items-center gap-2 mb-2">
                <Shield size={20} className="text-neon-emerald" />
                Descargo de No Alojamiento de Contenidos
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                <strong>TvTotal24 no aloja, almacena, sube ni retransmite de forma directa archivos de video o medios audiovisuales protegidos en sus propios servidores.</strong> El sitio web de TvTotal24 actúa únicamente como proveedor de soporte técnico, orientador de configuración para dispositivos multimedia del cliente y facilitador de acceso al servicio.
              </p>
            </div>

            <h3 className="font-display font-bold text-xl text-white pt-4">
              Requisitos para una Notificación Formal de Retiro
            </h3>
            <p>
              Si eres titular de derechos de autor o un representante legal debidamente autorizado, y consideras que algún contenido referenciado o enlazado a través de nuestra plataforma vulnera tus derechos, puedes remitir una notificación formal por escrito que contenga:
            </p>

            <ol className="list-decimal pl-6 space-y-2 text-slate-300">
              <li>
                <strong>Identificación de la obra protegida:</strong> Descripción clara y detallada de la obra o listado representativo de obras cuyos derechos se alegan infringidos.
              </li>
              <li>
                <strong>Identificación del material denunciado:</strong> Enlace exacto, URL o referencia técnica suficiente para localizar la presunta infracción.
              </li>
              <li>
                <strong>Datos de contacto del remitente:</strong> Nombre legal completo, dirección postal, número de teléfono y correo electrónico corporativo oficial.
              </li>
              <li>
                <strong>Declaración de buena fe:</strong> Manifestación expresa de que el uso del material no cuenta con la debida autorización del titular, su agente o la ley.
              </li>
              <li>
                <strong>Declaración de veracidad bajo pena de perjurio:</strong> Confirmación de que la información provista es exacta y que cuentas con plena personería para actuar en nombre del titular de los derechos.
              </li>
              <li>
                <strong>Firma física o electrónica:</strong> Firma del representante legal o titular facultado.
              </li>
            </ol>

            <div className="rounded-2xl glass p-6 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-neon-emerald/15 text-neon-emerald flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Correo del Agente DMCA Designado</div>
                  <div className="text-sm sm:text-base font-bold text-white">totaltvusa@gmail.com</div>
                </div>
              </div>

              <a
                href="mailto:totaltvusa@gmail.com?subject=Notificacion%20DMCA%20TvTotal24"
                className="px-5 py-2.5 rounded-xl bg-neon-emerald text-obsidian-950 text-xs sm:text-sm font-black shadow-lg hover:scale-105 transition-transform"
              >
                Enviar Notificación DMCA
              </a>
            </div>
          </div>
        </section>

        {/* Back to top & Home button */}
        <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} TvTotal24. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-white transition-colors"
            >
              ↑ Volver arriba
            </button>
            <span>·</span>
            <button
              onClick={onNavigateHome}
              className="text-neon-emerald hover:underline font-bold"
            >
              Volver a la Página Principal
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
