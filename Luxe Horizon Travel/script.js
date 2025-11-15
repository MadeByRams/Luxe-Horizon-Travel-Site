// Mobile nav toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const header = document.querySelector(".site-header");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

// Close nav on link click (mobile)
document.querySelectorAll(".site-nav a[href^='#']").forEach(link => {
  link.addEventListener("click", () => {
    if (nav && nav.classList.contains("nav-open")) {
      nav.classList.remove("nav-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});

// Smooth scroll for internal links only
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", event => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Header shadow on scroll
window.addEventListener("scroll", () => {
  if (!header) return;
  if (window.scrollY > 40) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});
