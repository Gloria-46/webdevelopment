document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function () {
        const content = this.nextElementSibling;
        const isVisible = content.style.display === 'block';

        // Close all sibling content
        this.parentElement.parentElement.querySelectorAll('.accordion-content').forEach(item => {
            item.style.display = 'none';
        });

        // Toggle current content
        content.style.display = isVisible ? 'none' : 'block';
    });
});
