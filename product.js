// cateories upload fetched from products.json
document.addEventListener("DOMContentLoaded", () => {
  fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("products-container");

      data.forEach((product) => {
        // Create a product card
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h4 class="product-name">${product.name}</h4>
        `;

        container.appendChild(card);
      });
    })
    .catch((error) => console.error("Error loading products:", error));

  // fetch actual product into html
  fetch("products.json")
    .then((res) => res.json())
    .then((data) => {
      const prodContainer = document.getElementById("selling-container");

      data.forEach((actualproduct) => {
        // create product card for actual product
        const actualProd = document.createElement("div");
        actualProd.classList.add("actualProd-card");

        actualProd.innerHTML = `
        <div class="product-image">
        <img src="${actualproduct.image}" alt="${actualproduct.name}">
        
          <div class="add">
          <h4 class="product-name">${actualproduct.name}</h4>
        <p class="product-price">Price: GHS${actualproduct.price}</p>
        </div>
        
        </div>
        <div class="qty-box">
        <div class="qty-boxes"> <button id="decrease"> - </button> <p id="quantity">0</p> <button id="increase">+</button></div>
         <button id="addCart"> Add to Cart </button>
         </div>
          `;
        prodContainer.appendChild(actualProd);
      });
    })
    .catch((error) => console.error("Error loading actual Product:", error));
  



    // carousel functionality
    const catCarousel = document.getElementById('products-container');
    const prodCarousel = document.getElementById('selling-container');
    const carousel = document.getElementById('flash-container');
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({left: 210, behavior: "smooth"})
    });

    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({left: -210, behavior: "smooth"})
    });
/// categories slides
    nextBtn.addEventListener('click', () => {
      catCarousel.scrollBy({left: 210, behavior: "smooth"})
    });

    prevBtn.addEventListener('click', () => {
      catCarousel.scrollBy({left: -210, behavior: "smooth"})
    });

// products slides
    nextBtn.addEventListener('click', () => {
      prodCarousel.scrollBy({left: 210, behavior: "smooth"})
    });

    prevBtn.addEventListener('click', () => {
      prodCarousel.scrollBy({left: -210, behavior: "smooth"})
    });



// flash sale product upload
    fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("flash-container");

      data.forEach((product) => {
        // Create a product card
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h4 class="product-name">${product.name}</h4>
        `;

        container.appendChild(card);
      });
    })
    .catch((error) => console.error("Error loading products:", error));
});
