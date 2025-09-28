fetch('products.json')
.then(response =>{
    if(!response.ok) throw new Error('Network response was not ok')
    return response.json();
})
.then(products =>{
    const container = document.getElementById('productContainer');
    container.innerHTML = '';

    products.forEach(product => {
        const productDev = document.createElement('div');
        productDev.className = 'prod';

        productDev.innerHTML = `<img src="${product.image}>
        <div class="product-details>
        <h4>${product.name}</h4>
        <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
        </div>
        `;
        container.appendChild(productDev)  
    });
})
.catch(error =>{
    document.getElementById("productContainer").innerHTML = "Failed to upload products.";
    Console.error("Error fetching JSON:", error)
})