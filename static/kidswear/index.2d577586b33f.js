const hamburger = document.querySelector(".nav__hamburger");
const navbar = document.querySelector(".nav__menu");
const body = document.querySelector('body')

hamburger.addEventListener('click', ()=>{
    navbar.classList.toggle('open');
    body.classList.toggle('active');
})

// window scroll 
const navigation = document.querySelector(".navigation");
window.addEventListener("scroll", () => {
  navigation.classList.toggle("fix__nav", window.scrollY > 0);
});