// ======================================
// GET HTML ELEMENTS
// ======================================

const themeBtn = document.getElementById("themeBtn");

const username = document.getElementById("username");

const fontSize = document.getElementById("fontSize");

const saveBtn = document.getElementById("saveBtn");

const displayName = document.getElementById("displayName");

const displayFont = document.getElementById("displayFont");

const displayTheme = document.getElementById("displayTheme");

const message = document.getElementById("message");

const clearBtn = document.getElementById("clearBtn");


// ======================================
// LOCAL STORAGE
// THEME PREFERENCE
// ======================================

// Get saved theme from Local Storage

const savedTheme = localStorage.getItem("theme");


// If saved theme is dark

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeBtn.innerText = "☀️ Enable Light Mode";

    displayTheme.innerText = "Dark";
}


// ======================================
// CHANGE THEME
// ======================================

themeBtn.addEventListener("click", function () {

    // Add or remove dark class

    document.body.classList.toggle("dark");


    // Check current theme

    if (document.body.classList.contains("dark")) {

        // Save dark theme

        localStorage.setItem("theme", "dark");

        themeBtn.innerText = "☀️ Enable Light Mode";

        displayTheme.innerText = "Dark";

    }

    else {

        // Save light theme

        localStorage.setItem("theme", "light");

        themeBtn.innerText = "🌙 Enable Dark Mode";

        displayTheme.innerText = "Light";
    }

});


// ======================================
// SESSION STORAGE
// LOAD SAVED DATA
// ======================================

const savedUsername =
    sessionStorage.getItem("username");

const savedFontSize =
    sessionStorage.getItem("fontSize");


// Load username

if (savedUsername) {

    username.value = savedUsername;

    displayName.innerText = savedUsername;
}


// Load font size

if (savedFontSize) {

    fontSize.value = savedFontSize;

    displayFont.innerText = savedFontSize;

    document.body.style.fontSize = savedFontSize;
}


// ======================================
// SAVE SESSION PREFERENCES
// ======================================

saveBtn.addEventListener("click", function () {

    const name = username.value;

    const size = fontSize.value;


    // Check username

    if (name === "") {

        message.innerText =
            "Please enter your username.";

        message.style.color = "red";

        return;
    }


    // Save username in Session Storage

    sessionStorage.setItem(
        "username",
        name
    );


    // Save font size in Session Storage

    sessionStorage.setItem(
        "fontSize",
        size
    );


    // Display saved data

    displayName.innerText = name;

    displayFont.innerText = size;


    // Apply font size

    document.body.style.fontSize = size;


    // Success message

    message.innerText =
        "Preferences saved successfully!";

    message.style.color = "green";

});


// ======================================
// CLEAR SESSION STORAGE
// ======================================

clearBtn.addEventListener("click", function () {

    // Remove session data

    sessionStorage.clear();


    // Reset input fields

    username.value = "";

    fontSize.value = "16px";


    // Reset displayed values

    displayName.innerText = "Not set";

    displayFont.innerText = "16px";


    // Reset font

    document.body.style.fontSize = "16px";


    // Show message

    message.innerText =
        "Session preferences cleared.";

    message.style.color = "red";

});