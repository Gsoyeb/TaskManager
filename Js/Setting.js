function editName(){
    $(document).ready(function(e) {
        var password = localStorage.getItem("registerPassword");

        $('#loginModal').modal('show');
        //handle the form's "submit" event
        $("#loginForm").submit(function(event) {
            event.preventDefault(); //stop a full postback

            if ($("#modalpass").val() == password) {
                var name = prompt("Name");
                localStorage.setItem('name', name);
                window.location.href = "/TaskManager/Setting.html";
            }
            else {
                alert('Password is incorrect.');
                $('#loginModal').modal('hide');
                window.location.href = "/TaskManager/Setting.html";
            }
        });
    });
}

function editSurname(){
    $(document).ready(function(e) {
        var password = localStorage.getItem("registerPassword");

        $('#loginModal').modal('show');
        //handle the form's "submit" event
        $("#loginForm").submit(function(event) {
            event.preventDefault(); //stop a full postback

            if ($("#modalpass").val() == password) {
                var surname = prompt("Surname");
                localStorage.setItem('surname', surname);
                window.location.href = "/TaskManager/Setting.html";
            }
            else {
                alert('Password is incorrect.');
                $('#loginModal').modal('hide');
                window.location.href = "/TaskManager/Setting.html";
            }
        });
    });
}

function editGender(){
    $(document).ready(function(e) {
        var password = localStorage.getItem("registerPassword");

        $('#loginModal').modal('show');
        //handle the form's "submit" event
        $("#loginForm").submit(function(event) {
            event.preventDefault(); //stop a full postback

            if ($("#modalpass").val() == password) {
                var gender = prompt("Gender");
                if(gender == "Male" || gender =="Female"){
                    localStorage.setItem('gender', gender);
                    window.location.href = "/TaskManager/Setting.html";
                }else{
                    alert("Gender can be only male and female");
                    window.location.href = "/TaskManager/Setting.html";
                    return;
                }
            }
            else {
                alert('Password is incorrect.');
                $('#loginModal').modal('hide');
                window.location.href = "/TaskManager/Setting.html";
            }
        });
    });
}

function editAge(){
    $(document).ready(function(e) {
        var password = localStorage.getItem("registerPassword");

        $('#loginModal').modal('show');
        //handle the form's "submit" event
        $("#loginForm").submit(function(event) {
            event.preventDefault(); //stop a full postback

            if ($("#modalpass").val() == password) {
                var age = prompt("Age");
                if(parseInt(age) < 0 || parseInt(age) > 100){
                    alert("Age must be between 0 and 100");
                    window.location.href = "/TaskManager/Setting.html";
                    return;
                }
                localStorage.setItem('age', age);
                window.location.href = "/TaskManager/Setting.html";
            }
            else {
                alert('Password is incorrect.');
                $('#loginModal').modal('hide');
                window.location.href = "/TaskManager/Setting.html";
            }
        });
    });
}

function editEmail(){
    $(document).ready(function(e) {
        var password = localStorage.getItem("registerPassword");

        $('#loginModal').modal('show');
        //handle the form's "submit" event
        $("#loginForm").submit(function(event) {
            event.preventDefault(); //stop a full postback

            if ($("#modalpass").val() == password) {
                var email = prompt("Email");
                localStorage.setItem('email', email);
                window.location.href = "/TaskManager/Setting.html";
            }
            else {
                alert('Password is incorrect.');
                $('#loginModal').modal('hide');
                window.location.href = "/TaskManager/Setting.html";
            }
        });
    });
}

function editPassword(){
    $(document).ready(function(e) {
        var password = localStorage.getItem("registerPassword");

        $('#loginModal').modal('show');
        //handle the form's "submit" event
        $("#loginForm").submit(function(event) {
            event.preventDefault(); //stop a full postback

            if ($("#modalpass").val() == password) {
                var pass = prompt("Password");
                localStorage.setItem('registerPassword', pass);
                localStorage.setItem('registerConfirmPassword', pass);
                window.location.href = "/TaskManager/Setting.html";
            }
            else {
                alert('Password is incorrect.');
                $('#loginModal').modal('hide');
                window.location.href = "/TaskManager/Setting.html";
            }
        });
    });
}



// $('#loginModal').on('hidden.bs.modal', function(e) {
//     window.location.href = '../index.html';
// });
