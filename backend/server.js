const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = 3000;

const products = [
    { id: 1, name: "Wireless Headphones", price: 1999 },
    { id: 2, name: "Smart Watch", price: 2499 },
    { id: 3, name: "Gaming Mouse", price: 999 },
    { id: 4, name: "Bluetooth Speaker", price: 1799 },
    { id: 5, name: "Mechanical Keyboard", price: 2999 },
    { id: 6, name: "Laptop", price: 54999 },
    { id: 7, name: "Smartphone", price: 18999 },
    { id: 8, name: "Camera", price: 32999 }
];

let users = [];
let orders = [];
let productsList = products;

app.get("/", (req, res) => {
    res.send("Welcome to ShopSphere!");
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