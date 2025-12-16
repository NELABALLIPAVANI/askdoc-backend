// RUN AFTER DOM IS LOADED
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  displayData();
});

// UPDATE BADGE COUNT
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let badge = document.getElementById("cartCount");

  if (badge) {
    badge.textContent = cart.length;
  }
}

// DISPLAY ALL CART ITEMS
function displayData() {
  let CartCon = document.getElementById("items");
  let totalPrice = document.getElementById("totalPrice");
  let products = JSON.parse(localStorage.getItem("cart")) || [];

  if (CartCon) CartCon.innerHTML = ""; // Clear previous UI

  if (products.length === 0) {
    if (CartCon) CartCon.innerHTML = "<p>Cart is empty</p>";
    if (totalPrice) totalPrice.innerHTML = "";
    updateCartCount();
    return;
  }

  let total = 0;

  products.forEach((val, ind) => {
    let productDiv = document.createElement("div");

    total += val.price;

    productDiv.innerHTML = `
      <div class="item">
          <main>
              <img src="${val.images[0]}" height="200" width="160"/>
          </main>
          <main>
              <h1>${val.title}</h1>
              <p>Availability : ${val.availabilityStatus}</p>
              <p>Category : ${val.category}</p>
              <p>Return : ${val.returnPolicy}</p>
              <p>Shipping : ${val.shippingInformation}</p>
              <p>Warranty : ${val.warrantyInformation}</p>
              <p>Price : $${val.price}</p>
              <button class = "remove" onclick="removeItem(${ind})">Remove</button>
          </main>
      </div>
    `;

    if (CartCon) CartCon.append(productDiv);
  });

  if (totalPrice) {
    totalPrice.innerHTML = `<h1>Total Price : $${total.toFixed(2)}</h1>`;
  }

  updateCartCount();
}

// REMOVE ITEM
function removeItem(itemId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(itemId, 1); // Remove item

  localStorage.setItem("cart", JSON.stringify(cart));

  // alert("Product removed!");
  displayData(); // Refresh UI
}
