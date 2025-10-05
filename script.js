// Main JavaScript for Space Yatra
document.addEventListener('DOMContentLoaded', function() {
    // Navigation Menu Toggle
    const menuButton = document.getElementById('menuButton');
    const menuText = document.getElementById('menuText');
    const navDropdown = document.getElementById('navDropdown');
    
    menuButton.addEventListener('click', function() {
        navDropdown.classList.toggle('active');
    });
    
    // Make menu text clickable too
    if (menuText) {
        menuText.addEventListener('click', function() {
            navDropdown.classList.toggle('active');
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!menuButton.contains(event.target) && !menuText.contains(event.target) && !navDropdown.contains(event.target)) {
            navDropdown.classList.remove('active');
        }
    });
    
    // About Us Panel Toggle
    const aboutPanel = document.getElementById('aboutPanel');
    const closeButton = document.getElementById('closeButton');
    const aboutUsMenuItem = document.getElementById('aboutUsMenuItem');
    
    // About Us Menu Item Toggle
    if (aboutUsMenuItem) {
        aboutUsMenuItem.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Close navigation menu first
            navDropdown.classList.remove('active');
            
            // Open About Us panel
            aboutPanel.style.position = 'fixed';
            aboutPanel.style.top = '0';
            aboutPanel.style.left = 'auto';
            aboutPanel.style.right = '0';
            aboutPanel.style.transform = 'none';
            
            aboutPanel.classList.add('active');
            console.log('About panel opened from menu');
        });
    }
    
    closeButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        aboutPanel.classList.remove('active');
        
        // Ensure panel returns to proper hidden position
        aboutPanel.style.right = '-400px';
        aboutPanel.style.transform = 'none';
        
        console.log('About panel closed');
    });
    
    // Close panel when clicking outside
    document.addEventListener('click', function(event) {
        if (!aboutPanel.contains(event.target) && !aboutUsMenuItem.contains(event.target)) {
            aboutPanel.classList.remove('active');
            aboutPanel.style.right = '-400px';
            aboutPanel.style.transform = 'none';
        }
    });
    
    // Remove Start Journey Button functionality
    
    // Enhanced Video-Like Animation System
    function createDynamicStarField() {
        const starField = document.getElementById('starField');
        const numStars = 50;
        
        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.className = 'dynamic-star';
            
            // Random positioning
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            
            // Random size
            const size = Math.random() * 3 + 1;
            star.style.width = size + 'px';
            star.style.height = size + 'px';
            
            // Random animation delay
            star.style.animationDelay = Math.random() * 4 + 's';
            
            // Random color variation
            const colors = ['#ffffff', '#ffc107', '#ff6b6b', '#4ecdc4'];
            star.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            starField.appendChild(star);
        }
    }
    
    function createDynamicCityLights() {
        const cityLights = document.getElementById('cityLights');
        const numLights = 25;
        
        for (let i = 0; i < numLights; i++) {
            const light = document.createElement('div');
            light.className = 'city-light-enhanced';
            
            // Random positioning on Earth
            light.style.left = Math.random() * 100 + '%';
            light.style.top = Math.random() * 100 + '%';
            
            // Random size
            const size = Math.random() * 2 + 1;
            light.style.width = size + 'px';
            light.style.height = size + 'px';
            
            // Random animation delay
            light.style.animationDelay = Math.random() * 3 + 's';
            
            cityLights.appendChild(light);
        }
    }
    
    function createDynamicSparkles() {
        const sparklesContainer = document.getElementById('sparklesContainer');
        const numSparkles = 20;
        
        for (let i = 0; i < numSparkles; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle-enhanced';
            
            // Random positioning
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            
            // Random animation delay
            sparkle.style.animationDelay = Math.random() * 5 + 's';
            
            sparklesContainer.appendChild(sparkle);
        }
    }
    
    function createMeteorShower() {
        const meteorShower = document.getElementById('meteorShower');
        
        setInterval(() => {
            const meteor = document.createElement('div');
            meteor.className = 'meteor';
            
            // Random start position
            meteor.style.left = Math.random() * 100 + '%';
            meteor.style.top = Math.random() * 50 + '%';
            
            // Random size
            const size = Math.random() * 3 + 2;
            meteor.style.width = size + 'px';
            meteor.style.height = size + 'px';
            
            meteorShower.appendChild(meteor);
            
            // Remove meteor after animation
            setTimeout(() => {
                if (meteor.parentNode) {
                    meteor.parentNode.removeChild(meteor);
                }
            }, 3000);
        }, 2000);
    }
    
    // Initialize all dynamic elements
    createDynamicStarField();
    createDynamicCityLights();
    createDynamicSparkles();
    createMeteorShower();
    
    // Add floating particles effect
    function createFloatingParticles() {
        const particleContainer = document.createElement('div');
        particleContainer.className = 'particle-container';
        particleContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        `;
        
        document.body.appendChild(particleContainer);
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: rgba(255, 255, 255, 0.8);
                border-radius: 50%;
                animation: float ${Math.random() * 10 + 10}s linear infinite;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 10}s;
            `;
            particleContainer.appendChild(particle);
        }
    }
    
    // Add floating animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Initialize floating particles
    createFloatingParticles();
    
    // Add interactive hover effects for navigation items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
        });
    });
    
    // Add click ripple effect
    function createRipple(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    // Add ripple animation CSS
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });
    
    // Add smooth scrolling for navigation
    const navLinks = document.querySelectorAll('.nav-item[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add parallax effect to background elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.sun, .earth, .stars');
        
        parallaxElements.forEach(element => {
            const speed = element.classList.contains('sun') ? 0.5 : 
                         element.classList.contains('earth') ? 0.3 : 0.1;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Add typing effect for welcome text
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Initialize typing effect
    const welcomeText = document.getElementById('welcomeText');
    if (welcomeText) {
        const originalText = welcomeText.textContent;
        setTimeout(() => {
            typeWriter(welcomeText, originalText, 150);
        }, 1000);
    }
    
    // Add constellation effect
    function createConstellation() {
        const constellation = document.createElement('div');
        constellation.className = 'constellation';
        constellation.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 2;
        `;
        
        document.body.appendChild(constellation);
        
        // Create constellation lines
        for (let i = 0; i < 5; i++) {
            const line = document.createElement('div');
            line.className = 'constellation-line';
            line.style.cssText = `
                position: absolute;
                height: 1px;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
                animation: constellation-glow 3s ease-in-out infinite;
                animation-delay: ${i * 0.5}s;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                width: ${Math.random() * 200 + 100}px;
                transform: rotate(${Math.random() * 360}deg);
            `;
            constellation.appendChild(line);
        }
    }
    
    // Add constellation animation CSS
    const constellationStyle = document.createElement('style');
    constellationStyle.textContent = `
        @keyframes constellation-glow {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
        }
    `;
    document.head.appendChild(constellationStyle);
    
    // Initialize constellation
    setTimeout(createConstellation, 2000);
    
    console.log('Space Yatra initialized successfully! 🚀');
});
