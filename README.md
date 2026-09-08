# Angry Axies — sitio de descarga (GitHub Pages)

Página pública para jugar en el navegador y descargar la APK Android.

- **Sitio:** https://coriamaximiliano.github.io/Angry-Axies/
- **APK:** https://coriamaximiliano.github.io/Angry-Axies/descarga-apk.html
- **Juego en línea:** https://angryaxies.servehttp.com/

## Guía Vibeathon

`vibeathon.html` reúne enlaces de juego, instrucciones por plataforma, orientación horizontal obligatoria, visión de producto e integración Axie Core. La página de inicio enlaza esta guía. La APK 1.142 se conserva como versión anterior; no representa la versión web actual ni acredita las builds de las tiendas.

La revisión privada del concurso requiere un repositorio con el código del juego, acceso para `jaatster` y un SHA completo de 40 caracteres que haya producido todas las builds enlazadas. Este repositorio de páginas no sustituye ese requisito. No incluir aquí código privado, credenciales ni datos de jugadores.

Para publicar solo la documentación web, revisar el diff y enviar únicamente los archivos del sitio con Git. `npm run github:publish` también compila y publica una APK: no usarlo para un cambio exclusivo de esta guía. El propietario aprobó la publicación de esta guía el 8 de septiembre de 2026.

## Publicar cambios en la web

**Recomendado (desde la raíz del juego):**

```bash
npm run github:publish
```

Eso sincroniza versión y URLs desde `package.json`, compila la APK, hace push a `main` y crea la release en GitHub.

**Manual:**

1. `npm run sync:github-site`
2. Editá si hace falta `index.html` o `descarga-apk.html`.
3. `git add` → `git commit` → `git push origin main`
4. Esperá el workflow **Deploy to GitHub Pages** en verde.

## Publicar una APK nueva

Ver `INSTRUCCIONES_SUBIR_APK_GITHUB.txt` y `COMO_DESCARGAR.txt`.

La APK va en **GitHub Releases**, no en este repositorio.

Desde `github-site/` también podés ejecutar: `.\actualizar-todo.ps1`
