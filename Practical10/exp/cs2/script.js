// Get form

let form =
    document.getElementById("concertForm");

let message =
    document.getElementById("message");


// Submit event

form.addEventListener("submit", function(event) {

    // Prevent page refresh

    event.preventDefault();


    // Get values

    let name =
        document.getElementById("name")
        .value.trim();

    let email =
        document.getElementById("email")
        .value.trim();

    let phone =
        document.getElementById("phone")
        .value.trim();

    let age =
        document.getElementById("age")
        .value;

    let concert =
        document.getElementById("concert")
        .value;

    let language =
        document.querySelector(
            "input[name='language']:checked"
        );


    // Name validation

    if (name == "") {

        showError(
            "Please enter your name."
        );

        return;
    }


    // Email validation

    let emailPattern =
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;


    if (!emailPattern.test(email)) {

        showError(
            "Please enter a valid email."
        );

        return;
    }


    // Phone validation

    let phonePattern =
        /^\d{10}$/;


    if (!phonePattern.test(phone)) {

        showError(
            "Phone number must contain exactly 10 digits."
        );

        return;
    }


    // Age validation

    if (age == "") {

        showError(
            "Please enter your age."
        );

        return;
    }


    if (age < 13) {

        showError(
            "Age must be at least 13 years."
        );

        return;
    }


    // Concert validation

    if (concert == "") {

        showError(
            "Please select a concert."
        );

        return;
    }


    // Language validation

    if (!language) {

        showError(
            "Please select your preferred language."
        );

        return;
    }


    // Get checkbox values

    let recording =
        document.getElementById("recording")
        .checked;

    let updates =
        document.getElementById("updates")
        .checked;


    // Registration successful

    message.style.color = "green";

    message.innerHTML =

        "✅ Registration Successful!<br><br>" +

        "Name: " + name + "<br>" +

        "Email: " + email + "<br>" +

        "Phone: " + phone + "<br>" +

        "Age: " + age + "<br>" +

        "Concert: " + concert + "<br>" +

        "Language: " + language.value + "<br>" +

        "Recording: " +
        (recording ? "Yes" : "No") +
        "<br>" +

        "Event Updates: " +
        (updates ? "Yes" : "No");

});


// Error function

function showError(text) {

    message.style.color = "red";

    message.innerHTML =
        "❌ " + text;
}
