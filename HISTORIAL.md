# Historial del Proyecto - TvTotal24

Este archivo registra todos los cambios, desarrollos, arquitectura, actualizaciones e integraciones del proyecto **TvTotal24**. Su propósito central es documentar el avance técnico continuo, mantener la sincronización y facilitar el trabajo colaborativo y la continuidad del desarrollo desde múltiples computadores a través de GitHub.

---

## 📌 1. Información del Repositorio

- **Repositorio en GitHub:** [`totaltvusa/TvTotal24`](https://github.com/totaltvusa/TvTotal24)
- **Sitio Web en Producción (Vercel):** [`https://tvtotal24.vercel.app`](https://tvtotal24.vercel.app)
- **Proyecto en Vercel:** [`totaltvusa/tvtotal24`](https://vercel.com/totaltvusa/tvtotal24) (ID: `prj_XyJk7jyfCA6zsJDBB29EHBqZfQGR`)
- **Rama principal:** `main`
- **Propietario / Organización:** `totaltvusa` (TotalTv USA Team)
- **Fecha de inicialización:** Octubre 2026
- **Propósito:** Hub y base de desarrollo para todas las iniciativas, servicios, assets y módulos relacionados con **TvTotal24**.

---

## 💻 2. Guía de Trabajo Multidispositivo (Otros Computadores)

Para continuar trabajando en este proyecto desde cualquier otra máquina (laptop, oficina, etc.), siga estos pasos:

### A. Clonar el repositorio por primera vez

Asegúrese de contar con Git instalado y autenticado con la cuenta `totaltvusa` (mediante llave SSH o token de GitHub):

**Opción recomendada (SSH):**
```bash
git clone git@github.com:totaltvusa/TvTotal24.git
cd TvTotal24
npm install
```

**Opción alternativa (HTTPS con GitHub CLI o PAT):**
```bash
gh repo clone totaltvusa/TvTotal24
# O directamente vía HTTPS:
# git clone https://github.com/totaltvusa/TvTotal24.git
cd TvTotal24
npm install
```

### B. Rutina diaria de sincronización

Para evitar discrepancias o conflictos al alternar entre computadores:

1. **Al iniciar la jornada de trabajo en cualquier computador:**
   ```bash
   git pull origin main
   ```
2. **Durante el desarrollo:**
   - Para probar en local: `npm run dev`
   - Para verificar tipos y compilación: `npm run build`
   - Registrar cualquier nuevo cambio relevante en la sección [Bitácora de Cambios](#-4-bitácora-de-cambios) de este archivo (`HISTORIAL.md`).
3. **Al finalizar la sesión de trabajo:**
   ```bash
   git status
   git add .
   git commit -m "Descripción clara del avance realizado"
   git push origin main
   ```

---

## 📂 3. Estructura del Proyecto

```text
TvTotal24/
├── .gitignore                     # Exclusiones de Git (node_modules, .vercel, dist, temporales)
├── .vercel/                       # Configuración y enlace local del proyecto Vercel
├── HISTORIAL.md                   # Bitácora histórica, arquitectura y guía multidispositivo
├── README.md                      # Presentación e información general del proyecto
├── Logo TvTotal24 Final.png       # Logotipo oficial original en alta resolución
├── index.html                     # HTML principal, SEO, fuentes y preloader animado
├── package.json                   # Dependencias (React 18, Vite 5, Tailwind 3.4, Framer Motion)
├── package-lock.json              # Árbol de dependencias bloqueado
├── postcss.config.js              # Configuración de PostCSS y Tailwind
├── tailwind.config.js             # Sistema de diseño, paleta verde neón y obsidiana
├── tsconfig.json                  # Configuración raíz de TypeScript (referencias por proyecto)
├── tsconfig.app.json              # Configuración de compilación de la aplicación cliente
├── tsconfig.node.json             # Configuración de compilación para scripts de Node/Vite
├── vite.config.ts                 # Configuración de Vite y alias de rutas (@/*)
├── public/
│   ├── images/                    # Assets gráficos, fondos, banners y logos (PNG y WebP)
│   │   ├── logo.png               # Logo TvTotal24
│   │   └── logo-transparent.png   # Logo TvTotal24 con transparencia
│   └── robots.txt                 # Directivas de indexación para buscadores
└── src/
    ├── context/
    │   └── ThemeContext.tsx       # Contexto para modo oscuro/claro con persistencia
    ├── components/
    │   ├── ContactModal.tsx       # Modal dual de contacto (WhatsApp / Messenger)
    │   ├── Devices.tsx            # Sección interactiva de dispositivos y guías de app
    │   ├── DynamicHeroCarousel.tsx# Carrusel de estrenos de películas y eventos deportivos
    │   ├── EntertainmentFeatures.tsx # Pestañas de canales en vivo, cine, series e infantiles
    │   ├── FAQ.tsx                # Preguntas frecuentes con acordeones interactivos
    │   ├── FloatingWhatsApp.tsx   # Botón flotante directo para atención por WhatsApp
    │   ├── Footer.tsx             # Pie de página con enlaces rápidos, redes y sellos
    │   ├── FreeDemo.tsx           # Sección de solicitud de prueba gratuita de 24 horas
    │   ├── Header.tsx             # Barra de navegación fija con menú móvil responsivo
    │   ├── Hero.tsx               # Sección principal de bienvenida con estadísticas y CTA
    │   ├── LegalPage.tsx          # Centro Legal (Privacidad, Términos y DMCA)
    │   ├── Onboarding.tsx         # Los 3 pasos simples para comenzar
    │   ├── Pricing.tsx            # Tarjetas de planes, selector de pantallas y adult toggle
    │   ├── SocialIcons.tsx        # Iconos SVG de redes sociales (WhatsApp, Messenger, etc.)
    │   ├── SocialSection.tsx      # Sección de comunidad y enlaces sociales
    │   ├── Testimonials.tsx       # Reseñas verificadas de clientes
    │   ├── ThemeToggle.tsx        # Botón para alternar tema visual
    │   ├── WhatsAppIcon.tsx       # Icono SVG optimizado de WhatsApp
    │   └── WhyChooseUs.tsx        # Sección de ventajas técnicas y servidores anti-buffering
    ├── App.tsx                    # Enrutamiento de vistas (inicio y centro legal)
    ├── data.ts                    # Constantes de contenido, planes, enlaces y traducciones
    ├── index.css                  # Estilos globales, efectos de cristal y scrollbars
    ├── main.tsx                   # Punto de entrada de React con StrictMode
    └── vite-env.d.ts              # Declaraciones de tipos para variables de entorno Vite
```

---

## 📝 4. Bitácora de Cambios

### [2026-10-18] - Corrección Integral de Modo Claro/Oscuro, Video Responsive en iPhone, Activación Clara, Unificación de Beneficios y Métodos de Pago

#### 🚀 Ajustes y Mejoras Implementadas (Puntos 7 al 18):
1. **Modo Claro y Oscuro Funcional y Adaptativo (Punto 7):**
   - Corrección integral de estilos y contrastes en desktop y mobile.
   - Sustitución de fondos fijos `bg-obsidian-950` por clases dinámicas `bg-slate-50 dark:bg-obsidian-950` y `bg-transparent dark:bg-obsidian-950` en todos los componentes y contenedores.
   - Textos adaptativos con alto contraste (`text-slate-900 dark:text-white` para títulos y `text-slate-700 dark:text-slate-300` para cuerpo).
   - Inyección de script síncrono en `<head>` de `index.html` para aplicar el tema guardado en `localStorage` antes del primer renderizado visual (sin parpadeos).
   - Menú hamburguesa móvil y drawer completamente legibles y contrastados en ambos modos.

2. **Resolución de Recorte de Videos en iPhone / Hero TV (Punto 8):**
   - Transición del contenedor de pantalla de TV en `Hero.tsx` de `aspect-[16/10]` a `aspect-video` (16:9).
   - Ajuste del elemento `<video>` en `DynamicHeroCarousel.tsx` a `w-full h-full object-contain bg-black` con atributos optimizados para WebKit iOS (`playsInline`, `muted`, `autoPlay`, `loop`), garantizando que ningún tráiler o transmisión se corte en pantallas estrechas.

3. **Flujo de Activación Clara y Dispositivos de Ejemplo (Punto 9):**
   - **Paso 01:** Selección únicamente del tiempo o duración del plan (1, 3, 6 o 12 meses), eliminando cualquier mención a selección de número de pantallas.
   - **Paso 03:** Redactado con tono ejemplificativo: *"Abre la aplicación en tu dispositivo (Smart TV, Fire Stick, teléfono, PC, etc.)..."*.

4. **Revisión del Catálogo y Entretenimiento (Punto 10):**
   - Deportes: Actualizado a *"Sigue los torneos de fútbol, las grandes ligas americanas, noches de combate y todas las ligas internacionales en tu pantalla favorita."*.
   - Eliminación de la frase inexacta sobre 60 FPS sin retraso.
   - Cine y Series: Eliminación de *"Buscador rápido por género, año y actores"*, retiro del adjetivo *"exclusivas"* e incorporación explícita de **Netflix** en la lista de plataformas.

5. **Compatibilidad con Dispositivos como Ejemplos (Punto 11):**
   - Todas las referencias a Smart TV, Firestick, iPhone, PC en la demostración gratuita, planes y descripciones se presentan como ejemplos para que el cliente comprenda que el servicio funciona en cualquier dispositivo compatible.

6. **Eliminación de Afirmaciones de Activación "Instantánea / Inmediata" (Punto 12):**
   - Sustitución sistemática en toda la web por términos honestos y transparentes como *"activación rápida y directa"*, *"proceso ágil"* y *"activación en minutos"*.

7. **Eliminación de Promesas Falsas o Inexactas (Punto 13):**
   - Eliminación de frases como *"Estrenos de cine antes de que lleguen a otras plataformas"* o promesas de atención VIP exclusiva sin demoras.

8. **Unificación Total de Beneficios en los 4 Planes (Punto 14):**
   - Creación de `UNIVERSAL_PLAN_FEATURES` en `src/data.ts`.
   - Los planes de 1, 3, 6 y 12 meses cuentan con los mismos beneficios completos (más de 5.000 canales, más de 25.000 películas y series, 3 pantallas simultáneas, calidad FHD y 4K UHD, soporte técnico por WhatsApp, guía de instalación). La única diferencia entre ellos es la duración y el precio.

9. **Eliminación Absoluta de Referencias a "60 FPS" (Puntos 15 y 18):**
   - Búsqueda y eliminación total de menciones a 60 FPS o tasas de refresco en slides, héroe, pie de página, FAQs y descripciones.

10. **Ajuste de Nomenclatura para Binance (Punto 16):**
    - Referencias exclusivamente a **Binance** (se eliminó "Binance Pay" y criptomonedas asociadas a marcas).

11. **Métodos de Pago Claros y Actualizados (Punto 17):**
    - Redacción oficial unificada: *"Aceptamos Binance, Cripto, Zelle y Bolívares"* en la sección de precios y badges de garantía.

12. **Respuesta FAQ sobre Entrega de Credenciales (Punto 19):**
    - Respuesta actualizada con precisión a: *"Inmediatamente después de confirmar tu suscripción, nuestro equipo de atención al cliente te envía tus credenciales de acceso (usuario, contraseña y URL de conexión)."*.

13. **Respuesta FAQ sobre Métodos de Pago y Pago Móvil (Punto 20):**
    - Respuesta actualizada con precisión a: *"Aceptamos Binance (¡con un SÚPER descuento exclusivo!), transferencias Zelle, pago móvil (bolívares) y criptomonedas."*.

14. **Eliminación del Enlace de Asistencia Técnica del Menú Superior:**
    - Se retiró el botón de "Asistencia Técnica" de la barra de navegación superior (desktop y drawer móvil), manteniendo un menú limpio enfocado en la navegación y el botón de "Demo Gratis".

15. **Duración Completa de Videos en TV de Inicio (Hero Carousel):**
    - Se resolvió la causa por la cual los videos se cortaban: un temporizador fijo forzaba la transición a los 4.5 segundos.
    - Ahora cada video se reproduce en su duración completa natural y pasa al siguiente clip automáticamente mediante el evento `onEnded`, manteniendo precarga en segundo plano para evitar esperas o buffering.

16. **Ocultación Total del Número Telefónico de WhatsApp en Pantalla:**
    - Se eliminó la exposición en texto plano del número telefónico (`+57 300 947 6271`) en toda la interfaz visible (Footer, FAQ, tarjetas de características, accesibilidad y sección de comunidad).
    - El número permanece integrado funcionalmente en los enlaces `https://wa.me/573009476271`, mostrándose en pantalla únicamente como *"WhatsApp Oficial"*, *"Chat y Atención 24/7"* o *"Atención por WhatsApp"*.

17. **Precios Exactos con Descuento Binance:**
    - Incorporación de los precios con descuento exclusivo de Binance en las tarjetas de planes (1 mes $5 USD, 3 meses $14 USD, 6 meses $27 USD, 12 meses $50 USD).
    - Actualización del botón en el banner superior a *"Compra con descuento Binance"*, con enlace directo a WhatsApp.

18. **Simplificación Visual de Tarjetas de Precios:**
    - Se eliminó el desglose del costo mensual entre paréntesis en subtítulos y distintivos (ej. `($8/mes)` y `($7/mes)`).
    - Se retiró la insignia de "3 Pantallas" junto al nombre del plan para eliminar redundancia con el primer ítem de beneficios.
    - Se eliminaron las etiquetas de período (`/mes`, `/trimestre`, `/semestre`, `/año`) del bloque de precio, exhibiendo solo el monto neto en dólares (`$ 8 USD`, `$ 24 USD`, etc.).
    - Se actualizaron todos los botones de compra de *"Contratar Plan"* a **"Quiero este"**.
    - Se añadió al **Plan 6 Meses** la oferta especial de Binance a solo **$27 USD** (estándar $48 USD).

19. **Botón Flotante de WhatsApp Desplazable Universal (Pointer Events API):**
    - Se rediseñó el sistema de arrastre utilizando la API universal de **Pointer Events** (`pointerdown`, `pointermove`, `pointerup`) con captura de puntero (`setPointerCapture`).
    - **Solución para Google Chrome y Firefox en PC:** Se eliminó la intercepción nativa de arrastre de hipervínculos HTML5 que bloqueaba el movimiento en navegadores de escritorio.
    - **Diferenciación exacta entre Toque/Clic y Arrastre:** Si el movimiento es menor a 5px, se activa como clic directo hacia WhatsApp (+573009476271); si el desplazamiento supera 5px, se mueve suavemente por la pantalla sin activar WhatsApp por error.
    - **Límites automáticos de pantalla:** Clamping inteligente contra `window.innerWidth` y `window.innerHeight` con margen de seguridad de 16px en todos los extremos, adaptable a cambios de tamaño o rotación.

20. **Optimización de Carga Inmediata y Soporte iPhone / Safari:**
    - Se eliminó por completo el preloader estático bloqueante (`#tvtotal24-preloader`) que generaba pantalla negra, retenía la pantalla en iOS Safari y cargaba un archivo pesado innecesario.
    - La web ahora carga y despliega de manera instantánea, nítida y fluida en iPhone y cualquier dispositivo móvil.
    - Compatibilidad de video para iOS WebKit: configuración explícita de `muted = true` y `webkit-playsinline` para garantizar reproducción automática sin bloqueos.

21. **Apertura Predeterminada Siempre en Modo Oscuro (Sin Persistencia al Recargar):**
    - La página web **siempre abre en modo oscuro** por defecto, de forma totalmente independiente a la configuración del sistema operativo (`prefers-color-scheme`).
    - El usuario puede alternar a *Modo Claro* con el botón correspondiente durante su navegación si lo desea.
    - Al recargar la página (*Reload* o *F5*) o abrirla en una nueva pestaña, el sitio web se inicializa nuevamente en **modo oscuro**, asegurando coherencia visual con la identidad de marca obsidian/neon green de TvTotal24.

---

### [2026-10-17] - Actualización de Enlaces Directos a WhatsApp (+573009476271), Precios Unificados (3 Pantallas), Súper Descuento Binance y Logo Ampliado

#### 🚀 Ajustes y Mejoras Implementadas:
1. **Canal Centralizado de WhatsApp (+573009476271):**
   - Actualización del número oficial de atención: `+57 300 947 6271` (`https://wa.me/573009476271`).
   - Todos los enlaces de prueba gratuita, botón flotante de chat y asistencia técnica van directamente a WhatsApp sin modales intermedios.
   - Mensaje para prueba gratis: `¡Hola TvTotal24! Quiero solicitar la prueba gratis.`
   - Mensaje para soporte/asistencia técnica: `¡Hola TvTotal24! Necesito asistencia técnica con mi servicio.`

2. **Logotipo Oficial de TvTotal24 Mucho Más Grande:**
   - Ampliación sustancial del tamaño del logo en el Header (`h-14 sm:h-18 md:h-20 lg:h-22`) con sombra de resplandor neón verde esmeralda.
   - Inclusión de un logotipo protagónico gigante y centrado en la sección Hero (`h-24 sm:h-32 md:h-44`) con efectos de iluminación ambiental.
   - Logo ampliado en el Preloader (`index.html`), Footer y Centro Legal (`LegalPage.tsx`).

3. **Planes con 3 Pantallas Incluidas por Defecto y Nuevos Precios:**
   - Todos los planes incluyen 3 pantallas/dispositivos simultáneos (sin selectores de pantalla que confundan al cliente).
   - Se eliminó cualquier mención o toggle de contenido para adultos (es gratuito e incluido por defecto).
   - Estructura de precios actualizada:
     - **Plan 1 Mes:** $8 USD
     - **Plan 3 Meses:** $24 USD ($8/mes)
     - **Plan 6 Meses:** $48 USD ($8/mes)
     - **Plan 12 Meses:** $84 USD (solo $7/mes · Mejor Precio y Ahorro)
   - Botón directo de contratación a WhatsApp con el texto exacto: `quiero el plan de X meses` (ej. `quiero el plan de 1 mes`, `quiero el plan de 3 meses`, etc.).
   - Eliminación de la tabla matriz expandible de precios por pantalla.

4. **Súper Descuento Pagando con Binance:**
   - Incorporación de un banner promocional exclusivo y llamativo en tono oro/cripto dentro de la sección de Precios destacando el **SÚPER Descuento al pagar con Binance Pay o Criptomonedas**.
   - Cada tarjeta de plan cuenta con un distintivo visual que resalta el beneficio con Binance y botón directo de consulta a WhatsApp.

5. **Actualización de Canales y Contenido:**
   - Cifras actualizadas en todo el sitio, metadatos y SEO a **más de 5.000 canales de televisión en vivo** y **más de 25.000 películas y series completas**.

6. **Canales de Redes y Comunidad ("Únete y Síguenos"):**
   - Redes actualizadas a los canales oficiales:
     - **WhatsApp:** `+57 300 947 6271`
     - **Instagram:** `@tvtotal24` (`https://www.instagram.com/tvtotal24/`)
     - **Telegram:** `TvTotal24bot` (`https://t.me/TvTotal24bot`)
   - Eliminación definitiva de Facebook y Facebook Messenger.

7. **Prueba Gratis sin Mención de Duración:**
   - Se retiró cualquier mención a duración ("24 horas", "24h"), quedando unificado como **"Prueba Gratis"** o **"Demostración Gratuita"** en todas las secciones, botones, pie de página y metadatos.

---

### [2026-10-16] - Adaptación y Construcción Integral del Sitio Web TvTotal24 y Despliegue en Producción

#### 🚀 Despliegue a Producción:
- **URL de Producción:** [`https://tvtotal24.vercel.app`](https://tvtotal24.vercel.app)
- **Estado HTTP:** `200 OK` verificado mediante headers de respuesta en servidores globales de Vercel.
- **CI/CD:** Cada `git push origin main` activa el proceso automático de compilación y despliegue en Vercel.

#### 🎨 Resumen del Desarrollo:
Se tomó como base la arquitectura y componentes de `TotalTvUSAwebsite`, adaptándolos y reconstruyéndolos por completo para **TvTotal24** de acuerdo con las especificaciones del usuario:

1. **Paleta de Colores de Marca (Logo TvTotal24 Final):**
   - Verde Neón Eléctrico principal (`#00E676`), Verde Esmeralda/Lima (`#10B981` / `#059669`).
   - Fondo Obsidiana Profundo (`#020604` / `#050E09`) y negro tinta (`#0a1811`).
   - Efectos Glassmorphism oscuro con resplandor neón verde (`shadow-neon-glow`, bordes `border-neon-emerald/30`, gradientes de texto e iluminación ambiental).

2. **Integración del Logotipo Oficial:**
   - Incorporación de `Logo TvTotal24 Final.png` en `public/images/logo.png` y generación de la variante con transparencia `public/images/logo-transparent.png`.
   - Utilizado en el Preloader interactivo (`#tvtotal24-preloader`), Header, Hero y Footer.

3. **100% en Idioma Español Latinoamericano:**
   - Traducción, localización y optimización de contenido en todos los textos de interfaz, metadatos SEO y componentes interactivos:
     - **Header:** Navegación en español, badge de soporte 24/7 y botón de prueba gratis.
     - **Hero:** Carrusel dinámico de títulos, estadísticas destacadas y llamadas a la acción directas.
     - **Onboarding:** Los 3 pasos simples para comenzar (1. Elige tu plan, 2. Recibe credenciales, 3. Disfruta al instante).
     - **EntertainmentFeatures:** Explorador por pestañas de Deportes en Vivo (60 FPS), Cine y Estrenos en 4K UHD, Series Completas, Canales Internacionales y Zona Familiar con Control Parental.
     - **FreeDemo:** Sección de solicitud de prueba gratuita de 24 horas sin compromiso.
     - **Pricing:** Selector de conexiones (1, 2 o 3 pantallas), toggle de canales para adultos (+18) y tarjetas de planes (1, 3, 6 y 12 meses).
     - **WhyChooseUs:** Servidores anti-buffering, activación instantánea, catálogo actualizado y soporte 24/7.
     - **Devices:** Selector interactivo de dispositivos y guías de instalación rápida (Smart TVs, Fire TV Stick, TV Box, Móviles, PCs).
     - **Testimonials:** Reseñas verificadas de clientes de América Latina y la comunidad hispana.
     - **FAQ:** Preguntas frecuentes con acordeones interactivos en español.
     - **SocialSection:** Canales de comunidad (WhatsApp, Facebook, Instagram, Telegram).
     - **Footer:** Navegación de pie de página, sellos de confianza y enlaces legales.
     - **LegalPage:** Centro legal completo con Política de Privacidad, Términos y Condiciones (política de no reembolsos por disponibilidad de demo, contingencias de ISP y control parental), y Declaración de Cumplimiento DMCA.

4. **Desacoplamiento de WooCommerce Iframe:**
   - Siguiendo la instrucción explícita del usuario, se prescindió del modal con iframe de WooCommerce.
   - Las solicitudes de contratación y planes activan directamente la conversación de WhatsApp con mensajes preformateados para agilizar la compra y atención.

5. **Compilación y Rendimiento:**
   - Configuración de dependencias (Vite 5, React 18, Tailwind 3.4, Framer Motion, Lucide React, @vercel/analytics).
   - Verificación de compilación TypeScript (`tsc -b`) y bundling de producción con Vite: **0 errores**.

### [2026-10-16] - Creación del Proyecto en Vercel y Configuración de CI/CD

#### 🚀 Acciones Realizadas:
1. **Autenticación e Identificación en Vercel:**
   - Vinculación de la CLI de Vercel con la cuenta `totaltvusa` (`TotalTv USA Team`).
2. **Creación del Proyecto Vercel:**
   - Creación del nuevo proyecto [`tvtotal24`](https://vercel.com/totaltvusa/tvtotal24) (ID: `prj_XyJk7jyfCA6zsJDBB29EHBqZfQGR`).
3. **Vinculación Local y Control de Archivos:**
   - Enlace del directorio de trabajo local con el proyecto en Vercel (`.vercel/project.json`).
   - Actualización del archivo `.gitignore` para omitir `.vercel` y `.env*` garantizando la seguridad de tokens y configuraciones locales.
4. **Integración con GitHub (CI/CD):**
   - Configuración de la sincronización continua para que cada commit y push a la rama `main` en GitHub (`totaltvusa/TvTotal24`) active el despliegue automático en Vercel.

---

### [2026-10-16] - Inicialización del Proyecto, Creación del Repositorio en GitHub y Documentación Base

#### 🚀 Acciones Realizadas:
1. **Configuración del Control de Versiones:**
   - Inicialización del repositorio Git local con rama principal `main`.
   - Configuración de identidad de autor Git (`TotalTv USA <totaltvusa@gmail.com>`).
   - Creación del archivo `.gitignore` optimizado para proyectos modernos (Node.js, Python, entornos virtuales, logs, secretos `.env`).
2. **Creación del Repositorio Remoto en GitHub:**
   - Creación del repositorio privado [`totaltvusa/TvTotal24`](https://github.com/totaltvusa/TvTotal24) en la cuenta de GitHub del usuario.
   - Vinculación del origen remoto (`origin`) vía SSH (`git@github.com:totaltvusa/TvTotal24.git`).
3. **Documentación Técnica y de Continuidad:**
   - Creación del archivo [`HISTORIAL.md`](file:///mnt/Data/Projects%20for%20Antigravity/TvTotal24/HISTORIAL.md) con la guía para trabajar desde múltiples equipos, comandos de sincronización y control de cambios.
   - Creación del archivo [`README.md`](file:///mnt/Data/Projects%20for%20Antigravity/TvTotal24/README.md) con la descripción general del proyecto.
4. **Respaldo de Assets Iniciales:**
   - Incorporación del asset inicial de marca: [`Logo TvTotal24 Final.png`](file:///mnt/Data/Projects%20for%20Antigravity/TvTotal24/Logo%20TvTotal24%20Final.png).
   - Realización del primer commit (*Initial commit*) y despliegue a la rama `main` en GitHub.

---

## 🛡️ 5. Convenciones y Reglas del Proyecto

1. **Seguridad y Secretos:**
   - **NUNCA** subir claves de API, tokens, contraseñas o archivos `.env` al repositorio. Todos deben ser ignorados por `.gitignore`.
2. **Registro Obligatorio en el Historial:**
   - Cada tarea, refactorización o adición importante debe ser documentada cronológicamente en este archivo para que cualquier sesión futura en otro equipo cuente con el contexto completo.
3. **Sincronización Previa y Posterior:**
   - Siempre ejecutar `git pull origin main` antes de modificar archivos y `git push origin main` al culminar.
