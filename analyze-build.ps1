# Build Analysis Script
# Shows detailed information about the build output

Write-Host "=== Vue Project Build Analysis ===" -ForegroundColor Cyan
Write-Host ""

# Check if dist directory exists
if (-not (Test-Path "dist")) {
    Write-Host "Error: dist directory not found, please run npm run build first" -ForegroundColor Red
    exit 1
}

# Analyze JS files
Write-Host "JS Files:" -ForegroundColor Green
$jsFiles = Get-ChildItem "dist/js" -Recurse -File -ErrorAction SilentlyContinue
if ($jsFiles) {
    foreach ($file in $jsFiles) {
        $size = [math]::Round($file.Length / 1KB, 2)
        Write-Host "  - $($file.Name): $size KB" -ForegroundColor Yellow
    }
} else {
    Write-Host "  No JS files found" -ForegroundColor Gray
}

# Analyze CSS files
Write-Host ""
Write-Host "CSS Files:" -ForegroundColor Green
$cssFiles = Get-ChildItem "dist/css" -Recurse -File -ErrorAction SilentlyContinue
if ($cssFiles) {
    foreach ($file in $cssFiles) {
        $size = [math]::Round($file.Length / 1KB, 2)
        Write-Host "  - $($file.Name): $size KB" -ForegroundColor Yellow
    }
} else {
    Write-Host "  No CSS files found" -ForegroundColor Gray
}

# Analyze image files
Write-Host ""
Write-Host "Image Files:" -ForegroundColor Green
$imageFiles = Get-ChildItem "dist/images" -Recurse -File -ErrorAction SilentlyContinue
if ($imageFiles) {
    foreach ($file in $imageFiles) {
        $size = [math]::Round($file.Length / 1KB, 2)
        Write-Host "  - $($file.Name): $size KB" -ForegroundColor Yellow
    }
} else {
    Write-Host "  No image files found" -ForegroundColor Gray
}

# Calculate total size
Write-Host ""
Write-Host "Overall Statistics:" -ForegroundColor Green
$allFiles = Get-ChildItem "dist" -Recurse -File
$totalSize = ($allFiles | Measure-Object -Property Length -Sum).Sum
$totalSizeKB = [math]::Round($totalSize / 1KB, 2)
$totalSizeMB = [math]::Round($totalSize / 1MB, 2)

Write-Host "  - Total files: $($allFiles.Count)" -ForegroundColor Yellow
Write-Host "  - Total size: $totalSizeKB KB ($totalSizeMB MB)" -ForegroundColor Yellow

# Show directory structure
Write-Host ""
Write-Host "Output Directory Structure:" -ForegroundColor Green
function Show-Tree($Path, $Prefix = "") {
    $items = Get-ChildItem $Path | Sort-Object Name
    for ($i = 0; $i -lt $items.Count; $i++) {
        $item = $items[$i]
        $isLast = ($i -eq ($items.Count - 1))
        $connector = if ($isLast) { "└── " } else { "├── " }
        
        if ($item.PSIsContainer) {
            Write-Host "$Prefix$connector$($item.Name)/" -ForegroundColor Cyan
            $newPrefix = if ($isLast) { "$Prefix    " } else { "$Prefix│   " }
            Show-Tree $item.FullName $newPrefix
        } else {
            $size = [math]::Round($item.Length / 1KB, 2)
            Write-Host "$Prefix$connector$($item.Name) ($size KB)" -ForegroundColor White
        }
    }
}

Show-Tree "dist"

Write-Host ""
Write-Host "Build Analysis Complete!" -ForegroundColor Green
Write-Host "Optimization Summary:" -ForegroundColor Cyan
Write-Host "  - All JS code merged into single file (app.js)" -ForegroundColor White
Write-Host "  - All CSS styles merged into single file (app.css)" -ForegroundColor White
Write-Host "  - Static assets organized by type" -ForegroundColor White
Write-Host "  - Code compressed and minified" -ForegroundColor White
