const products = [

  { id:1, name:"Shoes", price:1999 },

  { id:2, name:"T-Shirt", price:799 },

  { id:3, name:"Watch", price:2999 }

];

let cart = [];

function displayProducts(){

  const productDiv = document.getElementById("products");

  products.forEach(product => {

    const div = document.createElement("div");

    div.classList.add("card");

    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">
        Add to Cart
      </button>
    `;

    productDiv.appendChild(div);

  });
}

function addToCart(id){

  const product = products.find(p => p.id === id);

  cart.push(product);

  updateCart();
}

function updateCart(){

  const cartList = document.getElementById("cart");

  cartList.innerHTML = "";

  let total = 0;

  cart.forEach(item => {

    total += item.price;

    const li = document.createElement("li");

    li.innerText = `${item.name} - ₹${item.price}`;

    cartList.appendChild(li);

  });

  document.getElementById("total").innerText =
    `Total: ₹${total}`;
}

function checkout(){

  alert("Order placed successfully!");
}

displayProducts();