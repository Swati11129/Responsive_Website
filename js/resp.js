burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
nav_list = document.querySelector('.nav-list')
right_nav = document.querySelector('.right-nav')
console.log(burger);

burger.addEventListener('click', ()=>{
    right_nav.classList.toggle('v-class-resp');
    nav_list.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})