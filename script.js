const sounds = [
    { name: "Sound 1", file: "sound1.mp3" },
    { name: "Sound 2", file: "sound2.mp3" },
    { name: "Sound 3", file: "sound3.mp3" },
    // Add more sounds here...
];

const buttonsContainer = document.getElementById("buttons");
const audio = new Audio();

sounds.forEach((sound) => {
    const button = document.createElement("button");
    button.textContent = sound.name;
    button.className = "btn";
    button.onclick = () => playSound(`sounds/${sound.file}`);
    buttonsContainer.appendChild(button);
});

const stopButton = document.createElement("button");
stopButton.textContent = "Stop";
stopButton.className = "stop";
stopButton.onclick = () => stopSound();
buttonsContainer.appendChild(stopButton);

function playSound(src) {
    audio.src = src;
    audio.play();
}

function stopSound() {
    audio.pause();
    audio.currentTime = 0;
}
