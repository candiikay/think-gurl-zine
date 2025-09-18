# Images Directory

This directory contains all images and graphics for the Think GURL Interactive Zine.

## Directory Structure

```
images/
├── covers/          # Zine cover images
├── spreads/         # Individual page/spread images
├── illustrations/   # Custom illustrations and graphics
├── photos/          # Photographs and real images
├── icons/           # Icon graphics (if not using SVG)
└── backgrounds/     # Background patterns and textures
```

## Image Guidelines

### Formats
- **WebP** - Preferred format for modern browsers
- **JPEG** - For photographs with many colors
- **PNG** - For graphics with transparency
- **SVG** - For scalable vector graphics

### Optimization
- **Compress images** before adding to repository
- **Use appropriate dimensions** for display size
- **Include alt text** for accessibility
- **Lazy load** images below the fold

### Naming Convention
Use descriptive, kebab-case names:
- `manifesto-spread-bg.jpg`
- `dating-apps-illustration.svg`
- `hygiene-self-care-photo.webp`
- `politics-activism-icon.png`

## Image Sizes

### Cover Images
- **Desktop**: 1200x800px minimum
- **Mobile**: 800x600px minimum
- **Aspect Ratio**: 3:2

### Spread Images
- **Desktop**: 1000x600px minimum
- **Mobile**: 600x400px minimum
- **Aspect Ratio**: 5:3

### Icons
- **Size**: 24x24px, 32x32px, 48x48px
- **Format**: SVG preferred
- **Style**: Consistent with design system

## Accessibility

### Alt Text Guidelines
- **Descriptive** - Describe what's in the image
- **Contextual** - Consider the surrounding content
- **Concise** - Keep under 125 characters when possible
- **Meaningful** - Don't use "image of" or "picture of"

### Examples
```html
<!-- Good -->
<img src="manifesto-spread-bg.jpg" alt="Purple gradient background with geometric shapes">

<!-- Better -->
<img src="dating-apps-illustration.svg" alt="Illustration showing a smartphone with dating app interface and algorithmic bias symbols">

<!-- Best -->
<img src="hygiene-self-care-photo.webp" alt="Person meditating with phone in background, representing digital wellness practices">
```

## Performance

### Loading Strategy
- **Critical images** - Load immediately
- **Above fold** - Prioritize visible content
- **Below fold** - Use lazy loading
- **Preload** - Important images in head

### Compression
- **Lossy compression** for photos (80-90% quality)
- **Lossless compression** for graphics
- **WebP conversion** for supported browsers
- **Fallbacks** for older browsers

## Copyright & Attribution

### Usage Rights
- **Original content** - Created specifically for this project
- **Licensed content** - Properly attributed and licensed
- **Public domain** - Clearly marked as such
- **Creative Commons** - Proper attribution included

### Attribution Format
```html
<!-- In HTML -->
<figcaption>
  Image by <a href="https://example.com">Artist Name</a> 
  via <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
</figcaption>

<!-- In CSS comments -->
/* Background: "Image Name" by Artist Name, CC BY 4.0 */
```

## Adding New Images

1. **Optimize** the image for web use
2. **Name** the file descriptively
3. **Place** in appropriate subdirectory
4. **Add** to version control
5. **Update** any necessary documentation
