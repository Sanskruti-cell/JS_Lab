// var
var discount = 0;

// let
let total = 0;

// const
const gst = 0.18;

// Arrow Function
const generateBill = () => {

    // Customer Details
    let customerName = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let coupon = document.getElementById("coupon").value;

    // Product Prices
    const shoes = 1500;
    const watch = 2500;
    const headphones = 1200;
    const tshirt = 800;
    const handbag = 2200;
    const sunglasses = 900;

    // Quantities
    let shoeQty = Number(document.getElementById("shoeQty").value);
    let watchQty = Number(document.getElementById("watchQty").value);
    let headphoneQty = Number(document.getElementById("headphoneQty").value);
    let shirtQty = Number(document.getElementById("shirtQty").value);
    let bagQty = Number(document.getElementById("bagQty").value);
    let glassQty = Number(document.getElementById("glassQty").value);

    // Total Amount
    total =
        (shoeQty * shoes) +
        (watchQty * watch) +
        (headphoneQty * headphones) +
        (shirtQty * tshirt) +
        (bagQty * handbag) +
        (glassQty * sunglasses);

    // Coupon
    if (coupon == "SAVE10") {
        discount = total * 0.10;
    }
    else {
        discount = 0;
    }

    let gstAmount = (total - discount) * gst;

    let grandTotal = total - discount + gstAmount;

    // Object
    const customer = {
        customerName,
        phone
    };

    // Destructuring
    const { customerName: name, phone: mobile } = customer;

    // Template Literal
    document.getElementById("bill").innerHTML = `

        <h2 align="center">Shopping Bill</h2>
        <hr>

        <p><b>Customer Name :</b> ${name}</p>

        <p><b>Phone Number :</b> ${mobile}</p>

        <hr>

        <table border="1" width="100%" cellpadding="8">

            <tr>

                <th>Product</th>

                <th>Quantity</th>

                <th>Price</th>

            </tr>

            <tr>

                <td>Sports Shoes</td>

                <td>${shoeQty}</td>

                <td>₹${shoeQty * shoes}</td>

            </tr>

            <tr>

                <td>Smart Watch</td>

                <td>${watchQty}</td>

                <td>₹${watchQty * watch}</td>

            </tr>

            <tr>

                <td>Headphones</td>

                <td>${headphoneQty}</td>

                <td>₹${headphoneQty * headphones}</td>

            </tr>

            <tr>

                <td>T-Shirt</td>

                <td>${shirtQty}</td>

                <td>₹${shirtQty * tshirt}</td>

            </tr>

            <tr>

                <td>Hand Bag</td>

                <td>${bagQty}</td>

                <td>₹${bagQty * handbag}</td>

            </tr>

            <tr>

                <td>Sunglasses</td>

                <td>${glassQty}</td>

                <td>₹${glassQty * sunglasses}</td>

            </tr>

        </table>

        <br>

        <h3>Subtotal : ₹${total}</h3>

        <h3>Discount : ₹${discount}</h3>

        <h3>GST (18%) : ₹${gstAmount.toFixed(2)}</h3>

        <h2>Grand Total : ₹${grandTotal.toFixed(2)}</h2>

        <hr>

        <h3 align="center">Thank You For Shopping ❤️</h3>

    `;
}