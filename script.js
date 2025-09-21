// sam's secret files - think gurl zine

console.log('🔍 sam\'s secret files loaded');

// Global variables
let currentFile = null;
let isTransitioning = false;

// File content mapping
const fileContents = {
  'manifesto': {
    title: 'manifesto',
    type: '.txt',
    content: 'manifesto-page'
  },
  'dating-apps': {
    title: 'dating apps',
    type: '.analysis',
    content: 'dating-apps-page'
  },
  'hygiene': {
    title: 'digital hygiene',
    type: '.wellness',
    content: 'hygiene-page'
  },
  'intimacy': {
    title: 'intimacy',
    type: '.connection',
    content: 'intimacy-page'
  },
  'politics': {
    title: 'digital politics',
    type: '.organizing',
    content: 'politics-page'
  },
  'closing': {
    title: 'future is feminist',
    type: '.vision',
    content: 'closing-page'
  }
};

// Initialize the file system when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('📁 File system initialized');
    
    // Initialize file system functionality
    initializeFileSystem();
    
    // Add keyboard navigation support
    initializeKeyboardNavigation();
    
    // Hide loading screen after initialization
    setTimeout(() => {
        hideLoadingScreen();
    }, 1500);
});

/**
 * Initialize file system functionality
 */
function initializeFileSystem() {
    const tabs = document.querySelectorAll('.tab, .file-tab');
    const closeBtn = document.getElementById('closeFileBtn');
    const fileContent = document.getElementById('fileContent');
    const zineContent = document.getElementById('zineContent');
    
    // Add event listeners for all tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const fileId = tab.getAttribute('data-file');
            if (fileId && fileContents[fileId]) {
                openFile(fileId);
            }
        });
        
        // Add hover effects
        tab.addEventListener('mouseenter', () => {
            if (!tab.classList.contains('active')) {
                tab.style.transform = 'translateY(-1px)';
            }
        });
        
        tab.addEventListener('mouseleave', () => {
            if (!tab.classList.contains('active')) {
                tab.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Add close button functionality
    closeBtn.addEventListener('click', () => {
        closeFile();
    });
    
    // Add click outside to close
    document.addEventListener('click', (e) => {
        if (zineContent.classList.contains('hidden')) return;
        
        if (!zineContent.contains(e.target) && !closeBtn.contains(e.target)) {
            closeFile();
        }
    });
    
    console.log('📂 File system initialized with', tabs.length, 'tabs');
}

/**
 * Open a file and show its content
 */
function openFile(fileId) {
    if (isTransitioning || !fileContents[fileId]) return;
    
    isTransitioning = true;
    const file = fileContents[fileId];
    const zineContent = document.getElementById('zineContent');
    const targetPage = document.getElementById(file.content);
    const closeBtn = document.getElementById('closeFileBtn');
    
    // Hide the file cabinet
    document.querySelector('.file-cabinet').style.opacity = '0.3';
    
    // Show the zine content
    zineContent.classList.remove('hidden');
    zineContent.style.transform = 'translateY(0)';
    
    // Show the specific page
    document.querySelectorAll('.zine-page').forEach(page => {
        page.classList.add('hidden');
    });
    
    if (targetPage) {
        targetPage.classList.remove('hidden');
    }
    
    // Show close button
    closeBtn.classList.remove('hidden');
    
    // Update current file
    currentFile = fileId;
    
    // Update active tabs
    updateActiveTabs(fileId);
    
    // Log interaction
    logInteraction('file_opened', { file: fileId, title: file.title });
    
    setTimeout(() => {
        isTransitioning = false;
    }, 500);
    
    console.log('📖 Opened file:', file.title);
}

/**
 * Close the current file
 */
function closeFile() {
    if (isTransitioning) return;
    
    isTransitioning = true;
    const zineContent = document.getElementById('zineContent');
    const closeBtn = document.getElementById('closeFileBtn');
    
    // Hide zine content
    zineContent.classList.add('hidden');
    
    // Hide close button
    closeBtn.classList.add('hidden');
    
    // Show file cabinet
    document.querySelector('.file-cabinet').style.opacity = '1';
    
    // Update current file
    currentFile = null;
    
    // Log interaction
    logInteraction('file_closed', {});
    
    setTimeout(() => {
        isTransitioning = false;
    }, 500);
    
    console.log('📁 Closed file');
}

/**
 * Update active tabs based on current file
 */
function updateActiveTabs(fileId) {
    // Remove active class from all tabs
    document.querySelectorAll('.tab, .file-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Add active class to tabs with matching data-file
    document.querySelectorAll(`[data-file="${fileId}"]`).forEach(tab => {
        tab.classList.add('active');
    });
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
    document.addEventListener('keydown', function(e) {
        // Handle escape key to close files
        if (e.key === 'Escape') {
            if (currentFile) {
                closeFile();
                console.log('File closed via Escape key');
            }
        }
        
        // Handle number keys for quick file access
        if (e.key >= '1' && e.key <= '6') {
            const fileIds = Object.keys(fileContents);
            const fileIndex = parseInt(e.key) - 1;
            if (fileIds[fileIndex]) {
                openFile(fileIds[fileIndex]);
                console.log('Opened file via number key:', e.key);
            }
        }
        
        // Handle arrow keys for navigation (future enhancement)
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            if (currentFile) {
                const fileIds = Object.keys(fileContents);
                const currentIndex = fileIds.indexOf(currentFile);
                let nextIndex;
                
                if (e.key === 'ArrowLeft') {
                    nextIndex = currentIndex > 0 ? currentIndex - 1 : fileIds.length - 1;
                } else {
                    nextIndex = currentIndex < fileIds.length - 1 ? currentIndex + 1 : 0;
                }
                
                openFile(fileIds[nextIndex]);
                console.log('Navigated via arrow key:', e.key);
            }
        }
    });
}

/**
 * Utility function to log user interactions
 */
function logInteraction(action, details = {}) {
    console.log(`User interaction: ${action}`, details);
    // Future: Send to analytics service
}

/**
 * Add some fun interactive effects
 */
function addInteractiveEffects() {
    // Add sparkle effect on tab hover
    document.querySelectorAll('.tab, .file-tab').forEach(tab => {
        tab.addEventListener('mouseenter', () => {
            createSparkleEffect(tab);
        });
    });
    
    // Add click ripple effect
    document.querySelectorAll('.tab, .file-tab, .close-file-btn').forEach(element => {
        element.addEventListener('click', (e) => {
            createRippleEffect(e, element);
        });
    });
}

/**
 * Create sparkle effect on hover
 */
function createSparkleEffect(element) {
    const sparkle = document.createElement('div');
    sparkle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: var(--cyber-pink);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        animation: sparkleFade 0.6s ease-out forwards;
    `;
    
    const rect = element.getBoundingClientRect();
    sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
    sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 600);
}

/**
 * Create ripple effect on click
 */
function createRippleEffect(event, element) {
    const ripple = document.createElement('div');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${event.clientX - rect.left - size/2}px;
        top: ${event.clientY - rect.top - size/2}px;
        background: rgba(255, 105, 180, 0.3);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        animation: rippleExpand 0.6s ease-out forwards;
    `;
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleFade {
        0% {
            opacity: 1;
            transform: scale(0);
        }
        50% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0);
        }
    }
    
    @keyframes rippleExpand {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize interactive effects
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        addInteractiveEffects();
    }, 1000);
});

// Export functions for potential module use
window.SecretFiles = {
    openFile,
    closeFile,
    logInteraction
};