const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const localUser = localStorage.getItem("username");

function isUserPresent() {
    return (localUser!=null) 
}

if (isUserPresent) {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello, ${localUser}.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(foo) {
    foo.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem("username", username);
    greeting.innerText = `Hello, ${username}.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    

}

loginForm.addEventListener("submit", onLoginSubmit);

