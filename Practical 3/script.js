function calculateGrade() {

    let name = document.getElementById("name").value.trim();
    let marks = document.getElementById("marks").value;
    let result = document.getElementById("result");

    // Form Validation
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (marks === "") {
        alert("Please enter marks.");
        return;
    }

    marks = Number(marks);

    if (marks < 0 || marks > 100) {
        alert("Marks must be between 0 and 100.");
        return;
    }

    let grade;

    // Control Structure
    if (marks >= 90) {
        grade = "A+";
    }
    else if (marks >= 80) {
        grade = "A";
    }
    else if (marks >= 70) {
        grade = "B";
    }
    else if (marks >= 60) {
        grade = "C";
    }
    else if (marks >= 50) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    // Pass / Fail Status
    let status;
    let bgColor;

    if (marks >= 50) {
        status = "PASS";
        bgColor = "#28a745"; // Green
    } else {
        status = "FAIL";
        bgColor = "#dc3545"; // Red
    }

    // Display Result
    result.innerHTML = `
        <div style="
            background:${bgColor};
            color:white;
            padding:20px;
            border-radius:12px;
            text-align:center;
            box-shadow:0 5px 15px rgba(0,0,0,0.2);
        ">
            <h2 style="margin:0;">Grade : ${grade}</h2>
            <h3 style="margin-top:10px;">${status}</h3>
        </div>

        <div style="
            margin-top:20px;
            text-align:center;
            color:#555;
            font-size:14px;
        ">
            <hr>
            <p><strong>Made by Sanskruti</strong></p>
            <p>PRN - 24070521008</p>
        </div>
    `;
}