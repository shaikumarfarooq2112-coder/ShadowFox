let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(bookName, price) {

    cart.push({
        name: bookName,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(bookName + " added to cart successfully!");
}

fetch("http://localhost:3000/products")
    .then(response => response.json())
    .then(data => {
        console.log("Products from backend:");
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });