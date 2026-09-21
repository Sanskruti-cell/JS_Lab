// Get all schedule table cells

const cells = document.querySelectorAll("td");


// Add click event to every cell

cells.forEach(function(cell) {

    cell.addEventListener("click", function() {

        const value = cell.innerText.trim();

        alert("You selected: " + value);

    });

});