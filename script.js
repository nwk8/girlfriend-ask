
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("envelope-button");

    if (!button) {
        alert("The heart button was not found!");
        return;
    }

    button.addEventListener("click", () => {
        alert("THE HEART WORKS!");
    });
});
