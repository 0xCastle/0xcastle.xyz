document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("dark-mode-toggle");
  const bodyElement = document.body;

  toggleButton.addEventListener("click", function () {
    bodyElement.classList.toggle("latex-dark");

    let images = document.querySelectorAll('.grid-image');
    if (bodyElement.classList.contains("latex-dark")) {
      // change images to dark theme for dark mode
      images.forEach(img => {
        img.src = img.src.replace('_light-theme', '_dark-theme');
      });
    } else {
      //change images to light theme for light mode
      images.forEach(img => {
        img.src = img.src.replace('_dark-theme', '_light-theme');
      });
    }
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
