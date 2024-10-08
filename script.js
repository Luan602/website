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
