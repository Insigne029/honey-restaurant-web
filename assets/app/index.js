const header = document.querySelector(".primary-header");
const navLinks = document.querySelector(".nav-links");
const navToggle = document.querySelector(".nav-toggle");
const preloader = document.querySelector(".preloader");
const scrollTop = document.querySelector(".scroll-top");
let headerHeight = "";

window.addEventListener("load", () => {
  // Remove preloader
  setTimeout(() => preloader.classList.add("close-preloader"), 5000);
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

  // Show scroll to top
  showScrollTotop();
});

// Set navlinks top
const setNavLinksTop = () => {
  navLinks.style.top = `${headerHeight}px`;
};

// Show scroll to top
const showScrollTotop = () => {
  if (window.scrollY > 150) {
    scrollTop.classList.add("show-scroll-top");
  } else {
    scrollTop.classList.remove("show-scroll-top");
  }
};

// Mobile navigation toggle control
navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-open");
});
