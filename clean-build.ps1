# 清理构建产物脚本

# PowerShell 清理脚本
# 运行方式: .\clean-build.ps1

Write-Host "Cleaning build artifacts..." -ForegroundColor Green

# Delete dist directory
if (Test-Path "dist") {
    Remove-Item -Recurse -Force "dist"
    Write-Host "Deleted dist directory" -ForegroundColor Yellow
}

# Delete node_modules/.cache directory (Vite cache)
if (Test-Path "node_modules/.cache") {
    Remove-Item -Recurse -Force "node_modules/.cache"
    Write-Host "Cleared Vite cache" -ForegroundColor Yellow
}

# Delete TypeScript build info
if (Test-Path "tsconfig.tsbuildinfo") {
    Remove-Item -Force "tsconfig.tsbuildinfo"
    Write-Host "Deleted TypeScript build info" -ForegroundColor Yellow
}

# Delete Vue temporary files (*.vue.js, *.vue.d.ts, etc.)
$vueTemps = Get-ChildItem -Path "src" -Recurse -Include "*.vue.js", "*.vue.d.ts", "*.vue.js.map" -ErrorAction SilentlyContinue
if ($vueTemps) {
    $vueTemps | Remove-Item -Force
    Write-Host "Deleted Vue temporary files" -ForegroundColor Yellow
}

# Delete TypeScript compiled files (*.js, *.js.map from .ts sources)
$tsCompiled = Get-ChildItem -Path "src" -Recurse -Include "*.js", "*.js.map" -ErrorAction SilentlyContinue
if ($tsCompiled) {
    $tsCompiled | Remove-Item -Force
    Write-Host "Deleted TypeScript compiled files" -ForegroundColor Yellow
}

# Delete other possible cache files
$cacheFiles = @(
    ".eslintcache",
    ".stylelintcache", 
    "coverage",
    ".nyc_output",
    ".vite",
    "temp",
    ".tmp",
    "*.tsbuildinfo"
)

foreach ($file in $cacheFiles) {
    if (Test-Path $file) {
        Remove-Item -Recurse -Force $file
        Write-Host "Deleted $file" -ForegroundColor Yellow
    }
}

# Clean up any duplicate config files
$duplicateConfigs = @(
    "vite.config.js",
    "vite.config.advanced.js", 
    "vite.config.advanced.ts"
)

foreach ($config in $duplicateConfigs) {
    if (Test-Path $config) {
        Remove-Item -Force $config
        Write-Host "Deleted duplicate config: $config" -ForegroundColor Yellow
    }
}

Write-Host "Clean completed!" -ForegroundColor Green
Write-Host "You can now run npm run build for a fresh build" -ForegroundColor Cyan
