let currentSlide = 0;
    const dots = document.querySelectorAll('.dot');
    const images = document.querySelectorAll(".carousel-image");
function showSlide(index) {
    if (index < 0) {
        index = images.length - 1;
    } else if (index >= images.length) {
        index = 0;
    }     
    currentSlide = index;
    images.forEach((img, i) => img.style.display = i === index ? "block" : "none");
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}
        document.querySelector('.prev').addEventListener('click', () => showSlide(currentSlide - 1));
        document.querySelector('.next').addEventListener('click', () => showSlide(currentSlide + 1));
        dots.forEach((dot, i) => dot.addEventListener('click', () => showSlide(i)));
setInterval(() => {
    currentSlide = (currentSlide + 1);
    showSlide(currentSlide);
}, 6500);
showSlide(currentSlide);
