document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for images with slide-in effect
    const images = document.querySelectorAll('.image-block');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    });
    document.addEventListener("DOMContentLoaded", function() {
        const phrase = document.querySelector('.appearing-phrase');
        
        window.addEventListener('scroll', function() {
            const phrasePosition = phrase.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
    
            if (phrasePosition < windowHeight) {
                phrase.classList.add('visible');
            }
        });
    });
    
    images.forEach(image => {
        observer.observe(image);
    });

    // Slideshow functionality
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    document.getElementById('next').addEventListener('click', nextSlide);
    document.getElementById('prev').addEventListener('click', prevSlide);

    showSlide(currentSlide);

    // Form validation
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const errorMsg = document.getElementById('error-message');

        if (!name || !email || !message) {
            errorMsg.textContent = 'All fields are required.';
            errorMsg.style.display = 'block';
            event.preventDefault();
        } else if (!validateEmail(email)) {
            errorMsg.textContent = 'Please enter a valid email address.';
            errorMsg.style.display = 'block';
            event.preventDefault();
        } else {
            errorMsg.style.display = 'none';
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return re.test(String(email).toLowerCase());
    }
});
