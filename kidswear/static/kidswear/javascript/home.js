let cart = {};
function addToCart(id, name, image, price) {
  if (cart[id] !== undefined) {
    cart[id].qty = cart[id].qty + 1;
  } else {
    qty = 1;
    cart[id] = { id: id, qty: Number(qty), name: name, image: image, price: Number(price) };
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  cartCount.innerHTML = Object.keys(cart).length;
}
