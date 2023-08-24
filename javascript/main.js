let formSubmitButton = document.getElementsByTagName("button")[0];
formSubmitButton.addEventListener("click", emailValidation);

function emailValidation() {
    let emailInputValue = document.querySelector(`#email-input`).value;

    let emailValidationStatus = regExp(emailInputValue);

    if(emailValidationStatus) {
        saveToLocalStorage("emailInputValue", emailInputValue);
        redirect();
    } else {
        changeColor();
        changeVisibility();
    }
}

function saveToLocalStorage(name, value) {
    window.localStorage.setItem(name, value);
}

function redirect() {
    window.open("../pages/success.html", "_blank");
}

function regExp(emailValue) {
    let regularExpression = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,12})(\.[a-z]{2,12})?$/;
    let emailRegExp = new RegExp(regularExpression);
    return emailRegExp.test(emailValue);
}

function changeColor() {
    function changePlaceholderColor(color) {
        document.documentElement.style.setProperty("--clr-neutral-placeholder", color);
    }

    let emailInputField = document.getElementById("email-input");
    let inputFieldBackgroundColor =  "hsl(5, 100%, 95%)";
    let inputFieldTextAndBorderColor = "hsl(4, 91%, 70%)";
    
    emailInputField.style.setProperty("border-color", inputFieldTextAndBorderColor);
    emailInputField.style.setProperty("background-color", inputFieldBackgroundColor, 'important')
    emailInputField.style.setProperty("color", inputFieldTextAndBorderColor, "important");
    changePlaceholderColor(inputFieldTextAndBorderColor);
}

function changeVisibility() {
    let errorState = document.getElementById("error-state");
    errorState.style.visibility = "visible";
}