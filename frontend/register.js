document.getElementById("registerForm").addEventListener("submit", register);

function register(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    fetch("https://shadowfox-production.up.railway.app/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        })
    })

    .then(res => res.json())

    .then(data => {

        alert(data.message);

        if(data.message === "Registration Successful!"){
            window.location.href = "login.html";
        }

    })

    .catch(error => {

        console.log(error);
        alert("Server is not running!");

    });

}