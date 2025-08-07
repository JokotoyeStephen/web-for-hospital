  function animateProgress(barId, percentId, target) {
    let progress = 0;
    const bar = document.getElementById(barId);
    const percent = document.getElementById(percentId);

    const interval = setInterval(() => {
      if (progress >= target) {
        clearInterval(interval);
      } else {
        progress++;
        bar.style.width = progress + "%";
        percent.textContent = progress + "%";
      }
    }, 20); // speed of animation
  }

  // Animate all bars
  animateProgress("rehab-bar", "rehab-percent", 85);
  animateProgress("prod-bar", "prod-percent", 80);
  animateProgress("treat-bar", "treat-percent", 76);
document.addEventListener('DOMContentLoaded', function () {
        const carousel = document.getElementById('carousel1');
        const items = document.querySelectorAll('.carousel-item');
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');
        const indicators = document.querySelectorAll('.indicator');

        let currentIndex = 0;
        const totalItems = items.length;
        const visibleItems = 4;
        const totalSlides = Math.ceil(totalItems / visibleItems);

        // Initialize indicators
        indicators.forEach((indicator, index) => {
          indicator.addEventListener('click', () => {
            goToSlide(index);
          });
        });

        // Update indicators
        function updateIndicators() {
          indicators.forEach((indicator, index) => {
            indicator.classList.toggle('bg-primary', index === currentIndex);
            indicator.classList.toggle('bg-gray-300', index !== currentIndex);
          });
        }

        // Go to specific slide
        function goToSlide(index) {
          currentIndex = index;
          const translateX = -currentIndex * 100;
          carousel.style.transform = `translateX(${translateX}%)`;
          updateIndicators();
        }

        // Next slide
        nextButton.addEventListener('click', () => {
          currentIndex = (currentIndex + 1) % totalSlides;
          goToSlide(currentIndex);
        });

        // Previous slide
        prevButton.addEventListener('click', () => {
          currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
          goToSlide(currentIndex);
        });

        // Initialize
        updateIndicators();

        // Auto slide every 5 seconds
        setInterval(() => {
          nextButton.click();
        }, 5000);
      });
      
const carousel = document.getElementById("carousel");
const next = document.getElementById("next");
const prev = document.getElementById("prev");



  let index = 0;
  const totalSlides = 8;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  next.addEventListener("click", () => {
    index = (index + 1) % totalSlides;
    updateCarousel();
  });

  prev.addEventListener("click", () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
  });

  // Auto-slide every 5 seconds
  setInterval(() => {
    index = (index + 1) % totalSlides;
    updateCarousel();
  }, 5000);

document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("mobileMenu").classList.toggle("hidden");
});

// Active section underline
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("border-wine");
          if (link.getAttribute("href").slice(1) === entry.target.id) {
            link.classList.add("border-wine");
          }
        });
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach((section) => observer.observe(section));

// Custom colors for Tailwind
tailwind.config = {
  theme: {
    extend: {
      colors: {
        "custom-teal": "#E6F0FA",
        "custom-blue-header": "#4A90E2",
        "custom-blue-btn": "#5DADE2",
        "custom-blue-text": "#2E86C1",
        "custom-gray-light": "#F5F7FA",
      },
    },
  },
};

module.exports = {
  theme: {
    extend: {
      colors: {
        navy: {
          800: "#1A2A44",
        },
      },
    },
  },
};

 document.addEventListener('DOMContentLoaded', function () {
        const carousel = document.getElementById('carousel1');
        const items = document.querySelectorAll('.carousel-item');
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');
        const indicators = document.querySelectorAll('.indicator');

        let currentIndex = 0;
        const totalItems = items.length;
        const visibleItems = 4;
        const totalSlides = Math.ceil(totalItems / visibleItems);

        // Initialize indicators
        indicators.forEach((indicator, index) => {
          indicator.addEventListener('click', () => {
            goToSlide(index);
          });
        });

        // Update indicators
        function updateIndicators() {
          indicators.forEach((indicator, index) => {
            indicator.classList.toggle('bg-primary', index === currentIndex);
            indicator.classList.toggle('bg-gray-300', index !== currentIndex);
          });
        }

        // Go to specific slide
        function goToSlide(index) {
          currentIndex = index;
          const translateX = -currentIndex * 100;
          carousel.style.transform = `translateX(${translateX}%)`;
          updateIndicators();
        }

        // Next slide
        nextButton.addEventListener('click', () => {
          currentIndex = (currentIndex + 1) % totalSlides;
          goToSlide(currentIndex);
        });

        // Previous slide
        prevButton.addEventListener('click', () => {
          currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
          goToSlide(currentIndex);
        });

        // Initialize
        updateIndicators();

        // Auto slide every 5 seconds
        setInterval(() => {
          nextButton.click();
        }, 5000);
      });