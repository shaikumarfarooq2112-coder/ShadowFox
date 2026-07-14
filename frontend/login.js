function login(){


let email=document.getElementById("email").value;

let password=document.getElementById("password").value;



fetch("http://localhost:3000/login",
{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

email:email,

password:password

})

})


.then(res=>res.json())


.then(data=>{


alert(data.message);


if(data.message=="Login Successful!"){

window.location.href="index.html";

}


});


}