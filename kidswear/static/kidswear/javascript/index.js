const hamburger = document.querySelector(".hamburger");
const hamburger_i = document.querySelector(".show");
const navbar = document.querySelector(".nav__list");
const body = document.querySelector("body");
const modal = document.querySelector(".modal");

function open() {
  navbar.classList.toggle("open");
  body.classList.toggle("active");
  if (hamburger_i.classList.contains("fa-bars")) {
    hamburger_i.classList.remove("fa-bars");
    hamburger_i.classList.add("fa-times");
    modal.style.display = "block";
  } else {
    hamburger_i.classList.remove("fa-times");
    hamburger_i.classList.add("fa-bars");
    modal.style.display = "none";
  }
}
// hamburger show and hide
hamburger.addEventListener("click", open);
modal.addEventListener("click", open);

// window scroll
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.classList.toggle("fix__nav", window.scrollY > 0);
});

// making a cart if is this not in localstorage

const cartCount = document.getElementById("cartCount");
if (localStorage.getItem("cart") === null) {
  let cart = {};
  cartCount.innerHTML = 0;
} else {
  cart = JSON.parse(localStorage.getItem("cart"));
  localStorage.setItem("cart", JSON.stringify(cart));
  cartCount.innerHTML = Object.keys(cart).length;
}

// notification show and hide
const notificationBox = document.querySelector(".notification");
const closeNotification = document.querySelector(".closeNoti");

if (notificationBox) {
  closeNotification.addEventListener("click", () => {
    notificationBox.style.display = "none";
  });
}

if (notificationBox) {
  setTimeout(() => {
    notificationBox.style.display = "none";
  }, 5000);
}
