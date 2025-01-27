const textContent = [
    "I am Unknown_Py💀...",
    "Born on 20th Nov 2006...",
    "Passionate about exploring worldwide...",
    "I love physics and horror vibes.",
    "TG~@NYT_G."
];

let typingText = document.querySelector('.typing-text');
let speed = 100; // Typing speed for normal animation
let resetSpeed = 50; // Speed for hacking reset animation
let index = 0;

function typeText() {
    let charIndex = 0;

    function typeLine() {
        if (charIndex < textContent[index].length) {
            typingText.innerHTML += textContent[index][charIndex];
            charIndex++;
            setTimeout(typeLine, speed);
        } else {
            // Add a line break and move to the next sentence
            index++;
            if (index < textContent.length) {
                typingText.innerHTML += "<br>"; // Add line break
                setTimeout(typeText, speed);
            } else {
                // Once all sentences are typed, start the reset animation
                setTimeout(resetText, 1500);
            }
        }
    }

    typeLine();
}

function resetText() {
    let text = typingText.innerHTML;
    let charIndex = text.length;

    function clearChar() {
        if (charIndex > 0) {
            typingText.innerHTML = text.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(clearChar, resetSpeed);
        } else {
            // Reset index and restart typing
            index = 0;
            setTimeout(typeText, 1000);
        }
    }

    clearChar();
}

// Start the animation
typeText();
