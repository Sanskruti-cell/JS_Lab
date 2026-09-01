function reverseString() {
    let str = document.getElementById("stringInput").value;

    let reversed = str.split("").reverse().join("");

    document.getElementById("reverseOutput").innerHTML =
        "Reversed String: " + reversed;
}

function countVowels() {
    let paragraph = document.getElementById("paragraphInput").value;

    let count = 0;

    for (let ch of paragraph.toLowerCase()) {
        if ("aeiou".includes(ch)) {
            count++;
        }
    }

    document.getElementById("vowelOutput").innerHTML =
        "Number of Vowels: " + count;
}