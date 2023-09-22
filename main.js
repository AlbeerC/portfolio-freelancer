//Menu
const btnToggle = document.getElementById("btnToggle")
const ul = document.querySelector(".section-list")
const links = document.querySelectorAll(".section-list li")

btnToggle.addEventListener("click", () => {
  ul.classList.toggle("d-none")
})
links.forEach((link) => {
  link.addEventListener("click", () => {
    ul.classList.add("d-none")
  })
})


// Projects slider

const slider = document.querySelector(".slider")
const sliderContainer = document.querySelector(".slider-container")
const prevButton = document.querySelector(".prev")
const nextButton = document.querySelector(".next")

let slideIndex = 0;
let startX = 0;
let isDragging = false;

prevButton.addEventListener("click", () => {
  slideIndex--;
  showSlide();
  updateIndicators();
});

nextButton.addEventListener("click", () => {
  slideIndex++;
  showSlide();
  updateIndicators();
});

sliderContainer.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

sliderContainer.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const currentX = e.touches[0].clientX;
  const diffX = startX - currentX;
  if (diffX > 50) {
    slideIndex++;
    showSlide();
    updateIndicators();
    isDragging = false;
  } else if (diffX < -50) {
    slideIndex--;
    showSlide();
    updateIndicators();
    isDragging = false;
  }
});

sliderContainer.addEventListener("touchend", () => {
  isDragging = false;
});

function showSlide() {
  const slides = document.querySelectorAll(".card");
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  const translateX = -slideIndex * 100 + "%";
  sliderContainer.style.transform = `translateX(${translateX})`;
}

// Llama a showSlide para mostrar el primer proyecto al cargar la página
showSlide();


// Indicadores de diapositivas
const circles = document.querySelectorAll(".circles i")

circles.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    slideIndex = index
    showSlide()
    updateIndicators()
  })
})

const updateIndicators = () => {
  circles.forEach((circle, index) => {
    if (index === slideIndex) {
      circle.classList.add("filled")
    } else {
      circle.classList.remove("filled")
    }
  })
}

updateIndicators()


// Texto animado en sección contacto

document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("text");
  const words = ["LinkedIn", "GitHub", "Whatsapp"];
  let currentWordIndex = 0;

  function changeWord() {
      textElement.textContent = `${words[currentWordIndex]}`;
      currentWordIndex = (currentWordIndex + 1) % words.length;
  }

  setInterval(changeWord, 3000);
});
