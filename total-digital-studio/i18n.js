(function () {
  "use strict";

  var LANGS = ["es", "en"];
  var STORAGE_KEY = "totalstudio_site_lang";

  var LABELS = {
    es: "ES",
    en: "EN",
  };

  var STRINGS = {
    es: {
      "meta.description":
        "Total Digital Studio — Desarrollo de software a medida: aplicaciones, sitios web, sistemas, ecosistemas digitales y videojuegos.",
      "meta.title": "Total Digital Studio — Desarrollo de Software",
      "a11y.skip": "Saltar al contenido",
      "a11y.menu": "Abrir menú",
      "brand.tagline": "Desarrollo de software",
      "nav.services": "Servicios",
      "nav.process": "Proceso",
      "nav.portfolio": "Portafolio",
      "nav.contact": "Contacto",
      "hero.eyebrow": "Estudio de desarrollo · San Juan, Argentina",
      "hero.title": "Software confiable, diseñado para crecer con su negocio",
      "hero.lead":
        "En Total Digital Studio transformamos ideas en productos digitales sólidos: aplicaciones móviles, sitios web, programas, sistemas a medida, ecosistemas integrados y videojuegos listos para producción.",
      "hero.cta.primary": "Solicitar consulta",
      "hero.cta.secondary": "Ver trabajos realizados",
      "hero.trust.1": "Arquitectura limpia y mantenible",
      "hero.trust.2": "Experiencia en productos publicados",
      "hero.trust.3": "Comunicación clara en cada etapa",
      "about.title": "Quiénes somos",
      "about.lead":
        "Somos un estudio especializado en el ciclo completo del desarrollo de software: análisis, diseño de sistemas, implementación, pruebas y despliegue.",
      "about.p1":
        "Priorizamos código mantenible, separación de responsabilidades y decisiones técnicas que reduzcan la deuda a largo plazo. Nuestro enfoque combina lógica de negocio compleja, rendimiento optimizado y experiencia de usuario cuidada.",
      "about.p2":
        "Hemos llevado aplicaciones a tiendas oficiales, juegos multijugador a producción y plataformas web con integraciones avanzadas. Cada proyecto se aborda con el mismo criterio: entregar un producto estable, escalable y alineado con los objetivos del cliente.",
      "services.title": "Servicios",
      "services.lead":
        "Soluciones digitales integrales para empresas, emprendedores y equipos que necesitan resultados concretos, no solo código.",
      "services.mobile.title": "Aplicaciones móviles",
      "services.mobile.desc":
        "Apps nativas e híbridas para Android e iOS, publicadas en tiendas y optimizadas para uso diario.",
      "services.web.title": "Páginas y sitios web",
      "services.web.desc":
        "Sitios corporativos, landings y aplicaciones web responsivas con despliegue profesional.",
      "services.desktop.title": "Programas y sistemas",
      "services.desktop.desc":
        "Software de escritorio y sistemas a medida con lógica de negocio robusta y flujos eficientes.",
      "services.ecosystem.title": "Ecosistemas digitales",
      "services.ecosystem.desc":
        "Integración de APIs, backends, sincronización en la nube y arquitecturas conectadas de extremo a extremo.",
      "services.games.title": "Videojuegos",
      "services.games.desc":
        "Juegos 2D y 3D, multijugador, física avanzada y distribución en navegador, PC, Android e iOS.",
      "services.consulting.title": "Consultoría técnica",
      "services.consulting.desc":
        "Auditoría de código, refactorización, optimización de rendimiento y acompañamiento en decisiones clave.",
      "process.title": "Cómo trabajamos",
      "process.lead":
        "Un proceso transparente que genera confianza desde la primera reunión hasta el lanzamiento.",
      "process.1.title": "Descubrimiento",
      "process.1.desc":
        "Entendemos su negocio, usuarios y objetivos. Definimos alcance, prioridades y criterios de éxito.",
      "process.2.title": "Diseño técnico",
      "process.2.desc":
        "Proponemos arquitectura, tecnologías y plan de entregas con estimaciones claras y hitos verificables.",
      "process.3.title": "Desarrollo iterativo",
      "process.3.desc":
        "Construimos en ciclos cortos con avances visibles, pruebas continuas y comunicación constante.",
      "process.4.title": "Entrega y soporte",
      "process.4.desc":
        "Publicamos, documentamos y acompañamos el lanzamiento. Ofrecemos mantenimiento y evolución del producto.",
      "tech.title": "Tecnologías",
      "tech.lead":
        "Seleccionamos herramientas probadas en producción según las necesidades de cada proyecto.",
      "portfolio.title": "Portafolio",
      "portfolio.lead":
        "Proyectos reales que demuestran nuestra capacidad para resolver desafíos complejos y llevar productos a producción.",
      "portfolio.ct.type": "App móvil",
      "portfolio.ct.status": "Android e iOS",
      "portfolio.ct.desc":
        "Aplicación financiera integral con activos, presupuestos, metas, recordatorios y asesoría por IA. Diseñada para registro rápido y sincronización confiable en el día a día, en Android e iOS.",
      "portfolio.ct.stack": "React Native · Android · iOS · IA",
      "portfolio.ct.link": "Ver en Google Play →",
      "portfolio.dot.type": "Videojuego",
      "portfolio.dot.status": "Multijugador PvP",
      "portfolio.dot.desc":
        "Tower defense 3D con economía de partida, oleadas sincronizadas y combate PvP en red. Lobby multijugador y pipeline de actualizaciones para Windows, Android e iOS.",
      "portfolio.dot.stack": "Godot · GDScript · Multiplayer · Android · iOS",
      "portfolio.dot.link": "Ver sitio del juego →",
      "portfolio.aa.type": "Videojuego",
      "portfolio.aa.status": "Web, Android e iOS en producción",
      "portfolio.aa.desc":
        "Estrategia táctica con motor de física 2D, construcción de fortalezas, PvP online y ranking global. Disponible en navegador, Android e iOS con soporte multilenguaje.",
      "portfolio.aa.stack": "JavaScript · Capacitor · WebSocket · Android · iOS",
      "portfolio.aa.link": "Ver sitio del juego →",
      "portfolio.tod.type": "Plataforma web",
      "portfolio.tod.status": "Ecosistema Web3",
      "portfolio.tod.desc":
        "SPA institucional con documentación económica, internacionalización, despliegue automatizado y presentación clara de tokenomics, temporadas y arquitectura NFT.",
      "portfolio.tod.link": "Ver plataforma →",
      "contact.title": "Hablemos de su proyecto",
      "contact.lead":
        "Cuéntenos qué necesita construir. Respondemos con una propuesta clara, sin compromiso inicial.",
      "contact.email.label": "Correo",
      "contact.phone.label": "Teléfono",
      "contact.location.label": "Ubicación",
      "contact.location.value": "San Juan, Argentina",
      "contact.card.title": "¿Listo para empezar?",
      "contact.card.desc":
        "Envíenos un correo describiendo su idea, plazos y presupuesto estimado. Le responderemos a la brevedad.",
      "contact.card.cta": "Enviar consulta por correo",
      "contact.card.github": "Ver perfil en GitHub",
      "footer.rights": "© 2026. Todos los derechos reservados.",
      "footer.credit":
        "Fundado por Maximiliano Andrés del Valle Coria — Desarrollo de software a medida.",
    },
    en: {
      "meta.description":
        "Total Digital Studio — Custom software development: applications, websites, systems, digital ecosystems, and games.",
      "meta.title": "Total Digital Studio — Software Development",
      "a11y.skip": "Skip to content",
      "a11y.menu": "Open menu",
      "brand.tagline": "Software development",
      "nav.services": "Services",
      "nav.process": "Process",
      "nav.portfolio": "Portfolio",
      "nav.contact": "Contact",
      "hero.eyebrow": "Development studio · San Juan, Argentina",
      "hero.title": "Reliable software built to grow with your business",
      "hero.lead":
        "At Total Digital Studio we turn ideas into solid digital products: mobile apps, websites, desktop software, custom systems, integrated ecosystems, and production-ready games.",
      "hero.cta.primary": "Request a consultation",
      "hero.cta.secondary": "View our work",
      "hero.trust.1": "Clean, maintainable architecture",
      "hero.trust.2": "Experience shipping published products",
      "hero.trust.3": "Clear communication at every stage",
      "about.title": "Who we are",
      "about.lead":
        "We are a studio focused on the full software development lifecycle: analysis, system design, implementation, testing, and deployment.",
      "about.p1":
        "We prioritize maintainable code, separation of concerns, and technical decisions that reduce long-term debt. Our approach combines complex business logic, optimized performance, and thoughtful user experience.",
      "about.p2":
        "We have shipped apps to official stores, multiplayer games to production, and web platforms with advanced integrations. Every project follows the same principle: deliver a stable, scalable product aligned with the client's goals.",
      "services.title": "Services",
      "services.lead":
        "End-to-end digital solutions for businesses, founders, and teams that need real outcomes—not just code.",
      "services.mobile.title": "Mobile applications",
      "services.mobile.desc":
        "Native and hybrid apps for Android and iOS, published to stores and optimized for daily use.",
      "services.web.title": "Websites & web apps",
      "services.web.desc":
        "Corporate sites, landing pages, and responsive web applications with professional deployment.",
      "services.desktop.title": "Software & systems",
      "services.desktop.desc":
        "Desktop software and custom systems with robust business logic and efficient workflows.",
      "services.ecosystem.title": "Digital ecosystems",
      "services.ecosystem.desc":
        "API integration, backends, cloud sync, and end-to-end connected architectures.",
      "services.games.title": "Video games",
      "services.games.desc":
        "2D and 3D games, multiplayer, advanced physics, and distribution on web, PC, Android, and iOS.",
      "services.consulting.title": "Technical consulting",
      "services.consulting.desc":
        "Code audits, refactoring, performance optimization, and guidance on key technical decisions.",
      "process.title": "How we work",
      "process.lead":
        "A transparent process that builds trust from the first meeting through launch.",
      "process.1.title": "Discovery",
      "process.1.desc":
        "We understand your business, users, and goals. We define scope, priorities, and success criteria.",
      "process.2.title": "Technical design",
      "process.2.desc":
        "We propose architecture, technologies, and a delivery plan with clear estimates and verifiable milestones.",
      "process.3.title": "Iterative development",
      "process.3.desc":
        "We build in short cycles with visible progress, continuous testing, and constant communication.",
      "process.4.title": "Delivery & support",
      "process.4.desc":
        "We publish, document, and support launch. We offer maintenance and product evolution.",
      "tech.title": "Technologies",
      "tech.lead":
        "We choose production-proven tools based on each project's requirements.",
      "portfolio.title": "Portfolio",
      "portfolio.lead":
        "Real projects that demonstrate our ability to solve complex challenges and ship to production.",
      "portfolio.ct.type": "Mobile app",
      "portfolio.ct.status": "Android & iOS",
      "portfolio.ct.desc":
        "Full-featured finance app with assets, budgets, goals, reminders, and AI guidance. Built for fast logging and reliable daily sync on Android and iOS.",
      "portfolio.ct.stack": "React Native · Android · iOS · AI",
      "portfolio.ct.link": "View on Google Play →",
      "portfolio.dot.type": "Video game",
      "portfolio.dot.status": "PvP multiplayer",
      "portfolio.dot.desc":
        "3D tower defense with in-match economy, synchronized waves, and online PvP combat. Multiplayer lobby and update pipeline for Windows, Android, and iOS.",
      "portfolio.dot.stack": "Godot · GDScript · Multiplayer · Android · iOS",
      "portfolio.dot.link": "View game site →",
      "portfolio.aa.type": "Video game",
      "portfolio.aa.status": "Web, Android & iOS in production",
      "portfolio.aa.desc":
        "Tactical strategy with 2D physics, fortress building, online PvP, and global leaderboard. Available in browser, Android, and iOS with multilingual support.",
      "portfolio.aa.stack": "JavaScript · Capacitor · WebSocket · Android · iOS",
      "portfolio.aa.link": "View game site →",
      "portfolio.tod.type": "Web platform",
      "portfolio.tod.status": "Web3 ecosystem",
      "portfolio.tod.desc":
        "Institutional SPA with economic documentation, i18n, automated deployment, and clear presentation of tokenomics, seasons, and NFT architecture.",
      "portfolio.tod.link": "View platform →",
      "contact.title": "Let's talk about your project",
      "contact.lead":
        "Tell us what you need to build. We'll respond with a clear proposal—no initial commitment required.",
      "contact.email.label": "Email",
      "contact.phone.label": "Phone",
      "contact.location.label": "Location",
      "contact.location.value": "San Juan, Argentina",
      "contact.card.title": "Ready to get started?",
      "contact.card.desc":
        "Send us an email describing your idea, timeline, and estimated budget. We'll get back to you promptly.",
      "contact.card.cta": "Send inquiry by email",
      "contact.card.github": "View GitHub profile",
      "footer.rights": "© 2026. All rights reserved.",
      "footer.credit":
        "Founded by Maximiliano Andrés del Valle Coria — Custom software development.",
    },
  };

  function detectLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored && LANGS.indexOf(stored) !== -1) return stored;
    var nav = (navigator.language || "es").slice(0, 2).toLowerCase();
    return LANGS.indexOf(nav) !== -1 ? nav : "es";
  }

  function t(lang, key) {
    return (STRINGS[lang] && STRINGS[lang][key]) || STRINGS.es[key] || "";
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.title = t(lang, "meta.title");

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t(lang, "meta.description"));

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(lang, el.getAttribute("data-i18n"));
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(lang, el.getAttribute("data-i18n-aria")));
    });

    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  function buildLangSwitch(container, currentLang) {
    container.innerHTML = "";
    LANGS.forEach(function (code) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("data-lang", code);
      btn.textContent = LABELS[code];
      btn.setAttribute("aria-label", code === "es" ? "Español" : "English");
      if (code === currentLang) btn.classList.add("is-active");
      btn.addEventListener("click", function () {
        applyLang(code);
      });
      container.appendChild(btn);
    });
  }

  var currentLang = detectLang();
  var langContainer = document.getElementById("site-lang");
  if (langContainer) buildLangSwitch(langContainer, currentLang);
  applyLang(currentLang);
})();
