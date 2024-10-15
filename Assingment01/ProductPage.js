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


