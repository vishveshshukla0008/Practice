// Access Inputs

let emailInp = document.querySelector("input[type='email']");
let passInp = document.querySelector("input[type='password']");
let phoneInp = document.querySelector("input[type='number']");


// Access input error p's :

let allError = document.querySelectorAll(".error")
let emailError = document.querySelector(".email-error");
let passError = document.querySelector(".password-error");
let phoneError = document.querySelector(".phone-error");

//access form and submit-btn

let form = document.querySelector("form");
let btn = document.querySelector("button");

// Handling Input-time errors : 


emailInp.addEventListener("input", handleEmailInput);

passInp.addEventListener("input", handlePasswordInput);

phoneInp.addEventListener("input", handlePhoneInput);

form.addEventListener("submit", handleForm);

function handleForm(e) {
    handleEmailInput()
    handlePasswordInput()
    handlePhoneInput()
    e.preventDefault();


    if (![...allError].every(checkErrorExist)) {
        console.log("Please check fields again !")
        return;
    } else {
        const formData = new FormData(form);
        const email = formData.get("email");
        const password = formData.get("password");
        const phone = formData.get("phone");
        console.log("FORM SUBMITTED")
        console.log(`Values are : ${email}, ${password}, ${phone}`)

        emailInp.value = "";
        passInp.value = "";
        phoneInp.value = "";

        //reset border
        emailInp.style.border = "";
        passInp.style.border = "";
        phoneInp.style.border = "";
    }

}

function checkErrorExist(el) {
    return el.classList.contains("hide");
}

function updateButtonState() {
    const allGood = [...allError].every(checkErrorExist);
    btn.disabled = !allGood;
}



function handleEmailInput() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if ((emailInp.value).trim().length == 0) {
        emailError.classList.remove("hide");
        emailError.textContent = "Email can not empty";
        emailInp.style.border = "2px solid red"
    }
    else if (!emailRegex.test(emailInp.value)) {
        emailError.classList.remove("hide");
        emailError.textContent = "Please enter valid email";
        emailInp.style.border = "2px solid red"
    } else {
        emailError.classList.add("hide");
        emailError.textContent = "";
        emailInp.style.border = "2px solid green"
    }

    updateButtonState()
}

function handlePasswordInput() {
    if (passInp.value.length == 0) {
        passError.classList.remove("hide");
        passError.textContent = "Enter the password";
        passInp.style.border = "2px solid red";
    } else if (passInp.value.length < 8) {
        passError.classList.remove("hide");
        passError.textContent = "Password must be 8 chars long";
        passInp.style.border = "2px solid red";
    } else {
        passError.classList.add("hide");
        passError.textContent = "";
        passInp.style.border = "2px solid green";
    }

    updateButtonState()
}

function handlePhoneInput() {
    if ((phoneInp.value).trim().length == 0) {
        phoneError.classList.remove("hide");
        phoneError.textContent = "Phone cant empty";
        phoneInp.style.border = "2px solid red";
    } else if ((phoneInp.value).trim().length < 10) {
        phoneError.classList.remove("hide");
        phoneError.textContent = "Phone must be 10 chars long";
        phoneInp.style.border = "2px solid red";
    } else {
        phoneError.classList.add("hide");
        phoneError.textContent = "";
        phoneInp.style.border = "2px solid green";
    }

    updateButtonState()
}