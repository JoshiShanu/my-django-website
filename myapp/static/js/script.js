

let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];

document.getElementById(
"cart-count"
).innerText = cart.length;



function addToCart(productName, productImage, productPrice) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
        cart.push({
            name: productName,
            image: productImage,
            price: productPrice,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartCount = document.getElementById("cart-count");

    if (cartCount) {
        let totalQty = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        cartCount.innerText = totalQty;
    }
}

document.addEventListener("DOMContentLoaded", updateCartCount);

function updateCartCount(){

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    let count =
        document.getElementById(
            "cart-count"
        );

    if(count){
        count.innerText =
        cart.length;
    }
}

updateCartCount();


document.getElementById("search-input")
.addEventListener("keydown", function(event){

    if(event.key === "Enter"){

        let searchvalue =
        this.value.toLowerCase().trim();

        if(searchvalue === "book" ||
           searchvalue === "books"){

            window.location.href =
            "/books/";
        }

        else if(
            searchvalue === "womens clothing" ||
            searchvalue === "clothing"
        ){

            window.location.href =
            "/clothings/";
        }
            else if(
                searchvalue === "slippers" ||
                searchvalue === "footwear"
            ){

                window.location.href =
                "/slippers/";
            }

        else{
            alert("No results found");
        }
    }
});







function buyNow(
    name,
    image,
    price
) {

    window.location.href =
    `/buy-now/?name=${encodeURIComponent(name)}
    &image=${encodeURIComponent(image)}
    &price=${price}`;

}



