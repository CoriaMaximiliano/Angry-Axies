# Publicar sitio Angry Axies en GitHub Pages + release con APK
# Ejecutar desde: github-site\
# Requisito: repo https://github.com/CoriaMaximiliano/Angry-Axies creado (vacio, public)

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $Root

$Repo = "CoriaMaximiliano/Angry-Axies"
$Version = "1.090"
$ApkName = "AngryAxies-$Version.apk"
$ApkPath = Join-Path $Root "release-assets\$ApkName"

Write-Host "=== Angry Axies - publicar en GitHub ===" -ForegroundColor Cyan
Write-Host ""

if (-not (Test-Path $ApkPath)) {
    Write-Host "No se encuentra la APK en release-assets\$ApkName" -ForegroundColor Yellow
    Write-Host "Generala con npm run android:apk en el proyecto del juego y copiala aqui."
    exit 1
}

$remote = git remote get-url origin 2>$null
if (-not $remote) {
    git remote add origin "https://github.com/$Repo.git"
}

Write-Host '1) Subiendo sitio - rama main...' -ForegroundColor Green
git push -u origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "El push fallo. Crea el repo en GitHub si no existe:" -ForegroundColor Yellow
    Write-Host "  https://github.com/new?name=Angry-Axies"
    Write-Host "  Nombre: Angry-Axies | Public | sin README"
    Write-Host ""
    Write-Host "Luego en el repo: Settings -> Pages -> Build and deployment -> GitHub Actions"
    Write-Host "Volve a ejecutar este script."
    exit 1
}

Write-Host ""
Write-Host '2) Sitio en camino. URL:' -ForegroundColor Green
Write-Host "   https://coriamaximiliano.github.io/Angry-Axies/"
Write-Host ""
Write-Host '3) Subi la APK a una Release manualmente en GitHub web:' -ForegroundColor Green
Write-Host "   https://github.com/$Repo/releases/new"
Write-Host "   Tag: $Version"
Write-Host "   Title: Angry Axies $Version"
Write-Host "   Adjuntar: $ApkPath"
Write-Host ""
Write-Host "   O con GitHub CLI:"
Write-Host "   gh release create $Version `"$ApkPath`" --title `"Angry Axies $Version`" --repo $Repo"
Write-Host ""
Write-Host "Listo." -ForegroundColor Cyan
