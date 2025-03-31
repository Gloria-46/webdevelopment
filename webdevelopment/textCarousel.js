let currenttextSlide = 0;
const textSlides = document.querySelectorAll('.text-slide');

function showtextSlide(index) {
    textSlides.forEach((p, i) => p.style.display = i === index ? "block" : "none");
}

setInterval(() => {
    currenttextSlide = (currenttextSlide + 1) % textSlides.length;
    showtextSlide(currenttextSlide);
}, 7000);

showtextSlide(currenttextSlide);

