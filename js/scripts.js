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
  menu_icon.addEventListener("click", e => {
    document.querySelector("header .nav-links").classList.toggle("nav-active");
    e.stopPropagation();
  });

  // Close menu item if open and window is clicked
  document.addEventListener("click", e => {
    document.querySelector("header .nav-links").classList.remove("nav-active");
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

  // Track scroll positions
  window.addEventListener("scroll", () => {
    let pos = window.scrollY;
    let about = document.getElementById("About").offsetTop - 40;
    let service = document.getElementById("Services").offsetTop - 40;
    let client = document.getElementById("Clients").offsetTop - 40;
    let foot = document.querySelector("footer").offsetTop - 40;

    // console.log(foot);

    if (pos >= about && pos < service) {
      setActiveNav("about");
    } else if (pos >= service && pos < client) {
      setActiveNav("services");
    } else if (pos >= client && pos < foot) {
      setActiveNav("clients");
    } else if (pos >= foot) {
      setActiveNav("contact");
    } else {
      setActiveNav("none");
    }
  });

  // Sets the active class to Navigation
  let prev = "about";
  function setActiveNav(nav) {
    // console.log(nav);
    let prev_nav = document.querySelector(".nav-links ." + prev);
    if (prev_nav !== undefined && prev_nav != null)
      prev_nav.classList.remove("active");
    prev = nav;
    let curr = document.querySelector(".nav-links ." + nav);

    if (curr !== undefined && curr != null) curr.classList.add("active");
  }
});
