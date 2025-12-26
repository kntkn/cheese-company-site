// MINIMAL & ELEGANT INTERACTIONS
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitButton = form.querySelector('.submit-button');
    
    // GENTLE FORM SUBMISSION
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple state change
        submitButton.textContent = '送信中...';
        submitButton.disabled = true;
        submitButton.style.opacity = '0.7';
        
        // Simulate processing
        setTimeout(() => {
            submitButton.textContent = '送信完了';
            submitButton.style.background = 'var(--color-text)';
            
            // Show subtle success message
            showMessage('お問い合わせありがとうございます。後日ご連絡いたします。');
            
            // Reset form gently
            setTimeout(() => {
                form.reset();
                resetButton();
            }, 2000);
        }, 1500);
    });
    
    function resetButton() {
        submitButton.textContent = '送信';
        submitButton.disabled = false;
        submitButton.style.opacity = '1';
        submitButton.style.background = 'var(--color-text)';
    }
    
    // SUBTLE SUCCESS MESSAGE
    function showMessage(text) {
        const message = document.createElement('div');
        message.style.cssText = `
            position: fixed;
            top: 2rem;
            right: 2rem;
            background: var(--color-background);
            border: 1px solid var(--color-border);
            color: var(--color-text);
            padding: 1rem 1.5rem;
            font-family: var(--font-sans);
            font-size: 0.9rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            opacity: 0;
            transform: translateY(-20px);
            transition: all 0.3s ease;
        `;
        message.textContent = text;
        
        document.body.appendChild(message);
        
        // Gentle fade in
        setTimeout(() => {
            message.style.opacity = '1';
            message.style.transform = 'translateY(0)';
        }, 10);
        
        // Auto remove
        setTimeout(() => {
            message.style.opacity = '0';
            message.style.transform = 'translateY(-20px)';
            setTimeout(() => message.remove(), 300);
        }, 4000);
    }
    
    // REFINED FOCUS INDICATORS
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'translateY(-1px)';
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 0 0 2px transparent';
        });
    });
    
    // GENTLE SCROLL INDICATOR
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        
        if (heroSection) {
            const opacity = 1 - (scrolled / window.innerHeight);
            heroSection.style.opacity = Math.max(opacity, 0.3);
        }
    });
});

// ACCESSIBILITY ENHANCEMENT
document.addEventListener('keydown', function(e) {
    // Enhanced keyboard navigation
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-nav');
});

// Enhanced focus styles for keyboard navigation
const style = document.createElement('style');
style.textContent = `
    .keyboard-nav *:focus {
        outline: 2px solid var(--color-accent);
        outline-offset: 2px;
    }
`;
document.head.appendChild(style);