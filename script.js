let btn = document.querySelector("button");
let arr = ['yash shukla Defaulter', 'sheryians is best', 'Mr. Shukla', 'Piiikaaaachhhhuuuuuuuuuu', 'Le mai aa gaya', 'Fixed Length', 'marino water park']
btn.addEventListener("click", function () {
    let div = document.createElement("h1");
    let randX = Math.floor(Math.random() * 80);
    let randY = Math.floor(Math.random() * 80);
    let rIndex = Math.floor(Math.random() * arr.length);
    let scl = Math.floor(Math.random() * 3);
    let c1 = Math.floor(Math.random() * 256);
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);
    div.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
    div.style.position = "absolute"
    div.style.left = `${randX}%`;
    div.style.scale = scl;
    div.style.top = `${randY}%`;
    div.style.zIndex = "-1"
    div.innerHTML = arr[rIndex]

    setTimeout(() => {
        document.body.appendChild(div);

    }, 2000)
})

let delay = 2000;

setTimeout(() => {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
}, delay);