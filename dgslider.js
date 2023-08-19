
const containerDg = document.getElementById("sliderContainerDg");
const sliderDg = document.getElementById("sliderDg");
const slidesDg = document.getElementsByClassName("sliderItemDg").length;
const arrowLeftDg = document.getElementById("arrowLeftDg");
const arrowRightDg = document.getElementById("arrowRightDg");
let currentPositionDg = 0;
let currentMarginDg = 0;
let slidesDgPerPage = 0;
let slidesCountDg = slidesDg - slidesDgPerPage;
let containerWidthDg = containerDg.offsetWidth;

window.addEventListener("resize", checkWidthDg);

function checkWidthDg() {
  containerWidthDg = containerDg.offsetWidth;
  setParamsDg(containerWidthDg);
}

function setParamsDg(w) {
  if (w < 551) {
    slidesDgPerPage = 1;
  } else {
    if (w < 901) {
      slidesDgPerPage = 2;
    } else {
      if (w < 1101) {
        slidesDgPerPage = 3;
      } else {
        slidesDgPerPage = 4;
      }
    }
  }
  slidesCountDg = slidesDg - slidesDgPerPage;
  if (currentPositionDg > slidesCountDg) {
    currentPositionDg -= slidesDgPerPage;
  }
  currentMarginDg = -currentPositionDg * (100 / slidesDgPerPage) + (sliderDg.getBoundingClientRect().x / containerWidthDg) * 100;
  sliderDg.style.marginLeft = currentMarginDg + "%";
  if (currentPositionDg > 0) {
    arrowLeftDg.classList.remove("inactive");
  }
  if (currentPositionDg < slidesCountDg) {
    arrowRightDg.classList.remove("inactive");
  }
  if (currentPositionDg >= slidesCountDg) {
    arrowRightDg.classList.add("inactive");
  }
}

setParamsDg();

function slideRightDg() {
  if (currentPositionDg != 0) {
    sliderDg.style.marginLeft = currentMarginDg + 100 / slidesDgPerPage + "%";
    currentMarginDg += 100 / slidesDgPerPage;
    currentPositionDg--;
  }
  if (currentPositionDg === 0) {
    arrowLeftDg.classList.add("inactive");
  }
  if (currentPositionDg < slidesCountDg) {
    arrowRightDg.classList.remove("inactive");
  }
}

function slideLeftDg() {
  if (currentPositionDg != slidesCountDg) {
    sliderDg.style.marginLeft = currentMarginDg - 100 / slidesDgPerPage + "%";
    currentMarginDg -= 100 / slidesDgPerPage;
    currentPositionDg++;
  }
  if (currentPositionDg == slidesCountDg) {
    arrowRightDg.classList.add("inactive");
  }
  if (currentPositionDg > 0) {
    arrowLeftDg.classList.remove("inactive");
  }
}
