// Main image
const sectionHero = document.querySelector(".hero");
const mainImg = document.querySelector(".main-img");
// Float image
const classFloat = document.querySelector(".floating-img");
const mainImgFloat = document.querySelector(".main-img-float");
// thumbnail images
const thumbnailbImg = document.querySelectorAll(".thumb-img");
// thumbnail imgs floating
const thumbnailbImgFloat = document.querySelectorAll(".thumb-img-float");

const overlayC = document.querySelector(".overlay");
const closeIcon = document.querySelector(".close-icon");

// btns
const leftArrow = document.querySelector(".btn-swipe-left");
const rightArrow = document.querySelector(".btn-swipe-right");

const minusBtn = document.querySelector(".minus");
const cartNumber = document.querySelector(".cart-number");
const plusBtn = document.querySelector(".plus");


let cartCount = 0;

minusBtn.addEventListener("click", function () {
  if (cartCount >= 1) {
    cartCount -= 1;
    cartNumber.textContent = cartCount;
  }
});

plusBtn.addEventListener("click", function () {
  if (cartCount <= 9) {
    cartCount += 1;
    cartNumber.textContent = cartCount;
  }
});


const navCart = document.querySelector(".nav-cart");
const cartBox = document.querySelector(".cart");
const emptyCart = document.querySelector(".empty-cart");
const filledCart = document.querySelector(".cart-bottom");
const sectionContainer = document.querySelector(".container");

const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const numbercart = document.querySelector(".count-items");
const currPrice = document.querySelector(".current-price");
const deleteIcon = document.querySelector(".delete");
const navAfter = document.querySelector(".nav-cart-after");

let itemsCount = 0;

navCart.addEventListener("click", function () {
  cartBox.classList.toggle("show");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") cartBox.classList.remove("show");
});

btnRight.addEventListener("click", function () {
  if (cartCount > 0 && itemsCount + cartCount <= 20) {
    itemsCount += cartCount;
    emptyCart.classList.remove("show");
    filledCart.classList.add("show");
    currPrice.textContent = `$${itemsCount * 125}.00`;
    numbercart.textContent = itemsCount;
    navAfter.classList.add("show");
    navAfter.textContent = itemsCount;
    // cartIcon.classList.add("show");
  }

  if (itemsCount === 20) {
    navAfter.textContent = "full";
  }
});

deleteIcon.addEventListener("click", function () {
  emptyCart.classList.add("show");
  filledCart.classList.remove("show");
  itemsCount = 0;
  navAfter.classList.remove("show");
});

document.body.addEventListener("click", function (e) {
  if (!cartBox.classList.contains("show")) {
    return;
  }

  const arr = e.path;
  for (let i = 0; i < arr.length; i++) {
    if (
      btnRight === arr[i] ||
      btnLeft === arr[i] ||
      navCart === arr[i] ||
      cartBox === arr[i]
    ) {
      return;
    }
  }

  cartBox.classList.remove("show");
});