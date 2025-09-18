// Think GURL Interactive Zine - Main JavaScript

console.log('🚀 Think GURL Interactive Zine loaded!');

// Initialize the zine when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('📖 Zine initialized');
    
    // Add smooth scroll behavior for any future navigation
    initializeSmoothScrolling();
    
    // Add keyboard navigation support
    initializeKeyboardNavigation();
    
    // Add accessibility enhancements
    initializeAccessibility();
});

/**
 * Initialize smooth scrolling behavior
 */
function initializeSmoothScrolling() {
    // Smooth scroll for anchor links (future use)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Initialize keyboard navigation
 */
function initializeKeyboardNavigation() {
    // Add keyboard support for interactive elements
    document.addEventListener('keydown', function(e) {
        // Handle escape key for any modals or overlays (future use)
        if (e.key === 'Escape') {
            console.log('Escape key pressed');
            // Future: Close any open modals or overlays
        }
        
        // Handle arrow keys for navigation (future use)
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            console.log(`${e.key} arrow key pressed`);
            // Future: Navigate between pages in flipbook
        }
    });
}

/**
 * Initialize accessibility features
 */
function initializeAccessibility() {
    // Add skip link for screen readers
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--dark-purple);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content landmark
    const mainContent = document.querySelector('.zine-content');
    if (mainContent) {
        mainContent.id = 'main-content';
        mainContent.setAttribute('role', 'main');
    }
    
    // Add ARIA labels for better screen reader support
    const header = document.querySelector('.zine-header');
    if (header) {
        header.setAttribute('role', 'banner');
    }
    
    const footer = document.querySelector('.zine-footer');
    if (footer) {
        footer.setAttribute('role', 'contentinfo');
    }
}

/**
 * Utility function to log user interactions (for analytics)
 */
function logInteraction(action, details = {}) {
    console.log(`User interaction: ${action}`, details);
    // Future: Send to analytics service
}

/**
 * Future: Initialize flipbook functionality
 */
function initializeFlipbook() {
    console.log('📚 Flipbook functionality will be implemented here');
    // This will be implemented when we add Turn.js or similar library
}

/**
 * Future: Initialize comment system
 */
function initializeComments() {
    console.log('💬 Comment system will be implemented here');
    // This will be implemented when we add Giscus or similar
}

// Export functions for potential module use
window.ThinkGurlZine = {
    initializeFlipbook,
    initializeComments,
    logInteraction
};
