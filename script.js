let form = document.querySelector("form");
let emailInp = document.querySelector("input[name='email']");
let passInp = document.querySelector("input[type='password']");
let phone = document.querySelector("input[type='number']");
let btn = document.querySelector("button");

let emailError = document.querySelector(".email-error");
let passwordError = document.querySelector(".password-error");
let phoneError = document.querySelector(".phone-error");

//check input values are empty - till disable the button

emailInp.addEventListener("input", checkValidationForValues);
passInp.addEventListener("input", checkValidationForValues);
phone.addEventListener("input", checkValidationForValues);

let errorFlag = false;

function checkValidationForValues() {
    if (
        emailInp.value.length < 3 ||
        passInp.value.length < 3 ||
        phone.value.length < 3
    ) {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
}

checkValidationForValues();

form.addEventListener("submit", formSubmit);

function formSubmit(e) {
    e.preventDefault();

    let formData = new FormData(form);
    let email = formData.get("email");
    let password = formData.get("password");
    let phoneval = formData.get("phone");

    checkError(email, password, phoneval);

    if (errorFlag) {
        alert("Error occured : please fix the errors");
        return;
    }

    emailInp.value = "";
    passInp.value = "";
    phone.value = "";
    console.log("login Success");
    console.log(email);
    console.log(password);
    console.log(phoneval);
}

function checkError(email, password, phone) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        emailError.classList.remove("hide");
        emailError.textContent = "*Invalid email";
        errorFlag = true;
        return;
    }
    if (password.length < 8) {
        passwordError.classList.remove("hide");

        passwordError.textContent = "Password must be 8 characters long";
        errorFlag = true;
        return;
    }
    if (phone.length < 10) {
        phoneError.classList.remove("hide");

        phoneError.textContent = "Phone number must be length of 10";
        errorFlag = true;
        return;
    }

    errorFlag = false;
    emailError.classList.add("hide");
    passwordError.classList.add("hide");
    phoneError.classList.add("hide");
}
