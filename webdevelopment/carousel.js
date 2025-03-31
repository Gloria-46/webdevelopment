let currentSlide = 0;
const images = document.querySelectorAll(".carousel-image");

function showSlide(index) {
    images.forEach((img, i) => img.style.display = i === index ? "block" : "none");
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % images.length;
    showSlide(currentSlide);
}, 6500);

showSlide(currentSlide);
