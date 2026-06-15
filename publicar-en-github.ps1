$ErrorActionPreference = 'Stop'
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $Root

$metaPath = Join-Path $Root 'site-meta.json'
if (-not (Test-Path -LiteralPath $metaPath)) {
  Write-Host 'Ejecuta primero: npm run sync:github-site' -ForegroundColor Yellow
  exit 1
}
$meta = Get-Content -LiteralPath $metaPath -Raw | ConvertFrom-Json
$Version = [string]$meta.version
$ApkName = [string]$meta.apkName
$ApkPath = Join-Path $Root "release-assets\$ApkName"

Write-Host "=== Angry Axies - publicar en GitHub ===" -ForegroundColor Cyan
Write-Host ""

if (-not (Test-Path -LiteralPath $ApkPath)) {
  Write-Host "No se encuentra la APK en release-assets\$ApkName" -ForegroundColor Yellow
  Write-Host "Generala con: npm run github:publish (desde la raiz del juego)"
  exit 1
}

$remote = git remote get-url origin 2>$null
if (-not $remote) {
  git remote add origin "https://github.com/CoriaMaximiliano/Angry-Axies.git"
}

Write-Host '1) Subiendo sitio - rama main...' -ForegroundColor Green
git push -u origin main
if ($LASTEXITCODE -ne 0) {
  Write-Host ""
  Write-Host "El push fallo. Crea el repo en GitHub si no existe:" -ForegroundColor Yellow
  Write-Host "  https://github.com/new?name=Angry-Axies"
  exit 1
}

Write-Host ""
Write-Host '2) Sitio en camino. URL:' -ForegroundColor Green
Write-Host "   https://coriamaximiliano.github.io/Angry-Axies/"
Write-Host ""
Write-Host '3) Subi la APK a una Release:' -ForegroundColor Green
Write-Host "   $($meta.releaseTagUrl)"
Write-Host "   O ejecuta: .\crear-release-apk.ps1"
Write-Host ""
Write-Host "Listo." -ForegroundColor Cyan
