// Scroll-triggered fade-in for sections
document.addEventListener("scroll", function() {
    const fadeIns = document.querySelectorAll(".fade-in");
    fadeIns.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionTop < screenPosition) {
            section.classList.add("visible");
        }
    });
});

// Lightbox functionality for the gallery
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

galleryItems.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = item.href;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    });
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});
