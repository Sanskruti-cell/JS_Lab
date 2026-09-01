function findMinMax(){

    let input = document.getElementById("numbers").value.trim();

    if(input===""){
        alert("Please enter some numbers.");
        return;
    }

    // Convert input string into array
    let arr = input.split(",").map(Number);

    // Check for invalid input
    if(arr.some(isNaN)){
        alert("Please enter only numbers separated by commas.");
        return;
    }

    // Array of Objects
    let numbers = arr.map(function(num){
        return {
            value: num
        };
    });

    // Extract values using map()
    let values = numbers.map(function(item){
        return item.value;
    });

    let minimum = Math.min(...values);
    let maximum = Math.max(...values);

    document.getElementById("output").innerHTML = `
        <strong>Array:</strong> ${values.join(", ")} <br><br>
        <strong>Minimum Value:</strong> ${minimum} <br>
        <strong>Maximum Value:</strong> ${maximum}
    `;
}