document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".scroll");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% visible

    elements.forEach(element => observer.observe(element));
});