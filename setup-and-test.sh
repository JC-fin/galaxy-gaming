#!/bin/bash

# Complete setup and test script for Galaxy Gaming
# Run this from the repo root after Node.js is installed

set -e  # Exit on error

echo "🚀 Galaxy Gaming - Setup and Test Script"
echo "=========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed or not in PATH"
    echo "   Please install Node.js from https://nodejs.org/"
    echo "   Or make sure it's in your PATH"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Step 1: Install Base44 dependencies
echo "📦 Step 1: Installing Base44 dependencies..."
cd base44-export
if [ ! -d "node_modules" ]; then
    npm install
    echo "✅ Dependencies installed"
else
    echo "✅ Dependencies already installed"
fi
cd ..

# Step 2: Copy brand assets
echo ""
echo "📁 Step 2: Copying brand assets..."
npm run copy-assets
echo "✅ Brand assets copied"
echo ""

# Step 3: Verify assets were copied
echo "🔍 Step 3: Verifying assets..."
if [ -d "base44-export/src/assets/brand/logos" ]; then
    LOGO_COUNT=$(find base44-export/src/assets/brand/logos -type f | wc -l | tr -d ' ')
    echo "✅ Found $LOGO_COUNT logo files"
else
    echo "⚠️  Logo directory not found"
fi

if [ -d "base44-export/src/assets/brand/images" ]; then
    IMAGE_COUNT=$(find base44-export/src/assets/brand/images -type f | wc -l | tr -d ' ')
    echo "✅ Found $IMAGE_COUNT image files"
else
    echo "⚠️  Image directory not found"
fi

echo ""
echo "✨ Setup complete!"
echo ""
echo "🎯 Next: Start the development server with:"
echo "   npm run dev"
echo ""
echo "   Then open http://localhost:5173/ in your browser"
echo ""

