(() => {
  'use strict';
  // English remains the source markup and the default on every page load.
  const selectors = [
    'nav[aria-label="Guide navigation"] a:nth-child(1)',
    'nav[aria-label="Guide navigation"] a:nth-child(2)',
    '.eyebrow', 'h1', '.lead', '.facts', '#build-heading',
    '.build:nth-child(1) h3', '.build:nth-child(1) .btn', '.build:nth-child(1) p',
    '.build:nth-child(2) .btn', '.build:nth-child(2) p',
    '.build:nth-child(3) .btn', '.build:nth-child(3) p', '#builds > p',
    '#try-heading', 'ol li:nth-child(1)', 'ol li:nth-child(2)', 'ol li:nth-child(3)',
    '#vision-heading', 'section[aria-labelledby="vision-heading"] p:nth-of-type(1)',
    'section[aria-labelledby="vision-heading"] p:nth-of-type(2)', '#core-heading',
    '#axie-core p:nth-of-type(1)', '#axie-core p:nth-of-type(2)', '#axie-core p:nth-of-type(3)',
    'footer a:nth-child(1)', 'footer a:nth-child(2)', 'footer > p:last-child',
  ];
  const targets = selectors.map(selector => document.querySelector(`.guide-panel ${selector}`));
  if (targets.some(target => !target)) return;
  const translations = {
    en: targets.map(target => target.innerHTML),
    es: [
      'Inicio de Angry Axies', 'Jugar e instalar', 'AXIE VIBEATHON 2026 · GUÍA DEL JUEGO',
      'Construí. Defendé.<br>Destruí.',
      'Angry Axies combina construcción y combate con física. Creá tu Axie, diseñá una fortaleza y encontrá el disparo que derrumbe las defensas de tu rival.',
      '<strong>Jugá siempre en horizontal.</strong> En computadora, arrastrá con el mouse para apuntar y soltá para disparar. En teléfonos y tablets, hacé el mismo gesto con el dedo.',
      'Elegí dónde jugar', 'Navegador', 'Jugar en el navegador',
      'Esperá la carga, elegí <strong>JUGAR / Play</strong> y después <strong>Historia / Story</strong>. En Windows y macOS se usa esta versión sin instalar un programa de escritorio. Se recomienda Chrome.',
      'Descargar en Google Play',
      'Abrí Google Play en un dispositivo Android compatible, instalá Angry Axies y abrilo en horizontal. Esperá la carga y elegí Jugar. Google Play determina la disponibilidad por dispositivo y región.',
      'Descargar en App Store',
      'Requiere iOS/iPadOS 15.0 o posterior. Instalá la app, abrila en horizontal y elegí Jugar después de la carga. App Store determina la disponibilidad. La app no está verificada para uso nativo en macOS.',
      'Mantené una conexión a internet para cargar contenido y usar las funciones en línea. Podés jugar como invitado; usá el mismo dispositivo y navegador para conservar el progreso local. Idiomas del juego: inglés, español, japonés y filipino.',
      'Tu primera partida',
      '<strong>Probá Historia.</strong> Apuntá a los puntos débiles de las estructuras, derribá torres y mejorá tu puntuación.',
      '<strong>Abrí el Laboratorio.</strong> Elegí una clase, un cuerpo y seis partes. Poné nombre a tu Axie, guardalo y equipalo.',
      '<strong>Explorá 1vs1.</strong> Construí una fortaleza y descubrí cómo resiste tu diseño frente a un rival.',
      'Visión del producto',
      'Queremos que Angry Axies sea fácil de empezar y gratificante de dominar. Los jugadores se expresan con los Axies que crean, las fortalezas que construyen y los disparos que perfeccionan. El ciclo es simple: construir, probar, atacar, aprender y mejorar.',
      'La campaña enseña precisión y a entender las estructuras; las fortalezas creadas por jugadores y el PvP plantean nuevos problemas por resolver. A largo plazo buscamos un juego impulsado por su comunidad, con nuevos desafíos, opciones de construcción y ajustes de equilibrio basados en las opiniones de los jugadores. Una experiencia fluida en horizontal en navegador, iPhone y Android es central para esa visión.',
      'Identidad Axie con un propósito jugable',
      'El Laboratorio de Axies usa el Axie Mixer SDK y ofrece <strong>9 clases, 13 formas de cuerpo y 606 partes</strong> entre ojos, bocas, orejas, cuernos, espaldas y colas, con variantes evolucionadas, Mystic y especiales. La clase y el cuerpo se eligen por separado. Los jugadores pueden nombrar su creación, equiparla para jugar y usarla como avatar.',
      'En PvP, las seis familias de partes elegidas determinan los atributos de combate: Planta agrega vida; Agua reduce el daño de ondas explosivas; Bestia reduce el daño por impactos de estructuras; Reptil reduce el daño de proyectiles; Ave reduce el daño por caídas; y Bicho reduce el daño de Doble tiro y Fantasma. Las ondas explosivas comunes que solo empujan al Axie no le quitan vida.',
      'Las mejoras de vida se conservan al cambiar el diseño, y los diseños guardados se integran con el sistema de progreso de la cuenta. Los bonos y resistencias de las partes se aplican en PvP. Las creaciones del laboratorio son diseños dentro del juego: elegir partes visuales raras no crea un NFT ni acredita la propiedad de un Axie NFT existente.',
      'Ver el video del juego', 'Unite a la comunidad',
      'Menú del navegador verificado el 8 de septiembre de 2026: v1.633. Las versiones de las tiendas siguen su propia numeración y calendario de actualizaciones.',
    ],
    zh: [
      'Angry Axies 首页', '游玩与安装', 'AXIE VIBEATHON 2026 · 游戏指南',
      '建造。防守。<br>摧毁。',
      'Angry Axies 是一款基于物理的建造对战游戏。创造你的 Axie，设计堡垒，找到能够击垮对手防御的那一发射击。',
      '<strong>请始终横屏游玩。</strong>在电脑上，拖动鼠标瞄准，松开即可发射。在手机和平板上，用手指完成相同手势。',
      '选择游玩平台', '浏览器', '在浏览器中游玩',
      '等待加载完成，选择 <strong>Play / JUGAR（开始）</strong>，然后选择 <strong>Story / Historia（剧情）</strong>。Windows 和 macOS 玩家使用此版本，无需桌面安装程序。推荐使用 Chrome。',
      '在 Google Play 下载',
      '在兼容的 Android 设备上打开 Google Play，安装 Angry Axies，然后横屏启动。等待加载完成后选择开始。设备和地区的可用性由 Google Play 决定。',
      '在 App Store 下载',
      '需要 iOS/iPadOS 15.0 或更新版本。安装后横屏启动，加载完成后选择开始。可用性由 App Store 决定。此应用尚未验证可在 macOS 上原生运行。',
      '请保持网络连接，以加载内容并使用在线功能。可以游客身份游玩；使用同一设备和浏览器以保留本地进度。游戏语言：英语、西班牙语、日语和菲律宾语。',
      '第一次游玩',
      '<strong>尝试剧情模式。</strong>瞄准结构弱点，击倒高塔，提高分数。',
      '<strong>打开实验室。</strong>选择类别、体型和六个部件。为 Axie 命名、保存并装备。',
      '<strong>探索 1vs1。</strong>建造堡垒，看看你的设计能否抵御对手。',
      '产品愿景',
      '我们希望 Angry Axies 易于上手，也能让精进技巧充满成就感。玩家通过自己创造的 Axie、建造的堡垒和掌握的射击技巧表达个性。核心循环很简单：建造、测试、进攻、学习和改进。',
      '剧情模式培养精准射击和对结构的理解；玩家建造的堡垒与 PvP 带来新的挑战。我们的长期目标是打造由社区推动的游戏，根据玩家反馈加入新挑战、建造选项和平衡调整。在浏览器、iPhone 和 Android 上提供流畅的横屏体验，是这一愿景的核心。',
      '让 Axie 个性融入玩法',
      'Axie 实验室使用 Axie Mixer SDK，提供 <strong>9 个类别、13 种体型和 606 个部件</strong>，涵盖眼睛、嘴巴、耳朵、角、背部和尾巴，包括进化、Mystic 和特殊外观。类别与体型可独立选择。玩家可以为作品命名、装备上场，并用作头像。',
      '在 PvP 中，所选六个部件的家族决定战斗属性：植物增加生命值；水生降低造成伤害的爆炸波伤害；野兽降低结构撞击伤害；爬行降低投射物伤害；鸟类降低坠落伤害；昆虫降低双重射击和幽灵攻击伤害。仅推动 Axie 的普通爆炸波不会扣除生命值。',
      '更换设计时，生命值升级会保留；保存的设计与现有账号进度系统整合。部件加成和抗性在 PvP 中生效。实验室作品是游戏内设计：选择稀有外观部件不会铸造 NFT，也不证明拥有现有的 Axie NFT。',
      '观看游戏视频', '加入社区',
      '浏览器菜单于 2026 年 9 月 8 日验证：v1.633。商店版本有各自的版本编号和更新计划。',
    ],
    fil: [
      'Home ng Angry Axies', 'Maglaro at mag-install', 'AXIE VIBEATHON 2026 · GABAY SA LARO',
      'Buuin. Ipagtanggol.<br>Wasakin.',
      'Ang Angry Axies ay larong pagbuo at labanan na gumagamit ng physics. Gumawa ng sarili mong Axie, magdisenyo ng kuta, at hanapin ang tirang magpapabagsak sa depensa ng kalaban.',
      '<strong>Palaging maglaro nang landscape.</strong> Sa computer, i-drag ang mouse para tumutok at bitawan para magpaputok. Sa mga phone at tablet, gawin ang parehong galaw gamit ang daliri.',
      'Piliin kung saan maglalaro', 'Browser', 'Maglaro sa browser',
      'Hintaying matapos ang pag-load, piliin ang <strong>Play / JUGAR</strong>, at pagkatapos ay <strong>Story / Historia</strong>. Ito ang bersyong ginagamit sa Windows at macOS nang walang desktop installer. Inirerekomenda ang Chrome.',
      'Kunin sa Google Play',
      'Buksan ang Google Play sa isang compatible na Android device, i-install ang Angry Axies, at buksan ito nang landscape. Hintayin ang pag-load at piliin ang Play. Google Play ang nagtatakda ng availability ayon sa device at rehiyon.',
      'Kunin sa App Store',
      'Kailangan ang iOS/iPadOS 15.0 o mas bago. I-install, buksan nang landscape, at piliin ang Play pagkatapos mag-load. App Store ang nagtatakda ng availability. Hindi pa verified ang app para sa native na paggamit sa macOS.',
      'Panatilihin ang internet connection para mag-load ng content at gamitin ang online features. Maaaring maglaro bilang guest; gamitin ang parehong device at browser upang mapanatili ang lokal na progreso. Mga wika ng laro: Ingles, Espanyol, Hapon, at Filipino.',
      'Ang unang paglalaro mo',
      '<strong>Subukan ang Story.</strong> Puntiryahin ang mahihinang bahagi ng mga istruktura, pabagsakin ang mga tore, at pagbutihin ang iyong score.',
      '<strong>Buksan ang Laboratory.</strong> Pumili ng class, katawan, at anim na bahagi. Pangalanan at i-save ang iyong Axie, pagkatapos ay i-equip ito.',
      '<strong>Subukan ang 1vs1.</strong> Bumuo ng kuta at alamin kung gaano katibay ang iyong disenyo laban sa kalaban.',
      'Bisyon ng produkto',
      'Gusto naming madaling simulan ang Angry Axies at kasiya-siyang paghusayan. Naipapakita ng mga manlalaro ang kanilang personalidad sa mga Axie na nililikha nila, mga kutang binubuo, at mga tirang pinaghuhusayan. Simple ang siklo: bumuo, sumubok, umatake, matuto, at pagbutihin.',
      'Itinuturo ng campaign ang katumpakan at pag-unawa sa mga istruktura; nagbibigay naman ng mga bagong hamon ang mga kutang gawa ng manlalaro at ang PvP. Ang pangmatagalang layunin namin ay larong umuunlad kasama ng komunidad, na may mga bagong hamon, pagpipilian sa pagbuo, at pag-aayos ng balanse batay sa feedback. Mahalaga sa bisyong ito ang maayos na landscape experience sa browser, iPhone, at Android.',
      'Identidad ng Axie na may saysay sa laro',
      'Gumagamit ang Axie Laboratory ng Axie Mixer SDK para magbigay ng <strong>9 na class, 13 hugis ng katawan, at 606 na bahagi</strong> para sa mata, bibig, tainga, sungay, likod, at buntot, kasama ang evolved, Mystic, at special na hitsura. Magkahiwalay ang pagpili ng class at hugis ng katawan. Maaaring pangalanan ang nilikha, i-equip sa laro, at gamitin bilang avatar.',
      'Sa PvP, ang mga pamilya ng anim na napiling bahagi ang nagtatakda ng combat attributes: nagdaragdag ng buhay ang Plant; binabawasan ng Aquatic ang damage mula sa mapaminsalang explosion waves; binabawasan ng Beast ang structural-impact damage; ng Reptile ang projectile damage; ng Bird ang fall damage; at ng Bug ang damage ng Double Shot at Ghost. Hindi nakakabawas ng buhay ang ordinaryong explosion waves na nagtutulak lamang sa Axie.',
      'Nananatili ang health upgrades kapag binago ang disenyo, at nakakabit ang mga naka-save na disenyo sa kasalukuyang account progress system. Sa PvP gumagana ang mga bonus at resistance ng bahagi. Ang mga likha sa laboratoryo ay mga disenyo sa loob ng laro: ang pagpili ng bihirang visual parts ay hindi nagmi-mint ng NFT o nagpapatunay ng pagmamay-ari ng isang Axie NFT.',
      'Panoorin ang gameplay video', 'Sumali sa komunidad',
      'Na-verify ang browser menu noong Setyembre 8, 2026: v1.633. May sariling version numbering at iskedyul ng update ang mga release sa tindahan.',
    ],
  };
  const metadata = {
    en: ['Angry Axies — Play & Vibeathon Guide', 'Play Angry Axies: browser, Android and iPhone access, controls, product vision and Axie Laboratory integration.', 'Language', 'Guide navigation'],
    es: ['Angry Axies — Guía de juego y Vibeathon', 'Jugá Angry Axies: acceso en navegador, Android y iPhone, controles, visión e integración del Laboratorio de Axies.', 'Idioma', 'Navegación de la guía'],
    zh: ['Angry Axies — 游戏与 Vibeathon 指南', '游玩 Angry Axies：浏览器、Android 和 iPhone 的访问方式、操作、产品愿景与 Axie 实验室整合。', '语言', '指南导航'],
    fil: ['Angry Axies — Gabay sa Laro at Vibeathon', 'Maglaro ng Angry Axies: browser, Android at iPhone, mga kontrol, bisyon at Axie Laboratory.', 'Wika', 'Nabigasyon ng gabay'],
  };
  const navigation = document.querySelector('nav[aria-label="Guide navigation"]');
  const languageNavigation = document.querySelector('.guide-languages');
  const buttons = [...document.querySelectorAll('[data-guide-lang]')];
  function setLanguage(language) {
    const copy = translations[language];
    if (!copy || copy.length !== targets.length) return;
    // Only trusted, bundled translations enter these text containers.
    targets.forEach((target, index) => { target.innerHTML = copy[index]; });
    document.documentElement.lang = language === 'zh' ? 'zh-Hans' : language;
    const [title, description, languageLabel, navigationLabel] = metadata[language];
    document.title = title;
    document.querySelector('meta[name="description"]').content = description;
    languageNavigation.setAttribute('aria-label', languageLabel);
    navigation.setAttribute('aria-label', navigationLabel);
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.guideLang === language)));
  }
  buttons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.guideLang)));
})();
