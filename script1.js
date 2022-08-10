//Retriving HTML Elements from DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const menuToggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

//Function to update the class and message for error
function showError(input, message) {
    //Get the parent element of the input field 
    const formControl = input.parentElement;
    //Override the class -add error
    formControl.className = 'form-control error';
    //Get the small element for the error message
    const small = formControl.querySelector('small');
    //Override the text for small element using the input message
    small.innerText = message;
}

//Function to update class for success
function showSuccess(input) {
    //Get the parent Element of the input field (form-controll)
    const formControl = input.parentElement;
    //override the class -add success
    formControl.className = 'form-control success'
}

//Function to check if email is valid
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}


//event listner
form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (username.value === '') {
        showError(username, 'username is required');
    }
    else {
        showSuccess(username);
    }

    if (email.value === '') {
        showError(email, 'Email is required');
    }
    else if (!isValidEmail(email.value)) {
        showError(email, 'Email is invalid')
    }
    else {
        showSuccess(email);
    }

    if (password.value === '') {
        showError(password, 'password is required');
    }
    else {
        showSuccess(password);
    }

    if (password2.value === '') {
        showError(password2, 'password2 is required');
    }
    else {
        showSuccess(password2);
    }
});

menuToggle.addEventListener('click',() => {
    document.body.classList.toggle('show-nav')
})

// 2 listen for click on open button
open.addEventListener('click', () => modal.classList.add ('show-modal'));
// 3 listen for click on close button
close.addEventListener('click', () => modal.classList.remove('show-modal'));

window.addEventListener('click', e => {
    e.target == modal ? modal.classList.remove('show-modal') : false
});