
let customer = JSON.parse(localStorage.getItem("customer"));

if (customer) {
    document.getElementById("customerName").innerHTML =
        "Thank you, " + customer.name + "!";
}

function goHome() {
    localStorage.removeItem("cart");
    localStorage.removeItem("customer");

    window.location.href = "index.html";
}
