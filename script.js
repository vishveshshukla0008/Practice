let box = document.querySelector(".box");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let c1 = Math.floor(Math.random() * 256);
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);

    let color = `rgb(${c1},${c2}, ${c3})`;
    box.style.backgroundColor = color;
    console.log(color)
})