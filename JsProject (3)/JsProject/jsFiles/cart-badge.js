// cart-badge.js
function refreshCartBadge() {
  const badge = document.getElementById("cartCount");
  if (!badge) return;
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  badge.textContent = cart.length;
}

// run on load
document.addEventListener("DOMContentLoaded", refreshCartBadge);

// if another tab changed the cart
window.addEventListener("storage", (e) => {
  if (e.key === "cart") refreshCartBadge();
});

// if your page dispatches the custom event (you already do in addCart)
window.addEventListener("cart-updated", () => refreshCartBadge());
