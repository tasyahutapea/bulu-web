// Loading cepat dengan DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  const loading = document.getElementById("loading");

  // Biarkan loading terlihat 1 detik untuk animasi
  setTimeout(() => {
    loading.classList.add("fade-out");
    setTimeout(() => loading.style.display = "none", 300); // fade-out 0.3s
  }, 1000); // tampil selama 1 detik
});

// Hero text animation
window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".hero-title");
  const heroDesc = document.querySelector(".hero-desc");
  heroTitle.classList.add("fade-slide");
  heroDesc.classList.add("fade-slide-delay");
});

// Scroll animation untuk course cards
const courseCards = document.querySelectorAll(".course-card");
const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);
courseCards.forEach(card => observer.observe(card));
