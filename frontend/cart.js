let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartItems = document.getElementById("cartItems");

let total = 0;

function displayCart() {

    cartItems.innerHTML = "";

    total = 0;

    cart.forEach(function(item, index) {

        let product = document.createElement("p");

        product.innerHTML =
        item.name +
        " - ₹" +
        item.price +
        ' <button onclick="removeItem(' + index + ')">Remove</button>';

        cartItems.appendChild(product);

        total += item.price;

    });

    document.getElementById("totalPrice").textContent =
    "Total: ₹" + total;

}

function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}

displayCart();

    function placeOrder() {

    fetch("http://localhost:3000/orders", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(cart)

    })

    .then(response => response.json())

    .then(data => {

        alert(data.message);

        localStorage.removeItem("cart");

        window.location.reload();

    })

    .catch(error => {

        console.log(error);

    });

}

