let p = document.querySelector("p");

let pText = p.innerText;

let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

let iteration = 0;

let interval = null;

p.addEventListener("mouseenter", () => {
    iteration = 0;
    clearInterval(interval);
    interval = setInterval(randomText, 24)
})

function randomText() {
    let str = pText.split("")
    let newArr = str.map((char, index) => {
        if (iteration > index) {
            return char;
        }
        return characters.split("")[Math.floor(Math.random() * 52)];
    })
    p.innerText = newArr.join("")
    iteration += 0.25;
    if (iteration > pText.length) {
        clearInterval(interval);
    }
}