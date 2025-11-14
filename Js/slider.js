const sliderWrapper = document.getElementById("sliderWrapper");
const sliderIndicator = document.getElementById("sliderIndicator");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const sliderImages = [
  './images/gym-1.png',
  './images/gym-2.png',
  './images/gym-3.png',
  './images/gym-4.png',
];

function initializeSlider() {
  let currentIndex = 0;

  const goToSlide = (index) => {
    currentIndex = index;
    updateSlider();
  };

  const updateSlider = () => {
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentIndex);
    });
  };

  sliderImages.forEach((imageSrc, index) => {
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = `Gym image ${index + 1}`;
    sliderWrapper.appendChild(img);

    const indicator = document.createElement("div");
    indicator.className = `indicator ${index === 0 ? "active" : ""}`;
    indicator.addEventListener("click", () => goToSlide(index));
    sliderIndicator.appendChild(indicator);
  });

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    updateSlider();
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
    updateSlider();
  };

  next.addEventListener("click", nextSlide);
  prev.addEventListener("click", prevSlide);

  let autoplayInterval = setInterval(nextSlide, 6000);

  sliderWrapper.addEventListener("mouseenter", () => {
    clearInterval(autoplayInterval);
  });

  sliderWrapper.addEventListener("mouseleave", () => {
    autoplayInterval = setInterval(nextSlide, 6000);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initializeSlider();
});