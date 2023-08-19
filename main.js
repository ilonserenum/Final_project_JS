document.getElementById("checkin").valueAsDate = new Date();
document.getElementById("checkout").valueAsDate = new Date();

const popularDestinations = [
  {
    city: "Berlin",
    country: "Germany",
    image: "assets/slide1.jpg",
    title: "Monument of Berlin",
  },
  {
    city: "London",
    country: "United Kingdom",
    image: "assets/slide2.jpg",
    title: "Millennium Bridge",
  },
  {
    city: "Lisbon",
    country: "Portugal",
    image: "assets/slide4.jpg",
    title: "City of inspirations",
  },
  {
    city: "Berlin",
    country: "Germany",
    image: "assets/slide1.jpg",
    title: "Monument of Berlin",
  },
  {
    city: "London",
    country: "United Kingdom",
    image: "assets/slide2.jpg",
    title: "Millennium Bridge",
  },
  {
    city: "Lisbon",
    country: "Portugal",
    image: "assets/slide4.jpg",
    title: "City of inspirations",
  },
  {
    city: "Berlin",
    country: "Germany",
    image: "assets/slide1.jpg",
    title: "Monument of Berlin",
  },
  {
    city: "London",
    country: "United Kingdom",
    image: "assets/slide2.jpg",
    title: "Millennium Bridge",
  },
];

function closeMobileMenu() {
  document.getElementById("mobileMenuContainer").classList.remove("open");
}

function openMobileMenu() {
  document.getElementById("mobileMenuContainer").classList.add("open");
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showHideScrollButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btn-go-top").style.display = "flex";
  } else {
    document.getElementById("btn-go-top").style.display = "none";
  }
}

window.onscroll = function () {
  showHideScrollButton();
};

document.addEventListener("DOMContentLoaded", function (event) {
  showHideScrollButton();
});

const inViewport = (entries, observer) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
  });
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {};

document.querySelectorAll("[data-inviewport]").forEach((el) => {
  Obs.observe(el, obsOptions);
});

function createPopularDestinationCard(destination) {
  const card = document.createElement("div");
  card.classList.add("sliderItem", "sliderItemPd");
  card.innerHTML = `
    <img src="${destination.image}" />
    <div>
      <h6>${destination.title}</h6>
      <p><i class="fa fa-map-marker" aria-hidden="true"></i>${destination.city}, ${destination.country}</p>
    </div>
  `;
  return card;
}

function createPopularDestinationCards(destinations) {
  const cards = destinations.map((destination) =>
    createPopularDestinationCard(destination)
  );
  return cards;
}

function renderPopularDestinationCards(cards) {
  const slider = document.getElementById("slider");
  cards.forEach((card) => slider.appendChild(card));
}

const cards = createPopularDestinationCards(popularDestinations);
renderPopularDestinationCards(cards);

function showHideCookieNotification() {
  const cookieNotification = document.getElementById("cookie-container");
  const cookieAccepted = localStorage.getItem("cookieAccepted");
  if (cookieAccepted) {
    cookieNotification.style.display = "none";
  } else {
    cookieNotification.style.display = "flex";
  }
}

function hideCookieNotification() {
  const cookieNotification = document.getElementById("cookie-container");
  cookieNotification.style.display = "none";
  localStorage.setItem("cookieAccepted", true);
}

showHideCookieNotification();

(async () => {
  const response = await fetch("https://ipapi.co/json/");
  const data = await response.json();
  const city = data.city;
  const country = data.country_name;
  const greetings = `Hi there, traveler from ${city}, ${country}!`;
  document.getElementById("greetingsTitle").innerHTML = greetings;
})();
