const cartContainer = document.getElementById("cart-container");
const totalEl = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addCart() {
  cartContainer.innerHTML = ""; // clear before
  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<h3>Your cart is empty.</h4>";
    totalEl.textContent = "";
    return;
  }

  cart.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="details">
        <div class="nameAndPrice">
        <h4>${item.name}</h4>
        <p>Price: GHS${item.price}</p>
        </div>
        <p>Quantity: ${item.quantity}</p>
        <p>Subtotal: GHS${item.price * item.quantity}</p>
        <button class="remove-btn" data-index="${index}"><i class='bxr  bx-trash'  ></i> </button>
      </div>
    `;

    total += item.price * item.quantity;
    cartContainer.appendChild(cartItem);
  });

  // ===================summary of purchase========================

  const DISCOUNTS = document.querySelector(".discounst")
  const Subtotal = document.createElement("p");
  Subtotal.classList.add("sub-total");

  const shippingCost = document.createElement("p");
  shippingCost.classList.add("shipping-cost");

  const discount = document.createElement("p");
  discount.classList.add("discountPercentage");

  const tax = document.createElement("p");
  tax.classList.add("tax");

  Subtotal.innerHTML = `Subtotal <h5>GHS${total.toFixed(2)}</h5>`;

  let SHIPPINGCOST = 20;
  shippingCost.innerHTML = `Shipping Cost <h5> GHS${SHIPPINGCOST}</h5>`
  
  // calculate for discount
  let discPercentage = 15;
  const priceFromPercen = (total * 15) / 100;
  let finalPrice = total - priceFromPercen; // holds the new price after the discount
  discount.innerHTML = `Discount(15%) <h5>GHS -${priceFromPercen.toFixed(2)}</h5>`;

  const taxPercentage = 5;
  const totalTax = (taxPercentage / 100) * finalPrice;
  const taxDue = finalPrice + totalTax
  tax.innerHTML = `Tax(5%) <h5>${totalTax.toFixed(2)}</h5>`
  DISCOUNTS.appendChild(Subtotal)
  DISCOUNTS.appendChild(shippingCost)
  DISCOUNTS.appendChild(discount);
  DISCOUNTS.appendChild(tax)

  const sumTotal = taxDue + SHIPPINGCOST
 totalEl.textContent = `Total: GHS${sumTotal.toFixed(2)}`;

// ======= REMOVE PRODUCT FROM CART
  // Get popup elements
const popup = document.getElementById("popup");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let productIndexToDelete = null; // store which product user wants to delete

// Add remove event listeners
document.querySelectorAll(".remove-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const index = e.target.dataset.index;
    productIndexToDelete = index; // store which product to delete
    popup.style.display = "flex"; // show popup
  });
});

// When user confirms deletion
yesBtn.addEventListener("click", () => {
  if (productIndexToDelete !== null) {
    removeFromCart(productIndexToDelete); 
    popup.style.display = "none"; // close popup
    productIndexToDelete = null;
    window.location.reload();
  }

});

// When user cancels deletion
noBtn.addEventListener("click", () => {
  popup.style.display = "none"; // close popup without deleting
  productIndexToDelete = null;
});

function removeFromCart(index) {
  cart.splice(index, 1); // remove one product
  localStorage.setItem("cart", JSON.stringify(cart));
  addCart(); // refresh cart
}
}
// Initial
addCart()

// update cart counter
  function updatweCartCounter() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartCounter = document.getElementById("cartCounter2");
    let totalItems = cart.length;
    console.log(totalItems); 
    cartCounter.textContent = totalItems;
  }
  updatweCartCounter();
