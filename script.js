let allDiv = document.querySelectorAll("div");
document.body.addEventListener("keydown", function (e) {
    soundKey(e.key)
});

allDiv.forEach((el) => {
    el.addEventListener("click", function (e) {
        e.stopPropagation();

        const clickedElement = e.currentTarget;
        const onlyOwnText = clickedElement.childNodes[0].nodeValue.trim();
        soundKey(onlyOwnText);
    });
});

const soundMap = {
    "C": "./sounds/28.mp3",
    "C#": "./sounds/29.mp3",
    "D": "./sounds/30.mp3",
    "D#": "./sounds/31.mp3",
    "E": "./sounds/32.mp3",
    "F": "./sounds/33.mp3",
    "F#": "./sounds/34.mp3",
    "G": "./sounds/39.mp3",
    "G#": "./sounds/35.mp3",
    "A": "./sounds/36.mp3",
    "A#": "./sounds/37.mp3",
    "B": "./sounds/38.mp3"
};



function soundKey(text) {
    let audio = new Audio(soundMap[text]);
    audio.play();
}

