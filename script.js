let navbar = document.querySelector('.navbar');
//開啟指定物件時其他的物件會收進去
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
    searchFor.classList.remove('active');    
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchFor.classList.remove('active');    
}

let  searchFor = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchFor.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');    
}

// 滾動滑軸
window.onscroll = () => {
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchFor.classList.remove('active');
}