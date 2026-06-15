<#
.SYNOPSIS
  Sincroniza version/URLs, compila APK, publica sitio GitHub Pages y crea release.

.EJEMPLO
  cd github-site
  .\actualizar-todo.ps1

  Sin subir release (solo web):
  .\actualizar-todo.ps1 -SkipRelease
#>
[CmdletBinding()]
param(
  [switch] $SkipRelease,
  [switch] $SkipApk
)

$ErrorActionPreference = 'Stop'
$SiteRoot = $PSScriptRoot
$ProjectRoot = (Resolve-Path (Join-Path $SiteRoot '..')).Path

function Write-Step {
  param([string] $Message)
  Write-Host "# github: $Message" -ForegroundColor Cyan
}

Push-Location $ProjectRoot
try {
  Write-Step 'Sincronizar textos del sitio con package.json...'
  node scripts/sync-github-site.mjs
  if ($LASTEXITCODE -ne 0) { throw 'sync-github-site fallo' }

  $meta = Get-Content (Join-Path $SiteRoot 'site-meta.json') -Raw | ConvertFrom-Json
  $apkDest = Join-Path $SiteRoot "release-assets\$($meta.apkName)"

  if (-not $SkipApk) {
    Write-Step 'Compilar APK debug...'
    npm run android:apk
    if ($LASTEXITCODE -ne 0) { throw 'android:apk fallo' }

    $apkSrc = Join-Path $ProjectRoot 'android\app\build\outputs\apk\debug\app-debug.apk'
    if (-not (Test-Path -LiteralPath $apkSrc)) {
      throw "No se encontro APK en $apkSrc"
    }
    New-Item -ItemType Directory -Force -Path (Split-Path $apkDest) | Out-Null
    Copy-Item -LiteralPath $apkSrc -Destination $apkDest -Force
    Write-Step "APK copiada: release-assets\$($meta.apkName)"
  }
  elseif (-not (Test-Path -LiteralPath $apkDest)) {
    throw "Falta $apkDest. Quita -SkipApk o compila la APK."
  }

  Push-Location $SiteRoot
  try {
    $changes = git status --porcelain
    if ($changes) {
      Write-Step 'Commit y push del sitio...'
      git add index.html descarga-apk.html i18n.js publicar-en-github.ps1 crear-release-apk.ps1 COMO_DESCARGAR.txt INSTRUCCIONES_SUBIR_APK_GITHUB.txt README.md site-meta.json site.css images/fondo-github.png
      git commit -m "Actualiza sitio publico a v$($meta.version)."
      git push origin main
      if ($LASTEXITCODE -ne 0) { throw 'git push fallo' }
    }
    else {
      Write-Step 'Sitio sin cambios de texto; omitiendo commit.'
    }

    if (-not $SkipRelease) {
      Write-Step "Crear release GitHub $($meta.version)..."
      & (Join-Path $SiteRoot 'crear-release-apk.ps1')
      if ($LASTEXITCODE -ne 0) { throw 'crear-release-apk fallo' }
    }
  }
  finally {
    Pop-Location
  }

  Write-Host ''
  Write-Host '=== GitHub Pages listo ===' -ForegroundColor Green
  Write-Host "Sitio:    https://coriamaximiliano.github.io/Angry-Axies/"
  Write-Host "Descarga: https://coriamaximiliano.github.io/Angry-Axies/descarga-apk.html"
  Write-Host "Release:  $($meta.releaseTagUrl)"
}
finally {
  Pop-Location
}
