function login(){
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(loginForm.username.value.match(mailformat))
    {
    alert("Valid email address!");
    return true;
    }
    else
    {
    alert("You have entered an invalid email address!");
    return false;
    }
   
})}