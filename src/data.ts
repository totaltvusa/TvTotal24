export const LOGO_URL = '/images/logo-transparent.png';
export const LOGO_ORIGINAL = '/images/logo.png';
export const HERO_IMAGE = '/images/hero.webp';
export const SPORTS_IMAGE = '/images/sports.webp';
export const MOVIES_IMAGE = '/images/movies.webp';
export const SERIES_IMAGE = '/images/couple.webp';
export const NEWS_IMAGE = '/images/news.webp';
export const FAMILY_IMAGE = '/images/family.webp';
export const REMOTE_IMAGE = '/images/remote.webp';
export const TRIAL_IMAGE = '/images/trial.webp';

export const NAV_LINKS = [
  { label: 'Inicio', href: '#top' },
  { label: 'Entretenimiento', href: '#features' },
  { label: 'Demo Gratis', href: '#demo' },
  { label: 'Planes y Precios', href: '#pricing' },
  { label: 'Beneficios', href: '#why-us' },
  { label: 'Dispositivos', href: '#devices' },
  { label: 'Preguntas Frecuentes', href: '#faq' },
];

export const WHATSAPP_NUMBER = '13059861096';

export const WHATSAPP_LINKS = {
  general: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('¡Hola TvTotal24! Deseo más información y soporte sobre el servicio.')}`,
  demo: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('¡Hola TvTotal24! Me gustaría solicitar una demo gratis sin compromiso.')}`,
  raw: `https://wa.me/${WHATSAPP_NUMBER}`,
  plan: (planName: string, conns: number, adult: boolean, price: number) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      `¡Hola TvTotal24! Quiero activar el ${planName} (${conns} ${conns === 1 ? 'pantalla' : 'pantallas'}${adult ? ', con contenido adulto' : ''}) por $${price} USD. ¿Cuáles son los métodos de pago?`
    )}`,
} as const;

export const PHONE_DISPLAY = '+1 (305) 986-1096';
export const PHONE_TEL = 'tel:+13059861096';
export const MESSENGER_LINK = 'https://m.me/TotalTv2025';

export const SOCIAL_LINKS = [
  {
    name: 'WhatsApp',
    url: `https://wa.me/${WHATSAPP_NUMBER}`,
    handle: '+1 (305) 986-1096',
    icon: 'WhatsApp',
    color: '#00E676',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/TotalTv2025/',
    handle: '@TotalTv2025',
    icon: 'Facebook',
    color: '#1877F2',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/tvtotalusa/',
    handle: '@tvtotalusa',
    icon: 'Instagram',
    color: '#E4405F',
  },
  {
    name: 'Telegram',
    url: 'https://telegram.me/TotalTvUSAbot',
    handle: '@TotalTvUSAbot',
    icon: 'Send',
    color: '#229ED9',
  },
];

export type ConnectionCount = 1 | 2 | 3;

export type PricingPlan = {
  id: string;
  name: string;
  durationMonths: number;
  periodLabel: string;
  billingSubtitle: string;
  badge?: string;
  popular?: boolean;
  bestValue?: boolean;
  savingsBadge?: string;
  prices: Record<ConnectionCount, number>;
  adultPrice: number;
  features: string[];
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: '1month',
    name: 'Plan 1 Mes',
    durationMonths: 1,
    periodLabel: '/mes',
    billingSubtitle: 'Facturación mensual flexible',
    badge: 'Flexibilidad Total',
    popular: false,
    bestValue: false,
    prices: {
      1: 9,
      2: 12,
      3: 15,
    },
    adultPrice: 0, // Incluido gratis en 1 mes
    features: [
      'Más de 1.500 canales prémium en vivo',
      'Eventos deportivos en directo Full HD / 4K',
      'Miles de películas y series on-demand (VOD)',
      'Contenido para adultos (opcional con PIN parental)',
      'Guía electrónica interactiva de programación (EPG)',
      'Servidores ultra estables con 99.9% uptime',
      'Activación instantánea en tus dispositivos',
    ],
  },
  {
    id: '3months',
    name: 'Plan 3 Meses',
    durationMonths: 3,
    periodLabel: '/trimestre',
    billingSubtitle: 'Facturación cada 3 meses',
    badge: 'El Más Popular',
    popular: true,
    bestValue: false,
    savingsBadge: 'Ahorra $3/mes',
    prices: {
      1: 24, // $8/mo
      2: 30, // $10/mo
      3: 36, // $12/mo
    },
    adultPrice: 6,
    features: [
      'Todos los beneficios del Plan Mensual',
      'Acceso ininterrumpido durante 90 días',
      'Canales deportivos prémium sin restricciones',
      'Biblioteca VOD completa con estrenos semanales',
      'Soporte técnico prioritario 24/7 vía WhatsApp',
      'Compatible con Smart TV, Fire Stick, Android y iOS',
      'Sin contratos obligatorios ni penalizaciones',
    ],
  },
  {
    id: '6months',
    name: 'Plan 6 Meses',
    durationMonths: 6,
    periodLabel: '/semestre',
    billingSubtitle: 'Facturación semestral',
    badge: 'Gran Ahorro',
    popular: false,
    bestValue: false,
    savingsBadge: 'Ahorra hasta $18',
    prices: {
      1: 48, // $8/mo
      2: 60, // $10/mo
      3: 72, // $12/mo
    },
    adultPrice: 12,
    features: [
      'Todos los canales prémium internacionales',
      'Transmisiones deportivas de alta velocidad 60 FPS',
      'Catálogo VOD ilimitado con actualizaciones automáticas',
      'Contenido infantil, noticias, música y cultura',
      'Atención y soporte personalizado preferencial',
      'Reconexión automática ante fallos de internet',
      'Garantía de servicio garantizada durante todo el ciclo',
    ],
  },
  {
    id: '12months',
    name: 'Plan 12 Meses',
    durationMonths: 12,
    periodLabel: '/año',
    billingSubtitle: 'Facturación anual · Máximo valor',
    badge: 'Mejor Opción Económica',
    popular: false,
    bestValue: true,
    savingsBadge: 'Mejor Precio Garantizado',
    prices: {
      1: 90,  // $7.50/mo
      2: 105, // $8.75/mo
      3: 120, // $10/mo
    },
    adultPrice: 20,
    features: [
      'Acceso completo durante un año entero (365 días)',
      'Máxima prioridad en servidores dedicados',
      'Todas las ligas de fútbol, UFC, NBA, MLB y F1 en vivo',
      'Estrenos de cine antes de que lleguen a otras plataformas',
      'Control parental personalizable con PIN seguro',
      'Soporte VIP inmediato vía WhatsApp exclusivo',
      'El mayor ahorro del año con precio congelado',
    ],
  },
];

export const ONBOARDING_STEPS = [
  {
    number: '01',
    title: 'Elige tu Plan',
    description: 'Selecciona la duración que prefieras y el número de pantallas simultáneas para tu hogar.',
    icon: 'Package',
  },
  {
    number: '02',
    title: 'Recibe tus Credenciales',
    description: 'En cuestión de minutos te enviamos tu usuario, contraseña y la guía paso a paso vía WhatsApp.',
    icon: 'Key',
  },
  {
    number: '03',
    title: '¡Comienza a Disfrutar!',
    description: 'Descarga la app en tu Smart TV, Fire Stick, celular o tablet y disfruta de la mejor televisión 24/7.',
    icon: 'Play',
  },
];

export type Feature = {
  icon: string;
  title: string;
  description: string;
  tag: string;
};

export const CORE_FEATURES: Feature[] = [
  {
    icon: 'Film',
    title: 'Todas las Plataformas en un Solo Lugar',
    description: 'Películas, series completas y estrenos originales de las principales plataformas del mundo unificados en una sola suscripción.',
    tag: 'TODO EN UNO',
  },
  {
    icon: 'Trophy',
    title: 'Deportes en Vivo y Eventos Mundiales',
    description: 'Transmisión de las mejores ligas de fútbol, NFL, NBA, MLB, artes marciales mixtas, boxeo y Fórmula 1 en Full HD y 4K.',
    tag: 'EVENTOS EN DIRECTO',
  },
  {
    icon: 'Tv',
    title: 'Calidad Digital Full HD y 4K UHD',
    description: 'Imagen ultranítida sin cortes gracias a servidores de alta capacidad con tasa de refresco a 60 cuadros por segundo.',
    tag: 'CALIDAD HD Y 4K',
  },
  {
    icon: 'Layers',
    title: 'Biblioteca VOD en Constante Actualización',
    description: 'Miles de películas y temporadas completas de series actualizadas permanentemente con audio latino original y subtítulos.',
    tag: 'ESTRENOS SEMANALES',
  },
  {
    icon: 'Smartphone',
    title: 'Compatibilidad Total Multidispositivo',
    description: 'Disfruta en Smart TV (Samsung, LG, Sony), Amazon Fire TV Stick, TV Box, celulares Android, iPhone, iPad y PC.',
    tag: 'MULTIDISPOSITIVO',
  },
  {
    icon: 'Bot',
    title: 'Soporte y Asistencia 24/7 en Español',
    description: 'Respuestas inmediatas por WhatsApp para resolver dudas de instalación, activación y soporte en cualquier momento.',
    tag: 'ATENCIÓN CONTINUA',
  },
];

export type CarouselSlide = {
  id: string;
  category: string;
  title: string;
  badge: string;
  description: string;
  image: string;
  highlights: string[];
  platforms: string[];
};

export const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: 'sports',
    category: 'Deportes y Competiciones en Vivo',
    title: 'La Emoción del Deporte en Directo las 24 Horas',
    badge: 'DEPORTES EN HD Y 4K',
    description: 'Sigue todas las ligas internacionales, torneos de fútbol, noches de combate y las grandes ligas americanas en tu pantalla favorita.',
    image: SPORTS_IMAGE,
    highlights: [
      'Champions League, Copa Libertadores y Ligas Europeas',
      'NFL, NBA Basketball, MLB Béisbol y Fórmula 1',
      'Combates Estelares de UFC, Boxeo y PPV Exclusivos',
      'Transmisiones de Alta Velocidad a 60 FPS sin retraso',
    ],
    platforms: ['ESPN', 'Fox Sports', 'DAZN', 'Directv Sports', 'TUDN'],
  },
  {
    id: 'movies',
    category: 'Cine y Estrenos Mundiales',
    title: 'Los Grandes Éxitos de Cartelera en Casa',
    badge: 'CINE EN 4K Y FHD',
    description: 'Estrenos recién salidos del cine, clásicos inolvidables, sagas completas y producciones galardonadas sin pagar suscripciones adicionales.',
    image: MOVIES_IMAGE,
    highlights: [
      'Nuevos estrenos agregados permanentemente',
      'Producciones seleccionadas en auténtico 4K Ultra HD',
      'Audio original en español latino y subtítulos sincronizados',
      'Buscador rápido por género, año y actores',
    ],
    platforms: ['HBO', 'Disney+', 'Netflix', 'Amazon Prime', 'Paramount+'],
  },
  {
    id: 'series',
    category: 'Series Completas y Maratones',
    title: 'Tus Series Favoritas de Principio a Fin',
    badge: 'TEMPORADAS COMPLETAS',
    description: 'Explora temporadas completas, dramas aclamados, comedias y miniseries exclusivas organizadas por episodios para tus maratones.',
    image: SERIES_IMAGE,
    highlights: [
      'Temporadas completas disponibles sin esperas',
      'Capítulos nuevos sincronizados con las emisiones mundiales',
      'Reproducción continua y guardado de progreso',
      'Calidad Full HD con sonido envolvente de cine',
    ],
    platforms: ['Apple TV+', 'Max', 'Hulu', 'Star+', 'Universal'],
  },
  {
    id: 'livetv',
    category: 'Canales en Vivo de Todo el Mundo',
    title: 'Más de 1.500 Canales Internacionales en Vivo',
    badge: 'TELEVISIÓN EN VIVO 24/7',
    description: 'Accede a la mejor televisión de Estados Unidos, América Latina y Europa con señal estable y guía de programación en pantalla.',
    image: NEWS_IMAGE,
    highlights: [
      'Canales de noticias, entretenimiento y cultura',
      'Señales locales y nacionales de toda Latinoamérica',
      'Guía electrónica interactiva de horarios (EPG)',
      'Tecnología anti-buffering de máxima estabilidad',
    ],
    platforms: ['CNN', 'Telemundo', 'Univision', 'Discovery', 'National Geographic'],
  },
  {
    id: 'family',
    category: 'Entretenimiento Familiar e Infantil',
    title: 'Diversión Segura para Toda la Familia',
    badge: 'ZONA INFANTIL Y FAMILIAR',
    description: 'Contenido educativo, dibujos animados, cine infantil y control parental con PIN para cuidar la experiencia de tus hijos.',
    image: FAMILY_IMAGE,
    highlights: [
      'Canales infantiles las 24 horas del día',
      'Películas animadas clásicas y contemporáneas',
      'Control parental protegido por código PIN',
      'Diversión educativa para todas las edades',
    ],
    platforms: ['Cartoon Network', 'Disney Junior', 'Nickelodeon', 'BabyTV', 'Discovery Kids'],
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Servidores de Alta Capacidad',
    description: 'Infraestructura de transmisión ultra rápida con tecnología anti-buffering que previene congelamientos y cortes durante eventos de alta audiencia.',
    icon: 'Zap',
  },
  {
    title: 'Guía EPG Interactiva',
    description: 'Consulta los horarios de tus programas, eventos y partidos en vivo con nuestra guía electrónica de programación en pantalla.',
    icon: 'Calendar',
  },
  {
    title: 'Soporte 24/7 en Español',
    description: 'Atención personalizada en español a través de WhatsApp. Te asistimos en la instalación, configuración y resolución de cualquier duda.',
    icon: 'Headphones',
  },
  {
    title: 'Sin Contratos ni Letras Chicas',
    description: 'Pagas únicamente por el período que decides utilizar. Sin penalizaciones por cancelación ni cargos ocultos.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Múltiples Pantallas Simultáneas',
    description: 'Disfruta de diferentes contenidos al mismo tiempo en la sala, recámara o en tu celular con hasta 3 conexiones simultáneas.',
    icon: 'Tv',
  },
  {
    title: 'Compatibilidad Universal',
    description: 'Instala fácilmente en Smart TVs Samsung, LG, Android TV, Fire TV Stick, Chromecast, Roku, celulares, tablets y PC.',
    icon: 'Smartphone',
  },
];

export type DeviceCategory = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  badge: string;
  description: string;
  examples: string[];
  popularApps: string[];
};

export const DEVICE_CATEGORIES: DeviceCategory[] = [
  {
    id: 'tvs',
    title: 'Smart TVs',
    subtitle: 'Reproducción Directa',
    icon: 'Tv',
    badge: 'Sin Cables Extra',
    description: 'Disfruta directamente en tu televisor inteligente sin necesidad de cables ni cajas adicionales.',
    examples: [
      'Samsung Smart TV (Tizen OS)',
      'LG Smart TV (webOS)',
      'Android TV & Google TV',
      'Sony, TCL, Hisense, Xiaomi y Philips',
      'Roku TV integrado',
    ],
    popularApps: ['IPTV Smarters Pro', 'IBO Player', 'SET IPTV', 'Nanomid Player'],
  },
  {
    id: 'boxes',
    title: 'TV Boxes y Sticks',
    subtitle: 'Conectar y Reproducir',
    icon: 'Flame',
    badge: 'Máximo Rendimiento 4K',
    description: 'Dispositivos portátiles de alta velocidad para reproducir en 4K UHD con fluidez total.',
    examples: [
      'Amazon Fire TV Stick (Lite, 4K, 4K Max, Cube)',
      'Chromecast con Google TV',
      'Xiaomi Mi Box & Mi TV Stick',
      'Apple TV 4K y Apple TV HD',
      'Android TV Box (Nvidia Shield, Mecool, etc.)',
    ],
    popularApps: ['TiviMate IPTV', 'IPTV Smarters Pro', 'XCIPTV', 'iPlayTV'],
  },
  {
    id: 'mobile',
    title: 'Celulares y Tablets',
    subtitle: 'Televisión Portátil',
    icon: 'Smartphone',
    badge: 'Llévalo Donde Quieras',
    description: 'Tus canales y películas favoritas en cualquier lugar a través de tu conexión WiFi o datos móviles.',
    examples: [
      'Celulares Android (Samsung, Xiaomi, Motorola, etc.)',
      'Tablets Android y Samsung Galaxy Tab',
      'iPhone (todos los modelos compatibles)',
      'iPad y iPad Pro',
    ],
    popularApps: ['IPTV Smarters Pro', 'GSE Smart IPTV', 'XCIPTV', '247 IPTV Player'],
  },
  {
    id: 'pc',
    title: 'Computadoras',
    subtitle: 'Navegador y Reproductores',
    icon: 'Monitor',
    badge: 'Windows y Mac',
    description: 'Acceso directo en laptops y equipos de escritorio con reproductores avanzados de video.',
    examples: [
      'Windows 10 / 11 (PC y Laptops)',
      'Apple Mac (macOS MacBook, iMac, Mac Mini)',
      'Linux y navegadores web modernos',
    ],
    popularApps: ['VLC Media Player', 'IPTV Smarters Web/App', 'MyIPTV Player'],
  },
];

export const COMPATIBLE_DEVICES = [
  {
    name: 'Smart TVs',
    types: 'Samsung (Tizen), LG (webOS), Sony, Hisense, TCL',
    icon: 'Tv',
    popular: true,
  },
  {
    name: 'Amazon Fire TV',
    types: 'Fire TV Stick Lite, 4K, 4K Max, Fire Cube',
    icon: 'Flame',
    popular: true,
  },
  {
    name: 'Android TV & Box',
    types: 'Xiaomi Mi Box, Mecool, Chromecast con Google TV',
    icon: 'Box',
    popular: true,
  },
  {
    name: 'Teléfonos & Tablets',
    types: 'Android (Samsung, Xiaomi, Motorola) y Apple iOS (iPhone, iPad)',
    icon: 'Smartphone',
    popular: false,
  },
  {
    name: 'Computadoras',
    types: 'Windows, macOS, Linux y reproductores VLC/Web',
    icon: 'Laptop',
    popular: false,
  },
  {
    name: 'Dispositivos Apple',
    types: 'Apple TV 4K, iPad, iPhone, Mac (IPTV Smarters, GSE, etc.)',
    icon: 'Cast',
    popular: false,
  },
];

export const TESTIMONIALS = [
  {
    name: 'Carlos Mendoza',
    location: 'Miami, Florida',
    rating: 5,
    avatarText: 'CM',
    device: 'Fire TV Stick 4K',
    text: 'Excelente servicio. Llevo 8 meses con TvTotal24 en mi Fire Stick y los partidos de la Champions se ven sin ningún corte en 4K. La atención por WhatsApp fue inmediata para configurar mi televisor.',
  },
  {
    name: 'Mariana Gómez',
    location: 'Houston, Texas',
    rating: 5,
    avatarText: 'MG',
    device: 'Samsung Smart TV',
    text: 'Cancelé el cable tradicional y me ahorro más de $90 al mes. Toda la familia tiene sus canales favoritos y mis hijos ven sus caricaturas en sus tablets sin pelear por el control remoto.',
  },
  {
    name: 'Roberto Salcedo',
    location: 'Los Ángeles, California',
    rating: 5,
    avatarText: 'RS',
    device: 'Android TV Box',
    text: 'Lo probé con la demo gratis de prueba y quedé convencido al instante. La biblioteca de películas está al día con los últimos estrenos del cine. 100% recomendado.',
  },
  {
    name: 'Elena Paredes',
    location: 'Orlando, Florida',
    rating: 5,
    avatarText: 'EP',
    device: 'Smart TV LG',
    text: 'La guía de canales en español latinoamericano está súper completa. Puedo ver los noticieros de mi país de origen y todas mis telenovelas favoritas en mi Smart TV Samsung.',
  },
];

export const FAQS = [
  {
    question: '¿Qué es TvTotal24 y cómo funciona?',
    answer: 'TvTotal24 es una plataforma de televisión en vivo y entretenimiento streaming por suscripción. Funciona a través de tu conexión a internet existente (banda ancha o WiFi), permitiéndote ver más de 1.500 canales prémium, deportes y miles de películas y series en cualquier dispositivo compatible.',
  },
  {
    question: '¿Puedo solicitar una prueba gratis antes de comprar?',
    answer: '¡Por supuesto! Ofrecemos una demostración gratuita sin compromiso para que compruebes la calidad de imagen, velocidad y catálogo en tu propio dispositivo antes de elegir un plan.',
  },
  {
    question: '¿Cuántos dispositivos puedo conectar al mismo tiempo?',
    answer: 'Nuestros planes te permiten elegir entre 1, 2 o hasta 3 pantallas en simultáneo. Cada miembro de la familia puede ver lo que quiera al mismo tiempo en diferentes televisores o dispositivos móviles.',
  },
  {
    question: '¿Qué velocidad de internet necesito?',
    answer: 'Recomendamos una velocidad mínima de 15 Mbps para canales en resolución HD estándar y al menos 30 a 50 Mbps para transmisiones en Full HD y 4K con fluidez total.',
  },
  {
    question: '¿En qué dispositivos puedo instalar TvTotal24?',
    answer: 'Es compatible con prácticamente todos los dispositivos: Smart TVs (Samsung, LG, Sony, TCL), Amazon Fire TV Stick, Android TV Box, Chromecast con Google TV, celulares y tablets Android, iPhone, iPad, y computadoras Windows o Mac.',
  },
  {
    question: '¿Hay contratos obligatorios o penalizaciones?',
    answer: 'Ninguno. No tenemos contratos a largo plazo ni cargos ocultos. Tú decides cuándo renovar tu suscripción de acuerdo con tus necesidades.',
  },
  {
    question: '¿Cómo recibo mis credenciales una vez que contrato el servicio?',
    answer: 'Inmediatamente después de confirmar tu suscripción, nuestro equipo de atención al cliente te envía tus credenciales de acceso (usuario, contraseña y URL de conexión) junto a la guía de instalación rápida por WhatsApp.',
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos transferencias Zelle, tarjetas de débito/crédito, transferencias bancarias locales y criptomonedas. Puedes coordinar tu método de pago preferido directamente por WhatsApp.',
  },
];

export const FAQ_ITEMS = FAQS;
