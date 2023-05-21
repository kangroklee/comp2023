const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
//const greeting = document.querySelector("#greeting")
const initDiv = document.querySelector("#init");
const mainDoc = document.querySelector("#main-doc");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const localUser = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    //loginForm.classList.add(HIDDEN_CLASSNAME);
    initDiv.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username)
}

function paintGreetings(passthrough) {
    greeting.innerText = `Welcome, ${passthrough}.`;
    //greeting.classList.remove(HIDDEN_CLASSNAME);
    initDiv.classList.add(HIDDEN_CLASSNAME);//일단..
    mainDoc.classList.remove(HIDDEN_CLASSNAME);
    //mainDoc.classList.add("visible"); //땜빵작업: center위함 
}

loginForm.addEventListener("submit", onLoginSubmit);


if (localUser === null) {
    //loginForm.classList.remove(HIDDEN_CLASSNAME);
    initDiv.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(localUser);
}