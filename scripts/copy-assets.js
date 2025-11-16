const fs = require('fs');
const path = require('path');

const base44ExportPath = path.join(__dirname, '..', 'base44-export');
const brandAssetsPath = path.join(__dirname, '..', 'brand-assets');

// Ensure base44-export directories exist
// Vite serves static assets from public/ folder at root path
// So /assets/brand/... maps to public/assets/brand/...
const publicAssetsPath = path.join(base44ExportPath, 'public', 'assets', 'brand');
const srcAssetsPath = path.join(base44ExportPath, 'src', 'assets', 'brand');

// Create directories if they don't exist (including public folder)
const publicPath = path.join(base44ExportPath, 'public');
if (!fs.existsSync(publicPath)) {
  fs.mkdirSync(publicPath, { recursive: true });
}

[publicAssetsPath, srcAssetsPath].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Copy logos (SVGs and PNGs)
function copyDirectory(src, dest) {
  if (!fs.existsSync(src)) {
    console.log(`Source directory does not exist: ${src}`);
    return;
  }
  
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const files = fs.readdirSync(src);
  files.forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    
    if (fs.statSync(srcPath).isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied: ${file} to ${dest}`);
    }
  });
}

// Copy logos to both public/assets/brand and src/assets/brand
const logosPath = path.join(brandAssetsPath, 'logos');
if (fs.existsSync(logosPath)) {
  copyDirectory(logosPath, path.join(publicAssetsPath, 'logos'));
  copyDirectory(logosPath, path.join(srcAssetsPath, 'logos'));
}

// Copy images
const imagesPath = path.join(brandAssetsPath, 'images');
if (fs.existsSync(imagesPath)) {
  copyDirectory(imagesPath, path.join(publicAssetsPath, 'images'));
  copyDirectory(imagesPath, path.join(srcAssetsPath, 'images'));
}

// Copy fonts
const fontsPath = path.join(brandAssetsPath, 'fonts');
if (fs.existsSync(fontsPath)) {
  copyDirectory(fontsPath, path.join(publicAssetsPath, 'fonts'));
  copyDirectory(fontsPath, path.join(srcAssetsPath, 'fonts'));
}

// Copy colors
const colorsPath = path.join(brandAssetsPath, 'colors');
if (fs.existsSync(colorsPath)) {
  copyDirectory(colorsPath, path.join(publicAssetsPath, 'colors'));
  copyDirectory(colorsPath, path.join(srcAssetsPath, 'colors'));
}

console.log('Brand assets copied successfully!');

