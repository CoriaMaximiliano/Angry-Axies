# Guía del sitio — Total Digital Studio

Carpeta oficial del proyecto: **`F:\Pagina empresa Total Digital Studio`**

Sitio estático (HTML + CSS + JavaScript vanilla). No usa frameworks ni build. Se abre en el navegador y se publica en GitHub Pages.

---

## URLs publicadas

| Destino | URL |
|---------|-----|
| Repo principal | https://coriamaximiliano.github.io/Total-Digital-Studio/ |
| Copia en Angry-Axies | https://coriamaximiliano.github.io/Angry-Axies/total-digital-studio/ |

GitHub Pages puede tardar **1–3 minutos** después de cada push. Si ves contenido viejo: **Ctrl+F5** o ventana de incógnito.

---

## Estructura de carpetas

```
F:\Pagina empresa Total Digital Studio\
├── index.html              # Página principal (todo el contenido)
├── site.css                # Estilos y diseño responsive
├── i18n.js                 # Traducciones ES / EN
├── nav.js                  # Menú hamburguesa móvil
├── hero-effects.js         # Partículas y tilt 3D del hero
├── scroll-animations.js    # Fade al scroll y contadores
├── contact-form.js         # Formulario → WhatsApp
├── favicon.svg             # Ícono SVG de respaldo
├── logo.svg                # Logo vectorial anterior (respaldo)
├── publicar-totalstudio.ps1 # Script para subir a GitHub
├── GUIA.md                 # Este archivo
├── assets/                 # Imágenes optimizadas para la web
│   ├── logo-empresa.png    # Logo completo (header), fondo transparente
│   └── logo-icono.png      # Solo la “T” (footer y favicon)
├── icons/                  # Iconos locales de tecnologías
│   ├── csharp.svg
│   └── openai.svg
├── imagenes utiles/        # Archivos fuente (no se publican tal cual)
│   └── Logo empresa.png    # Logo original de alta resolución
└── scripts/
    └── procesar-logo.py    # Quita fondo y genera assets/
```

---

## Cómo está implementado

### Página (`index.html`)

Secciones en orden:

1. **Hero** — Título, CTAs, partículas en canvas, fondo oscuro animado  
2. **Nosotros** — Frase diferenciadora  
3. **¿Por qué elegirnos?** — Stats (50+ productos, 13+ tech, 24h) + lista con checks  
4. **Servicios** — Grid de 9 cards  
5. **Trabajamos con** — Grid de tecnologías con iconos  
6. **Proceso** — 4 pasos  
7. **Portafolio** — 4 proyectos  
8. **Contacto** — Formulario corto + email / WhatsApp  

Los textos bilingües usan atributos `data-i18n="clave"`; `i18n.js` los reemplaza según idioma (guardado en `localStorage`).

### Estilos (`site.css`)

- Variables CSS en `:root` (colores, márgenes, safe-area móvil)  
- **Responsive**: breakpoints 380px, 640px, 900px, 1100px, 1400px  
- Clases de animación: `.reveal` + `.is-visible` (activadas por `scroll-animations.js`)  
- Cards con hover glow: `.card--wow`, `.project--wow`, `.float-card`  

### Scripts

| Archivo | Función |
|---------|---------|
| `i18n.js` | ES/EN, botones ES · EN en el header |
| `nav.js` | Abre/cierra menú móvil; cierra al redimensionar |
| `hero-effects.js` | Partículas; menos en móvil; sin tilt en touch |
| `scroll-animations.js` | Aparece al scroll; cuenta números en stats |
| `contact-form.js` | Valida y abre WhatsApp con el mensaje |

### Logo de la empresa

- **Fuente**: `imagenes utiles/logo sin fondo.png` (ícono morado, transparente).  
- **Web**: `assets/logo.png` (header y footer) y `assets/logo-icono.png` (favicon pequeño).  
- Al lado del ícono en el header va el texto **Total Digital Studio** en HTML.  

Si cambiás el logo fuente, volvé a ejecutar:

```powershell
cd "F:\Pagina empresa Total Digital Studio"
python .\scripts\procesar-logo.py
```

Si el recorte automático no queda perfecto, pedí una exportación **PNG transparente** desde Illustrator/Figma/Canva y reemplazá los archivos en `assets/`.

### Tecnologías con iconos rotos en CDN

C# y OpenAI usan SVG locales en `icons/` porque el CDN externo fallaba. El resto usa `cdn.simpleicons.org`.

---

## Cómo editar contenido habitual

| Qué cambiar | Dónde |
|-------------|--------|
| Textos en español / inglés | `i18n.js` → objetos `es` y `en` |
| Orden de secciones o proyectos | `index.html` |
| Colores, espaciado, responsive | `site.css` |
| Números de stats (50+, 13+, 24h) | `index.html` → `data-count` y `data-i18n` en `#por-que` |
| Lista de tecnologías | `index.html` → sección `#tecnologia` |
| WhatsApp / email del formulario | `index.html` (contacto) y `contact-form.js` |
| Email al enviar formulario | `maxicoria2013@gmail.com` (vía [FormSubmit](https://formsubmit.co)) |
| Logo web | Reemplazar en `assets/` o regenerar con `scripts/procesar-logo.py` |

---

## Vista local

```powershell
cd "F:\Pagina empresa Total Digital Studio"
npx --yes serve . -l 3456
```

Abrí: http://localhost:3456

También podés abrir `index.html` directamente, pero algunos recursos (fuentes) funcionan mejor con servidor local.

---

## Cómo actualizar y publicar en GitHub

Los cambios **no aparecen solos** en la web: hay que hacer **commit + push**.

### Opción A — Script automático (repo Total-Digital-Studio)

```powershell
cd "F:\Pagina empresa Total Digital Studio"
.\publicar-totalstudio.ps1
```

Eso hace `git add`, `commit` y `push` a:

`https://github.com/CoriaMaximiliano/Total-Digital-Studio.git`

### Opción B — Manual

```powershell
cd "F:\Pagina empresa Total Digital Studio"
git add .
git commit -m "Actualizar sitio Total Digital Studio"
git push origin main
```

### También publicar en Angry-Axies (subcarpeta)

Si usás la URL con `/Angry-Axies/total-digital-studio/`, copiá los archivos del sitio a:

`F:\AngryAxies\Juego Angry Axies navegador\github-site\total-digital-studio\`

(incluidos `assets/` e `icons/`), luego en esa carpeta `github-site`:

```powershell
cd "F:\AngryAxies\Juego Angry Axies navegador\github-site"
git add total-digital-studio/
git commit -m "Sincronizar sitio Total Digital Studio"
git push origin main
```

### Primera vez / Git no configurado

Si esta carpeta aún no tiene `.git`:

```powershell
cd "F:\Pagina empresa Total Digital Studio"
git init -b main
git remote add origin https://github.com/CoriaMaximiliano/Total-Digital-Studio.git
git pull origin main --allow-unrelated-histories
# resolver conflictos si los hay, luego:
git add .
git commit -m "Migrar sitio a carpeta oficial"
git push -u origin main
```

GitHub Pages en el repo: **Settings → Pages → Branch `main` → /(root)**.

---

## Checklist antes de publicar

- [ ] Probaste en local (`npx serve`)  
- [ ] Revisaste en móvil (o DevTools responsive)  
- [ ] Textos ES y EN en `i18n.js`  
- [ ] `git status` sin archivos olvidados (`assets/`, `icons/`)  
- [ ] Push hecho y esperaste 1–3 min  
- [ ] Recarga forzada en el navegador  

---

## Contacto en el sitio

- Email: `totaldigitalstudio@gmail.com`  
- Email público: `totaldigitalstudio@gmail.com`
- Email al recibir consultas del formulario: `maxicoria2013@gmail.com`
- WhatsApp: `+5492643227101` (enlace `wa.me/5492643227101`, sin el `+`)

> **Primera vez con FormSubmit:** al primer envío del formulario, FormSubmit manda un mail de verificación a `maxicoria2013@gmail.com`. Hay que hacer clic en el enlace para activar los avisos automáticos.

---

## Resumen técnico

- **Stack**: HTML5, CSS3, JavaScript (sin npm en producción)  
- **Hosting**: GitHub Pages (gratis, repo público)  
- **Idiomas**: Español por defecto; inglés con switcher  
- **Formulario**: No hay backend; envía a WhatsApp del cliente  

Para dudas de implementación, empezá por `index.html` (estructura) y `GUIA.md` (este archivo).
