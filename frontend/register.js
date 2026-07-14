function register(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let password=document.getElementById("password").value;


fetch("http://localhost:3000/register",
{
method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

name:name,
email:email,
password:password

})

})


.then(res=>res.json())

.then(data=>{

alert(data.message);

window.location.href="login.html";

});


}