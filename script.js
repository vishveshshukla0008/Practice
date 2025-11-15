let nameInput = document.querySelector("input[type='text']");
let ageInput = document.querySelector("input[type='number']");
let btn = document.querySelector("button");

let table = document.querySelector("table");
let tableBody = document.querySelector("table tbody");

function toggleTable() {
    if (tableBody.childElementCount == 0) {
        table.style.display = "none";
    } else {
        table.style.display = "block";
    }
}

toggleTable()

btn.addEventListener("click", function () {
    if (nameInput.value.length < 3 || (ageInput.value).trim().length < 0) {
        alert("Please fill valid details : name must be three charcters long :")
        return;
    }
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdAge = document.createElement("td");

    tdName.textContent = nameInput.value;
    tdAge.textContent = ageInput.value;
    nameInput.value = "";
    ageInput.value = "";
    tr.appendChild(tdName);
    tr.appendChild(tdAge);
    tableBody.appendChild(tr);
    toggleTable()
});