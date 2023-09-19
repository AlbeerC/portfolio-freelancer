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
});

nextButton.addEventListener("click", () => {
  slideIndex++;
  showSlide();
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
    isDragging = false;
  } else if (diffX < -50) {
    slideIndex--;
    showSlide();
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