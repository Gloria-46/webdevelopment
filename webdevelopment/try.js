document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function () {
        const tabId = this.getAttribute('data-tab');
        const content = document.getElementById(tabId);

        // Toggle visibility of clicked tab content
        if (content.classList.contains('active')) {
            content.classList.remove('active'); // Collapse if already active
            this.classList.remove('active');
        } else {
            // Hide all contents and deactivate all buttons
            document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));

            // Show the selected tab content
            content.classList.add('active');
            this.classList.add('active');
        }
    });
});
