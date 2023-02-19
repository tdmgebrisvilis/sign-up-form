$(document).ready(function() {

const { log, dir } = console;
const passwordInput = document.querySelector("#password");
const repeatPasswordInput = document.querySelector("#repeat-password");
const passwordMismatchMessage = document.querySelector("#password-mismatch");
const submitButton = document.querySelector(".bottom-section > button");

submitButton.addEventListener('click', displayErrorMsg);
passwordInput.addEventListener('keyup', comparePasswords);
repeatPasswordInput.addEventListener('keyup', comparePasswords);

function comparePasswords(e){
    if (passwordInput.value === repeatPasswordInput.value) passwordMismatchMessage.classList.remove('visible') 
    if (passwordInput.value !== repeatPasswordInput.value) passwordMismatchMessage.classList.add('visible') 
}

function displayErrorMsg(e){
    if (passwordInput.value.length > 5 && repeatPasswordInput.value.length > 5 && passwordInput.value !== repeatPasswordInput.value) {
        e.preventDefault();
        repeatPasswordInput.focus();
        passwordMismatchMessage.classList.add('visible')
    } 
}

});
  
