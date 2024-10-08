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
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

galleryItems.forEach(item => {
    item.addEventListener('click', e => {
        const fullImgUrl = e.target.getAttribute('data-full');
        lightboxImg.src = fullImgUrl;
        lightbox.classList.add('active');
    });
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    lightboxImg.src = '';  // Clear the image when closing
});
