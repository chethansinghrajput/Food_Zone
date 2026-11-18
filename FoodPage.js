let foods = [
    {
        id: 1,
        foodName: "Chicken Biryani",
        foodPrice: 150,
        category: "Biryani",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKOMZRCDFhJsxuHBSSQjPRWQRuZWP5WyzdFWgGEWzM3g&s=10"
    },
    {
        id: 2,
        foodName: "Mutton Biryani",
        foodPrice: 250,
        category: "Biryani",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVkiUlqMFqAp6gK51JUHqI7otCYXq3Zgmnph3iAo5NqA&s=10"
    },
    {
        id: 3,
        foodName: "Egg Biryani",
        foodPrice: 100,
        category: "Biryani",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9nIbPGnRqUp4nH07XSU7dvXHyKmUfP_7wHSijvXF1_g&s=10"
    },
    {
        id: 4,
        foodName: "Veg Biryani",
        foodPrice: 120,
        category: "Biryani",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdsko3P1caNN3Bwalc5bkc55k05JhGbtfL93v66p8uBg&s=10"
    },
    {
        id: 5,
        foodName: "Mushroom Biryani",
        foodPrice: 160,
        category: "Biryani",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU51Nr7VrQXmTN52OhZAnTNj5BAb8Qj5bHdfEpME3vfA&s=10"
    },
    {
        id: 6,
        foodName: "Chesse Corn Pizza",
        foodPrice: 250,
        category: "Pizza",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIShg7cvgcuDDSN3oonWM7eUiQki-YUfMmT72iN7D0Iw&s=10"
    },
    {
        id: 7,
        foodName: "BBQ Chicken Pizza",
        foodPrice: 220,
        category: "Pizza",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6sxOoYr9N4lhiL6dEMdkW2ZYHS8RGt_WgZbjqan5mUA&s=10"
    },
    {
        id: 8,
        foodName: "Grilled Mushroom Pizza",
        foodPrice: 199,
        category: "Pizza",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7fJ_46vlXj8GD3tFDjIgD-20fHDGsmLSr562Ydux3uqEjZqaOeEFJ5iZR&s=10"
    },
    {
        id: 9,
        foodName: "Chicken Parm Pizza",
        foodPrice: 269,
        category: "Pizza",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeEj2k99QhgvsDEY_mW9N7cmLPUJsEkHyvPqR4cg4fTw&s=10"
    },
    {
        id: 10,
        foodName: "Fried Chicken Pizza",
        foodPrice: 199,
        category: "Pizza",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQHMbr5Kt8gWJTzQM0bWhF8dYVNznXVwkBLIEKJkjLiQ&s=10"
    },
    {
        id: 11,
        foodName: "Cheese Burger",
        foodPrice: 99,
        category: "Burger",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7SFB_M250yF0j4F05G_LLlTIYtJaZAIt6UTzZrYgcKg&s=10"
    },
    {
        id: 12,
        foodName: " Crispy Fried Chicken Burger",
        foodPrice: 149,
        category: "Burger",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnz_G6Q3G0Nzbw0sLlIJ_dgg-OHLg6_2cZXdDkAWEVZA&s=10"
    },
    {
        id: 13,
        foodName: "veggie-burger",
        foodPrice: 99,
        category: "Burger",
        foodImage: "https://theeburgerdude.com/wp-content/uploads/2025/08/Veggie-Burger-2-1-scaled.jpg"
    },
    {
        id: 14,
        foodName: "smashed-cheeseburger",
        foodPrice: 99,
        category: "Burger",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgxSv76_3d4__bXrCFLvkIdkPVCuFVB0q3pSsvkLJSaQ&s=10"
    },
    {
        id: 15,
        foodName: "Butter Chicken Burger",
        foodPrice: 119,
        category: "Burger",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6y9YdhVQUzCr0nFjfUx_sq2e_-iKY3Ca2mDsfBhNO3A&s=10"
    },
    {
        id: 16,
        foodName: "molten-chocolate-lava-cake",
        foodPrice: 199,
        category: "Deserts",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ22oR20oMAzEHOeTGiZo9NNfU8kEeehsNNe1bX2JAw8g&s=10"
    },
    {
        id: 17,
        foodName: "chocolate-delight",
        foodPrice: 120,
        category: "Deserts",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgelx5uFhNFhpVFm1qygcdfQBBeWU2WDOxxJmTtBG4ng&s=10"
    },
    {
        id: 18,
        foodName: "chocolate-pudding-cake",
        foodPrice: 210,
        category: "Deserts",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtpr2viXhVWU-30bVdpAbbC0Mause8XEpWOsYPo53NCQ&s=10"
    },
    {
        id: 19,
        foodName: "Fried ice-cream",
        foodPrice: 200,
        category: "Deserts",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlsccNyV8q-MhW0N4yyZq5GV3ImMhtrVkA1rF9nuVg4g&s=10"
    },
    {
        id: 20,
        foodName: "cream-fudge ice-cream",
        foodPrice: 159,
        category: "Deserts",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXap1nZc5Miw5pBDrIXSQcMW2MifPGwfsJtkQk7qtJnA&s=10"
    },
    {
        id: 21,
        foodName: "Chicken kathi Roll",
        foodPrice: 80,
        category: "Rolls",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYUKjD5Sska7rjdSR-CqsP_rYW-NSdbPuiDp47i2K81Q&s=10"
    },
    {
        id: 22,
        foodName: "Chicken Egg Roll",
        foodPrice: 100,
        category: "Rolls",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwsrvm5vLZasrEP9jMxJ0iSu6VkEwP2QrWf4k-2nbrbw&s=10"
    },
    {
        id: 23,
        foodName: "Crispy Chicken Paratha Roll",
        foodPrice: 160,
        category: "Rolls",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm10KpsiLMUlbCB9JmQvlXzt6Vf7HMOQnZ0fSw2GDyrw&s=10"
    },
    {
        id: 24,
        foodName: "Panner Roll",
        foodPrice: 80,
        category: "Rolls",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSys3PnLeKHfRTxej4HyGblSCOMZl2q7q8zxr5Nfkfw-Q&s=10"
    },
    {
        id: 25,
        foodName: "Vegetable spring roll",
        foodPrice: 70,
        category: "Rolls",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjwQxLmyoLZnf3XRui58TrpYBiulf38-sziQKCuC-mWg&s=10"
    },
    {
        id: 26,
        foodName: "Baked Pasta",
        foodPrice: 160,
        category: "Pasta",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmsLGA2GKRoXtNvMohvH6meb1Zf3Fg1h3XDfO21jHhyA&s=10"
    },
    {
        id: 27,
        foodName: "White Sauce Pasta",
        foodPrice: 250,
        category: "Pasta",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjwQxLmyoLZnf3XRui58TrpYBiulf38-sziQKCuC-mWg&s=10"
    },
    {
        id: 28,
        foodName: "Creamy Lemon Chicken Pasta",
        foodPrice: 299,
        category: "Pasta",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmsLGA2GKRoXtNvMohvH6meb1Zf3Fg1h3XDfO21jHhyA&s=10"
    },
    {
        id: 29,
        foodName: "chicken Alfredo Pasta",
        foodPrice: 250,
        category: "Pasta",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjbTSx1NS9ZdzdMG55S7M0iWoAGlbYX_rgwGElBnUmuQ&s=10"
    },
    {
        id: 30,
        foodName: "Creamy Garlic Chicken Pasta",
        foodPrice: 210,
        category: "pasta",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAfOL-B0nqTcIA4oXvNmc42S2uysQrVupqvgCs4EuV0A&s=10"
    },
    {
        id: 31,
        foodName: "Gobi 65",
        foodPrice: 149,
        category: "Staters",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0_8sjJr6w915eXdadqrXO8GcD1iYftM1AmnRxYfWCIQ&s=10"
    },
    {
        id: 32,
        foodName: "Panner Manchurian",
        foodPrice: 180,
        category: "Staters",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHgJWAdnDZesTs3vIydUnrQQh7AcbLXCpsldlabysxpg&s=10"
    },
    {
        id: 33,
        foodName: "Lemon Chicken",
        foodPrice: 170,
        category: "Staters",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHgJWAdnDZesTs3vIydUnrQQh7AcbLXCpsldlabysxpg&s=10"
    },
    {
        id: 34,
        foodName: "Tandoori Chicken",
        foodPrice: 260,
        category: "Staters",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0oHmUe_9JCLsdJkwIXHVCHthMVCnOj5ZCnyvzIv8gFg&s=10"
    },
    {
        id: 35,
        foodName: "Andhra Mutton Pepper-dry",
        foodPrice: 320,
        category: "Staters",
        foodImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToxj5kXJ1kFN46CsB4s3i9LVMavsVNcWOJX60TqOpmjQ&s=10"
    },
    {
        id: 36,
        foodName: "Bule Lagoon Moocktail",
        foodPrice: 150,
        category: "Drinks",
        foodImage: "https://cdn.twistandtoast.com/uploads/2025/12/a-blue_lagoon_mocktail-feature-2.jpeg"
    },
    {
        id: 37,
        foodName: "Diet Coke ",
        foodPrice: 120,
        category: "Drinks",
        foodImage: "https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-3000-3000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/d42b783e-3b4f-4da7-8535-2a32f9dd49e1/Diet-Coke-Can-Cola-Sparkling-Soft-Drink-The-Coca-Cola-Company.jpeg"
    },
    {
        id: 38,
        foodName: "Reb Bull Energy Drink",
        foodPrice: 125,
        category: "Drinks",
        foodImage: "https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-1000-1000,pr-true,f-auto,q-40,dpr-2/cms/product_variant/4cb50373-9741-45a8-bf36-6510d8bcbe97/Red-Bull-Energy-Drink-Ready-To-Drink-Beverage.png"
    },
    {
        id: 39,
        foodName: "Thums Up X Force",
        foodPrice: 85,
        category: "Drinks",
        foodImage: "https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-4500-4500,pr-true,f-auto,q-40,dpr-2/cms/product_variant/5229e867-7f87-4593-8d8d-6d096fe3a336/Thums-Up-X-Force-Zero-Sugar-Soft-Drink-Can-Zero-Calories-Carbonated-Beverage.jpeg"
    },
    {
        id: 40,
        foodName: "Monster Energy Ultra ",
        foodPrice: 1050,
        category: "Drinks",
        foodImage: "https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/6f850844-121e-4680-9b1d-a55ed7cab666/Monster-Energy-Ultra-Zero-Sugar-Carbonated-High-Caffeinated-Drink.jpeg"
    },



]

console.log(foods);

let filterfood = foods;


// DISPLAY FOOD
function displayFood() {

    let foodContainer = document.getElementById("food-lists");

    foodContainer.innerHTML = filterfood.map((item) => `
        <div class="food-card">

            <img src="${item.foodImage}" alt="${item.foodName}">

            <h3>${item.foodName} -- ₹${item.foodPrice}</h3>

            <button onclick="addToCart(${item.id})">
                Add to Cart
            </button>

        </div>
    `).join("");
}


// SEARCH + FILTER
function applyFilter() {

    let selectedCategory = document.getElementById("category").value;

    let searchText = document.getElementById("searchBox").value.toLowerCase();

    filterfood = foods.filter((item) => {

        let categoryMatch =
            selectedCategory === "All" ||
            item.category.toLowerCase() === selectedCategory.toLowerCase();

        let searchMatch =
            item.foodName.toLowerCase().includes(searchText);

        return categoryMatch && searchMatch;
    });

    displayFood();
}


// ADD TO CART
function addToCart(id) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let item = foods.find((f) => f.id === id);

    cart.push(item);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${item.foodName} Added to cart`);
}


// INITIAL DISPLAY
displayFood();