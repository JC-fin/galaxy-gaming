# galaxy-gaming

Full stack for Galaxy Gaming Co., a subscription based MTG card supplying service

## Repository Structure

```
galaxy-gaming/
├── base44-export/        # Base44 exported code (Vite + React app)
│   ├── src/
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── [all other Base44 files]
├── brand-assets/         # Custom brand assets
│   ├── logos/           # Logos (PNGs and SVGs)
│   ├── images/          # Images (hero images, etc.)
│   ├── fonts/           # Custom fonts
│   └── colors/          # Brand color documentation
├── custom-code/          # Future custom modifications
├── scripts/              # Build scripts
└── README.md
```

## Brand Colors

- **Main White**: `#FFFFFF`
- **Main Dark**: `#0A0F2C`
- **Alt Purple**: `#884389`

## Getting Started

### Prerequisites

- Node.js and npm installed
- Base44 account for exporting your site

### Initial Setup

1. **Export from Base44:**
   - Export your Vite + React app from Base44
   - Extract the exported files into the `base44-export/` directory
   - Run `cd base44-export && npm install` to install dependencies

2. **Install root dependencies:**
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

This will:
1. Copy brand assets into base44-export
2. Start the Vite dev server from base44-export

### Building

Build for production:

```bash
npm run build
```

This will:
1. Copy brand assets into base44-export
2. Run the Vite build
3. Output to `base44-export/dist/`

Preview the production build:

```bash
npm run preview
```

## Updating Base44 Exports

When you export a new version from Base44:

1. **Backup any custom modifications** you've made in `base44-export/` (if any)
2. **Delete the contents** of `base44-export/` (except `.gitkeep` if you want to keep it)
3. **Extract the new export** into `base44-export/`
4. **Run `npm install`** in `base44-export/` to install any new dependencies
5. **Test locally** with `npm run dev`
6. **Commit and push** your changes

**Note:** Your brand assets in `brand-assets/` will automatically be copied into the export during build, so you don't need to worry about losing them.

## Cloudflare Pages Deployment

### Build Settings

- **Framework preset**: Vite
- **Build command**: `npm run build`
- **Build output directory**: `base44-export/dist`
- **Root directory**: `/` (root of repository)

### Environment Variables

Add any required environment variables in Cloudflare Pages dashboard.

### Custom Domain

1. Go to your Cloudflare Pages project settings
2. Navigate to "Custom domains"
3. Add your domain and follow the DNS configuration instructions

## Custom Code Modifications

For future custom code modifications:

1. Create your custom files in `custom-code/`
2. Modify `scripts/copy-assets.js` to include your custom code in the build process
3. Or manually integrate custom code into `base44-export/` after each export (not recommended for frequent updates)

## Brand Assets

### Logos

All logos are stored in `brand-assets/logos/`:
- PNGs: Various logo formats in PNG
- SVGs: Vector logos for scalable use

### Images

Website images (hero images, etc.) are in `brand-assets/images/`

### Fonts

Custom fonts go in `brand-assets/fonts/`

### Colors

Brand color definitions are in `brand-assets/colors/brand-colors.json`
