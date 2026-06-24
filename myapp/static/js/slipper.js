
let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];

document.getElementById(
"cart-count"
).innerText = cart.length;


function addToCart(
productName,
productImage,
productPrice
){

    let product = {
        name: productName,
        image: productImage,
        price: productPrice
    };

    cart.push(product);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    document.getElementById(
    "cart-count"
    ).innerText =
    cart.length;


}



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