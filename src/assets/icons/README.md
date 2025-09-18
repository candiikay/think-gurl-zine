# Icons Directory

This directory contains SVG icons and icon assets for the Think GURL Interactive Zine.

## Icon Guidelines

### SVG Format
- **Scalable** - Vector format for all screen sizes
- **Optimized** - Clean, minimal file size
- **Accessible** - Proper ARIA labels and descriptions
- **Consistent** - Unified style and sizing

### Style Guidelines
- **Stroke width**: 1.5px or 2px for consistency
- **Corner radius**: 2px for rounded corners
- **Color**: Use currentColor for theme compatibility
- **Size**: 24x24px base size (1.5rem)

## Icon Categories

### Navigation Icons
- `arrow-left.svg` - Previous page
- `arrow-right.svg` - Next page
- `home.svg` - Return to cover
- `menu.svg` - Mobile menu
- `close.svg` - Close modal/menu

### Social Icons
- `twitter.svg` - Twitter sharing
- `facebook.svg` - Facebook sharing
- `instagram.svg` - Instagram sharing
- `email.svg` - Email sharing
- `link.svg` - Copy link

### Content Icons
- `comment.svg` - Comments section
- `bookmark.svg` - Save/bookmark
- `share.svg` - Share content
- `print.svg` - Print version
- `download.svg` - Download PDF

### Interface Icons
- `play.svg` - Play audio/video
- `pause.svg` - Pause media
- `volume.svg` - Audio controls
- `settings.svg` - Settings menu
- `search.svg` - Search functionality

## SVG Optimization

### Before Optimization
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9 18l6-6-6-6"/>
</svg>
```

### After Optimization
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9 18l6-6-6-6"/>
</svg>
```

### Optimization Checklist
- [ ] Remove unnecessary attributes
- [ ] Use `currentColor` for stroke/fill
- [ ] Minimize decimal places
- [ ] Remove comments and metadata
- [ ] Optimize paths and shapes

## Usage Examples

### Inline SVG
```html
<button class="nav-button" aria-label="Previous page">
  <svg class="icon icon--arrow-left" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19 12H5m7-7l-7 7 7 7"/>
  </svg>
</button>
```

### CSS Background
```css
.icon-arrow-right {
  background-image: url('../icons/arrow-right.svg');
  background-size: 24px 24px;
  background-repeat: no-repeat;
  background-position: center;
}
```

### JavaScript Insertion
```javascript
function loadIcon(iconName) {
  return fetch(`./assets/icons/${iconName}.svg`)
    .then(response => response.text())
    .then(svg => {
      const parser = new DOMParser();
      return parser.parseFromString(svg, 'image/svg+xml').querySelector('svg');
    });
}
```

## Accessibility

### ARIA Labels
```html
<svg role="img" aria-label="Previous page">
  <!-- SVG content -->
</svg>
```

### Screen Reader Support
```html
<svg aria-hidden="true">
  <!-- Decorative icon -->
</svg>

<svg role="img" aria-labelledby="icon-title">
  <title id="icon-title">Share this article</title>
  <!-- SVG content -->
</svg>
```

## Icon System

### CSS Classes
```css
.icon {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  stroke: currentColor;
  fill: none;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.icon--small {
  width: 1rem;
  height: 1rem;
}

.icon--large {
  width: 2rem;
  height: 2rem;
}
```

### Color Theming
```css
.icon--primary {
  color: var(--lavender);
}

.icon--secondary {
  color: var(--pink);
}

.icon--accent {
  color: var(--aqua);
}
```

## Creating New Icons

### Design Principles
- **Simple** - Clear and recognizable at small sizes
- **Consistent** - Match existing icon style
- **Accessible** - High contrast and clear shapes
- **Scalable** - Work at 16px to 64px sizes

### File Naming
- **Descriptive** - Clear purpose (e.g., `arrow-right.svg`)
- **Consistent** - Use kebab-case
- **Specific** - Avoid generic names (e.g., `icon1.svg`)

### Export Settings
- **Format**: SVG
- **ViewBox**: 24x24 or 16x16
- **Stroke**: 1.5px or 2px
- **Colors**: Use currentColor
- **Optimization**: Remove unnecessary elements

## Icon Library

### Recommended Tools
- **Figma** - Design and export
- **Sketch** - Design and export
- **SVGOMG** - Online optimization
- **SVGO** - Command line optimization

### Resources
- **Feather Icons** - Lightweight icon set
- **Heroicons** - Tailwind CSS icons
- **Lucide** - Beautiful & consistent icons
- **Tabler Icons** - Free SVG icons
