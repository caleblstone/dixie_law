function positionSquiggle() {
  const squiggle = document.getElementById("squiggle");
  const nav = document.getElementById("nav");
  const activeNav = document.querySelector("#nav nav.active");

  // Hide squiggle on home/baseurl
  if (window.location.pathname === "/" || window.location.pathname === (window.BASEURL || "")) {
    if (squiggle) squiggle.style.display = "none";
    return;
  }

  if (nav) {
    nav.style.position = "relative";
  }

  if (squiggle && activeNav) {
    const navRect = nav.getBoundingClientRect();
    const navTextRect = activeNav.getBoundingClientRect();

    // Calculate position relative to #nav
    const left = navTextRect.left - navRect.left;
    const top = navTextRect.bottom - navRect.top;

    squiggle.style.position = "absolute";
    squiggle.style.left = left + "px";
    squiggle.style.top = top + "px";
    squiggle.style.width = navTextRect.width + "px";
    squiggle.style.pointerEvents = "none";
    squiggle.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", positionSquiggle);
window.addEventListener("resize", positionSquiggle);