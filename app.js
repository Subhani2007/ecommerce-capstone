// ================= CART =================

let cart = [];


function addToCart(productName, price) {

    cart.push({
        name: productName,
        price: price
    });


    document.getElementById("cartCount").textContent =
        cart.length;


    alert(
        productName +
        " has been added to your cart! 🛒"
    );
}


// ================= SHOW CART =================

function showCart() {

    if (cart.length === 0) {

        alert("Your cart is currently empty.");

        return;
    }


    let message = "🛒 YOUR CART\n\n";

    let total = 0;


    cart.forEach((product, index) => {

        message +=
            `${index + 1}. ${product.name} - ₹${product.price}\n`;

        total += product.price;

    });


    message +=
        `\n--------------------\n`;

    message +=
        `Total: ₹${total}`;


    alert(message);
}


// ================= NEWSLETTER =================

function subscribeUser() {

    const email =
        document.getElementById("email").value.trim();


    if (email === "") {

        alert("Please enter your email address.");

        return;
    }


    if (!email.includes("@")) {

        alert("Please enter a valid email address.");

        return;
    }


    alert(
        "Thank you for subscribing! 🎉"
    );


    document.getElementById("email").value = "";
}


// ================= LEARN MORE =================

function learnMore() {

    alert(
        "Welcome to ShopNova! 🛍️\n\n" +
        "We provide quality products, " +
        "great prices and a simple shopping experience."
    );
}
