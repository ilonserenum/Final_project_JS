
const containerSo = document.getElementById("specialOfferSlContainer");
const sliderSo = document.getElementById("specialOffersSlider");
const slidesSo = document.getElementsByClassName("sliderItemSo").length;
const arrowLeftSo = document.getElementById("arrowSoLeft");
const arrowRightSo = document.getElementById("arrowSoRight");
let currentPositionSo = 0;
let currentMarginSo = 0;
let slidesSoPerPageSo = 0;
let slidesSoCount = slidesSo - slidesSoPerPageSo;
let containerSoWidthSo = containerSo.offsetWidth;

window.addEventListener("resize", checkWidthSo);

function checkWidthSo() {
  containerSoWidthSo = containerSo.offsetWidth;
  setParamsSo(containerSoWidthSo);
}

function setParamsSo(w) {
  if (w < 551) {
    slidesSoPerPageSo = 1;
  } else {
    if (w < 901) {
      slidesSoPerPageSo = 2;
    } else {
      if (w < 1101) {
        slidesSoPerPageSo = 3;
      } else {
        slidesSoPerPageSo = 4;
      }
    }
  }
  slidesSoCount = slidesSo - slidesSoPerPageSo + 2;
  if (currentPositionSo > slidesSoCount) {
    currentPositionSo -= slidesSoPerPageSo;
  }
  currentMarginSo = -currentPositionSo * (100 / slidesSoPerPageSo) + (sliderSo.getBoundingClientRect().x / containerSoWidthSo) * 100;
  sliderSo.style.marginLeft = currentMarginSo + "%";
  if (currentPositionSo > 0) {
    arrowLeftSo.classList.remove("inactive");
  }
  if (currentPositionSo < slidesSoCount) {
    arrowRightSo.classList.remove("inactive");
  }
  if (currentPositionSo >= slidesSoCount) {
    arrowRightSo.classList.add("inactive");
  }
}

setParamsSo();

function slideRightSo() {
  if (currentPositionSo != 0) {
    sliderSo.style.marginLeft = currentMarginSo + 100 / slidesSoPerPageSo + "%";
    currentMarginSo += 100 / slidesSoPerPageSo;
    currentPositionSo--;
  }
  if (currentPositionSo === 0) {
    arrowLeftSo.classList.add("inactive");
  }
  if (currentPositionSo < slidesSoCount) {
    arrowRightSo.classList.remove("inactive");
  }
}

function slideLeftSo() {
  if (currentPositionSo != slidesSoCount) {
    sliderSo.style.marginLeft = currentMarginSo - 100 / slidesSoPerPageSo + "%";
    currentMarginSo -= 100 / slidesSoPerPageSo;
    currentPositionSo++;
  }
  if (currentPositionSo == slidesSoCount) {
    arrowRightSo.classList.add("inactive");
  }
  if (currentPositionSo > 0) {
    arrowLeftSo.classList.remove("inactive");
  }
}
