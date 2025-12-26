// CYBERPUNK CURSOR TRACKING
const cursorTrail = document.querySelector('.cursor-trail');

document.addEventListener('mousemove', (e) => {
    cursorTrail.style.opacity = '1';
    cursorTrail.style.left = e.clientX - 10 + 'px';
    cursorTrail.style.top = e.clientY - 10 + 'px';
});

document.addEventListener('mouseleave', () => {
    cursorTrail.style.opacity = '0';
});

// ENHANCED FORM INTERACTIONS
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('.submit-btn');
    const inputs = form.querySelectorAll('.form-input, .form-textarea');

    // DYNAMIC FORM FIELD EFFECTS
    inputs.forEach(input => {
        // Create dynamic underline effect
        const fieldGroup = input.closest('.form-group');
        const dynamicLine = document.createElement('div');
        dynamicLine.className = 'dynamic-underline';
        dynamicLine.style.cssText = `
            position: absolute;
            bottom: 0;
            left: 0;
            height: 2px;
            width: 0;
            background: linear-gradient(90deg, var(--neon-cyan), var(--neon-yellow));
            transition: width 0.6s ease;
            pointer-events: none;
        `;
        fieldGroup.style.position = 'relative';
        fieldGroup.appendChild(dynamicLine);

        // FOCUS ANIMATIONS
        input.addEventListener('focus', function() {
            dynamicLine.style.width = '100%';
            this.style.transform = 'translateX(5px) scale(1.02)';
            
            // Add particle effect
            createParticles(this);
        });

        input.addEventListener('blur', function() {
            if (!this.value) {
                dynamicLine.style.width = '0';
            }
            this.style.transform = 'translateX(0) scale(1)';
        });

        // TYPING SOUND SIMULATION (visual)
        input.addEventListener('input', function() {
            this.style.boxShadow = `
                0 0 30px rgba(0, 255, 255, 0.4),
                inset 0 0 30px rgba(0, 255, 255, 0.1)
            `;
            
            setTimeout(() => {
                this.style.boxShadow = `
                    0 0 20px rgba(0, 255, 255, 0.3),
                    inset 0 0 20px rgba(0, 255, 255, 0.1)
                `;
            }, 100);
        });
    });

    // FORM SUBMISSION WITH DRAMATIC EFFECT
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // BUTTON TRANSFORMATION
        submitBtn.style.transform = 'scale(0.95)';
        submitBtn.innerHTML = `
            <span class="btn-text">TRANSMITTING</span>
            <span class="btn-spinner">⟳</span>
        `;
        
        // ADD SPINNER ANIMATION
        const spinner = submitBtn.querySelector('.btn-spinner');
        spinner.style.cssText = `
            margin-left: 0.5rem;
            animation: spin 1s linear infinite;
            position: relative;
            z-index: 2;
        `;

        // SIMULATE TRANSMISSION DELAY
        setTimeout(() => {
            submitBtn.innerHTML = `
                <span class="btn-text">TRANSMITTED</span>
                <span class="btn-arrow">✓</span>
            `;
            submitBtn.style.background = 'linear-gradient(135deg, var(--neon-cyan), var(--neon-yellow))';
            
            // SUCCESS NOTIFICATION
            showNotification('Message successfully transmitted to Cheese&Company neural network', 'success');
            
            // RESET FORM AFTER DELAY
            setTimeout(() => {
                form.reset();
                inputs.forEach(input => {
                    const dynamicLine = input.closest('.form-group').querySelector('.dynamic-underline');
                    if (dynamicLine) dynamicLine.style.width = '0';
                });
                
                // RESET BUTTON
                setTimeout(() => {
                    submitBtn.innerHTML = `
                        <span class="btn-text">TRANSMIT</span>
                        <span class="btn-arrow">→</span>
                    `;
                    submitBtn.style.background = 'linear-gradient(135deg, var(--neon-magenta), var(--electric-purple))';
                    submitBtn.style.transform = 'scale(1)';
                }, 1000);
            }, 2000);
        }, 2500);
    });

    // PARTICLE CREATION FUNCTION
    function createParticles(element) {
        const rect = element.getBoundingClientRect();
        
        for (let i = 0; i < 5; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 2px;
                height: 2px;
                background: var(--neon-cyan);
                pointer-events: none;
                z-index: 1000;
                border-radius: 50%;
                left: ${rect.left + Math.random() * rect.width}px;
                top: ${rect.top + Math.random() * rect.height}px;
                opacity: 1;
            `;
            
            document.body.appendChild(particle);
            
            // ANIMATE PARTICLE
            const animation = particle.animate([
                { 
                    transform: 'translateY(0) scale(1)', 
                    opacity: 1 
                },
                { 
                    transform: `translateY(-20px) scale(0)`, 
                    opacity: 0 
                }
            ], {
                duration: 800,
                easing: 'ease-out'
            });
            
            animation.onfinish = () => particle.remove();
        }
    }

    // NOTIFICATION SYSTEM
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 2rem;
            right: 2rem;
            background: rgba(0, 20, 40, 0.95);
            border: 1px solid var(--neon-cyan);
            color: var(--ghost-white);
            padding: 1rem 2rem;
            font-family: var(--font-mono);
            font-size: 0.9rem;
            backdrop-filter: blur(10px);
            z-index: 10000;
            max-width: 400px;
            animation: notificationSlide 0.5s ease-out;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // AUTO REMOVE AFTER 4 SECONDS
        setTimeout(() => {
            notification.style.animation = 'notificationSlide 0.5s ease-out reverse';
            setTimeout(() => notification.remove(), 500);
        }, 4000);
    }

    // ENHANCED HOVER EFFECTS FOR CARDS
    const cards = document.querySelectorAll('.info-card, .contact-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) rotateX(2deg)';
            this.style.borderColor = 'var(--neon-magenta)';
            this.style.boxShadow = `
                0 20px 40px rgba(0, 0, 0, 0.5),
                0 0 30px rgba(255, 0, 128, 0.3)
            `;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0deg)';
            this.style.borderColor = 'var(--neon-cyan)';
            this.style.boxShadow = 'none';
        });
    });

    // GLITCH TEXT EFFECT FOR TITLE
    const titleParts = document.querySelectorAll('.title-part');
    titleParts.forEach(part => {
        part.addEventListener('mouseenter', function() {
            this.style.animation = 'glitchText 0.5s ease-in-out';
            
            setTimeout(() => {
                this.style.animation = 'gradientShift 3s ease-in-out infinite';
            }, 500);
        });
    });

    // SOUND VISUALIZATION BARS (VISUAL ONLY)
    createSoundBars();
    
    function createSoundBars() {
        const heroSection = document.querySelector('.hero-section');
        const soundViz = document.createElement('div');
        soundViz.style.cssText = `
            position: absolute;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 3px;
            opacity: 0.3;
        `;
        
        for (let i = 0; i < 20; i++) {
            const bar = document.createElement('div');
            bar.style.cssText = `
                width: 2px;
                height: ${Math.random() * 20 + 5}px;
                background: var(--neon-cyan);
                animation: soundPulse ${Math.random() * 2 + 1}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
            `;
            soundViz.appendChild(bar);
        }
        
        heroSection.appendChild(soundViz);
    }
});

// DYNAMIC CSS ANIMATIONS INJECTION
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    @keyframes notificationSlide {
        from { 
            transform: translateX(100%); 
            opacity: 0; 
        }
        to { 
            transform: translateX(0); 
            opacity: 1; 
        }
    }
    
    @keyframes glitchText {
        0%, 100% { transform: translateX(0); }
        20% { transform: translateX(-2px); }
        40% { transform: translateX(2px); }
        60% { transform: translateX(-1px); }
        80% { transform: translateX(1px); }
    }
    
    @keyframes soundPulse {
        0%, 100% { 
            height: 5px;
            background: var(--neon-cyan);
        }
        50% { 
            height: 25px;
            background: var(--neon-magenta);
        }
    }
    
    /* ENHANCED BUTTON HOVER */
    .submit-btn:hover {
        animation: buttonPulse 0.3s ease-in-out;
    }
    
    @keyframes buttonPulse {
        0% { transform: scale(1) translateY(0); }
        50% { transform: scale(1.05) translateY(-5px); }
        100% { transform: scale(1.02) translateY(-3px); }
    }
    
    /* CARD SCAN ENHANCEMENT */
    .info-card:hover::before,
    .contact-card:hover::before {
        animation-duration: 2s;
    }
`;

document.head.appendChild(dynamicStyles);

// KEYBOARD NAVIGATION ENHANCEMENT
document.addEventListener('keydown', function(e) {
    // ESC to clear all focus
    if (e.key === 'Escape') {
        document.activeElement.blur();
    }
    
    // ENTER to trigger hover effects
    if (e.key === 'Enter' && document.activeElement) {
        const element = document.activeElement;
        if (element.classList.contains('submit-btn')) {
            element.style.animation = 'buttonPulse 0.3s ease-in-out';
        }
    }
});

// PERFORMANCE OPTIMIZATION: THROTTLED SCROLL LISTENER
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) return;
    
    scrollTimeout = setTimeout(() => {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        
        // PARALLAX EFFECT FOR HERO BACKGROUND
        if (heroSection) {
            const bgElements = heroSection.querySelector('.hero-bg-elements');
            bgElements.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        
        scrollTimeout = null;
    }, 16); // ~60fps
});

console.log(`
🤖 CHEESE&COMPANY NEURAL INTERFACE ACTIVATED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STATUS: RETRO-FUTURISTIC MAXIMALISM ENGAGED
CURSOR: CUSTOM CYBERPUNK TRACKING
ANIMATIONS: FULL SPECTRUM ACTIVE
FORMS: ENHANCED INTERACTION PROTOCOL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AI IS OUR TEAMMATE | 仲間はAI
`);