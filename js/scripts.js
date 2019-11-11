var window_width;

// Run JS only when Dom is ready
function DomReady(Ready) {
  document.addEventListener("DOMContentLoaded", Ready);
  if (
    document.readyState === "interactive" ||
    document.readyState === "complete"
  )
    Ready();
}

// Proceed when Dom it's ready
DomReady(function() {
  // Add Event listener to toggle menu in small screen
  let menu_icon = document.querySelector(".menu-icon");
  menu_icon.addEventListener("click", MenuHandler);

  // Close menu item if open and window is clicked
  window.addEventListener("click", e => {
    if (e.target.className !== "menu-icon" && e.target.className != "miconic") {
      let nav = document.querySelector("header .nav-links");
      nav.classList.remove("nav-active");
    }
  });

  // Scroll Navs to Sections
  let nav_links = document.querySelectorAll(".nav-links");
  nav_links.forEach(e => {
    e.addEventListener("click", link => {
      let secID = link.target.getAttribute("href");
      let sec = document.querySelector(secID);
      let secOffsetTop = sec.offsetTop - 40;

      window.scrollTo({
        top: secOffsetTop,
        left: 100,
        behavior: "smooth"
      });

      link.preventDefault();
    });
  });

  // When title is clicked
  // Scroll to Top
  let brand_tag = document.querySelector(".brand a");
  brand_tag.addEventListener("click", bTag => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
    bTag.preventDefault();
  });
});

// Hide menu on small devices
// Toggle menu
function MenuHandler() {
  let nav = document.querySelector("header .nav-links");
  nav.classList.toggle("nav-active");
}
