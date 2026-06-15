# Angry Axies — sitio de descarga (GitHub Pages)

Página pública para jugar en el navegador y descargar la APK Android.

- **Sitio:** https://coriamaximiliano.github.io/Angry-Axies/
- **APK:** https://coriamaximiliano.github.io/Angry-Axies/descarga-apk.html
- **Juego en línea:** http://angryaxies.servehttp.com/

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
