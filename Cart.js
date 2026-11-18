function displayFoodItems() {

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(cart);

    let foodContainer = document.getElementById('foodItems');
    console.log(foodContainer);

    let total = 0;

    foodContainer.innerHTML = cart.map((item, index) => {

        console.log(item);
        console.log(index);

        total += Number(item.foodPrice);
        console.log(total);

        return `
            <div class="food-card">

                <img src="${item.foodImage}" alt="${item.foodName}">

                <h3>${item.foodName} -- ₹${item.foodPrice}</h3>

                <button onclick="removeItem(${index})">
                    Remove Item
                </button>

            </div>
        `;

    }).join('');

    document.getElementById('Total').innerHTML =
        `Total Price: ₹${total}/-`;
}


displayFoodItems();


function removeItem(index) {

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.splice(index, 1);

    localStorage.setItem('cart', JSON.stringify(cart));

    displayFoodItems();
}


function clearCart() {
    let ans = confirm('ARE YOU SURE YOU WANT TO REMOVE ALL THE ITEMS FROM THE CART')
    if (ans) {
        localStorage.setItem('cart', JSON.stringify([]))
        window.location.href = './index.html'
    }
}

function checkout() {
    alert('ThankYou For Ordering With US, Order Again :)')
    localStorage.setItem('cart', JSON.stringify([]))
    window.location.href = '++./index.html'
}


function checkout() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Your cart is empty!");
    }
    else {
        window.location.href = "Checkout.html";
    }
}