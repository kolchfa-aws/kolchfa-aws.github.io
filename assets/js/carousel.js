document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".carousel-slide");
  const caption = document.getElementById("carousel-caption");
  const nextButton = document.querySelector(".carousel-next");
  const prevButton = document.querySelector(".carousel-prev");

  if (!slides.length || !nextButton || !prevButton) return;

  let currentIndex = 0;

  // Create dots dynamically
  const dotContainer = document.createElement("div");
  dotContainer.className = "carousel-dots";
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "carousel-dot";
    dot.dataset.index = i;
    dotContainer.appendChild(dot);
  });

  // Append dots below the carousel
  document.querySelector(".carousel-container").appendChild(dotContainer);
  const dots = document.querySelectorAll(".carousel-dot");

  function updateSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    const activeSlide = slides[index];
    if (caption) {
      caption.textContent = activeSlide.dataset.caption || "";
    }

    currentIndex = index;
  }

  nextButton.addEventListener("click", () => {
    const newIndex = (currentIndex + 1) % slides.length;
    updateSlide(newIndex);
  });

  prevButton.addEventListener("click", () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide(newIndex);
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.dataset.index, 10);
      updateSlide(index);
    });
  });

  // Initial render
  updateSlide(currentIndex);
});
