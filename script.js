//your JS code here. If required.
let sounds = [
    { name: "Sound 1", file: "sounds/sound1.mp3" },
    { name: "Sound 2", file: "sounds/sound2.mp3" },
    // Add more sounds here...
];

let buttonsContainer = document.getElementById('buttons');
let currentAudio = null;

// Create buttons for each sound
sounds.forEach((sound) => {
    let button = document.createElement('button');
    button.textContent = sound.name;
    button.className = 'btn';
    button.onclick = () => playSound(sound.file);
    buttonsContainer.appendChild(button);
});

// Create stop button
let stopButton = document.createElement('button');
stopButton.textContent = 'Stop';
stopButton.className = 'stop btn';
stopButton.onclick = stopSound;
buttonsContainer.appendChild(stopButton);

// Function to play sound
function playSound(file) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(file);
    currentAudio.play();
}

// Function to stop sound
function stopSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
}
