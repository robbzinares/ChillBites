document.addEventListener("DOMContentLoaded", () => {
  // -------------------------------
  // Explore Menu button (on Home)
  // -------------------------------
  const exploreBtn = document.querySelector(".explore-btn");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      window.location.href = "menu.html";
    });
  }

  // -------------------------------
  // Contact form (on Contact page)
  // -------------------------------
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Message sent successfully!");
      form.reset();
    });
  }

  // -------------------------------
  // Mobile Menu Toggle (for Navbar)
  // -------------------------------
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      // Toggle visibility using Tailwind’s "hidden" class
      mobileMenu.classList.toggle("hidden");
    });
  }
});
