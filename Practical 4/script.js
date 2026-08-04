function validateRegistration() {

    try {

        let reg = document.getElementById("regNo").value;

        // Rule 1: Empty Check
        if (reg == "") {
            throw "Registration number cannot be empty.";
        }

        // Rule 2: Length Check
        if (reg.length != 10) {
            throw "Registration number must be exactly 10 characters.";
        }

        // Rule 3 to 6 using Regular Expression
        let pattern = /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/;

        if (!pattern.test(reg)) {
            throw "Invalid Registration Number Format.";
        }

        document.getElementById("result").innerHTML =
            "✅ Valid Registration Number";

        document.getElementById("result").style.color = "green";

    }

    catch(error) {

        document.getElementById("result").innerHTML =
            "❌ " + error;

        document.getElementById("result").style.color = "red";

    }

}