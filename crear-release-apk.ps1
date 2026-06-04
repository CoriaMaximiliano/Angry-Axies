$ErrorActionPreference = "Stop"

$credInput = "protocol=https`nhost=github.com`n`n"
$credOutput = $credInput | git credential fill
$token = ($credOutput | Select-String '^password=(.+)$').Matches[0].Groups[1].Value

$headers = @{
  Authorization = "Bearer $token"
  Accept        = "application/vnd.github+json"
  "X-GitHub-Api-Version" = "2022-11-28"
}

$releaseBody = @{
  tag_name    = "1.008"
  name        = "Angry Axies 1.008"
  body        = @"
APK Android para Angry Axies v1.008.

Instalacion: https://coriamaximiliano.github.io/Angry-Axies/descarga-apk.html
Jugar en navegador: https://angryaxies.servehttp.com
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

$apk = Join-Path $PSScriptRoot "release-assets\AngryAxies-1.008.apk"
if (-not (Test-Path $apk)) {
  throw "No se encontro la APK en $apk"
}

$uploadBase = $release.upload_url -replace '\{.*$', ''
$uploadUrl = "${uploadBase}?name=AngryAxies-1.008.apk"

$uploadHeaders = @{
  Authorization = "Bearer $token"
  Accept        = "application/vnd.github+json"
  "Content-Type" = "application/vnd.android.package-archive"
}

Write-Host "Subiendo APK (~47 MB)..."
$asset = Invoke-RestMethod -Method Post -Uri $uploadUrl -Headers $uploadHeaders -InFile $apk
Write-Host "APK publicada: $($asset.browser_download_url)"
