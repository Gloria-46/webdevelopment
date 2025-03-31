document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function () {
    const content = document.getElementById(this.textContent.trim().toLowerCase());
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
        }
        else{
            content.style.display = 'none';
        }
    });
});
function openTab(event, tabId) {
    // Hide all content
    let contents = document.querySelectorAll(".tab-content");
    contents.forEach(content => content.classList.remove("active"));

    // Remove active class from all buttons
    let buttons = document.querySelectorAll(".tab-button");
    buttons.forEach(button => button.classList.remove("active"));

    // Show the selected content and set active button
    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");
}