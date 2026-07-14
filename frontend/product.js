const params = new URLSearchParams(
window.location.search
);


const id = params.get("id");



fetch("http://localhost:3000/products")

.then(response=>response.json())

.then(products=>{


const product = products.find(
p=>p.id == id
);



document.getElementById(
"productDetails"
).innerHTML = `


<div class="card product-page">


<h1>
${product.name}
</h1>


<h2>
Price: ₹${product.price}
</h2>


<button onclick="addToCart('${product.name}',${product.price})">

Add To Cart

</button>


</div>


`;


});



function addToCart(name,price){


let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];


cart.push({

name:name,

price:price

});


localStorage.setItem(
"cart",
JSON.stringify(cart)
);


alert("Added to Cart");


}