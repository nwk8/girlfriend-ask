
document.addEventListener("DOMContentLoaded", () => {
    const envelopeButton = document.getElementById("envelope-button");
    const envelopeContainer = document.getElementById("envelope-container");
        button.addEventListener("click", function () {

        alert("The heart button works!")
        });
    const letterContainer = document.getElementById("letter-container");
    const letterWindow = document.querySelector(".letter-window");
    button.addEventListener("click", function () {

        alert("The heart button works!")
    const noBtn = document.querySelector(".no-btn");
    const yesBtn = document.querySelector(".yes-btn");
    const title = document.getElementById("letter-title");
    const catImg = document.getElementById("letter-cat");
    const buttons = document.getElementById("letter-buttons");
    const finalText = document.getElementById("final-text");
    const yipeeSound = document.getElementById("yipee-sound");

    // Open the letter when the heart is tapped
    if (envelopeButton) {
        envelopeButton.addEventListener("click", () => {
            envelopeContainer.style.display = "none";
            letterContainer.style.display = "flex";

            requestAnimationFrame(() => {
                letterWindow.classList.add("open");
            });
        });
    }

    // Make the No button dodge
    function moveNoButton() {
        const distance = 100;
        const angle = Math.random() * Math.PI * 2;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        noBtn.style.transition = "transform 0.25s ease";
        noBtn.style.transform = `translate(${x}px, ${y}px)`;
    }

    if (noBtn) {
        noBtn.addEventListener("pointerenter", moveNoButton);
    }

    // Happy ending when Yes is clicked
    if (yesBtn) {
        yesBtn.addEventListener("click", () => {
            title.textContent = "Yippeeee! 🎉";
            catImg.src = "./catyes.gif";
            buttons.style.display = "none";
            finalText.style.display = "flex";

            if (yipeeSound) {
                yipeeSound.currentTime = 0;
                yipeeSound.play().catch(error => {
                    console.error("Audio playback failed:", error);
                });
            }
        });
    }
});
