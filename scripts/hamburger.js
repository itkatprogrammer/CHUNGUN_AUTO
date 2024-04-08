import constants from "./constants.js";

constants.hamburgerPic.addEventListener("click", function () {
  constants.nav.classList.add("open");
  constants.hamburgerPic.classList.add("hidden");
  constants.closeMenuButton.classList.add("active");
  constants.navigationPanel.classList.add("align-items");
  constants.headerMobileNav.classList.add("burger-mode");
});

constants.closeMenuButton.addEventListener("click", function () {
  constants.nav.classList.remove("open");
  constants.hamburgerPic.classList.remove("hidden");
  constants.closeMenuButton.classList.remove("active");
  constants.navigationPanel.classList.remove("align-items");
  constants.headerMobileNav.classList.remove("burger-mode");
});

export default hamburger