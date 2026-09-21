// Access elements using DOM
const form = document.getElementById("registerForm");

const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const birthday = document.getElementById("birthday");
const username = document.getElementById("username");
const email = document.getElementById("email");
const website = document.getElementById("website");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

const message = document.getElementById("message");

// Focus event
firstname.addEventListener("focus", function () {
    firstname.style.backgroundColor = "lightyellow";
});

// Change event
username.addEventListener("change", function () {
    console.log("Username changed:", username.value);
});

// Submit event
form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Empty field validation
    if (
        firstname.value.trim() === "" ||
        lastname.value.trim() === "" ||
        birthday.value === "" ||
        username.value.trim() === "" ||
        email.value.trim() === "" ||
        website.value.trim() === "" ||
        password.value === "" ||
        repassword.value === ""
    ) {
        message.innerHTML = "Please fill all fields.";
        message.style.color = "red";
        return;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(email.value)) {
        message.innerHTML = "Please enter a valid email.";
        message.style.color = "red";
        return;
    }

    // Password matching
    if (password.value !== repassword.value) {
        message.innerHTML = "Passwords do not match.";
        message.style.color = "red";
        return;
    }

    message.innerHTML = "Registration Successful!";
    message.style.color = "green";
});
