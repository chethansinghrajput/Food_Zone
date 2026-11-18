
function placeOrder(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let address = document.getElementById("address").value;

    let customer = {
        name: name,
        mobile: mobile,
        address: address
    };

    // Store customer details
    localStorage.setItem("customer", JSON.stringify(customer));

    // Display details in console
    console.log("Customer Details:");
    console.log(customer);

    // Redirect to success page after 3 seconds
    setTimeout(function () {
        window.location.href = "Success.html";
    }, 3000);
}
