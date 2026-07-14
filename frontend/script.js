// ================= CART =================

let cart = JSON.parse(localStorage.getItem("cart")) || [];



function addToCart(name, price){


    cart.push({

        name:name,

        price:price

    });


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    alert(name + " added to cart!");

}



// ================= GET PRODUCTS FROM BACKEND =================


fetch("http://localhost:3000/products")


.then(response => response.json())


.then(products => {


console.log("Backend Products:", products);



})


.catch(error=>{


console.log(error);


});




// ================= SEARCH =================


function searchProducts(){


let input = document
.getElementById("searchInput")
.value
.toLowerCase();



let cards=document
.getElementsByClassName("product-card");



for(let i=0;i<cards.length;i++){


let name =
cards[i]
.querySelector("h2")
.innerText
.toLowerCase();



if(name.includes(input)){


cards[i].style.display="block";


}

else{


cards[i].style.display="none";


}



}



}



// ================= CATEGORY FILTER =================


function filterProducts(category){


let products=document
.getElementsByClassName("product-card");



for(let i=0;i<products.length;i++){



let productCategory =
products[i]
.getAttribute("data-category");



if(category=="All" ||
productCategory==category){


products[i].style.display="block";


}

else{


products[i].style.display="none";


}


}



}