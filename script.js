let addFdBtn = document.querySelector("button");
let p = document.querySelector("p");
let i = document.createElement("i");

let flag = 0;


addFdBtn.addEventListener("click", function () {
    if (flag == 0) {
        p.textContent = "Friends";
        p.style.color = "green";
        i.className = '';
        i.classList.add("ri-close-circle-fill");
        i.style.color = "Red";
        addFdBtn.innerHTML = "Remove";
        addFdBtn.appendChild(i);
        flag = 1;
    } else {
        p.textContent = "Stranger";
        p.style.color = "red";
        i.classList.add("ri-user-add-line");
        i.style.color = "yellow";
        addFdBtn.innerHTML = "Add Friend";
        addFdBtn.appendChild(i);
        flag = 0;
    }
})