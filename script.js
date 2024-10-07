// // Select elements

// const minusIcon = document.querySelector(".minusIcon");
// const plusIcon = document.querySelector(".plusIcon");
// const orderCount = document.getElementById("orderCount");
// const cartCount = document.querySelector(".cart-count");
// const cartIcon = document.querySelector(".cartIcon");
// const cartPopup = document.getElementById("cartPopup");
// const cartItems = document.getElementById("cartItems");
// const emptyCartMessage = document.getElementById("emptyCartMessage");
// const checkoutButton = document.getElementById("checkoutButton");
// const addToCartButton = document.querySelector(".addToCart");

// let count = 1; // Start count at 1
// let cartItemCount = 0; // Initialize cart items
// let cart = [];
// let isCartOpen = false;

// // Open menu when clicking the burger icon
// document.getElementById('burger').addEventListener('click', function() {
//   document.getElementById('menu').classList.add('menuShown');
// });

// // Close menu when clicking the close button
// document.getElementById('close-menu').addEventListener('click', function() {
//   document.getElementById('menu').classList.remove('menuShown');
// });

// // Close menu when clicking outside of it
// document.addEventListener('click', function(event) {
//   const menu = document.getElementById('menu');
//   const burgerIcon = document.getElementById('burger');
//   if (!menu.contains(event.target) && !burgerIcon.contains(event.target)) {
//     menu.classList.remove('menuShown');
//   }
// });

// // Toggle cart popup
// cartIcon.addEventListener("click", (event) => {
//   event.stopPropagation(); // Prevent event from bubbling up
//   isCartOpen = !isCartOpen;
//   cartPopup.style.display = isCartOpen ? "block" : "none";
//   updateCartPopup();
// });

// // Close cart popup when clicking outside
// document.addEventListener("click", (event) => {
//   if (isCartOpen && !cartIcon.contains(event.target) && !cartPopup.contains(event.target)) {
//     isCartOpen = false;
//     cartPopup.style.display = "none";
//   }
// });

// // Image modal functionality

// const images = [
//   "./images/image-product-1.jpg",
//   "./images/image-product-2.jpg",
//   "./images/image-product-3.jpg",
//   "./images/image-product-4.jpg",
// ];

// let currentIndex = 0;

// function openModal(index) {
//   currentIndex = index;
//   const modal = document.getElementById("productModal");
//   const modalImage = document.getElementById("modalImage");
//   modalImage.src = images[currentIndex];
//   modal.classList.remove("hidden");
// }

// document.querySelector(".close").addEventListener("click", closeModal);

// function closeModal() {
//   const modal = document.getElementById("productModal");
//   modal.classList.add("hidden");
// }

// function changeImage(direction) {
//   currentIndex += direction;

//   // Loop around the images
//   if (currentIndex < 0) {
//     currentIndex = images.length - 1; // Go to the last image
//   } else if (currentIndex >= images.length) {
//     currentIndex = 0; // Go back to the first image
//   }

//   const modalImage = document.getElementById("modalImage");
//   modalImage.src = images[currentIndex];
// }

// function setImage(index) {
//   currentIndex = index;
//   const modalImage = document.getElementById("modalImage");
//   modalImage.src = images[currentIndex];
// }

// cartPopup.addEventListener("click", (event) => {
//   event.stopPropagation();
// });


// document.querySelector(".addToCart").addEventListener("click", () => {
//   const product = {
//     name: "Fall Limited Edition Sneakers",
//     price: 125.00
//   };
//   addToCart(product);
// });


// // Add to cart functionality
// addToCartButton.addEventListener("click", () => {
//   // const product = {
//   //   name: "Fall Limited Edition Sneakers",
//   //   price: 125.00,
//   //   quantity: count
//   // };
//   // addToCart(product);
//   cartItems += count;
//     updateCartCount();
//     count = 1;
//     updateOrderCount();
// });

// // Update count display
// const updateOrderCount = () => {
//   orderCount.textContent = count;
// };

// // Update cart count display
// const updateCartCount = () => {
//   cartCount.textContent = cartItemCount;
//   cartCount.style.display = cartItemCount > 0 ? "inline" : "none";
// };

// // Add to cart functionality
// function addToCart(product) {
//   const existingProduct = cart.find(item => item.name === product.name);
//   if (existingProduct) {
//     existingProduct.quantity += product.quantity;
//   } else {
//     cart.push(product);
//   }
//   cartItemCount += product.quantity;
//   updateCartCount();
//   updateCartPopup();
// }

// // Update cart popup content
// function updateCartPopup() {
//   if (cart.length === 0) {
//     emptyCartMessage.style.display = "block";
//     cartItems.innerHTML = "";
//     checkoutButton.style.display = "none";
//   } else {
//     emptyCartMessage.style.display = "none";
//     cartItems.innerHTML = cart.map(item => `
//       <div class="cart-item">
//         <img src="./images/image-product-1-thumbnail.jpg" alt="${item.name}" width="50">
//         <div class="priceContant">
//           <p>${item.name}</p>
//           <p>$${item.price.toFixed(2)} x ${item.quantity} <strong>$${(item.price * item.quantity).toFixed(2)}</strong></p>
//         </div>
//         <button onclick="removeFromCart('${item.name}')">
//           <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
//         </button>
//       </div>
//     `).join("");
//     checkoutButton.style.display = "block";
//   }
// }

// // Remove item from cart
// function removeFromCart(productName) {
//   const index = cart.findIndex(item => item.name === productName);
//   if (index !== -1) {
//     cartItemCount -= cart[index].quantity;
//     cart.splice(index, 1);
//     updateCartCount();
//     updateCartPopup();
//   }
// }

// // Decrease count, ensuring it's not less than 1
// minusIcon.addEventListener("click", () => {
//   if (count > 1) {
//     count--;
//     updateOrderCount();
//   }
// });

// // Increase count, ensuring it's not more than 20
// plusIcon.addEventListener("click", () => {
//   if (count < 20) {
//     count++;
//     updateOrderCount();
//   }
// });

// // Initialize displays
// updateOrderCount();
// updateCartCount();
// updateCartPopup();


// Select elements


const minusIcon = document.querySelector(".minusIcon");
const plusIcon = document.querySelector(".plusIcon");
const orderCount = document.getElementById("orderCount");
const cartCount = document.querySelector(".cart-count");
const cartIcon = document.querySelector(".cartIcon");
const cartPopup = document.getElementById("cartPopup");
const cartItems = document.getElementById("cartItems");
const emptyCartMessage = document.getElementById("emptyCartMessage");
const checkoutButton = document.getElementById("checkoutButton");
const addToCartButton = document.querySelector(".addToCart");

// Initialize state
let count = 1;
let cartItemCount = 0;
let cart = [];
let isCartOpen = false;

// Menu functionality
document.getElementById('burger').addEventListener('click', function() {
  document.getElementById('menu').classList.add('menuShown');
});

document.getElementById('close-menu').addEventListener('click', function() {
  document.getElementById('menu').classList.remove('menuShown');
});

document.addEventListener('click', function(event) {
  const menu = document.getElementById('menu');
  const burgerIcon = document.getElementById('burger');
  if (!menu.contains(event.target) && !burgerIcon.contains(event.target)) {
    menu.classList.remove('menuShown');
  }
});

// Cart popup functionality
cartIcon.addEventListener("click", (event) => {
  event.stopPropagation();
  isCartOpen = !isCartOpen;
  cartPopup.style.display = isCartOpen ? "block" : "none";
  updateCartPopup();
});

document.addEventListener("click", (event) => {
  if (isCartOpen && !cartIcon.contains(event.target) && !cartPopup.contains(event.target)) {
    isCartOpen = false;
    cartPopup.style.display = "none";
  }
});

// Product image modal functionality
const images = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];

let currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  const modal = document.getElementById("productModal");
  const modalImage = document.getElementById("modalImage");
  modalImage.src = images[currentIndex];
  modal.classList.remove("hidden");
}

function closeModal() {
  const modal = document.getElementById("productModal");
  modal.classList.add("hidden");
}

function changeImage(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  const modalImage = document.getElementById("modalImage");
  modalImage.src = images[currentIndex];
}

function setImage(index) {
  currentIndex = index;
  const modalImage = document.getElementById("modalImage");
  modalImage.src = images[currentIndex];
}

// Cart functionality
function addToCart() {
  const product = {
    name: "Fall Limited Edition Sneakers",
    price: 125.00,
    quantity: count,
    totalPrice: count * 125.00
  };

  const existingProductIndex = cart.findIndex(item => item.name === product.name);
  
  if (existingProductIndex !== -1) {
    cart[existingProductIndex].quantity += product.quantity;
    cart[existingProductIndex].totalPrice = cart[existingProductIndex].quantity * cart[existingProductIndex].price;
  } else {
    cart.push(product);
  }
  
  cartItemCount += count;
  updateCartCount();
  updateCartPopup();
  
  // Reset count after adding to cart
  count = 1;
  updateOrderCount();
}

function updateCartCount() {
  cartCount.textContent = cartItemCount;
  cartCount.style.display = cartItemCount > 0 ? "block" : "none";
}

function updateOrderCount() {
  orderCount.textContent = count;
}

function updateCartPopup() {
  if (cart.length === 0) {
    emptyCartMessage.style.display = "block";
    cartItems.innerHTML = "";
    checkoutButton.style.display = "none";
  } else {
    emptyCartMessage.style.display = "none";
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="./images/image-product-1-thumbnail.jpg" alt="${item.name}" width="50">
        <div class="priceContant">
          <p>${item.name}</p>
          <p>$${item.price.toFixed(2)} x ${item.quantity} <strong>$${item.totalPrice.toFixed(2)}</strong></p>
        </div>
        <button onclick="removeFromCart('${item.name}')">
          <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
              <path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/>
            </defs>
            <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/>
          </svg>
        </button>
      </div>
    `).join("");
    checkoutButton.style.display = "block";
  }
}

function removeFromCart(productName) {
  const index = cart.findIndex(item => item.name === productName);
  if (index !== -1) {
    cartItemCount -= cart[index].quantity;
    cart.splice(index, 1);
    updateCartCount();
    updateCartPopup();
  }
}

// Event listeners for quantity controls
minusIcon.addEventListener("click", () => {
  if (count > 1) {
    count--;
    updateOrderCount();
  }
});

plusIcon.addEventListener("click", () => {
  if (count < 20) {
    count++;
    updateOrderCount();
  }
});

// Add to cart button click handler
addToCartButton.addEventListener("click", addToCart);

// Initialize displays
updateOrderCount();
updateCartCount();
updateCartPopup();