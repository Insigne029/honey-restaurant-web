const header = document.querySelector(".primary-header");
const navLinks = document.querySelector(".nav-links");
const navToggle = document.querySelector(".nav-toggle");
const preloader = document.querySelector(".preloader");
let headerHeight = "";

window.addEventListener("load", () => {
  // Remove preloader
  preloader.classList.add("close-preloader");
});

// sticky header
window.addEventListener("scroll", () => {
  // Get header height
  headerHeight = header.getBoundingClientRect().height;

  if (window.scrollY > headerHeight) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

  // Set navlinks top
  setNavLinksTop();
});

// Set navlinks top
const setNavLinksTop = () => {
  navLinks.style.top = `${headerHeight}px`;
};

// Mobile navigation toggle control
navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-open");
});
