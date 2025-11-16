#!/bin/bash

# Verification script for local testing setup
# Run this to verify everything is ready

echo "🔍 Verifying Galaxy Gaming setup..."
echo ""

# Check Node.js
if command -v node &> /dev/null; then
    echo "✅ Node.js installed: $(node --version)"
else
    echo "❌ Node.js not found - please install from https://nodejs.org/"
    exit 1
fi

# Check npm
if command -v npm &> /dev/null; then
    echo "✅ npm installed: $(npm --version)"
else
    echo "❌ npm not found"
    exit 1
fi

echo ""
echo "📁 Checking directory structure..."

# Check base44-export
if [ -d "base44-export" ]; then
    echo "✅ base44-export/ exists"
    if [ -f "base44-export/package.json" ]; then
        echo "✅ base44-export/package.json exists"
    else
        echo "❌ base44-export/package.json missing"
    fi
else
    echo "❌ base44-export/ missing"
fi

# Check brand-assets
if [ -d "brand-assets" ]; then
    echo "✅ brand-assets/ exists"
    if [ -d "brand-assets/logos" ]; then
        LOGO_COUNT=$(find brand-assets/logos -type f | wc -l | tr -d ' ')
        echo "✅ brand-assets/logos/ has $LOGO_COUNT files"
    fi
    if [ -d "brand-assets/images" ]; then
        IMAGE_COUNT=$(find brand-assets/images -type f | wc -l | tr -d ' ')
        echo "✅ brand-assets/images/ has $IMAGE_COUNT files"
    fi
else
    echo "❌ brand-assets/ missing"
fi

# Check scripts
if [ -f "scripts/copy-assets.js" ]; then
    echo "✅ scripts/copy-assets.js exists"
else
    echo "❌ scripts/copy-assets.js missing"
fi

# Check root package.json
if [ -f "package.json" ]; then
    echo "✅ Root package.json exists"
else
    echo "❌ Root package.json missing"
fi

echo ""
echo "📦 Checking dependencies..."

# Check if base44-export has node_modules
if [ -d "base44-export/node_modules" ]; then
    echo "✅ base44-export dependencies installed"
else
    echo "⚠️  base44-export dependencies not installed"
    echo "   Run: cd base44-export && npm install"
fi

echo ""
echo "✨ Setup verification complete!"
echo ""
echo "Next steps:"
echo "1. Install dependencies: cd base44-export && npm install"
echo "2. Copy assets: npm run copy-assets"
echo "3. Start dev server: npm run dev"

