document.getElementById("loginForm").addEventListener("submit", login);

function login(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    fetch("http://localhost:3000/login", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            email: email,
            password: password
        })

    })

    .then(response => response.json())

    .then(data => {

        alert(data.message);

        if (data.message === "Login Successful!") {

            window.location.href = "index.html";

        }

    })

    .catch(error => {

        console.error(error);

        alert("Login failed. Make sure the backend server is running.");

    });

}