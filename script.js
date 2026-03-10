// JavaScript code for smooth scrolling, mobile menu toggle, form handling, and scroll animations

// Smooth Scrolling
const links = document.querySelectorAll('a.smooth-scroll');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetPosition = document.querySelector(targetId).offsetTop;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-menu');
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Form Handling
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    // Handle form data here (e.g. send to server)
    console.log('Form submitted!');
});

// Scroll Animations
const animatedElements = document.querySelectorAll('.animate');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
});

animatedElements.forEach(element => {
    observer.observe(element);
});
