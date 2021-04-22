function signUp(){
    var name = document.getElementById('name')
    var surname = document.getElementById('surname')

    if(document.getElementById('male').checked){
        var gender = "Male";
    }else{
        var gender = "Female";
    }
    var age = document.getElementById('selectAge')

    var email = document.getElementById('email')
    var password = document.getElementById('registerPassword')
    var cPassword = document.getElementById('registerConfirmPassword')

    if(password.value == cPassword.value){
        localStorage.setItem('name', name.value);
        localStorage.setItem('surname', surname.value);
        localStorage.setItem('gender', gender);
        localStorage.setItem('age', age.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('registerPassword', password.value);
        localStorage.setItem('registerConfirmPassword', cPassword.value);

        alert('Your account has been created');
        window.open("Calendar.html","_self");

    }else{
        alert("Please make sure that password and confirm password do match");

    }
}

var attempts = 3;

function login() {
    var email = document.getElementById("lEmail").value;
    var password = document.getElementById("lPassword").value;
    var storedName = localStorage.getItem('email');
    var storedPw = localStorage.getItem('registerPassword');

    if(email == storedName && password == storedPw){
        // alert("Login accepted");
        window.open("Calendar.html","_self");
        return false;

    } else {
        attempts = attempts - 1;
        alert("Wrong username or password: " + attempts + " attempts left.")
    }
    if(attempts == 0){
        document.getElementById("email").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
    }


}