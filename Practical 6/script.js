function processString() {

    let str = document.getElementById("str").value;

    let output = `
        <div class="result"><b>Original String:</b> ${str}</div>
        <div class="result"><b>Length:</b> ${str.length}</div>
        <div class="result"><b>Uppercase:</b> ${str.toUpperCase()}</div>
        <div class="result"><b>Lowercase:</b> ${str.toLowerCase()}</div>
        <div class="result"><b>Substring:</b> ${str.substring(6, 16)}</div>
        <div class="result"><b>Index of JavaScript:</b> ${str.indexOf("JavaScript")}</div>
        <div class="result"><b>Split:</b> ${str.split(" ")}</div>
        <div class="result"><b>Replace:</b> ${str.replace("World", "Programming")}</div>
    `;

    document.getElementById("output").innerHTML = output;
}