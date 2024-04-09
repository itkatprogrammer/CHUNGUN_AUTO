import constants from "./constants.js";


export const handleHamburgerClick = () => {
  constants.nav.classList.toggle("open");
  constants.hamburgerPic.classList.toggle("hidden");
  constants.closeMenuButton.classList.toggle("active");
  constants.navigationPanel.classList.toggle("align-items");
  constants.headerMobileNav.classList.toggle("burger-mode");
}

export const handleMenuClose = () => {
  constants.nav.classList.remove("open");
  constants.hamburgerPic.classList.remove("hidden");
  constants.closeMenuButton.classList.remove("active");
  constants.navigationPanel.classList.remove("align-items");
  constants.headerMobileNav.classList.remove("burger-mode");
}


constants.hamburgerPic.addEventListener("click", handleHamburgerClick)
constants.closeMenuButton.addEventListener("click", handleMenuClose)






