(function () {
  "use strict";

  var LANGS = ["en", "es", "fil", "zh"];
  var STORAGE_KEY = "angryaxies_site_lang";

  var LABELS = {
    en: "English",
    es: "Español",
    fil: "Filipino",
    zh: "中文",
  };

  var STRINGS = {
    en: {
      "meta.index.description":
        "Angry Axies — strategy game in browser and Android. Build your fortress, tactical powers, PvP, and global leaderboard.",
      "meta.index.title": "Angry Axies — Browser & Android Game",
      "meta.download.title": "Angry Axies — Download APK (Android)",
      "site.version.label": "Version",
      "index.lead":
        "Design your fortress, optimize your energy, and unleash chaos on your rival. Are you ready for the challenge?",
      "index.btn.play": "Play in browser",
      "index.btn.iphone": "iPhone",
      "index.btn.apk": "Download APK (Android)",
      "index.features.title": "What's included",
      "index.features.1": "Campaign and challenging levels",
      "index.features.2": "Global leaderboard",
      "index.features.3": "Online PvP against other players",
      "index.features.4": "Attack and defense powers",
      "index.features.5": "Unique building blocks in this game that take strategy to the next level",
      "index.features.6": "Android app and browser to play wherever you want",
      "index.features.7": "Variety of languages: English, Spanish, Filipino, and Chinese",
      "index.community.title": "Community",
      "index.btn.discord": "Join Discord",
      "index.footer.server": "Game server:",
      "index.footer.install": "Android installation instructions",
      "download.title": "Angry Axies for Android (APK)",
      "download.intro":
        "The official download for the current build is on GitHub, in release <strong>1.109</strong>. Open the release page and download the APK from Assets.",
      "download.btn.release": "Open release 1.109 on GitHub",
      "download.direct.label": "<strong>Direct download for this version (1.109):</strong>",
      "download.latest":
        'You can also use the latest published release: <a href="https://github.com/CoriaMaximiliano/Angry-Axies/releases/latest" style="color:#7eb8ff;">releases/latest</a>',
      "download.req.title": "Requirements",
      "download.req.1": "Android 6.0 or higher",
      "download.req.2": "Landscape orientation recommended",
      "download.req.3": "Internet connection for leaderboard and PvP",
      "download.install.title": "Install on your phone",
      "download.install.1":
        "Download <code>AngryAxies-1.109.apk</code> on your phone (Chrome, Drive, USB, etc.).",
      "download.install.2":
        "Open the downloaded file. If Android asks for permission, enable “Install unknown apps” only for that browser or file manager.",
      "download.install.3":
        "Confirm installation. The icon will appear as <strong>Angry Axies</strong>.",
      "download.install.4":
        "When you open the app, tap the screen once if audio does not start (Android requirement).",
      "download.server":
        "The app bundles the same game as the browser and connects to <code>angryaxies.servehttp.com</code> for leaderboard, health, and PvP.",
      "download.web":
        '<strong>Play without installing:</strong> use the web version at <a href="http://angryaxies.servehttp.com/" style="color:#7eb8ff;">angryaxies.servehttp.com</a> (best on PC; also works in mobile browsers).',
      "download.publisher":
        "<strong>Updates (for publishers):</strong> when you build a new APK with <code>npm run android:apk</code>, rename it to <code>AngryAxies-X.XXX.apk</code>, create a GitHub release with that tag, and update the links on this page.",
      "download.security":
        "<strong>Security note:</strong> this is a debug build. Android may warn about apps from unknown sources; install only if you trust the project.",
      "download.back.home": "Back to home",
      "download.back.discord": "Discord",
      "nav.lang": "Language",
    },
    es: {
      "meta.index.description":
        "Angry Axies — juego de estrategia en navegador y Android. Forjá tu fortaleza, poderes tácticos, PvP y ranking global.",
      "meta.index.title": "Angry Axies — Juego en navegador y Android",
      "meta.download.title": "Angry Axies — Descargar APK (Android)",
      "site.version.label": "Versión",
      "index.lead":
        "Diseña tu fortaleza, optimiza tu energía y desata el caos sobre tu rival. ¿Estás listo para el desafío?",
      "index.btn.play": "Jugar en el navegador",
      "index.btn.iphone": "iPhone",
      "index.btn.apk": "Descargar APK (Android)",
      "index.features.title": "Qué incluye",
      "index.features.1": "Campaña y niveles desafiantes",
      "index.features.2": "Ranking global",
      "index.features.3": "PvP en línea contra otros jugadores",
      "index.features.4": "Poderes de ataque y defensa",
      "index.features.5": "Bloques de construcción únicos en este juego, que llevarán las estrategias a otro nivel",
      "index.features.6": "App Android y navegador para jugar donde quieras",
      "index.features.7": "Variedad de idiomas: inglés, español, filipino y chino",
      "index.community.title": "Comunidad",
      "index.btn.discord": "Unite al Discord",
      "index.footer.server": "Servidor de juego:",
      "index.footer.install": "Instrucciones de instalación Android",
      "download.title": "Angry Axies para Android (APK)",
      "download.intro":
        "La descarga oficial del build actual está en GitHub, en la release <strong>1.109</strong>. Abrí la página del release y descargá el APK desde «Assets».",
      "download.btn.release": "Abrir release 1.109 en GitHub",
      "download.direct.label": "<strong>Descarga directa de esta versión (1.109):</strong>",
      "download.latest":
        'También podés usar la última release publicada: <a href="https://github.com/CoriaMaximiliano/Angry-Axies/releases/latest" style="color:#7eb8ff;">releases/latest</a>',
      "download.req.title": "Requisitos",
      "download.req.1": "Android 6.0 o superior",
      "download.req.2": "Orientación horizontal recomendada",
      "download.req.3": "Conexión a internet para ranking y PvP",
      "download.install.title": "Instalación en el celular",
      "download.install.1":
        "Descargá <code>AngryAxies-1.109.apk</code> en el teléfono (Chrome, Drive, USB, etc.).",
      "download.install.2":
        "Abrí el archivo descargado. Si Android pide permiso, activá «Instalar apps desconocidas» solo para ese navegador o gestor de archivos.",
      "download.install.3":
        "Confirmá la instalación. El icono aparecerá como <strong>Angry Axies</strong>.",
      "download.install.4":
        "Al abrir la app, tocá la pantalla una vez si el audio no arranca (requisito de Android).",
      "download.server":
        "La app empaqueta el mismo juego que el navegador y se conecta al servidor en <code>angryaxies.servehttp.com</code> para ranking, health y PvP.",
      "download.web":
        '<strong>Jugar sin instalar:</strong> podés usar la versión web en <a href="http://angryaxies.servehttp.com/" style="color:#7eb8ff;">angryaxies.servehttp.com</a> (ideal en PC; en móvil también funciona en el navegador).',
      "download.publisher":
        "<strong>Actualizaciones (quien publica):</strong> al generar una APK nueva con <code>npm run android:apk</code>, renombrala a <code>AngryAxies-X.XXX.apk</code>, creá una release en GitHub con ese tag y actualizá los enlaces en esta página.",
      "download.security":
        "<strong>Nota de seguridad:</strong> es un build de prueba (debug). Android puede advertir sobre apps de origen desconocido; instalá solo si confiás en el origen del proyecto.",
      "download.back.home": "Volver al inicio",
      "download.back.discord": "Discord",
      "nav.lang": "Idioma",
    },
    fil: {
      "meta.index.description":
        "Angry Axies — larong estratehiya sa browser at Android. Itayo ang iyong kuta, tactical powers, PvP, at global leaderboard.",
      "meta.index.title": "Angry Axies — Laro sa Browser at Android",
      "meta.download.title": "Angry Axies — I-download ang APK (Android)",
      "site.version.label": "Bersyon",
      "index.lead":
        "Idisenyo ang iyong kuta, i-optimize ang enerhiya mo, at ilabas ang kaguluhan sa kalaban. Handa ka na ba sa hamon?",
      "index.btn.play": "Maglaro sa browser",
      "index.btn.iphone": "iPhone",
      "index.btn.apk": "I-download ang APK (Android)",
      "index.features.title": "Mga kasama",
      "index.features.1": "Campaign at mga mapaghamong level",
      "index.features.2": "Global leaderboard",
      "index.features.3": "Online PvP laban sa ibang manlalaro",
      "index.features.4": "Mga power ng pag-atake at depensa",
      "index.features.5": "Mga natatanging building block sa larong ito na magdadala ng estratehiya sa susunod na antas",
      "index.features.6": "Android app at browser para maglaro kahit saan",
      "index.features.7": "Iba't ibang wika: Ingles, Espanyol, Filipino, at Tsino",
      "index.community.title": "Komunidad",
      "index.btn.discord": "Sumali sa Discord",
      "index.footer.server": "Game server:",
      "index.footer.install": "Mga tagubilin sa pag-install sa Android",
      "download.title": "Angry Axies para sa Android (APK)",
      "download.intro":
        "Ang opisyal na download ng kasalukuyang build ay nasa GitHub, sa release na <strong>1.109</strong>. Buksan ang release page at i-download ang APK mula sa Assets.",
      "download.btn.release": "Buksan ang release 1.109 sa GitHub",
      "download.direct.label": "<strong>Direktang download para sa bersyong ito (1.109):</strong>",
      "download.latest":
        'Maaari mo ring gamitin ang pinakabagong release: <a href="https://github.com/CoriaMaximiliano/Angry-Axies/releases/latest" style="color:#7eb8ff;">releases/latest</a>',
      "download.req.title": "Mga kinakailangan",
      "download.req.1": "Android 6.0 o mas mataas",
      "download.req.2": "Inirerekomenda ang landscape orientation",
      "download.req.3": "Kailangan ng internet para sa leaderboard at PvP",
      "download.install.title": "Pag-install sa cellphone",
      "download.install.1":
        "I-download ang <code>AngryAxies-1.109.apk</code> sa telepono (Chrome, Drive, USB, atbp.).",
      "download.install.2":
        "Buksan ang na-download na file. Kung humingi ng permiso ang Android, i-enable ang “Install unknown apps” para lang sa browser o file manager na iyon.",
      "download.install.3":
        "Kumpirmahin ang pag-install. Lalabas ang icon bilang <strong>Angry Axies</strong>.",
      "download.install.4":
        "Kapag binuksan ang app, i-tap ang screen nang isang beses kung hindi agad tumutugtog ang audio (kailangan ng Android).",
      "download.server":
        "Pareho ang laro sa browser at kumokonekta sa <code>angryaxies.servehttp.com</code> para sa leaderboard, health, at PvP.",
      "download.web":
        '<strong>Maglaro nang hindi nag-i-install:</strong> gamitin ang web version sa <a href="http://angryaxies.servehttp.com/" style="color:#7eb8ff;">angryaxies.servehttp.com</a> (mas mainam sa PC; gumagana rin sa mobile browser).',
      "download.publisher":
        "<strong>Mga update (para sa publisher):</strong> kapag gumawa ng bagong APK gamit ang <code>npm run android:apk</code>, palitan ang pangalan sa <code>AngryAxies-X.XXX.apk</code>, gumawa ng GitHub release na may tag na iyon, at i-update ang mga link sa pahinang ito.",
      "download.security":
        "<strong>Paalala sa seguridad:</strong> debug build ito. Maaaring magbabala ang Android tungkol sa unknown sources; mag-install lang kung pinagkakatiwalaan mo ang proyekto.",
      "download.back.home": "Bumalik sa home",
      "download.back.discord": "Discord",
      "nav.lang": "Wika",
    },
    zh: {
      "meta.index.description":
        "Angry Axies — 浏览器与 Android 上的策略游戏。建造要塞、战术技能、PvP 与全球排行榜。",
      "meta.index.title": "Angry Axies — 浏览器与 Android 游戏",
      "meta.download.title": "Angry Axies — 下载 APK（Android）",
      "site.version.label": "版本",
      "index.lead":
        "设计你的要塞，优化能量，向对手释放混乱。你准备好接受挑战了吗？",
      "index.btn.play": "在浏览器中游玩",
      "index.btn.iphone": "iPhone",
      "index.btn.apk": "下载 APK（Android）",
      "index.features.title": "游戏内容",
      "index.features.1": "战役与挑战关卡",
      "index.features.2": "全球排行榜",
      "index.features.3": "在线 PvP 对战其他玩家",
      "index.features.4": "攻击与防御技能",
      "index.features.5": "本游戏独有的建造方块，让策略更上一层楼",
      "index.features.6": "Android 应用与浏览器，随时随地畅玩",
      "index.features.7": "多种语言：英语、西班牙语、菲律宾语和中文",
      "index.community.title": "社区",
      "index.btn.discord": "加入 Discord",
      "index.footer.server": "游戏服务器：",
      "index.footer.install": "Android 安装说明",
      "download.title": "Angry Axies Android 版（APK）",
      "download.intro":
        "当前版本的官方下载在 GitHub 上，标签为 <strong>1.109</strong> 的 release。打开 release 页面，从 Assets 下载 APK。",
      "download.btn.release": "在 GitHub 打开 1.109 release",
      "download.direct.label": "<strong>此版本（1.109）直接下载：</strong>",
      "download.latest":
        '也可使用最新发布的 release：<a href="https://github.com/CoriaMaximiliano/Angry-Axies/releases/latest" style="color:#7eb8ff;">releases/latest</a>',
      "download.req.title": "系统要求",
      "download.req.1": "Android 6.0 或更高",
      "download.req.2": "建议使用横屏",
      "download.req.3": "排行榜与 PvP 需要网络连接",
      "download.install.title": "在手机上安装",
      "download.install.1":
        "在手机上下载 <code>AngryAxies-1.109.apk</code>（Chrome、Drive、USB 等）。",
      "download.install.2":
        "打开下载的文件。若 Android 请求权限，仅对该浏览器或文件管理器启用「安装未知应用」。",
      "download.install.3":
        "确认安装。图标将显示为 <strong>Angry Axies</strong>。",
      "download.install.4":
        "打开应用后，若音频未启动，请点击屏幕一次（Android 要求）。",
      "download.server":
        "应用与浏览器版为同一游戏，通过 <code>angryaxies.servehttp.com</code> 连接排行榜、health 与 PvP。",
      "download.web":
        '<strong>无需安装即可游玩：</strong>使用网页版 <a href="http://angryaxies.servehttp.com/" style="color:#7eb8ff;">angryaxies.servehttp.com</a>（PC 体验更佳；手机浏览器也可）。',
      "download.publisher":
        "<strong>更新说明（发布者）：</strong>使用 <code>npm run android:apk</code> 生成新 APK 后，重命名为 <code>AngryAxies-X.XXX.apk</code>，在 GitHub 创建对应 tag 的 release，并更新本页链接。",
      "download.security":
        "<strong>安全提示：</strong>此为 debug 测试版。Android 可能提示未知来源应用；请仅在信任项目来源时安装。",
      "download.back.home": "返回首页",
      "download.back.discord": "Discord",
      "nav.lang": "语言",
    },
  };

  function detectLang() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved && STRINGS[saved]) return saved;
    return "en";
  }

  function t(lang, key) {
    var pack = STRINGS[lang] || STRINGS.en;
    return pack[key] != null ? pack[key] : STRINGS.en[key] || "";
  }

  function applyLang(lang) {
    if (LANGS.indexOf(lang) === -1) lang = "en";
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === "fil" ? "fil" : lang === "zh" ? "zh-Hans" : lang;

    var page = document.body.getAttribute("data-page") || "index";
    var titleKey = page === "download" ? "meta.download.title" : "meta.index.title";
    document.title = t(lang, titleKey);

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && page === "index") {
      metaDesc.setAttribute("content", t(lang, "meta.index.description"));
    }

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(lang, el.getAttribute("data-i18n"));
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(lang, el.getAttribute("data-i18n-html"));
    });

    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      var code = btn.getAttribute("data-lang");
      btn.classList.toggle("is-active", code === lang);
      btn.setAttribute("aria-pressed", code === lang ? "true" : "false");
    });
  }

  function buildLangSwitch() {
    var nav = document.createElement("nav");
    nav.className = "lang-switch";
    nav.setAttribute("aria-label", "Language");

    LANGS.forEach(function (code) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("data-lang", code);
      btn.textContent = LABELS[code];
      btn.addEventListener("click", function () {
        applyLang(code);
      });
      nav.appendChild(btn);
    });

    var mount = document.getElementById("site-lang");
    if (mount) {
      mount.appendChild(nav);
    } else {
      document.body.insertBefore(nav, document.body.firstChild);
    }
  }

  function loadSiteVersion() {
    var el = document.getElementById("site-version");
    if (!el) return;
    fetch("./site-meta.json")
      .then(function (res) {
        return res.ok ? res.json() : null;
      })
      .then(function (meta) {
        if (meta && meta.version) el.textContent = meta.version;
      })
      .catch(function () {});
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildLangSwitch();
    loadSiteVersion();
    applyLang(detectLang());
  });

  window.AngryAxiesSiteI18n = { applyLang: applyLang, detectLang: detectLang };
})();
