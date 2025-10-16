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
          <h4 class="product-name">${product.categoryName}</h4>
        `;

        container.appendChild(card);
      });
    })
    .catch((error) => console.error("Error loading products:", error));

  // flash sale product upload
  fetch("flashSales.json")
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

  // fetch actual product into html
  fetch("products.json")
    .then((res) => res.json())
    .then((data) => {
      const prodContainer = document.getElementById("selling-container");

      data.forEach((actualproduct) => {
        // create product card for actual product
        const actualProd = document.createElement("div");
        actualProd.classList.add("actualProdcard");

        actualProd.innerHTML = `
        <div class="product-image">
        <img src="${actualproduct.image}" alt="${actualproduct.name}">
        
          <div class="add">
          <h4 class="product-name">${actualproduct.name}</h4>
        <p class="product-price">Price: GHS${actualproduct.price}</p>
        </div>
        
        </div>
         <div class="qty-box">
    <div class="qty-boxes"> 
      <button class="decrease"> - </button> 
      <input type="number" value="0" min="1" class="quantity"> 
      <button class="increase"> + </button>
    </div>
    <button class="addCart"> Add to Cart </button>
    </div>
          `;

        //select elements
        const increaseBtn = actualProd.querySelector(".increase");
        const decreaseBtn = actualProd.querySelector(".decrease");
        const addCartBtn = actualProd.querySelector(".addCart");
        const quantityEl = actualProd.querySelector(".quantity");
        if (!increaseBtn || !decreaseBtn || !addCartBtn || !quantityEl) {
          console.error("Buttons or element missing");
          return;
        }

        increaseBtn.addEventListener("click", () => {
          let quantity = parseInt(quantityEl.value) || 0;
          quantity++;
          quantityEl.value = quantity;
        });

        decreaseBtn.addEventListener("click", () => {
          let quantity = parseInt(quantityEl.value) || 0;
          if (quantity > 1) quantity--;
          quantityEl.value = quantity;
        });

        actualProd.querySelector(".addCart").addEventListener("click", () => {
          const current = parseInt(quantityEl.value) || 0;
          if (current > 0) {
            addToCart(actualproduct, current);
            quantityEl.value = 0; // reset
            const notificationEl = document.querySelector('.notification');
            notificationEl.classList.add('notify');
            const notifyMsg = (`${actualproduct.name} added to cart!`);
            notificationEl.textContent = notifyMsg;
            setTimeout(() => {
              notificationEl.classList.remove('notify');
            }, 1500); // hide after 2 seconds
          } else {
            alert("Please select quantity first!");
          }
        });

        prodContainer.appendChild(actualProd);
      });
    })
    .catch((error) => console.error("Error loading actual Product:", error));

  // Cart Functions
  function addToCart(product, qty) {
    // get existing cart or start new
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // check if product already in cart
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += qty;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: qty,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    let cartCounter = document.getElementById("cartCounter");
    let totalItems = cart.length;
    cartCounter.textContent = totalItems;

  } // end of cart function


  // update cart counter
  function updatweCartCounter() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartCounter = document.getElementById("cartCounter");
    let totalItems = cart.length;
    cartCounter.textContent = totalItems;
  }
  updatweCartCounter();



  // get products for search functionality
  let products = [];
  fetch("products.json")
    .then((res) => res.json())
    .then((data) => {
      products = data.map((item) => item.name);
    })
    .catch((error) =>
      console.error("Error fetching products for search:", error)
    );

  // carousel functionality
  const catCarousel = document.getElementById("products-container");
  const prodCarousel = document.getElementById("selling-container");
  const carousel = document.getElementById("flash-container");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  const prevBtn2 = document.getElementById("prev-btn2");
  const nextBtn2 = document.getElementById("next-btn2");

  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: 210, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -210, behavior: "smooth" });
  });
  /// categories slides
  nextBtn2.addEventListener("click", () => {
    catCarousel.scrollBy({ left: 210, behavior: "smooth" });
  });

  prevBtn2.addEventListener("click", () => {
    catCarousel.scrollBy({ left: -210, behavior: "smooth" });
  });

  // toggle functionality
  const menuBar = document.getElementById("menuBar");
  const navLinks = document.querySelector("#navLinks");
  const navItems = document.querySelectorAll("#navLinks li a, #navLinks i");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
  menuBar.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // search button display on mobile view
  const searchBtn = document.getElementById("search-btn2");
  const inputBtn = document.querySelector(".Search");
  // open searh bar in mobile view-================
  searchBtn.addEventListener("click", () => {
    inputBtn.classList.toggle("open");
  });

  // search functionality
  // filter products based on search input funtionality
  /*window.searchProduct = function () {
    const query = document
      .getElementById("searchBtn")
      .value.toLowerCase().trim();
    const results = products.filter((product) =>
      product.toLowerCase().includes(query)
    );
    if (results.length > 0) {
      alert("Search Results:\n" + results.join("\n"));
    } else {
      alert("No products found.");
    }
  };*/
  
  

  // direction to cart
  const cart = document.getElementById("cart");
  const cart2 = document.getElementById("cart2");
  const cart3 = document.getElementById("cart3");

  cart2.addEventListener("click", () => {
    window.location.href = "cart.html";
  });
  cart.addEventListener("click", () => {
    window.location.href = "cart.html";
  });
  cart3.addEventListener("click", () => {
    window.location.href = "cart.html";
  });

  //  COUNT DOWN FOR FLASH PRODUCTS
  // Set the date we are counting down to
  const countdownDate = new Date("Oct 20, 2025 00:00:00").getTime();

  // Update the countdown every 1 second
  const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display result in HTML
    document.getElementById("days").innerText = days
      .toString()
      .padStart(2, "0");
    document.getElementById("hours").innerText = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").innerText = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").innerText = seconds
      .toString()
      .padStart(2, "0");

    // If countdown is finished
    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("days").innerText = "00";
      document.getElementById("hours").innerText = "00";
      document.getElementById("minutes").innerText = "00";
      document.getElementById("seconds").innerText = "00";
      alert("Flash Sale Ended!");
    }
  }, 1000);
});

const form = document.getElementById("registerForm");
const message = document.getElementById("message");
const registerPopup = document.getElementById("registerPopup");

// Show popups when buttons are clicked
document.getElementById("register").addEventListener("click", () => {
  registerPopup.classList.add("active");
});
document.getElementById("login").addEventListener("click", () => {
  loginPopup.classList.add("active");
});

/*form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // check if user already exists
  let users = JSON.parse(localStorage.getItem("users")) || [];
  const existingUser = users.find(
    (user) => user.email === email && user.password
  );

  if (existingUser) {
    message.textContent = "User already exists. Please log in.";
    return;
  }

  // save new user
  const newUser = { name, email, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  message.style.color = "green";
  message.textContent = "Registration successful! You can now log in.";

  // Save logged in user
  localStorage.setItem("currentUser", JSON.stringify(newUser));

  // clear form
  form.reset();

  // 👇 Redirect after short delay
  setTimeout(() => {
    window.location.href = "index.html"; // change to your website URL
    showUser(name);
  }, 1500);
});*/


// Function to show username and logout button
function showUser(name) {
  const accoutArea = document.getElementById("accountBox");
  
  accoutArea.innerHTML = `
        <span><strong> ${name}</strong></span>
        <button id="logoutBtn">Logout</button>
      `;
  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    location.reload();
  });
}


// show more 
const viewMoreBtn = document.getElementById('viewMore');
const viewMoreConatiner = document.querySelector('.sellingContainer')

viewMoreBtn.addEventListener('click', () => {
  viewMoreConatiner.classList.toggle('more')
  viewMoreBtn.classList.toggle('text')
})