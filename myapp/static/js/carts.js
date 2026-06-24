document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (!Array.isArray(cart)) {
        cart = [];
    }

    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function updateCartCount() {
        let cartCount = document.getElementById("cart-count");
        if (cartCount) {
            cartCount.innerText = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        }
    }

    function renderCart() {
        let cartItems = document.getElementById("cart-items");
        if (!cartItems) return;

        if (cart.length === 0) {
            cartItems.innerHTML = "<p class='empty'>Your cart is empty</p>";
            updateCartCount();
            return;
        }

        let html = "";
        cart.forEach((item, index) => {
            let qty = item.quantity || 1;
            html += `
                <div class="cart-card">
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p class="price">$${item.price}</p>
                    <p class="quantity">Quantity: ${qty}</p>
                    <div class="buttons">
                        <button class="buy-btn" onclick="buyNow(${index})">Buy Now</button>
                        <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
                    </div>
                </div>
            `;
        });

        cartItems.innerHTML = html;
        updateCartCount();
    }

    window.removeItem = function (index) {
        let item = cart[index];
        if (!item) return;

        if ((item.quantity || 1) > 1) {
            item.quantity -= 1;
        } else {
            cart.splice(index, 1);
        }

        saveCart();
        renderCart();
    };

 window.buyNow = function(index) {
    let product = cart[index];

    console.log("Buy Now clicked");
    console.log(product);

    const url =
        `/buy-now/?name=${encodeURIComponent(product.name)}&image=${encodeURIComponent(product.image)}&price=${product.price}`;

    console.log("Redirecting to:", url);

    window.location.href = url;
};
    renderCart();
});

