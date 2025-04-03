let currenttextSlide = 0;
    const dots1 = document.querySelectorAll('.dot1');
    const textSlides = document.querySelectorAll(".text-slide");
function showtextSlide(index) {
    if (index < 0) {
        index = textSlides.length - 1;
    } else if (index >= textSlides.length) {
        index = 0;
    }     
    currenttextSlide = index;
    textSlides.forEach((p, i) => p.style.display = i === index ? "block" : "none");
    dots1.forEach(dot1 => dot1.classList.remove('active'));
    dots1[index].classList.add('active');
}
        dots1.forEach((dot1, i) => dot1.addEventListener('click', () => showtextSlide(i)));
setInterval(() => {
    currenttextSlide = (currenttextSlide + 1);
    showtextSlide(currenttextSlide);
}, 6500);
showtextSlide(currenttextSlide);