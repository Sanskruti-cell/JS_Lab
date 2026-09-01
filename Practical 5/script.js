// Array of Objects
let cart = [];

// Add Item
function addItem() {

    let product = document.getElementById("product").value;
    let price = Number(document.getElementById("price").value);
    let quantity = Number(document.getElementById("quantity").value);

    if (product === "" || price <= 0 || quantity <= 0) {
        alert("Please enter valid product details.");
        return;
    }

    let item = {
        product: product,
        price: price,
        quantity: quantity,
        total: price * quantity
    };

    cart.push(item);

    displayBill();

    // Clear Input Fields
    document.getElementById("product").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
}

// Display Bill
function displayBill() {

    let table = document.getElementById("bill");

    table.innerHTML = "";

    let subtotal = 0;

    for (let i = 0; i < cart.length; i++) {

        subtotal += cart[i].total;

        table.innerHTML += `
        <tr>
            <td>${cart[i].product}</td>
            <td>₹${cart[i].price}</td>
            <td>${cart[i].quantity}</td>
            <td>₹${cart[i].total}</td>
            <td>
                <button class="delete-btn"
                onclick="deleteItem(${i})">
                Delete
                </button>
            </td>
        </tr>
        `;
    }

    let gst = subtotal * 0.18;
    let finalTotal = subtotal + gst;

    document.getElementById("subtotal").innerHTML =
        "Subtotal : ₹" + subtotal.toFixed(2);

    document.getElementById("gst").innerHTML =
        "GST (18%) : ₹" + gst.toFixed(2);

    document.getElementById("finalTotal").innerHTML =
        "Final Total : ₹" + finalTotal.toFixed(2);
}

// Delete Item
function deleteItem(index) {

    cart.splice(index, 1);

    displayBill();
}