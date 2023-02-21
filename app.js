const { log, dir } = console;
// Password logic
const passwordInput = document.querySelector("#password");
const repeatPasswordInput = document.querySelector("#repeat-password");
const passwordMismatchMessage = document.querySelector("#password-mismatch");
const submitButton = document.querySelector(".bottom-section > button");

submitButton.addEventListener('click', displayErrorMsg);
passwordInput.addEventListener('keyup', comparePasswords);
repeatPasswordInput.addEventListener('keyup', comparePasswords);

function comparePasswords(e){
    if (passwordInput.value === repeatPasswordInput.value || repeatPasswordInput.value === '') passwordMismatchMessage.classList.remove('visible') 
    if (passwordInput.value !== repeatPasswordInput.value && repeatPasswordInput.value !== '') passwordMismatchMessage.classList.add('visible') 
}

function displayErrorMsg(e){
    if (passwordInput.value.length > 5 && repeatPasswordInput.value.length > 5 && passwordInput.value !== repeatPasswordInput.value) {
        e.preventDefault();
        repeatPasswordInput.focus();
        passwordMismatchMessage.classList.add('visible')
    } 
}
// Theme toggle
const root = document.documentElement;
root.className = 'light'; // initial className
function setTheme() {
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
  }
  
  document.querySelector('.theme-toggle').addEventListener('click', setTheme)