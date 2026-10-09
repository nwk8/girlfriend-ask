let audioUnlocked = false;

document.addEventListener("DOMContentLoaded", () => {
 const envelopeButton = document.getElementById("envelope-button");
envelopeButton.addEventListener("click", () => {
    document.getElementById("envelope-container").style.display = "none";

    const letter = document.getElementById("letter-container");
    letter.style.display = "flex";

    requestAnimationFrame(() => {
        document.querySelector(".letter-window").classList.add("open");
    });
});
const envelopeContainer = document.getElementById("envelope-container");
    const letter = document.getElementById("letter-container");
    const letterWindow = document.querySelector(".letter-window"); 
    const noBtn = document.querySelector(".no-btn");
    const yesBtn = document.querySelector(".yes-btn");

    const title = document.getElementById("letter-title");
    const catImg = document.getElementById("letter-cat");
    const buttons = document.getElementById("letter-buttons");
    const finalText = document.getElementById("final-text");
    const yipeeSound = document.getElementById("yipee-sound");

    // Keep the sound silent when the page loads
    if (yipeeSound) {
        yipeeSound.pause();
        yipeeSound.currentTime = 0;
    }

    // OPEN THE LETTER 💌
    if (envelopeButton) {
        envelopeButton.addEventListener("click", () => {

            envelopeContainer.style.display = "none";
            letter.style.display = "flex";

            // Reset the animation before showing the letter
            letterWindow.classList.remove("open");

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    letterWindow.classList.add("open");
                });
            });

        });
    }

    // MAKE THE NO BUTTON RUN AWAY 😈
    if (noBtn) {
        noBtn.addEventListener("mouseover", () => {

            const distance = 150;
            const angle = Math.random() * Math.PI * 2;

            const moveX = Math.cos(angle) * distance;
            const moveY = Math.sin(angle) * distance;

            noBtn.style.transition = "transform 0.3s ease";
            noBtn.style.transform =
                `translate(${moveX}px, ${moveY}px)`;

        });

        // Support touchscreens too
        noBtn.addEventListener("touchstart", () => {

            const distance = 120;
            const angle = Math.random() * Math.PI * 2;

            const moveX = Math.cos(angle) * distance;
            const moveY = Math.sin(angle) * distance;

            noBtn.style.transform =
                `translate(${moveX}px, ${moveY}px)`;

        }, { passive: true });
    }

    // SAY YES! 💖
    if (yesBtn) {
        yesBtn.addEventListener("click", () => {

            title.textContent = "Yippeeee! 🎉";
            catImg.src = "catyes.gif";
            buttons.style.display = "none";

            // Show the happy ending message
            if (finalText) {
                finalText.style.display = "block";
            }

            // Play the happy cat sound after the click
            if (yipeeSound) {
                yipeeSound.currentTime = 0;

                const playback = yipeeSound.play();

                if (playback) {
                    playback.catch(error => {
                        console.log("Audio playback was blocked:", error);
                    });
                }
            }

        });
    }

});