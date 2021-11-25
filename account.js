var $ = document;
var createAccountForm = $.getElementById("createAccount")
var loginForm = $.getElementById("login")
createAccountForm.style.display = "none";

function showloginForm() {
  loginForm.style.display = "block";
  createAccountForm.style.display = "none"
}
function showCreateAccountForm() {
  loginForm.style.display = "none";
  createAccountForm.style.display = "block"
}