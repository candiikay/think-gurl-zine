# Fonts Directory

This directory contains custom fonts for the Think GURL Interactive Zine.

## Font Files

### Primary Fonts
- **Playfair Display** - Used for headings and display text
- **Inter** - Used for body text and UI elements

### Font Loading
Fonts are loaded via Google Fonts in the main HTML file:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
```

### Fallbacks
```css
font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

## Adding Custom Fonts

1. Place font files in this directory
2. Update CSS with proper `@font-face` declarations
3. Add fallbacks for better performance
4. Test across different browsers

## File Naming Convention

Use descriptive names:
- `playfair-display-regular.woff2`
- `playfair-display-bold.woff2`
- `inter-regular.woff2`
- `inter-medium.woff2`
