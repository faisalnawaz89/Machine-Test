
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Check if user prefers reduced motion
 */
function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// ============================================
// Hero Slider - Dual Axis
// ============================================

class HeroSlider {
    constructor(sliderElement) {
        this.slider = sliderElement;
        this.track = this.slider.querySelector('.hero__slider-track');
        this.slides = this.slider.querySelectorAll('.hero__slide');
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        this.autoplayInterval = null;
        this.autoplayDelay = 5000;
        this.isPaused = false;
        
        this.prevBtn = this.slider.querySelector('.hero__control--prev');
        this.nextBtn = this.slider.querySelector('.hero__control--next');
        this.dots = this.slider.querySelectorAll('.hero__dot');
        
        this.init();
    }
    
    init() {
        // Event listeners for controls
        this.prevBtn?.addEventListener('click', () => this.prev());
        this.nextBtn?.addEventListener('click', () => this.next());
        
        // Event listeners for dots
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Keyboard navigation
        this.slider.addEventListener('keydown', (e) => this.handleKeyboard(e));
        
        // Pause on hover
        this.slider.addEventListener('mouseenter', () => this.pause());
        this.slider.addEventListener('mouseleave', () => this.resume());
        
        // Touch/swipe support
        this.addSwipeSupport();
        
        // Start autoplay if motion is allowed
        if (!prefersReducedMotion()) {
            this.startAutoplay();
        }
        
        // Update ARIA
        this.updateARIA();
    }
    
    goToSlide(index) {
        // Update current slide
        this.currentSlide = index;
        
        // Move the track vertically using transform
        const translateY = -100 * index;
        this.track.style.transform = `translateY(${translateY}%)`;
        
        // Update dots
        this.dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('hero__dot--active');
                dot.setAttribute('aria-selected', 'true');
            } else {
                dot.classList.remove('hero__dot--active');
                dot.setAttribute('aria-selected', 'false');
            }
        });
        
        this.updateARIA();
    }
    
    next() {
        const nextSlide = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(nextSlide);
    }
    
    prev() {
        const prevSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.goToSlide(prevSlide);
    }
    
    startAutoplay() {
        this.autoplayInterval = setInterval(() => {
            if (!this.isPaused) {
                this.next();
            }
        }, this.autoplayDelay);
    }
    
    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
    
    pause() {
        this.isPaused = true;
    }
    
    resume() {
        this.isPaused = false;
    }
    
    handleKeyboard(e) {
        switch(e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                this.prev();
                break;
            case 'ArrowRight':
                e.preventDefault();
                this.next();
                break;
        }
    }
    
    addSwipeSupport() {
        let touchStartX = 0;
        let touchEndX = 0;
        
        this.slider.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        this.slider.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        }, { passive: true });
    }
    
    handleSwipe(startX, endX) {
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.next();
            } else {
                this.prev();
            }
        }
    }
    
    updateARIA() {
        // Announce current slide to screen readers
        const announcement = `Slide ${this.currentSlide + 1} of ${this.totalSlides}`;
        this.slider.setAttribute('aria-label', announcement);
    }
}

// ============================================
// Choose School Cards - Mobile Slider
// ============================================

class SchoolCardsSlider {
    constructor(containerElement) {
        this.container = containerElement;
        this.cards = this.container.querySelectorAll('.choose-school__card');
        this.currentCard = 0;
        this.totalCards = this.cards.length;
        
        this.prevBtn = document.querySelector('.choose-school__control--prev');
        this.nextBtn = document.querySelector('.choose-school__control--next');
        this.dots = document.querySelectorAll('.choose-school__dot');
        
        this.init();
    }
    
    init() {
        // Only activate on mobile
        if (window.innerWidth <= 767) {
            this.activate();
        }
        
        // Re-check on resize
        window.addEventListener('resize', debounce(() => {
            if (window.innerWidth <= 767) {
                this.activate();
            } else {
                this.deactivate();
            }
        }, 250));
    }
    
    activate() {
        // Event listeners for controls
        this.prevBtn?.addEventListener('click', () => this.prev());
        this.nextBtn?.addEventListener('click', () => this.next());
        
        // Event listeners for dots
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToCard(index));
        });
        
        // Scroll event to update active dot
        this.container.addEventListener('scroll', debounce(() => {
            this.updateActiveCard();
        }, 100));
        
        // Touch/swipe support is native with scroll-snap
    }
    
    deactivate() {
        // Remove event listeners if needed
    }
    
    goToCard(index) {
        const cardWidth = this.cards[0].offsetWidth;
        const gap = 16; // var(--spacing-md)
        const scrollPosition = (cardWidth + gap) * index;
        
        this.container.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
        
        this.updateDots(index);
    }
    
    next() {
        const nextCard = Math.min(this.currentCard + 1, this.totalCards - 1);
        this.goToCard(nextCard);
    }
    
    prev() {
        const prevCard = Math.max(this.currentCard - 1, 0);
        this.goToCard(prevCard);
    }
    
    updateActiveCard() {
        const scrollLeft = this.container.scrollLeft;
        const cardWidth = this.cards[0].offsetWidth;
        const gap = 16;
        
        const activeIndex = Math.round(scrollLeft / (cardWidth + gap));
        this.currentCard = activeIndex;
        this.updateDots(activeIndex);
    }
    
    updateDots(index) {
        this.dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('choose-school__dot--active');
                dot.setAttribute('aria-selected', 'true');
            } else {
                dot.classList.remove('choose-school__dot--active');
                dot.setAttribute('aria-selected', 'false');
            }
        });
    }
}

// ============================================
// Exhibition Slider
// ============================================

class ExhibitionSlider {
    constructor(sliderElement) {
        this.slider = sliderElement;
        this.track = this.slider.querySelector('.exhibition__track');
        this.cards = this.slider.querySelectorAll('.exhibition__card');
        this.currentIndex = 0;
        this.totalCards = this.cards.length;
        
        this.prevBtn = this.slider.querySelector('.exhibition__control--prev');
        this.nextBtn = this.slider.querySelector('.exhibition__control--next');
        
        this.init();
    }
    
    init() {
        // Event listeners for controls
        this.prevBtn?.addEventListener('click', () => this.prev());
        this.nextBtn?.addEventListener('click', () => this.next());
        
        // Resize listener to reset position or adjust
        window.addEventListener('resize', debounce(() => {
            this.updateSlider();
        }, 100));

        // Touch/swipe support
        this.addSwipeSupport();
        
        this.updateSlider();
    }
    
    getVisibleItems() {
        if (window.innerWidth <= 767) return 1;
        if (window.innerWidth <= 1023) return 2;
        return 4; // 4 full cards, CSS handles the partial 5th card visibility
    }

    updateSlider() {
        const visibleItems = this.getVisibleItems();
        // Ensure index is valid
        if (this.currentIndex > this.totalCards - visibleItems) {
            this.currentIndex = Math.max(0, this.totalCards - visibleItems);
        }
        this.goToCard(this.currentIndex);
    }
    
    goToCard(index) {
        const visibleItems = this.getVisibleItems();
        const maxIndex = Math.max(0, this.totalCards - visibleItems);
        
        // Clamp index
        this.currentIndex = Math.min(Math.max(0, index), maxIndex);
        
        // On mobile (<=767px), don't use transform - let native scroll work
        if (window.innerWidth <= 767) {
            // Reset transform and let CSS scroll snap handle it
            this.track.style.transform = '';
            // Optionally scroll to the card
            if (this.cards[this.currentIndex]) {
                this.cards[this.currentIndex].scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            return;
        }
        
        const cardWidthPercent = 100 / visibleItems;
        const gap = 1.8; // Rem

        const item = this.cards[0];
        const itemWidth = item.offsetWidth;
        // Gap is 1.8rem = 1.8 * 16px (approx) or getComputedStyle
        const style = window.getComputedStyle(this.track);
        const gapVal = parseFloat(style.gap) || 0;
        
        const moveAmount = (itemWidth + gapVal) * this.currentIndex;
        
        this.track.style.transform = `translateX(-${moveAmount}px)`;
    }
    
    next() {
        const visibleItems = this.getVisibleItems();
        if (this.currentIndex < this.totalCards - visibleItems) {
            this.goToCard(this.currentIndex + 1);
        } else {
            // Optional: Loop back to start?
            this.goToCard(0);
        }
    }
    
    prev() {
        const visibleItems = this.getVisibleItems();
        if (this.currentIndex > 0) {
            this.goToCard(this.currentIndex - 1);
        } else {
             // Optional: Loop to end?
             this.goToCard(this.totalCards - visibleItems);
        }
    }
    
    addSwipeSupport() {
        let touchStartX = 0;
        let touchEndX = 0;
        
        this.slider.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        this.slider.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        }, { passive: true });
    }
    
    handleSwipe(startX, endX) {
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.next();
            } else {
                this.prev();
            }
        }
    }
}

// ============================================
// Smooth Scroll for Skip Link
// ============================================

function initSkipLink() {
    const skipLink = document.querySelector('.skip-link');
    
    skipLink?.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(skipLink.getAttribute('href'));
        target?.focus();
        target?.scrollIntoView({ behavior: 'smooth' });
    });
}

// ============================================
// Logo Sling Animation Control
// ============================================

function initLogoSling() {
    const tracks = document.querySelectorAll('.schools-sling__track');
    
    tracks.forEach(track => {
        // Pause animation on hover (handled by CSS)
        // Additional focus support
        track.setAttribute('tabindex', '0');
        
        track.addEventListener('focus', () => {
            track.style.animationPlayState = 'paused';
        });
        
        track.addEventListener('blur', () => {
            if (!prefersReducedMotion()) {
                track.style.animationPlayState = 'running';
            }
        });
    });
}

// ============================================
// Accessibility Enhancements
// ============================================

function enhanceAccessibility() {
    // Add focus visible class for better keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-nav');
    });
    
    // Announce page changes to screen readers
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionLabel = entry.target.getAttribute('aria-label');
                if (sectionLabel) {
                    // Update document title for screen readers
                    document.title = `${sectionLabel} - School Exhibition 2025`;
                }
            }
        });
    }, { threshold: 0.5 });
    
    sections.forEach(section => observer.observe(section));
}

// ============================================
// Responsive Image Loading
// ============================================

function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ============================================
// Initialize All Components
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize hero slider
    const heroSlider = document.querySelector('.hero__slider');
    if (heroSlider) {
        new HeroSlider(heroSlider);
    }
    
    // Initialize school cards slider
    const schoolCards = document.querySelector('.choose-school__cards');
    if (schoolCards) {
        new SchoolCardsSlider(schoolCards);
    }
    
    // Initialize exhibition slider
    const exhibitionSlider = document.querySelector('.exhibition__slider');
    if (exhibitionSlider) {
        new ExhibitionSlider(exhibitionSlider);
    }
    
    // Initialize hero form
    // const heroForm = document.querySelector('.hero__form');
    // if (heroForm) {
    //     new HeroForm(heroForm);
    // }
    
    // Initialize other features
    initSkipLink();
    initLogoSling();
    enhanceAccessibility();
    initLazyLoading();
    
    // Log initialization
    console.log('School Exhibition Landing Page initialized successfully');
});

// ============================================
// Handle Reduced Motion Preference Changes
// ============================================

const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
motionMediaQuery.addEventListener('change', () => {
    if (motionMediaQuery.matches) {
        // Stop all animations
        document.querySelectorAll('.schools-sling__logos').forEach(el => {
            el.style.animationPlayState = 'paused';
        });
    } else {
        // Resume animations
        document.querySelectorAll('.schools-sling__logos').forEach(el => {
            el.style.animationPlayState = 'running';
        });
    }
});
