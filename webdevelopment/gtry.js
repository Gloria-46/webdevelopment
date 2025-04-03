document.addEventListener("DOMContentLoaded", function () {
    const covers = document.querySelectorAll(".cover");

    covers.forEach(cover => {
        cover.addEventListener("click", function () {
            const albumImages = this.nextElementSibling; // Selects the sibling .album-images

            // Hide all album images first
            document.querySelectorAll(".album-images").forEach(div => div.style.display = "none");

            // Show only the clicked album's images
            if (albumImages) {
                albumImages.style.display = "flex";
                albumImages.style.flexWrap = "wrap";
            }
        });
    });

    document.querySelectorAll(".album-images").forEach(album => {
        album.addEventListener("click", (e) => {
            if (e.target !== album) return;
            album.style.display = "none";
        });
    });
});