
document.addEventListener("DOMContentLoaded", () => {
    const envelopeButton = document.getElementById("envelope-button");
    const envelopeContainer = document.getElementById("envelope-container");
    const letterContainer = document.getElementById("letter-container");
    const letterWindow = document.querySelector(".letter-window");

    const noBtn = document.querySelector(".no-btn");
    const yesBtn = document.querySelector(".yes-btn");
    const letterTitle = document.getElementById("letter-title");
    const letterCat = document.getElementById("letter-cat");
    const letterButtons = document.getElementById("letter-buttons");
    const finalText = document.getElementById("final-text");
    const yipeeSound = document.getElementById("yipee-sound");

    // Open the letter
    if (envelopeButton) {
        envelopeButton.addEventListener("click", () => {
            envelopeContainer.style.display = "none";
            letterContainer.style.display = "flex";

            if (letterWindow) {
                letterWindow.classList.add("open");
            }
        });
    }

    // Make the No button dodge the cursor
    if (noBtn) {
        noBtn.addEventListener("pointerenter", () => {
            const maxX = Math.max(0, window.innerWidth - noBtn.offsetWidth - 40);
            const maxY = Math.max(0, window.innerHeight - noBtn.offsetHeight - 40);

            const x = Math.random() * maxX;
            const y = Math.random() * maxY;

            noBtn.style.position = "fixed";
            noBtn.style.left = `${x}px`;
            noBtn.style.top = `${y}px`;
        });
    }

    // Celebrate when Yes is clicked
    if (yesBtn) {
        yesBtn.addEventListener("click", () => {
            if (letterTitle) {
                letterTitle.textContent = "Yippeeee! 🎉";
            }

            if (letterCat) {
                letterCat.src = "./catyes.gif";
            }

            if (letterButtons) {
                letterButtons.style.display = "none";
            }

            if (finalText) {
                finalText.style.display = "block";
            }

            if (yipeeSound) {
                yipeeSound.currentTime = 0;
                yipeeSound.play().catch(() => {});
            }
        });
    }
});
