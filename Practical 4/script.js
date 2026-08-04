function checkPalindrome() {

    try {

        let str = document.getElementById("text").value;

        if (str.trim() === "") {
            throw new Error("Please enter a string.");
        }

        let original = str.toLowerCase().replace(/\s/g, "");
        let reversed = original.split("").reverse().join("");

        if (original === reversed) {
            document.getElementById("result").innerHTML =
                `"${str}" is a Palindrome.`;
        }
        else {
            document.getElementById("result").innerHTML =
                `"${str}" is NOT a Palindrome.`;
        }

    }
    catch(error) {
        document.getElementById("result").innerHTML =
            "Error: " + error.message;
    }

}