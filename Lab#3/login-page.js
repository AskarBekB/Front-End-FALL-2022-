var signup_link = document.querySelector('.a1');
var login_link = document.querySelector('.a2');

var signup_form = document.querySelector('.signup-form');
var login_form = document.querySelector('.login-form');

var sign_sub = document.querySelector('.sign-sub');
var log_sub = document.querySelector('.log-sub');

login_link.addEventListener('click', signup_hide);
signup_link.addEventListener('click', login_hide);

sign_sub.addEventListener('click', signupAlert);
log_sub.addEventListener('click', loginAlert);

function signupAlert(){
    
    alert("Successfully processed");
}
function loginAlert(){
    alert("Successfully processed");
}
function signup_hide(){
    signup_form.style.display="none";
    login_form.style.display = "block";
    signup_link.style.background="#34495e";
    login_link.style.background="#2981bc";
}
function login_hide(){
    signup_form.style.display="block";
    login_form.style.display = "none";
    signup_link.style.background="#2981bc";
    login_link.style.background="#34495e";
}

window.addEventListener("DOMContentLoaded", setupForm);

function setupForm(){
    const form=document.getElementById("big-form");
    form.addEventListener("submit", handleSubmit);
}//setupForm

function handleSubmit(event){
    event.preventDefault();

const {
    username,
    password,
    login_type,
    result
} = event.target;
const processUser = login_type.value=="register" ? registerUser : loginUser;
const response = processUser(username.value, password.value);
result.innerHTML = response; 
} //handleSubmit

function registerUser(username, password){
    window.localStorage.setItem("exampleLogin_username", username);
}


function store(){
    var inputUsername=document.getElementById("username");
    var inputPassword=document.getElementById("password");
    localStorage.setItem("username", inputUsername.value);
    localStorage.setItem("password", inputPassword.value);
};
function login(){
    var inputUsername=localStorage.getItem("username");
    var inputPassword=localStorage.getItem("password");

    if(username !="undefined" || username!="null" || password!="undefined" || password!="null"){
        document.getElementById('welcomeMessage').innerHTML="Welcome " + username + "!"; 
    } else{
        document.getElementById('welcomeMessage').innerHTML="Hello!";
    }
}
