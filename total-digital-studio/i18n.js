(function () {
  "use strict";

  var LANGS = ["es", "en"];
  var STORAGE_KEY = "totalstudio_site_lang";

  var LABELS = { es: "ES", en: "EN" };

  var STRINGS = {
    es: {
      "meta.description":
        "Total Digital Studio — Convertimos ideas en productos digitales: juegos, apps, SaaS, IA y sistemas que generan resultados.",
      "meta.title": "Total Digital Studio — Productos digitales que generan resultados",
      "a11y.skip": "Saltar al contenido",
      "a11y.menu": "Abrir menú",
      "brand.tagline": "Apps · IA · Videojuegos",
      "nav.services": "Servicios",
      "nav.portfolio": "Portafolio",
      "nav.contact": "Pedí presupuesto",
      "hero.eyebrow": "Total Digital Studio · San Juan, Argentina",
      "hero.title": "Convertimos ideas en productos digitales que generan resultados",
      "hero.lead": "Juegos, apps, SaaS e IA — de la idea al lanzamiento en producción.",
      "hero.cta.primary": "Empecemos tu proyecto",
      "hero.cta.secondary": "Ver productos reales",
      "hero.trust.1": "Apps publicadas en tiendas",
      "hero.trust.2": "Juegos multijugador en vivo",
      "hero.trust.3": "Sistemas complejos, no solo webs",
      "about.lead":
        "No somos una agencia más. Somos un estudio que lleva juegos, fintech y plataformas complejas a producción real.",
      "why.title": "¿Por qué elegir Total Digital Studio?",
      "why.lead": "Experiencia real en productos complejos, no solo en mockups.",
      "why.stat.products": "Productos disponibles",
      "why.stat.tech": "Tecnologías aplicables",
      "why.stat.response": "Respuesta garantizada",
      "why.1": "Apps publicadas",
      "why.2": "Juegos online",
      "why.3": "IA integrada",
      "why.4": "Desarrollo Full Stack",
      "why.5": "Backend escalable",
      "why.6": "Diseño UX",
      "why.7": "Soporte posterior",
      "tech.title": "Trabajamos con",
      "tech.lead": "Stack moderno para productos que escalan en producción.",
      "services.title": "Qué construimos",
      "services.lead": "Productos digitales completos. No solo páginas.",
      "services.games.title": "Videojuegos",
      "services.games.desc": "2D/3D, multijugador y física avanzada. Web, PC, Android e iOS.",
      "services.mobile.title": "Apps móviles",
      "services.mobile.desc": "Android e iOS publicadas en tiendas, listas para escalar.",
      "services.saas.title": "Plataformas SaaS",
      "services.saas.desc": "Suscripciones, paneles de usuario y backends escalables.",
      "services.ai.title": "Automatización con IA",
      "services.ai.desc": "Asistentes, flujos inteligentes y features con IA integrada.",
      "services.enterprise.title": "Sistemas empresariales",
      "services.enterprise.desc": "ERP, inventarios, operaciones y lógica de negocio robusta.",
      "services.landing.title": "Landings de conversión",
      "services.landing.desc": "Páginas rápidas, claras y diseñadas para vender.",
      "services.dashboard.title": "Dashboards financieros",
      "services.dashboard.desc": "Métricas, reportes y visualización de datos en tiempo real.",
      "services.api.title": "Integraciones API",
      "services.api.desc": "Pagos, terceros, sincronización y ecosistemas conectados.",
      "services.custom.title": "Soluciones a medida",
      "services.custom.desc": "Si es digital y complejo, lo diseñamos y lo lanzamos.",
      "process.title": "Cómo lo hacemos",
      "process.1.title": "Entendemos tu objetivo",
      "process.1.desc": "Qué querés lograr y para quién.",
      "process.2.title": "Diseñamos y planificamos",
      "process.2.desc": "Arquitectura, plazos y entregas claras.",
      "process.3.title": "Construimos en ciclos",
      "process.3.desc": "Avances visibles cada semana.",
      "process.4.title": "Lanzamos y acompañamos",
      "process.4.desc": "A producción, con soporte post-lanzamiento.",
      "portfolio.title": "Productos en producción",
      "portfolio.lead": "Proyectos reales. Resultados reales.",
      "portfolio.ct.type": "App móvil + IA",
      "portfolio.ct.desc": "App financiera con IA, publicada en Android e iOS.",
      "portfolio.ct.stack": "React Native · IA",
      "portfolio.ct.link": "Google Play →",
      "portfolio.dot.type": "Juego 3D PvP",
      "portfolio.dot.desc": "Tower defense multijugador con economía en partida.",
      "portfolio.dot.stack": "Godot · Multiplayer",
      "portfolio.dot.link": "Ver juego →",
      "portfolio.aa.type": "Juego web + móvil",
      "portfolio.aa.desc": "Estrategia PvP online con física 2D y ranking global.",
      "portfolio.aa.stack": "JS · Capacitor · WebSocket",
      "portfolio.aa.link": "Ver juego →",
      "portfolio.tod.type": "Plataforma Web3",
      "portfolio.tod.desc": "SPA con tokenomics, i18n y despliegue automatizado.",
      "portfolio.tod.link": "Ver plataforma →",
      "contact.title": "Contanos tu idea",
      "contact.lead": "Respuesta en menos de 24 h.",
      "contact.whatsapp": "+5492643227101",
      "form.name": "Nombre",
      "form.namePh": "Tu nombre",
      "form.whatsapp": "WhatsApp",
      "form.whatsappPh": "+54 9 ...",
      "form.need": "¿Qué necesitás?",
      "form.needPh": "App, juego, sistema, landing...",
      "form.submit": "Enviar por WhatsApp",
      "cta.quote": "Pedí un presupuesto",
      "cta.start": "Empecemos tu proyecto",
      "cta.call": "Agendemos una llamada",
      "footer.rights": "© 2026",
      "footer.credit": "Productos digitales que generan resultados.",
    },
    en: {
      "meta.description":
        "Total Digital Studio — We turn ideas into digital products: games, apps, SaaS, AI, and systems that drive results.",
      "meta.title": "Total Digital Studio — Digital products that deliver results",
      "a11y.skip": "Skip to content",
      "a11y.menu": "Open menu",
      "brand.tagline": "Apps · AI · Games",
      "nav.services": "Services",
      "nav.portfolio": "Portfolio",
      "nav.contact": "Get a quote",
      "hero.eyebrow": "Total Digital Studio · San Juan, Argentina",
      "hero.title": "We turn ideas into digital products that drive results",
      "hero.lead": "Games, apps, SaaS & AI — from idea to production launch.",
      "hero.cta.primary": "Start your project",
      "hero.cta.secondary": "See real products",
      "hero.trust.1": "Apps published on stores",
      "hero.trust.2": "Live multiplayer games",
      "hero.trust.3": "Complex systems, not just websites",
      "about.lead":
        "We're not another agency. We ship games, fintech, and complex platforms to real production.",
      "why.title": "Why choose Total Digital Studio?",
      "why.lead": "Real experience shipping complex products—not just mockups.",
      "why.stat.products": "Available products",
      "why.stat.tech": "Applicable technologies",
      "why.stat.response": "Guaranteed response",
      "why.1": "Published apps",
      "why.2": "Online games",
      "why.3": "Integrated AI",
      "why.4": "Full Stack development",
      "why.5": "Scalable backend",
      "why.6": "UX design",
      "why.7": "Post-launch support",
      "tech.title": "We work with",
      "tech.lead": "Modern stack for products that scale in production.",
      "services.title": "What we build",
      "services.lead": "Complete digital products. Not just pages.",
      "services.games.title": "Video games",
      "services.games.desc": "2D/3D, multiplayer, advanced physics. Web, PC, Android & iOS.",
      "services.mobile.title": "Mobile apps",
      "services.mobile.desc": "Android & iOS on app stores, ready to scale.",
      "services.saas.title": "SaaS platforms",
      "services.saas.desc": "Subscriptions, user dashboards, and scalable backends.",
      "services.ai.title": "AI automation",
      "services.ai.desc": "Assistants, smart workflows, and integrated AI features.",
      "services.enterprise.title": "Enterprise systems",
      "services.enterprise.desc": "ERP, inventory, operations, and robust business logic.",
      "services.landing.title": "High-conversion landings",
      "services.landing.desc": "Fast, clear pages built to sell.",
      "services.dashboard.title": "Financial dashboards",
      "services.dashboard.desc": "Metrics, reports, and real-time data visualization.",
      "services.api.title": "API integrations",
      "services.api.desc": "Payments, third parties, sync, and connected ecosystems.",
      "services.custom.title": "Custom solutions",
      "services.custom.desc": "If it's digital and complex, we design and ship it.",
      "process.title": "How we do it",
      "process.1.title": "Understand your goal",
      "process.1.desc": "What you want to achieve and for whom.",
      "process.2.title": "Design & plan",
      "process.2.desc": "Architecture, timeline, and clear deliverables.",
      "process.3.title": "Build in cycles",
      "process.3.desc": "Visible progress every week.",
      "process.4.title": "Launch & support",
      "process.4.desc": "To production, with post-launch support.",
      "portfolio.title": "Products in production",
      "portfolio.lead": "Real projects. Real results.",
      "portfolio.ct.type": "Mobile app + AI",
      "portfolio.ct.desc": "Finance app with AI, published on Android & iOS.",
      "portfolio.ct.stack": "React Native · AI",
      "portfolio.ct.link": "Google Play →",
      "portfolio.dot.type": "3D PvP game",
      "portfolio.dot.desc": "Multiplayer tower defense with in-match economy.",
      "portfolio.dot.stack": "Godot · Multiplayer",
      "portfolio.dot.link": "View game →",
      "portfolio.aa.type": "Web + mobile game",
      "portfolio.aa.desc": "Online PvP strategy with 2D physics and global ranking.",
      "portfolio.aa.stack": "JS · Capacitor · WebSocket",
      "portfolio.aa.link": "View game →",
      "portfolio.tod.type": "Web3 platform",
      "portfolio.tod.desc": "SPA with tokenomics, i18n, and automated deployment.",
      "portfolio.tod.link": "View platform →",
      "contact.title": "Tell us your idea",
      "contact.lead": "Response within 24 hours.",
      "contact.whatsapp": "+5492643227101",
      "form.name": "Name",
      "form.namePh": "Your name",
      "form.whatsapp": "WhatsApp",
      "form.whatsappPh": "+1 ...",
      "form.need": "What do you need?",
      "form.needPh": "App, game, system, landing...",
      "form.submit": "Send via WhatsApp",
      "cta.quote": "Get a quote",
      "cta.start": "Start your project",
      "cta.call": "Schedule a call",
      "footer.rights": "© 2026",
      "footer.credit": "Digital products that deliver results.",
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

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(lang, el.getAttribute("data-i18n-placeholder")));
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
