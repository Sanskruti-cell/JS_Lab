// Get form

let form =
    document.getElementById("workshopForm");

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

    let roll =
        document.getElementById("roll")
        .value.trim();

    let email =
        document.getElementById("email")
        .value.trim();

    let phone =
        document.getElementById("phone")
        .value.trim();

    let department =
        document.getElementById("department")
        .value;

    let workshop =
        document.getElementById("workshop")
        .value;

    let ticket =
        document.querySelector(
            "input[name='ticket']:checked"
        );


    // Name validation

    if (name == "") {

        showError("Please enter your name.");

        return;
    }


    // Roll number validation

    if (roll == "") {

        showError("Please enter your roll number.");

        return;
    }


    // Email validation

    let emailPattern =
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;


    if (!emailPattern.test(email)) {

        showError("Please enter a valid email.");

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


    // Department

    if (department == "") {

        showError(
            "Please select your department."
        );

        return;
    }


    // Workshop

    if (workshop == "") {

        showError(
            "Please select a workshop."
        );

        return;
    }


    // Ticket

    if (!ticket) {

        showError(
            "Please select a ticket type."
        );

        return;
    }


    // Successful booking

    message.style.color = "green";

    message.innerHTML =

        "✅ Ticket Booked Successfully!<br><br>" +

        "Name: " + name + "<br>" +

        "Roll Number: " + roll + "<br>" +

        "Email: " + email + "<br>" +

        "Phone: " + phone + "<br>" +

        "Department: " + department + "<br>" +

        "Workshop: " + workshop + "<br>" +

        "Ticket: " + ticket.value;

});


// Error function

function showError(text) {

    message.style.color = "red";

    message.innerHTML =
        "❌ " + text;
}
