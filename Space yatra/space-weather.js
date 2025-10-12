// Space Weather Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize interactive elements
    initializeInteractiveElements();
    initializeAnimations();
    initializeScrollEffects();
    
    console.log('Space Weather page initialized! 🌟');
});

function initializeInteractiveElements() {
    // Add click effects to info cards
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'translateY(-10px) scale(1)';
            }, 200);
        });
        
        // Add hover sound effect (visual feedback)
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = 'rgba(255, 107, 107, 0.5)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        });
    });
    
    // Add interactive effects to NASA images
    const nasaImages = document.querySelectorAll('.nasa-image');
    nasaImages.forEach(image => {
        image.addEventListener('click', function() {
            // Create a lightbox effect
            const lightbox = document.createElement('div');
            lightbox.className = 'image-lightbox';
            lightbox.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                cursor: pointer;
            `;
            
            const enlargedImage = this.cloneNode(true);
            enlargedImage.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                object-fit: contain;
                border-radius: 10px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            `;
            
            lightbox.appendChild(enlargedImage);
            document.body.appendChild(lightbox);
            
            lightbox.addEventListener('click', function() {
                document.body.removeChild(lightbox);
            });
        });
    });
    
    // Add interactive effects to effect cards
    const effectCards = document.querySelectorAll('.effect-card');
    effectCards.forEach(card => {
        card.addEventListener('click', function() {
            // Create a ripple effect
            const ripple = document.createElement('div');
            ripple.className = 'ripple-effect';
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
                pointer-events: none;
            `;
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (rect.width / 2 - size / 2) + 'px';
            ripple.style.top = (rect.height / 2 - size / 2) + 'px';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

function initializeAnimations() {
    // Add staggered animation to info cards
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Add staggered animation to effect cards
    const effectCards = document.querySelectorAll('.effect-card');
    effectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, (index * 150) + 1000);
    });
    
    // Add floating animation to icons
    const icons = document.querySelectorAll('.effect-icon i');
    icons.forEach((icon, index) => {
        icon.style.animationDelay = (index * 0.5) + 's';
    });
}

function initializeScrollEffects() {
    // Add parallax effect to animated sun
    const animatedSun = document.querySelector('.animated-sun');
    if (animatedSun) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            animatedSun.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // Add scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.info-card, .effect-card, .interactive-section');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .animate-in {
        animation: slideInUp 0.6s ease forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .image-lightbox {
        animation: fadeIn 0.3s ease;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);
