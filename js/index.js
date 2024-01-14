document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("dark-mode-toggle");
  const bodyElement = document.body;

  toggleButton.addEventListener("click", function () {
    bodyElement.classList.toggle("latex-dark");
  });

  // Optional: Save user preference to localStorage
  const currentTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : null;
  if (currentTheme) {
    bodyElement.classList.add(currentTheme);
  }

  toggleButton.addEventListener("click", function () {
    if (bodyElement.classList.contains("latex-dark")) {
      localStorage.setItem("theme", "latex-dark");
    } else {
      localStorage.removeItem("theme");
    }
  });
});

let slideIndex = 1;
showSlide(slideIndex);

// Next/previous controls
function moveSlide(n) {
  showSlide((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlide((slideIndex = n));
}

function showSlide(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
