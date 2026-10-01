const express = require("express");

const app = express();

const PORT = 3000;


// Home API
app.get("/", (req, res) => {

    res.json({
        message: "ShopNova Backend is Running Successfully!"
    });

});


// Product API
app.get("/api/products", (req, res) => {

    const products = [

        {
            id: 1,
            name: "Wireless Headphones",
            price: 2499
        },

        {
            id: 2,
            name: "Smart Watch",
            price: 3999
        },

        {
            id: 3,
            name: "Running Shoes",
            price: 1899
        },

        {
            id: 4,
            name: "Premium Laptop",
            price: 54999
        }

    ];


    res.json(products);

});


app.listen(PORT, () => {

    console.log(
        `Server running at http://localhost:${PORT}`
    );

});
