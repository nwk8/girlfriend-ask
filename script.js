const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");
const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const yipeeSound = document.getElementById("yipee-sound");

// Open the letter when the heart is clicked
if (envelopeButton && envelopeContainer && letterContainer && letterWindow) {
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
    if (!noBtn) return;

    const distance = 100;
    const angle = Math.random() * Math.PI * 2;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.25s ease";
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

if (noBtn) {
    noBtn.addEventListener("pointerenter", moveNoButton);
    noBtn.addEventListener("click", moveNoButton);
}

// Happy ending when Yes is clicked
if (yesBtn) {
    yesBtn.addEventListener("click", () => {
        if (title) title.textContent = "Yippeeee! 🎉";
        if (catImg) catImg.src = "./catyes.gif";
        if (buttons) buttons.style.display = "none";
        if (finalText) finalText.style.display = "flex";

        if (yipeeSound) {
            yipeeSound.currentTime = 0;
            yipeeSound.play().catch(error => {
                console.error("Audio playback failed:", error);
            });
        }
    });
}