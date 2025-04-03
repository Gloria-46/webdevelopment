document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementsByClassName("name").value;
    const email = document.getElementsByClassName("email").value;
    const message = document.getElementsByClassName("message2").value;
    
    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
    } else {
        alert("Message sent successfully!");
    }
});