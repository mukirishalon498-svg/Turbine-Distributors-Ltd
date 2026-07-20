// Scroll Reveal Animation for About Section
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe about section elements
    const revealLeft = document.querySelector('.about-image-wrapper');
    const revealRight = document.querySelector('.about-content-wrapper');
    
    if (revealLeft) observer.observe(revealLeft);
    if (revealRight) observer.observe(revealRight);
});