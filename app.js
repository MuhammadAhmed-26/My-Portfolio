document.addEventListener('DOMContentLoaded', () => {

    // --- Scroll Hide Navbar Logic ---
    let lastScrollTop = 0;
    const navbar = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > 50) {
            // Downscroll > 50px
            navbar.classList.add('hidden');
        } else {
            // Upscroll
            navbar.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    console.log("Portfolio loaded with scroll effects.");
});
