const destinationPriceSlider = document.getElementById(
  "destination-price-slider"
);
const destinationPriceSliderValue = document.getElementById("price-value");
const sectionDestinations = document.getElementById("s-destinations");
const sectionTestimonials = document.getElementById("s-testimonials");
const sectionTestimonialsForm = document.getElementById("s-testimonials-form");

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateSectionOnScroll() {
  if (isElementInViewport(sectionDestinations)) {
    sectionDestinations.classList.remove("hidden");
    sectionDestinations.classList.add("show");
  }

  if (isElementInViewport(sectionTestimonials)) {
    sectionTestimonials.classList.remove("hidden");
    sectionTestimonials.classList.add("show");
  }

  if (isElementInViewport(sectionTestimonialsForm)) {
    sectionTestimonialsForm.classList.remove("hidden");
    sectionTestimonialsForm.classList.add("show");
  }
}

const destinations = [
  {
    destination: "Europe",
    hashtags: ["#Paris", "#London", "#Rome", "#Athens", "#Tbilisi"],
    priceMin: 300,
    priceMax: 1500,
    description: `Europe is a continent located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere. It comprises the westernmost part of Eurasia and is bordered by the Arctic Ocean to the north, the Atlantic Ocean to the west, the Mediterranean Sea to the south, and Asia to the east.
                  Our tours are designed to showcase the best of Europe. They are a great way to explore the continent and meet like-minded people. We have a wide range of tours to suit all budgets and interests. Whether you are looking for a short break or a longer holiday, we have something for you.`,
  },
  {
    destination: "Asia",
    hashtags: ["#Tokyo", "#Seoul", "#Beijing", "#Shanghai", "#Hong Kong"],
    priceMin: 1000,
    priceMax: 3000,
    description: `Asia is Earth's largest and most populous continent, located primarily in the Eastern and Northern Hemispheres. It shares the continental landmass of Eurasia with the continent of Europe and the continental landmass of Afro-Eurasia with both Europe and Africa.
                  Our tours are designed to showcase the best of Asia. They are a great way to explore the continent and meet like-minded people. We have a wide range of tours to suit all budgets and interests. Whether you are looking for a short break or a longer holiday, we have something for you.`,
  },
  {
    destination: "North America",
    hashtags: [
      "#New York",
      "#Los Angeles",
      "#Chicago",
      "#Toronto",
      "#Vancouver",
    ],
    priceMin: 1000,
    priceMax: 2000,
    description: `North America is a continent entirely within the Northern Hemisphere and almost all within the Western Hemisphere. It can also be described as a northern subcontinent of the Americas, or America, in models that use fewer than seven continents.
                  Our tours are designed to showcase the best of North America. They are a great way to explore the continent and meet like-minded people. We have a wide range of tours to suit all budgets and interests. Whether you are looking for a short break or a longer holiday, we have something for you.`,
  },
  {
    destination: "South America",
    hashtags: [
      "#Sao Paulo",
      "#Buenos Aires",
      "#Rio de Janeiro",
      "#Lima",
      "#Bogota",
    ],
    priceMin: 1500,
    priceMax: 3500,
    description: `South America is a continent entirely in the Western Hemisphere and mostly in the Southern Hemisphere, with a relatively small portion in the Northern Hemisphere. It can also be described as a southern subcontinent of the Americas.
                  Our tours are designed to showcase the best of South America. They are a great way to explore the continent and meet like-minded people. We have a wide range of tours to suit all budgets and interests. Whether you are looking for a short break or a longer holiday, we have something for you.`,
  },
  {
    destination: "Africa",
    hashtags: ["#Cairo", "#Lagos", "#Kinshasa", "#Johannesburg", "#Cape Town"],
    priceMin: 1500,
    priceMax: 3500,
    description: `Africa is the world's second-largest and second-most populous continent, after Asia in both cases. At about 30.3 million km2 (11.7 million square miles) including adjacent islands, it covers 6% of Earth's total surface area and 20% of its land area.
                  Our tours are designed to showcase the best of Africa. They are a great way to explore the continent and meet like-minded people. We have a wide range of tours to suit all budgets and interests. Whether you are looking for a short break or a longer holiday, we have something for you.`,
  },
  {
    destination: "Australia",
    hashtags: ["#Sydney", "#Melbourne", "#Brisbane", "#Perth", "#Adelaide"],
    priceMin: 2500,
    priceMax: 3500,
    description: `Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands.  
                  Our tours are designed to showcase the best of Australia. They are a great way to explore the continent and meet like-minded people. We have a wide range of tours to suit all budgets and interests. Whether you are looking for a short break or a longer holiday, we have something for you.`,
  },
];

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
  animateSectionOnScroll();
};

document.addEventListener("DOMContentLoaded", function (event) {
  showHideScrollButton();
});

function closeMobileMenu() {
  document.getElementById("mobileMenuContainer").style.display = "none";
}

function openMobileMenu() {
  document.getElementById("mobileMenuContainer").style.display = "block";
}

function updateSliderValue() {
  const selectedPrice = parseInt(destinationPriceSlider.value, 10);
  destinationPriceSliderValue.innerHTML = `$${selectedPrice}`;
  return selectedPrice;
}

function fillDestinations() {
  const selectedPrice = updateSliderValue();

  const destinationContainer = document.getElementById(
    "accordion-destinations"
  );
  let html = "";
  destinations
    .filter((destination) => destination.priceMin <= selectedPrice)
    .forEach((destination, i) => {
      html += `
      <div class="accordion-item" id="question${i + 1}">
        <a class="accordion-link" href="#question${i + 1}">
          <div class="flex">
            <h3>${destination.destination}</h3>
            <ul>
              ${destination.hashtags
                .map((hashtag) => `<li>${hashtag}</li>`)
                .join("")}
            </ul>
            <h4 class="destination-price-range">Price: $${
              destination.priceMin
            } - $${destination.priceMax}</h4>
          </div>
          <i class="icon ion-md-arrow-forward"></i>
          <i class="icon ion-md-arrow-down"></i>
        </a>
        <div class="answer">
          <p>${destination.description}</p>
        </div>
        <hr>
      </div>
      `;
    });
  destinationContainer.innerHTML = html;
}

fillDestinations();

let i = 0;
let j = 0;
let testimonials = [];
let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});
let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
  `;
};

async function getTestimonials() {
  const res = await fetch("http://localhost:3000/testimonials");

  if (!res.ok) {
    console.log(res);
    return;
  }

  testimonials = await res.json();
  i = 0;
  j = testimonials.length;
  displayTestimonial();
}

getTestimonials();

async function addTestimonial() {
  const testimonial = {
    name: document.getElementById("name").value,
    company: document.getElementById("company").value,
    position: document.getElementById("position").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    passwordRpt: document.getElementById("passwordRpt").value,
    message: document.getElementById("message").value,
  };
  let errors = [];

  if (testimonial.name.length < 3) {
    errors.push({
      field: "name",
      message: "Name must be at least 3 characters long",
    });
  }

  if (testimonial.company.length < 3) {
    errors.push({
      field: "company",
      message: "Company must be at least 3 characters long",
    });
  }

  if (testimonial.position.length < 3) {
    errors.push({
      field: "position",
      message: "Position must be at least 3 characters long",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(testimonial.email)) {
    errors.push({ field: "email", message: "Email is invalid" });
  }

  // ^ - start of string
  // (?=.*[a-z]) - at least one lowercase letter
  // (?=.*[A-Z]) - at least one uppercase letter
  // (?=.*\d) - at least one digit
  // [a-zA-Z\d]{8,} - at least 8 characters long
  // $ - end of string
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (!passwordRegex.test(testimonial.password)) {
    errors.push({
      field: "password",
      message:
        "Password is invalid. It should contain at least one lowercase letter, one uppercase letter, one digit and be at least 8 characters long",
    });
  }

  if (testimonial.password !== testimonial.passwordRpt) {
    errors.push({ field: "passwordRpt", message: "Passwords do not match" });
  }

  if (testimonial.message.length < 10) {
    errors.push({
      field: "message",
      message: "Message must be at least 10 characters long",
    });
  }

  if (errors.length > 0) {
    displayTestimonialErrors(errors);
    return;
  }

  clearTestimonialErrors();

  let res = await fetch("http://localhost:3000/testimonials", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(testimonial),
  });

  if (!res.ok) {
    console.log(res);
    return;
  }

  testimonials = await res.json();
  i = 0;
  j = testimonials.length;
  displayTestimonial();
}

async function removeTestimonial() {
  const selectedId = testimonials[i].id;
  let res = await fetch(`http://localhost:3000/testimonials?`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: selectedId }),
  });

  if (!res.ok) {
    console.log(res);
    return;
  }

  testimonials = await res.json();
  i = 0;
  j = testimonials.length;
  displayTestimonial();
}

function clearTestimonialErrors() {
  const elements = document.querySelectorAll('div[id*="form-error-"]');
  elements.forEach((element) => {
    element.style.display = "none";
  });
}

function displayTestimonialErrors(errors) {
  for (const error of errors) {
    const element = document.getElementById(`form-error-${error.field}`);
    element.style.display = "block";
    const errorMessage = document.getElementById(
      `form-error-${error.field}-text`
    );
    errorMessage.innerHTML = error.message;
  }
}
