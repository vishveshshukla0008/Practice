let btn = document.querySelector("button");
let bar = document.querySelector(".progress-bar");
let percentage = document.querySelector("#counter");
let successText = document.querySelector("#success-text");

btn.addEventListener("click", function () {
    let growth = 0;
    bar.style.width = "0";
    btn.disabled = true;
    btn.style.pointerEvents = "none"
    btn.textContent = "Downloading.."
    successText.style.display = "none";
    percentage.style.color = "black";

    const random = Math.floor(Math.random() * (120 - 50 + 1)) + 50;
    console.log(`Your download will be done in ${random / 10} seconds`)
    let a = setInterval(() => {
        growth++;
        percentage.textContent = growth + "%"
        bar.style.width = `${growth}%`
        if (growth == 100) {
            clearInterval(a);
            successText.style.display = "block";
            btn.disabled = false;
            btn.style.pointerEvents = ""
            btn.textContent = "Download Again"
        } else if (growth == 80) {
            percentage.style.color = "yellowgreen";
        }
    }, random);
})