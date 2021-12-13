// geting cart item from localhost
let cart = JSON.parse(localStorage.getItem("cart"));
const prdquantity = document.querySelector(".prdquantity");
const decrease = document.querySelector(".decrease");
const increase = document.querySelector(".increase");

qty = Number(prdquantity.value);
function addToCart(id, name, image, price) {
  if (cart[id] !== undefined) {
    cart[id].qty = Number(cart[id].qty) + qty;
  } else {
    cart[id] = {
      id: id,
      qty: Number(qty),
      name: name,
      image: image,
      price: Number(price),
    };
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  cartCount.innerHTML = Object.keys(cart).length;
}

// decrease quantity of the product
function qtydecrease() {
  if (qty === 1) {
    decrease.disabled = true;
    increase.disabled = false;
  } else {
    decrease.disabled = false;
    qty = qty - 1;
    prdquantity.value = qty;
  }
}

function qtyIncrease() {
  if (qty === 10) {
    increase.disabled = true;
    decrease.disabled = false;
  } else {
    increase.disabled = false;
    qty = qty + 1;
    prdquantity.value = qty;
  }
}
