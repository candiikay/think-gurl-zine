// Think GURL Interactive Zine - Main JavaScript

console.log('🚀 Think GURL Interactive Zine loaded!');

// Global variables
let currentPage = 1;
let totalPages = 8;
let isTransitioning = false;

// Initialize the zine when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('📖 Zine initialized');
    
    // Initialize flipbook functionality
    initializeFlipbook();
    
    // Add keyboard navigation support
    initializeKeyboardNavigation();
    
    // Add accessibility enhancements
    initializeAccessibility();
    
    // Hide loading screen after initialization
    setTimeout(() => {
        hideLoadingScreen();
    }, 1500);
});

/**
 * Initialize flipbook functionality
 */
function initializeFlipbook() {
    const flipbook = document.getElementById('flipbook');
    const pages = flipbook.querySelectorAll('.page');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const currentPageSpan = document.getElementById('currentPage');
    const totalPagesSpan = document.getElementById('totalPages');
    
    // Set total pages
    totalPagesSpan.textContent = totalPages;
    
    // Show first page initially
    showPage(1);
    
    // Add event listeners for navigation buttons
    prevBtn.addEventListener('click', () => previousPage());
    nextBtn.addEventListener('click', () => nextPage());
    
    // Add click handlers for pages (click to turn)
    pages.forEach((page, index) => {
        page.addEventListener('click', () => {
            if (index + 1 > currentPage) {
                nextPage();
            } else if (index + 1 < currentPage) {
                previousPage();
            }
        });
    });
    
    // Add touch/swipe support for mobile
    let startX = 0;
    let startY = 0;
    
    flipbook.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });
    
    flipbook.addEventListener('touchend', (e) => {
        if (isTransitioning) return;
        
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const diffX = startX - endX;
        const diffY = startY - endY;
        
        // Only trigger if horizontal swipe is greater than vertical
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            if (diffX > 0) {
                nextPage(); // Swipe left to go forward
            } else {
                previousPage(); // Swipe right to go backward
            }
        }
    });
    
    console.log('📚 Flipbook initialized with', totalPages, 'pages');
}

/**
 * Show a specific page
 */
function showPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    const currentPageSpan = document.getElementById('currentPage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Hide all pages
    pages.forEach(page => {
        page.style.display = 'none';
        page.classList.remove('active');
    });
    
    // Show the current page
    if (pages[pageNumber - 1]) {
        pages[pageNumber - 1].style.display = 'flex';
        pages[pageNumber - 1].classList.add('active');
    }
    
    // Update page indicator
    currentPageSpan.textContent = pageNumber;
    
    // Update navigation buttons
    prevBtn.disabled = pageNumber === 1;
    nextBtn.disabled = pageNumber === totalPages;
    
    // Update current page
    currentPage = pageNumber;
    
    // Log page change for analytics
    logInteraction('page_view', { page: pageNumber });
}

/**
 * Go to next page
 */
function nextPage() {
    if (isTransitioning || currentPage >= totalPages) return;
    
    isTransitioning = true;
    
    // Add page turn animation
    const currentPageEl = document.querySelector('.page.active');
    if (currentPageEl) {
        currentPageEl.style.transform = 'rotateY(-90deg)';
        currentPageEl.style.transition = 'transform 0.6s ease-in-out';
    }
    
    setTimeout(() => {
        showPage(currentPage + 1);
        const newPageEl = document.querySelector('.page.active');
        if (newPageEl) {
            newPageEl.style.transform = 'rotateY(90deg)';
            newPageEl.style.transition = 'transform 0.6s ease-in-out';
            
            setTimeout(() => {
                newPageEl.style.transform = 'rotateY(0deg)';
                setTimeout(() => {
                    isTransitioning = false;
                }, 600);
            }, 50);
        }
    }, 300);
}

/**
 * Go to previous page
 */
function previousPage() {
    if (isTransitioning || currentPage <= 1) return;
    
    isTransitioning = true;
    
    // Add page turn animation
    const currentPageEl = document.querySelector('.page.active');
    if (currentPageEl) {
        currentPageEl.style.transform = 'rotateY(90deg)';
        currentPageEl.style.transition = 'transform 0.6s ease-in-out';
    }
    
    setTimeout(() => {
        showPage(currentPage - 1);
        const newPageEl = document.querySelector('.page.active');
        if (newPageEl) {
            newPageEl.style.transform = 'rotateY(-90deg)';
            newPageEl.style.transition = 'transform 0.6s ease-in-out';
            
            setTimeout(() => {
                newPageEl.style.transform = 'rotateY(0deg)';
                setTimeout(() => {
                    isTransitioning = false;
                }, 600);
            }, 50);
        }
    }, 300);
}

/**
 * Hide loading screen
 */
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }
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
        
        // Handle arrow keys for flipbook navigation
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            previousPage();
            console.log('Previous page via keyboard');
        }
        
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextPage();
            console.log('Next page via keyboard');
        }
        
        // Handle space bar for next page
        if (e.key === ' ' && !e.target.matches('input, textarea')) {
            e.preventDefault();
            nextPage();
            console.log('Next page via spacebar');
        }
        
        // Handle home key to go to first page
        if (e.key === 'Home') {
            e.preventDefault();
            showPage(1);
            console.log('Go to first page via Home key');
        }
        
        // Handle end key to go to last page
        if (e.key === 'End') {
            e.preventDefault();
            showPage(totalPages);
            console.log('Go to last page via End key');
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
