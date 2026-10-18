// Data and Configuration for TvTotal24 Website

export const LOGO_URL = '/images/logo-transparent.png';
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
  { label: 'Contenido', href: '#features' },
  { label: 'Planes y Precios', href: '#pricing' },
  { label: 'Beneficios', href: '#why-us' },
  { label: 'Dispositivos', href: '#devices' },
  { label: 'Preguntas Frecuentes', href: '#faq' },
];

export const WHATSAPP_NUMBER = '573009476271';
export const PHONE_DISPLAY = 'WhatsApp Oficial';
export const PHONE_TEL = 'tel:+573009476271';

export const WHATSAPP_LINKS = {
  general: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('¡Hola TvTotal24! Deseo más información y soporte sobre el servicio.')}`,
  demo: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('¡Hola TvTotal24! Quiero solicitar la prueba gratis.')}`,
  support: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('¡Hola TvTotal24! Necesito asistencia técnica con mi servicio.')}`,
  raw: `https://wa.me/${WHATSAPP_NUMBER}`,
  plan: (months: number) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`quiero el plan de ${months} ${months === 1 ? 'mes' : 'meses'}`)}`,
} as const;

export const SOCIAL_LINKS = [
  {
    name: 'WhatsApp',
    url: `https://wa.me/${WHATSAPP_NUMBER}`,
    handle: 'Atención 24/7',
    icon: 'WhatsApp',
    color: '#00E676',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/tvtotal24/',
    handle: '@tvtotal24',
    icon: 'Instagram',
    color: '#E4405F',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/TvTotal24bot',
    handle: 'TvTotal24bot',
    icon: 'Send',
    color: '#229ED9',
  },
];

export type PricingPlan = {
  id: string;
  name: string;
  durationMonths: number;
  periodLabel: string;
  billingSubtitle: string;
  price: number;
  screens: number;
  badge?: string;
  popular?: boolean;
  bestValue?: boolean;
  savingsBadge?: string;
  binancePrice?: number;
  binanceDiscountText?: string;
  features: string[];
};

export const UNIVERSAL_PLAN_FEATURES: string[] = [
  '3 Pantallas o dispositivos simultáneos (ej. Smart TV, Fire Stick, celulares, tablets, computadores, etc.)',
  'Más de 5.000 canales de televisión en vivo en Full HD y 4K',
  'Más de 25.000 películas y series completas on-demand',
  'Torneos de fútbol, deportes y ligas internacionales',
  'Guía electrónica interactiva de programación (EPG)',
  'Servidores estables con tecnología anti-buffering',
  'Activación rápida y soporte directo por WhatsApp',
  'Sin contratos obligatorios ni penalizaciones',
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: '1month',
    name: 'Plan 1 Mes',
    durationMonths: 1,
    periodLabel: '/mes',
    billingSubtitle: 'Facturación mensual flexible',
    price: 8,
    screens: 3,
    badge: 'Flexibilidad Total',
    popular: false,
    bestValue: false,
    binancePrice: 5,
    binanceDiscountText: 'Con Binance solo $5 USD',
    features: UNIVERSAL_PLAN_FEATURES,
  },
  {
    id: '3months',
    name: 'Plan 3 Meses',
    durationMonths: 3,
    periodLabel: '/trimestre',
    billingSubtitle: 'Facturación cada 3 meses ($8/mes)',
    price: 24,
    screens: 3,
    badge: 'El Más Popular',
    popular: true,
    bestValue: false,
    savingsBadge: 'Ahorro Garantizado',
    binancePrice: 14,
    binanceDiscountText: 'Con Binance solo $14 USD',
    features: UNIVERSAL_PLAN_FEATURES,
  },
  {
    id: '6months',
    name: 'Plan 6 Meses',
    durationMonths: 6,
    periodLabel: '/semestre',
    billingSubtitle: 'Facturación semestral ($8/mes)',
    price: 48,
    screens: 3,
    badge: 'Gran Elección',
    popular: false,
    bestValue: false,
    savingsBadge: 'Gran Ahorro Semestral',
    features: UNIVERSAL_PLAN_FEATURES,
  },
  {
    id: '12months',
    name: 'Plan 12 Meses',
    durationMonths: 12,
    periodLabel: '/año',
    billingSubtitle: 'Facturación anual ($7/mes · Mejor Precio)',
    price: 84,
    screens: 3,
    badge: 'Mejor Opción Económica',
    popular: false,
    bestValue: true,
    savingsBadge: 'Precio Más Bajo: $7/mes',
    binancePrice: 50,
    binanceDiscountText: 'Con Binance solo $50 USD',
    features: UNIVERSAL_PLAN_FEATURES,
  },
];

export const ONBOARDING_STEPS = [
  {
    number: '01',
    title: 'Elige tu Plan',
    description: 'Selecciona la duración que prefieras. Todos los planes incluyen 3 dispositivos simultáneos.',
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
    description: 'Conéctate en tu Smart TV, Fire Stick, celular, TV Box o PC y disfruta de más de 5.000 canales y 25.000 películas y series.',
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
    title: 'Más de 25.000 Películas y Series',
    description: 'Películas de cartelera, clásicos y temporadas completas de las principales plataformas del mundo en una sola suscripción.',
    tag: 'CATÁLOGO VOD GIGANTE',
  },
  {
    icon: 'Trophy',
    title: 'Deportes en Vivo en Full HD y 4K',
    description: 'Transmisión en directo de fútbol internacional, Champions League, UFC, NBA, MLB, NFL, boxeo y automovilismo en Full HD y 4K.',
    tag: 'DEPORTES EN DIRECTO',
  },
  {
    icon: 'Tv',
    title: 'Más de 5.000 Canales en Vivo',
    description: 'Señales internacionales, noticias en tiempo real, entretenimiento y cultura de América Latina, EE.UU. y Europa.',
    tag: '+5.000 CANALES',
  },
  {
    icon: 'Layers',
    title: '3 Pantallas Incluidas en Todos los Planes',
    description: 'Sin costos extra ni configuraciones complejas. Disfruta con tu familia en 3 pantallas al mismo tiempo.',
    tag: '3 PANTALLAS SIMULTÁNEAS',
  },
  {
    icon: 'Smartphone',
    title: 'Compatibilidad Multidispositivo Total',
    description: 'Compatible con múltiples dispositivos (Smart TV, Fire Stick, Android, iPhone, iPad, PC y muchos más).',
    tag: 'UNIVERSAL',
  },
  {
    icon: 'Bot',
    title: 'Soporte Directo y Asistencia Técnica',
    description: 'Atención personalizada y rápida por WhatsApp para instalación, dudas y soporte.',
    tag: 'SOPORTE WHATSAPP',
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
    description: 'Sigue los torneos de fútbol, las grandes ligas americanas, noches de combate y todas las ligas internacionales en tu pantalla favorita.',
    image: SPORTS_IMAGE,
    highlights: [
      'Champions League, Copa Libertadores y Ligas Europeas',
      'NFL, NBA Basketball, MLB Béisbol y Fórmula 1',
      'Combates Estelares de UFC, Boxeo y PPV',
      'Transmisiones fluidas en alta definición y máxima estabilidad',
    ],
    platforms: ['ESPN', 'Fox Sports', 'DAZN', 'Directv Sports', 'TUDN'],
  },
  {
    id: 'movies',
    category: 'Cine y Estrenos Mundiales',
    title: 'Más de 25.000 Películas y Series en Casa',
    badge: 'CINE EN 4K Y FHD',
    description: 'Estrenos recién salidos del cine, clásicos inolvidables, sagas completas y producciones galardonadas sin pagar suscripciones adicionales.',
    image: MOVIES_IMAGE,
    highlights: [
      'Más de 25.000 contenidos actualizados constantemente',
      'Producciones seleccionadas en auténtico 4K Ultra HD',
      'Audio original en español latino y subtítulos sincronizados',
      'Catálogo organizado por categorías y novedades',
    ],
    platforms: ['HBO', 'Disney+', 'Netflix', 'Amazon Prime', 'Paramount+'],
  },
  {
    id: 'series',
    category: 'Series Completas y Maratones',
    title: 'Tus Series Favoritas de Principio a Fin',
    badge: 'TEMPORADAS COMPLETAS',
    description: 'Explora temporadas completas, dramas aclamados, comedias y miniseries organizadas por episodios para tus maratones.',
    image: SERIES_IMAGE,
    highlights: [
      'Temporadas completas disponibles sin esperas',
      'Capítulos nuevos sincronizados con las emisiones mundiales',
      'Reproducción continua y guardado de progreso',
      'Calidad Full HD con sonido envolvente de cine',
    ],
    platforms: ['Netflix', 'Apple TV+', 'Max', 'Amazon Prime', 'Paramount+'],
  },
  {
    id: 'livetv',
    category: 'Canales en Vivo de Todo el Mundo',
    title: 'Más de 5.000 Canales de TV en Vivo',
    badge: 'TELEVISIÓN EN VIVO 24/7',
    description: 'Accede a la mejor televisión de Estados Unidos, América Latina y Europa con señal estable y guía de programación en pantalla.',
    image: NEWS_IMAGE,
    highlights: [
      'Más de 5.000 canales de televisión en vivo',
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
    title: 'Soporte Directo por WhatsApp',
    description: 'Asistencia técnica personalizada y rápida a través de WhatsApp para resolver cualquier inquietud.',
    icon: 'MessageSquare',
  },
  {
    title: '3 Dispositivos Incluidos',
    description: 'Disfruta en 3 pantallas simultáneas en todos nuestros planes sin ningún costo adicional para tu familia.',
    icon: 'Tv',
  },
  {
    title: 'Súper Descuento con Binance',
    description: 'Paga con Binance y recibe un súper descuento especial en tu suscripción.',
    icon: 'CreditCard',
  },
  {
    title: 'Actualizaciones Constantes',
    description: 'Nuevos canales en vivo, eventos deportivos y títulos de cine agregados periódicamente a tu catálogo.',
    icon: 'RefreshCw',
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
    description: 'Transmite directamente en tu televisor sin necesidad de cables externos ni decodificadores adicionales.',
    examples: [
      'Samsung Smart TV (Tizen OS)',
      'LG Smart TV (webOS)',
      'Android TV & Google TV',
      'Sony, Sharp, Philips, Hisense y TCL',
      'Xiaomi TV & Fire TV integrado',
    ],
    popularApps: ['IPTV Smarters Pro', 'IBO Player', 'SET IPTV', 'Nanomid Player'],
  },
  {
    id: 'boxes',
    title: 'TV Boxes & Sticks',
    subtitle: 'Plug & Play Streaming',
    icon: 'Flame',
    badge: 'Rendimiento 4K Ultra',
    description: 'Dispositivos de transmisión de alto rendimiento y máxima fluidez para canales en Full HD y 4K UHD.',
    examples: [
      'Amazon Fire TV Stick (Lite, 4K, 4K Max, Cube)',
      'Chromecast con Google TV',
      'Xiaomi Mi Box & Mi TV Stick',
      'Apple TV HD & Apple TV 4K (tvOS)',
      'Android TV Box (Nvidia Shield, MECOOL)',
    ],
    popularApps: ['TiviMate IPTV', 'IPTV Smarters Pro', 'XCIPTV', 'iPlayTV', 'OTT Navigator'],
  },
  {
    id: 'mobile',
    title: 'Celulares y Tablets',
    subtitle: 'Libertad Portátil',
    icon: 'Smartphone',
    badge: 'Lleva tu TV Contigo',
    description: 'Lleva tu programación completa, eventos deportivos en directo y películas a donde vayas en tu móvil.',
    examples: [
      'Smartphones Android (Samsung, Xiaomi, Motorola, Pixel)',
      'Tablets Android & Amazon Fire Tablets',
      'Apple iPhone (iOS 13+)',
      'Apple iPad & iPad Pro (iPadOS)',
    ],
    popularApps: ['Smarters Player Lite', 'GSE Smart IPTV', '247 IPTV Player', 'VLC Mobile'],
  },
  {
    id: 'computers',
    title: 'Computadoras (PC & Mac)',
    subtitle: 'Acceso Web y Escritorio',
    icon: 'Monitor',
    badge: 'Navegador y Apps',
    description: 'Disfruta directamente desde tu navegador web o con reproductores multimedia dedicados para escritorio.',
    examples: [
      'Windows 10 & 11 (PC de escritorio y laptops)',
      'macOS (MacBook Air, MacBook Pro, iMac, Mac Mini)',
      'Sistemas Linux (Ubuntu, Debian, Fedora)',
    ],
    popularApps: ['Navegador Web (Chrome, Edge, Safari)', 'VLC Media Player', 'IPTV Smarters PC/Mac'],
  },
];

export type Device = {
  name: string;
  icon: string;
  desc: string;
};

export const DEVICES: Device[] = [
  { name: 'Amazon Firestick 4K', icon: 'Flame', desc: 'Configuración rápida con TiviMate o Smarters Pro' },
  { name: 'Samsung Smart TV', icon: 'Tv', desc: 'Reproducción directa en Samsung Tizen OS' },
  { name: 'LG Smart TV', icon: 'Tv', desc: 'Acceso directo desde LG webOS' },
  { name: 'Android TV & Google TV', icon: 'Tv', desc: 'Sony, TCL, Philips, Chromecast & TV boxes' },
  { name: 'Apple TV 4K', icon: 'Tv', desc: 'Máximo rendimiento y calidad en tvOS' },
  { name: 'Celulares Android & iPhone', icon: 'Smartphone', desc: 'Lleva la televisión a donde vayas' },
  { name: 'PC & Mac', icon: 'Monitor', desc: 'Reproducción en pantalla grande vía app o web' },
];

export type Testimonial = {
  name: string;
  location: string;
  rating: number;
  text: string;
  device: string;
  avatarText: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Carlos Mendoza',
    location: 'Bogotá, Colombia',
    rating: 5.0,
    text: 'Increíble calidad. La transmisión de los partidos de fútbol y la Champions es súper fluida, sin cortes. Además el pago con Binance fue facilísimo y con descuento.',
    device: 'Amazon Fire TV Stick 4K',
    avatarText: 'CM',
  },
  {
    name: 'Mariana Gómez',
    location: 'Ciudad de México, México',
    rating: 5.0,
    text: 'Mis hijos adoran las películas y series animadas. La instalación nos tomó menos de 5 minutos gracias a la asesoría por WhatsApp. Servicio 100% recomendado.',
    device: 'Samsung Smart TV 55"',
    avatarText: 'MG',
  },
  {
    name: 'Andrés Villalba',
    location: 'Miami, Florida',
    rating: 4.9,
    text: 'Cancelé mi suscripción tradicional de cable hace meses. Con TvTotal24 tengo más de 5.000 canales y 3 pantallas simultáneas para toda mi casa a una fracción del precio.',
    device: 'Apple TV 4K',
    avatarText: 'AV',
  },
  {
    name: 'Lucía Fernández',
    location: 'Buenos Aires, Argentina',
    rating: 5.0,
    text: 'Probé primero la prueba gratis y quedé encantada. La atención por WhatsApp fue muy rápida y el catálogo tiene más de 25.000 películas y series completas.',
    device: 'Chromecast con Google TV',
    avatarText: 'LF',
  },
  {
    name: 'Roberto Salazar',
    location: 'Santiago, Chile',
    rating: 4.9,
    text: 'Muy estable y con más de 25.000 contenidos. Podemos ver en 3 televisores al mismo tiempo sin que se caiga la señal. Excelente plataforma.',
    device: 'Smart TV LG',
    avatarText: 'RS',
  },
];

export const FAQS = [
  {
    question: '¿Qué es TvTotal24 y cómo funciona?',
    answer: 'TvTotal24 es una plataforma de televisión en vivo y entretenimiento streaming por suscripción. Funciona a través de tu conexión a internet existente (banda ancha o WiFi), permitiéndote ver más de 5.000 canales de TV en vivo, eventos deportivos en directo y más de 25.000 películas y series en cualquier dispositivo compatible.',
  },
  {
    question: '¿Puedo solicitar una prueba gratis antes de comprar?',
    answer: '¡Por supuesto! Ofrecemos una prueba gratis para que compruebes la calidad de imagen, velocidad y catálogo en tu propio dispositivo antes de elegir un plan. Solicítala directamente por WhatsApp.',
  },
  {
    question: '¿Cuántos dispositivos puedo conectar al mismo tiempo?',
    answer: 'Todos nuestros planes incluyen 3 pantallas o dispositivos simultáneos por defecto. Toda tu familia puede disfrutar al mismo tiempo en sus televisores o dispositivos móviles sin ningún costo adicional.',
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
    answer: 'Ninguno. No tenemos contratos a largo plazo ni cargos ocultos. Tú decides cuándo renovar tu suscripción con total libertad.',
  },
  {
    question: '¿Cómo recibo mis credenciales una vez que contrato el servicio?',
    answer: 'Inmediatamente después de confirmar tu suscripción, nuestro equipo de atención al cliente te envía tus credenciales de acceso (usuario, contraseña y URL de conexión).',
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos Binance (¡con un SÚPER descuento exclusivo!), transferencias Zelle, pago móvil (bolívares) y criptomonedas.',
  },
];

export const FAQ_ITEMS = FAQS;
