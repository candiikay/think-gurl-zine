# Think GURL Interactive Zine
**Edition 01: Algorithms & Agency**

> An interactive digital zine exploring technology, feminism, and agency through immersive storytelling and community engagement.

[![Deploy Status](https://img.shields.io/badge/deploy-vercel-blue)](https://vercel.com)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## 🌟 About

Think GURL is a feminist digital zine that challenges readers to engage critically with technology and digital culture. Through interactive flipbook experiences, thought-provoking content, and community dialogue, we explore themes of algorithmic bias, digital wellness, and feminist organizing in the tech age.

**Current Edition**: Algorithms & Agency - examining how technology shapes our relationships, identities, and political engagement.

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+)
- Git (for development)
- Node.js 16+ (for optional build tools)

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/think-gurl-zine.git
   cd think-gurl-zine
   ```

2. **Install dependencies** (optional - for development tools)
   ```bash
   npm install
   ```

3. **Run locally**
   ```bash
   # Simple local server (Python)
   python -m http.server 8000
   
   # Or with Node.js
   npx serve .
   
   # Or just open index.html in your browser
   open index.html
   ```

4. **Visit** `http://localhost:8000` in your browser

## 📁 Project Structure

```
think-gurl-zine/
├── README.md              # This file
├── PRD.md                 # Product Requirements Document
├── CONTRIBUTING.md        # Development guidelines
├── .gitignore            # Git ignore rules
├── vercel.json           # Deployment configuration
├── src/
│   ├── index.html        # Main entry point
│   ├── style.css         # Global styles
│   ├── script.js         # Main JavaScript
│   ├── pages/            # Individual page content
│   │   ├── manifesto.html
│   │   ├── dating-apps.html
│   │   ├── hygiene.html
│   │   ├── intimacy.html
│   │   ├── politics.html
│   │   └── closing.html
│   └── assets/           # Static assets
│       ├── images/       # Images and graphics
│       ├── fonts/        # Custom fonts
│       ├── icons/        # SVG icons
│       └── audio/        # Audio files (future)
└── docs/                 # Additional documentation
```

## 🛠️ Development

### Code Style
- **HTML**: Semantic markup, accessibility-first
- **CSS**: BEM methodology, mobile-first responsive design
- **JavaScript**: ES6+, modular architecture
- **Formatting**: Prettier for consistent code style

### Key Technologies
- **Turn.js**: Interactive flipbook animations
- **CSS Grid/Flexbox**: Responsive layouts
- **Hypothes.is/Giscus**: Comment system integration
- **Web APIs**: For enhanced interactivity

### Development Workflow
1. **Feature branches** for new functionality
2. **Pull requests** for code review
3. **Semantic versioning** for releases
4. **Automated testing** (to be implemented)

## 🎨 Design System

### Color Palette
```css
--lavender: #E6E6FA    /* Primary accent */
--pink: #FFB6C1        /* Secondary accent */
--aqua: #00FFFF        /* Tertiary accent */
--dark-purple: #4B0082 /* Text and borders */
```

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Monospace**: Fira Code (code blocks)

### Layout Principles
- **Mobile-first** responsive design
- **Grid-based** consistent spacing
- **Accessibility** WCAG 2.1 AA compliance
- **Performance** optimized loading

## 📱 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | 90+     | ✅ Full support |
| Firefox | 88+     | ✅ Full support |
| Safari  | 14+     | ✅ Full support |
| Edge    | 90+     | ✅ Full support |

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Netlify
```bash
# Build (if needed)
npm run build

# Deploy via Netlify CLI
netlify deploy
netlify deploy --prod
```

### Manual Deployment
Simply upload the `src/` folder contents to any static hosting service.

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:

- Code style and standards
- Pull request process
- Issue reporting
- Community guidelines

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 Content Guidelines

### Writing Style
- **Conversational yet academic** tone
- **Intersectional feminist** perspective
- **Accessible language** for broad audience
- **Evidence-based** arguments with sources

### Content Standards
- **Original content** or properly attributed
- **Inclusive language** throughout
- **Fact-checked** information
- **Community-focused** engagement

## 🔮 Roadmap

### Version 1.0 (Current)
- [x] Basic flipbook functionality
- [x] Core content pages
- [x] Responsive design
- [ ] Comment system integration

### Version 1.1 (Planned)
- [ ] Enhanced animations
- [ ] Audio integration
- [ ] Social sharing features
- [ ] Analytics dashboard

### Version 2.0 (Future)
- [ ] Multi-edition support
- [ ] User-generated content
- [ ] Collaborative features
- [ ] Mobile app version

## 📞 Support

### Getting Help
- **Issues**: [GitHub Issues](https://github.com/your-username/think-gurl-zine/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/think-gurl-zine/discussions)
- **Email**: thinkgurlzine@gmail.com

### Reporting Bugs
Please include:
- Browser and version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Turn.js** for flipbook functionality
- **Inter & Playfair Display** fonts
- **Feminist tech community** for inspiration
- **Contributors** who help make this project possible

---

**Think GURL** - *Challenging algorithms, building agency* 🚀

[Live Site](https://think-gurl-zine.vercel.app) | [GitHub](https://github.com/your-username/think-gurl-zine) | [Twitter](https://twitter.com/thinkgurlzine)