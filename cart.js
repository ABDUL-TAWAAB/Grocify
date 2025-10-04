const cartContainer = document.getElementById("cart-container");
const totalEl = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartContainer.innerHTML = ""; // clear before rendering
  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<h3>Your cart is empty.</h3>";
    totalEl.textContent = "";
    return;
  }

  cart.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="details">
        <h4>${item.name}</h4>
        <p>Price: GHS${item.price}</p>
        <p>Quantity: ${item.quantity}</p>
        <p>Subtotal: GHS${item.price * item.quantity}</p>
        <button class="remove-btn" data-index="${index}">Remove</button>
      </div>
    `;

    total += item.price * item.quantity;
    cartContainer.appendChild(cartItem);
  });

  totalEl.textContent = `Total: GHS${total}`;

  // Add remove event listeners
  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      removeFromCart(index);
    });
  });
}

function removeFromCart(index) {
  cart.splice(index, 1); // remove one product
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart(); // refresh cart display
}

// Initial render
renderCart();
