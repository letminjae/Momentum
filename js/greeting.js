const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector('#todo-form');

const USERNAME_KEY = "username";
const HIDDEN = "hidden";

function loginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN);
    todoForm.classList.remove(HIDDEN);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", loginSubmit);
}else{
    paintGreeting(savedUsername);
}