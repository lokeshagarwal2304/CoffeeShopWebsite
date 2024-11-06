let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
// Get all elements
const menuBtn = document.getElementById('menu-btn');
const searchForm = document.querySelector('.search-form');
const cartItemsContainer = document.querySelector('.cart-items-container');
const cartItemClose = document.querySelectorAll('.cart-item img');

// Add event listeners
menuBtn.addEventListener('click', () => {
  searchForm.classList.toggle('active');
});

cartItemsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('cart-item')) {
    e.target.parentElement.classList.toggle('active');
  }
});

cartItemClose.forEach((item) => {
  item.addEventListener('click', () => {
    item.parentElement.parentElement.classList.remove('active');
  });
});