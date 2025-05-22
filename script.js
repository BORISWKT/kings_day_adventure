document.addEventListener('DOMContentLoaded', function() {
    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'photo-overlay';
    document.body.appendChild(overlay);

    // Add click event to main photo, group photos, and profile photos
    const photos = document.querySelectorAll('.main-photo, .group-photo, .profile-photo');
    photos.forEach(photo => {
        photo.addEventListener('click', function() {
            const img = document.createElement('img');
            img.src = this.src;
            overlay.innerHTML = '';
            overlay.appendChild(img);
            overlay.style.display = 'block';
        });
    });

    // Close overlay when clicked
    overlay.addEventListener('click', function() {
        this.style.display = 'none';
    });

    // Slider functionality
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    const prevButton = document.querySelector('.slider-button.prev');
    const nextButton = document.querySelector('.slider-button.next');
    const dotsContainer = document.querySelector('.slider-dots');
    
    let currentSlide = 0;
    const slideCount = slides.length;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function goToSlide(index) {
        currentSlide = index;
        updateSlider();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlider();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSlider();
    }

    // Add event listeners
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);

    // Slide-in animation functionality
    const slideInElements = document.querySelectorAll('.slide-in');

    function checkSlide() {
        slideInElements.forEach(element => {
            const slideInAt = (window.scrollY + window.innerHeight) - element.offsetHeight / 2;
            const elementBottom = element.offsetTop + element.offsetHeight;
            const isHalfShown = slideInAt > element.offsetTop;
            const isNotScrolledPast = window.scrollY < elementBottom;

            if (isHalfShown && isNotScrolledPast) {
                element.classList.add('visible');
            }
        });
    }

    // Initial check for elements in view
    checkSlide();

    // Check on scroll
    window.addEventListener('scroll', checkSlide);
}); 