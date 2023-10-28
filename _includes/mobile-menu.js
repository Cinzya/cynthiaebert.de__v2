function openMenu() {
  console.log("openMenu");
  document
    .getElementById("mobile-nav-toggle")
    .setAttribute("aria-expanded", "true");
  document
    .getElementById("navigation-wrapper")
    .setAttribute("data-visible", "true");
  document.getElementsByTagName("main")[0].style.filter = "blur(5px)";
}

function closeMenu() {
  console.log("closeMenu");
  document
    .getElementById("mobile-nav-toggle")
    .setAttribute("aria-expanded", "false");
  document
    .getElementById("navigation-wrapper")
    .setAttribute("data-visible", "false");
  document.getElementsByTagName("main")[0].style.filter = "none";
}
