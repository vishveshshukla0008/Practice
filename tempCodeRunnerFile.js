let a = 1;
let c = setInterval(() => {
    a++;
    console.log(a)
}, 100);

setTimeout(() => {
    clearInterval(c)
}, 5000)