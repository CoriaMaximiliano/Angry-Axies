$ErrorActionPreference = "Stop"

$metaPath = Join-Path $PSScriptRoot "site-meta.json"
if (-not (Test-Path -LiteralPath $metaPath)) {
  throw "Falta site-meta.json. Ejecuta: npm run sync:github-site"
}
$meta = Get-Content -LiteralPath $metaPath -Raw | ConvertFrom-Json
$version = [string]$meta.version
$apkName = [string]$meta.apkName
$playOrigin = [string]$meta.playOrigin

$credInput = "protocol=https`nhost=github.com`n`n"
$credOutput = $credInput | git credential fill
$token = ($credOutput | Select-String '^password=(.+)$').Matches[0].Groups[1].Value

$headers = @{
  Authorization = "Bearer $token"
  Accept        = "application/vnd.github+json"
  "X-GitHub-Api-Version" = "2022-11-28"
}

$releaseBody = @{
  tag_name    = $version
  name        = "Angry Axies $version"
  body        = @"
APK Android para Angry Axies v$version.

Instalacion: https://coriamaximiliano.github.io/Angry-Axies/descarga-apk.html
Jugar en navegador: $playOrigin/
"@
  draft       = $false
  prerelease  = $false
} | ConvertTo-Json

$release = Invoke-RestMethod -Method Post `
  -Uri "https://api.github.com/repos/CoriaMaximiliano/Angry-Axies/releases" `
  -Headers $headers `
  -Body $releaseBody `
  -ContentType "application/json"

Write-Host "Release creada: $($release.html_url)"

$apk = Join-Path $PSScriptRoot "release-assets\$apkName"
if (-not (Test-Path -LiteralPath $apk)) {
  throw "No se encontro la APK en $apk"
}

$uploadBase = $release.upload_url -replace '\{.*$', ''
$uploadUrl = "${uploadBase}?name=$apkName"

$uploadHeaders = @{
  Authorization = "Bearer $token"
  Accept        = "application/vnd.github+json"
  "Content-Type" = "application/vnd.android.package-archive"
}

$sizeMb = [Math]::Round((Get-Item -LiteralPath $apk).Length / 1MB)
Write-Host "Subiendo APK (~$sizeMb MB)..."
$asset = Invoke-RestMethod -Method Post -Uri $uploadUrl -Headers $uploadHeaders -InFile $apk
Write-Host "APK publicada: $($asset.browser_download_url)"
