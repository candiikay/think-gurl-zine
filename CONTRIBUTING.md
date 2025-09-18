# Contributing to Think GURL Interactive Zine

Thank you for your interest in contributing to Think GURL! This document provides guidelines and information for contributors.

## 🌟 How to Contribute

### Types of Contributions
- **Content**: Writing, editing, or translating articles
- **Design**: Visual assets, layouts, or UX improvements
- **Code**: Bug fixes, features, or performance improvements
- **Documentation**: README updates, guides, or tutorials
- **Community**: Moderating discussions, answering questions

### Getting Started
1. **Read the PRD.md** - Understand the project vision and requirements
2. **Check existing issues** - Look for tasks that need help
3. **Fork the repository** - Create your own copy
4. **Set up development environment** - Follow the README setup guide
5. **Create a feature branch** - Use descriptive branch names

## 🛠️ Development Guidelines

### Code Style

#### HTML
```html
<!-- Use semantic HTML5 elements -->
<article class="zine-spread">
  <header class="spread-header">
    <h1 class="spread-title">Article Title</h1>
  </header>
  <main class="spread-content">
    <p class="spread-text">Content here...</p>
  </main>
</article>
```

#### CSS
```css
/* Use BEM methodology */
.zine-spread {
  /* Block styles */
}

.zine-spread__header {
  /* Element styles */
}

.zine-spread--featured {
  /* Modifier styles */
}

/* Mobile-first responsive design */
@media (min-width: 768px) {
  .zine-spread {
    /* Tablet styles */
  }
}

@media (min-width: 1024px) {
  .zine-spread {
    /* Desktop styles */
  }
}
```

#### JavaScript
```javascript
// Use ES6+ features and modular architecture
class ZineFlipbook {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    this.bindEvents();
    this.setupAnimations();
  }

  bindEvents() {
    // Event binding logic
  }
}

// Export for module usage
export default ZineFlipbook;
```

### File Organization

#### Naming Conventions
- **Files**: `kebab-case` (e.g., `dating-apps.html`)
- **Classes**: `BEM methodology` (e.g., `.zine-spread__content`)
- **Variables**: `camelCase` (e.g., `currentPage`)
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `MAX_PAGES`)

#### Directory Structure
```
src/
├── pages/           # Individual page content
├── components/      # Reusable UI components
├── styles/          # CSS organization
│   ├── base/        # Reset, typography, base styles
│   ├── layout/      # Grid, containers, layouts
│   ├── components/  # Component-specific styles
│   └── pages/       # Page-specific styles
└── scripts/         # JavaScript modules
    ├── core/        # Core functionality
    ├── components/  # Component scripts
    └── utils/       # Utility functions
```

## 📝 Content Guidelines

### Writing Style
- **Tone**: Conversational yet academic
- **Perspective**: Intersectional feminist approach
- **Accessibility**: Clear, inclusive language
- **Evidence**: Fact-checked and cited sources

### Content Standards
- **Original content** or properly attributed
- **Inclusive language** throughout
- **Accessible formatting** (headings, alt text, etc.)
- **Community-focused** engagement

### Content Review Process
1. **Self-review** - Check for typos, clarity, and accuracy
2. **Fact-checking** - Verify all claims and statistics
3. **Accessibility check** - Ensure content is accessible
4. **Community review** - Get feedback from other contributors

## 🎨 Design Guidelines

### Visual Standards
- **Color Palette**: Use defined CSS custom properties
- **Typography**: Follow established font hierarchy
- **Layout**: Maintain consistent spacing and alignment
- **Accessibility**: Ensure sufficient contrast and readability

### Asset Guidelines
- **Images**: Optimize for web (WebP format preferred)
- **Icons**: Use SVG for scalability
- **Fonts**: Include proper fallbacks
- **Alt Text**: Descriptive and meaningful

### Responsive Design
- **Mobile-first** approach
- **Touch-friendly** interactive elements
- **Performance** optimization
- **Cross-browser** compatibility

## 🧪 Testing

### Manual Testing Checklist
- [ ] **Functionality** - All features work as expected
- [ ] **Responsive** - Looks good on all screen sizes
- [ ] **Accessibility** - Keyboard navigation and screen readers
- [ ] **Performance** - Fast loading and smooth animations
- [ ] **Cross-browser** - Works in all supported browsers

### Browser Testing
Test in the following browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Accessibility Testing
- **Keyboard navigation** - All interactive elements accessible
- **Screen reader** - Content properly announced
- **Color contrast** - Sufficient contrast ratios
- **Focus indicators** - Clear focus states

## 📋 Pull Request Process

### Before Submitting
1. **Update documentation** if needed
2. **Test thoroughly** across devices and browsers
3. **Follow code style** guidelines
4. **Write clear commit messages**

### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Design improvement
- [ ] Content addition

## Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested accessibility
- [ ] Cross-browser tested

## Screenshots
(If applicable)

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes
```

### Review Process
1. **Automated checks** - CI/CD pipeline validation
2. **Code review** - Peer review of code quality
3. **Content review** - Editorial review for content changes
4. **Testing** - Manual testing by maintainers
5. **Approval** - Final approval before merge

## 🚫 What Not to Contribute

### Content Restrictions
- **Hate speech** or discriminatory content
- **Misinformation** or unverified claims
- **Copyrighted material** without permission
- **Spam** or promotional content

### Technical Restrictions
- **Breaking changes** without discussion
- **Dependencies** without justification
- **Code** that doesn't follow guidelines
- **Features** that conflict with project vision

## 🐛 Reporting Issues

### Bug Reports
Include the following information:
- **Browser and version**
- **Operating system**
- **Steps to reproduce**
- **Expected behavior**
- **Actual behavior**
- **Screenshots** if applicable

### Feature Requests
- **Clear description** of the feature
- **Use case** and motivation
- **Proposed implementation** (if known)
- **Alternative solutions** considered

## 💬 Community Guidelines

### Communication
- **Be respectful** and inclusive
- **Use clear language** and avoid jargon
- **Listen actively** to different perspectives
- **Constructive feedback** only

### Collaboration
- **Ask questions** when unsure
- **Share knowledge** and resources
- **Help others** learn and grow
- **Celebrate contributions** from all

## 📞 Getting Help

### Resources
- **Documentation** - README.md and PRD.md
- **Issues** - GitHub Issues for bugs and features
- **Discussions** - GitHub Discussions for questions
- **Community** - Join our Discord/Slack (if available)

### Contact
- **Maintainers** - @maintainer-handles
- **Email** - thinkgurlzine@gmail.com
- **Social** - @thinkgurlzine on Twitter

## 🎉 Recognition

### Contributors
All contributors will be recognized in:
- **README.md** contributors section
- **Release notes** for significant contributions
- **Social media** shoutouts (with permission)
- **Annual contributor** appreciation

### Types of Recognition
- **Code contributions** - Technical contributors
- **Content contributions** - Writers and editors
- **Design contributions** - Visual and UX contributors
- **Community contributions** - Moderators and helpers

---

Thank you for contributing to Think GURL! Together, we're building a space for feminist tech discourse and community engagement. 🚀

*Last updated: [Current Date]*
