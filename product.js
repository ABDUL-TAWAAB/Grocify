// cateories upload fetched from products.json
document.addEventListener("DOMContentLoaded", () => {
  fetch("products.json")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("products-container");

      data.forEach(product => {
        // Create a product card
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h4 class="product-name">${product.name}</h4>
          <div class="add">
          <p class="product-price">Price: GHS${product.price}</p>
          <button> Add to Cart </button>
          </div>
        `;

        container.appendChild(card);
      });
    })
    .catch(error => console.error("Error loading products:", error));
});


// 
