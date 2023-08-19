
const containerTe = document.getElementById("travelersContainer");
const sliderTe = document.getElementById("travelersSlider");
const slidesTe = document.getElementsByClassName("travelersSlide").length;
const arrowLeftTe = document.getElementById("arrowTeLeft");
const arrowRightTe = document.getElementById("arrowTeRight");
let currentPositionTe = 0;
let currentMarginTe = 0;
let slidesPerPageTe = 0;
let slidesCountTe = slidesTe - slidesPerPageTe;
let containerWidthTe = containerTe.offsetWidth;

window.addEventListener("resize", checkWidthTe);

function checkWidthTe() {
  containerWidthTe = containerTe.offsetWidth;
  setParamsTe(containerWidthTe);
}

function setParamsTe(w) {
  if (w < 551) {
    slidesPerPageTe = 1;
  } else {
    if (w < 901) {
      slidesPerPageTe = 2;
    } else {
      if (w < 1101) {
        slidesPerPageTe = 3;
      } else {
        slidesPerPageTe = 4;
      }
    }
  }
  slidesCountTe = slidesTe - slidesPerPageTe + 3;
  if (currentPositionTe > slidesCountTe) {
    currentPositionTe -= slidesPerPageTe;
  }
  currentMarginTe = -currentPositionTe * (100 / slidesPerPageTe) + (sliderTe.getBoundingClientRect().x / containerWidthTe) * 100;
  sliderTe.style.marginLeft = currentMarginTe + "%";
  if (currentPositionTe > 0) {
    arrowLeftTe.classList.remove("inactive");
  }
  if (currentPositionTe < slidesCountTe) {
    arrowRightTe.classList.remove("inactive");
  }
  if (currentPositionTe >= slidesCountTe) {
    arrowRightTe.classList.add("inactive");
  }
}

setParamsTe();

function slideRightTe() {
  if (currentPositionTe != 0) {
    sliderTe.style.marginLeft = currentMarginTe + 100 / slidesPerPageTe + "%";
    currentMarginTe += 100 / slidesPerPageTe;
    currentPositionTe--;
  }
  if (currentPositionTe === 0) {
    arrowLeftTe.classList.add("inactive");
  }
  if (currentPositionTe < slidesCountTe) {
    arrowRightTe.classList.remove("inactive");
  }
}

function slideLeftTe() {
  if (currentPositionTe != slidesCountTe) {
    sliderTe.style.marginLeft = currentMarginTe - 100 / slidesPerPageTe + "%";
    currentMarginTe -= 100 / slidesPerPageTe;
    currentPositionTe++;
  }
  if (currentPositionTe == slidesCountTe) {
    arrowRightTe.classList.add("inactive");
  }
  if (currentPositionTe > 0) {
    arrowLeftTe.classList.remove("inactive");
  }
}
