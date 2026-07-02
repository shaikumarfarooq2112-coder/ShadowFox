const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = 3000;

const products = [
    { id: 1, name: "Python Book", price: 500 },
    { id: 2, name: "Java Book", price: 400 },
    { id: 3, name: "React Book", price: 600 },
    { id: 4, name: "JavaScript Book", price: 550 },
    { id: 5, name: "HTML & CSS Book", price: 350 },
    { id: 6, name: "Node.js Book", price: 650 },
    { id: 7, name: "Express.js Book", price: 700 },
    { id: 8, name: "MongoDB Book", price: 750 }

];

let users = [];
let orders = [];

app.get("/", (req, res) => {
    res.send("Welcome to CodeAlpha Book Store!");
});

app.get("/products", (req, res) => {
    res.json(products);
});

app.post("/register", (req, res) => {

    const user = req.body;

    users.push(user);

    res.json({
        message: "Registration Successful!"
    });

});
app.post("/login", (req, res) => {

    const { email, password } = req.body;

    const user = users.find(function(u) {
        return u.email === email && u.password === password;
    });

    if (user) {
        res.json({
            message: "Login Successful!"
        });
    } else {
        res.json({
            message: "Invalid Email or Password!"
        });
    }

});
app.post("/orders", (req, res) => {

    const order = req.body;

    orders.push(order);

    res.json({
        message: "Order Placed Successfully!"
    });

});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});