// Function to handle the "Add to Cart" button click
function addToCart() {
    const productName = "Woman Black Quirky Print Empire Dress";
    const selectedSize = document.getElementById("size").value;
    const quantity = document.getElementById("quantity").value;

    if (selectedSize === "select size") {
        alert("Please select a size.");
        return;
    }

    const cartItem = {
        product: productName,
        size: selectedSize,
        quantity: parseInt(quantity),
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(existingCart));

    alert(`${quantity} ${productName} (Size: ${selectedSize}) added to cart.`);
}

// Function to handle image click and change
function clickme(smallImg) {
    var fullImg = document.getElementById("imagebox");
    fullImg.src = smallImg.src;
}

// Assign the addToCart function to the button's click event
document.querySelector("button").addEventListener("click", addToCart);
