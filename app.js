const submit = document.querySelector('.myForm');
submit.addEventListener('submit', validation);
submit.addEventListener('submit', validFName);
submit.addEventListener('submit', validLName);
submit.addEventListener('submit', validEmail);
submit.addEventListener('submit', validPno);

function validation() {
    if (validEmail() && validFName() && validLName() && validPno()) {
        return true;
    } else {
        alert("Form submitted successfully!");
    }
}


function validFName() {
    var regName = /^[a-zA-Z]+$/;
    var strName = document.getElementById("fname").value;
    if (!regName.test(strName)) {
        alert('Invalid First name given.');
        return false;
    } else {
        return true;
    }
}

function validLName() {
    var regName = /^[a-zA-Z]+$/;
    var strName = document.getElementById("lname").value;
    if (!regName.test(strName)) {
        alert('Invalid Last name given.');
        return false;
    } else {
        return true;
    }
}


function validEmail() {
    var x = document.getElementById("email").value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        alert("Please enter a valid e-mail address ");
        return false;
    }
}

function validPno() {
    var num = document.getElementById("phone").value;
    var phoneno = /^\+?([0-9]{2})?[ ]?([0-9]{10})$/;
    if ((num === phoneno)) {
        alert("Please enter a valid Numeric Phone no.");
        return false;
    } else {
        return true;
    }
}