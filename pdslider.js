
const container = document.getElementById("sliderContainer");
const slider = document.getElementById("slider");
const slides = document.getElementsByClassName("sliderItemPd").length;
const arrowLeft = document.getElementById("arrowLeftPd");
const arrowRight = document.getElementById("arrowRightPd");
let currentPosition = 0;
let currentMargin = 0;
let slidesPerPage = 0;
let slidesCount = slides - slidesPerPage;
let containerWidth = container.offsetWidth;

window.addEventListener("resize", checkWidth);

function checkWidth() {
  containerWidth = container.offsetWidth;
  setParams(containerWidth);
}

function setParams(w) {
  if (w < 551) {
    slidesPerPage = 1;
  } else {
    if (w < 901) {
      slidesPerPage = 2;
    } else {
      if (w < 1101) {
        slidesPerPage = 3;
      } else {
        slidesPerPage = 4;
      }
    }
  }
  slidesCount = slides - slidesPerPage + 2;
  if (currentPosition > slidesCount) {
    currentPosition -= slidesPerPage;
  }
  currentMargin = -currentPosition * (100 / slidesPerPage) + (slider.getBoundingClientRect().x / containerWidth) * 100;
  slider.style.marginLeft = currentMargin + "%";
  if (currentPosition > 0) {
    arrowLeft.classList.remove("inactive");
  }
  if (currentPosition < slidesCount) {
    arrowRight.classList.remove("inactive");
  }
  if (currentPosition >= slidesCount) {
    arrowRight.classList.add("inactive");
  }
}

setParams();

function slideRight() {
  if (currentPosition != 0) {
    slider.style.marginLeft = currentMargin + 100 / slidesPerPage + "%";
    currentMargin += 100 / slidesPerPage;
    currentPosition--;
  }
  if (currentPosition === 0) {
    arrowLeft.classList.add("inactive");
  }
  if (currentPosition < slidesCount) {
    arrowRight.classList.remove("inactive");
  }
}

function slideLeft() {
  if (currentPosition != slidesCount) {
    slider.style.marginLeft = currentMargin - 100 / slidesPerPage + "%";
    currentMargin -= 100 / slidesPerPage;
    currentPosition++;
  }
  if (currentPosition == slidesCount) {
    arrowRight.classList.add("inactive");
  }
  if (currentPosition > 0) {
    arrowLeft.classList.remove("inactive");
  }
}
