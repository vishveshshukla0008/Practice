let thumbnail = document.querySelector(".thumbnail");
let modal = document.querySelector(".modal-outer");
let i = document.querySelector(".modal i");

thumbnail.addEventListener("click", function () {
    console.log("chala")
    modal.style.opacity = 1;
    modal.style.zIndex = 2;
})

i.addEventListener("click", function () {
    modal.style.opacity = 0;
    modal.style.zIndex = -2;
})