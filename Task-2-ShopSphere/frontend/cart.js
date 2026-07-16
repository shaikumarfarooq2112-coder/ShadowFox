let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];



function displayCart(){


let container =
document.getElementById("cartItems");


let total = 0;


container.innerHTML="";



if(cart.length===0){

container.innerHTML=
"<h2>Your cart is empty</h2>";

return;

}



cart.forEach((item,index)=>{


total += item.price;



container.innerHTML += `


<div class="cart-card">


<h2>
${item.name}
</h2>


<p>
Price: ₹${item.price}
</p>


<button onclick="removeItem(${index})">

Remove

</button>


</div>


`;


});



document.getElementById(
"totalPrice"
).innerText=total;


}




function removeItem(index){


cart.splice(index,1);


localStorage.setItem(
"cart",
JSON.stringify(cart)
);


displayCart();


}




function checkout(){


fetch("http://localhost:3000/orders",
{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(cart)

})


.then(res=>res.json())

.then(data=>{


alert(data.message);


localStorage.removeItem("cart");


window.location.href="index.html";


});


}



displayCart();