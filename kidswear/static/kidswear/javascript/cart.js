const cart = JSON.parse(localStorage.getItem("cart"));

const itemcount = document.getElementById("subItems");
const subTotal = document.getElementById("subTotal");
const ttax = document.getElementById("ttax");
const finalPay = document.getElementById("finalPay");

const empytCart = document.querySelector(".empty__cart");
const cartElement = document.querySelector(".cart");
let subtotal = 0;
const taxt = 500;

// setting multiple attributes on the input tag.
function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

// crating the view cart items function
function function1(item, cart) {
  const main = document.getElementById("addCartI");

  const checkoutPage = document.createElement("div");
  checkoutPage.setAttribute("class", "checkout__productPage");

  const imglink = document.createElement("a");
  imglink.setAttribute("href", "/");
  checkoutPage.appendChild(imglink);

  const checkoutImg = document.createElement("div");
  checkoutImg.setAttribute("class", "checkoutProduct__image");
  imglink.appendChild(checkoutImg);

  const image = document.createElement("img");
  image.src = `${cart[item].image}`;
  checkoutImg.appendChild(image);

  const checkoutpInfo = document.createElement("div");
  checkoutpInfo.setAttribute("class", "checkoutProductInfo");
  checkoutPage.appendChild(checkoutpInfo);

  const price = document.createElement("span");
  price.setAttribute("class", "copPPrice");
  total = cart[item].price * cart[item].qty;
  price.innerHTML = `₹${cart[item].price}X${cart[item].qty} = ` + total;
  checkoutpInfo.appendChild(price);

  const checkoutpdtl = document.createElement("div");
  checkoutpdtl.setAttribute("class", "checkOutProductDetails");
  checkoutpInfo.appendChild(checkoutpdtl);

  const titlepara = document.createElement("p");
  titlepara.setAttribute("class", "ProductName");
  titlepara.innerHTML = `${cart[item].name}`;
  checkoutpdtl.appendChild(titlepara);

  const pdQty = document.createElement("div");
  pdQty.setAttribute("class", "prdQuantity");
  checkoutpdtl.appendChild(pdQty);

  const qtyspan = document.createElement("span");
  qtyspan.setAttribute("class", "qtyspan");
  qtyspan.innerHTML = `Qty : `;
  pdQty.appendChild(qtyspan);

  const qtydecrease = document.createElement("button");
  qtydecrease.setAttribute("class", "qtyChange");
  qtydecrease.setAttribute("id", `${cart[item].id}`);
  qtydecrease.innerHTML = `-`;
  qtyspan.appendChild(qtydecrease);
  qtydecrease.addEventListener("click", function () {
    let updatectr = JSON.parse(localStorage.getItem("cart"));
    if (updatectr[this.id].qty === 1) {
      qtydecrease.disabled = true;
      qtyincrease.disabled = false;
    } else {
      updatectr[this.id].qty = updatectr[this.id].qty - 1;
      qtyinupt.value = updatectr[this.id].qty;
      localStorage.setItem("cart", JSON.stringify(updatectr));
      total = updatectr[this.id].price * updatectr[this.id].qty;
      price.innerHTML =
        `₹${updatectr[this.id].price}X${updatectr[this.id].qty} = ` + total;
      checkoutpInfo.appendChild(price);
      subtotal = subtotal - Number(updatectr[this.id].price);
      subTotal.innerHTML = `${subtotal}`;
      finalPay.innerHTML = subtotal + taxt;
    }
  });

  const qtyinupt = document.createElement("input");
  qtyspan.appendChild(qtyinupt);

  setAttributes(qtyinupt, {
    class: "prdquantity",
    type: "number",
    value: `${cart[item].qty}`,
    readOnly: true,
  });

  const qtyincrease = document.createElement("button");
  qtyincrease.setAttribute("class", "qtyChange");
  qtyincrease.setAttribute("id", `${cart[item].id}`);
  qtyincrease.innerHTML = `+`;
  qtyspan.appendChild(qtyincrease);
  qtyincrease.addEventListener("click", function () {
    let updatectr = JSON.parse(localStorage.getItem("cart"));
    if (updatectr[this.id].qty === 10) {
      qtyincrease.disabled = true;
      qtydecrease.disabled = false;
    } else {
      updatectr[this.id].qty = updatectr[this.id].qty + 1;
      qtyinupt.value = updatectr[this.id].qty;
      localStorage.setItem("cart", JSON.stringify(updatectr));
      total = updatectr[this.id].price * updatectr[this.id].qty;
      price.innerHTML =
        `₹${updatectr[this.id].price}X${updatectr[this.id].qty} = ` + total;
      checkoutpInfo.appendChild(price);
      subtotal = subtotal + Number(updatectr[this.id].price);
      subTotal.innerHTML = `${subtotal}`;
      finalPay.innerHTML = subtotal + taxt;
    }
  });

  const rmButton = document.createElement("button");
  rmButton.setAttribute("class", "removeFCart");
  rmButton.setAttribute("id", `${cart[item].id}`);
  rmButton.innerHTML = `Remove`;
  pdQty.appendChild(rmButton);
  rmButton.addEventListener("click", function () {
    let deleItem = JSON.parse(localStorage.getItem("cart"));
    checkoutPage.remove();
    console.log(deleItem[this.id].price);
    subtotal =
      subtotal - Number(deleItem[this.id].price) * deleItem[this.id].qty;
    subTotal.innerHTML = `${subtotal}`;
    finalPay.innerHTML = subtotal + taxt;
    delete deleItem[this.id];
    localStorage.setItem("cart", JSON.stringify(deleItem));
    itemcount.innerHTML = Object.keys(deleItem).length;
    cartCount.innerHTML = Object.keys(deleItem).length;
  });

  main.appendChild(checkoutPage);

  // subtotals for the payment page.
  subtotal = total + subtotal;
  itemcount.innerHTML = Object.keys(cart).length;
  subTotal.innerHTML = `${subtotal}`;
  ttax.innerHTML = taxt;
  finalPay.innerHTML = subtotal + taxt;
}

// applying loop for all the cart items. comming from localhost.
for (item in cart) {
  function1(item, cart);
}

// if cart is empyt than show empyt page
function isEmpty() {
  if (cart === null) {
    empytCart.style.display = "flex";
    cartCount.innerHTML = 0;
  } else {
    cartElement.style.display = "flex";
  }
}
isEmpty();
