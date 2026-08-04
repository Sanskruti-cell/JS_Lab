function saveData(){

    localStorage.setItem("name",
    document.getElementById("name").value);

    localStorage.setItem("prn",
    document.getElementById("prn").value);

    localStorage.setItem("age",
    document.getElementById("age").value);

    localStorage.setItem("email",
    document.getElementById("email").value);

    window.location.href="result.html";

}

function showData(){

    document.getElementById("showName").innerHTML =
    localStorage.getItem("name");

    document.getElementById("showPrn").innerHTML =
    localStorage.getItem("prn");

    document.getElementById("showAge").innerHTML =
    localStorage.getItem("age");

    document.getElementById("showEmail").innerHTML =
    localStorage.getItem("email");

}
