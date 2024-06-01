const showHeaderNavBar = (showNav) => {
  const navBar = document.getElementById("header-nav-bar");
  if (showNav) {
    navBar.classList.add("show");
    navBar.classList.remove("hide");
  } else {
    navBar.classList.add("hide");
    navBar.classList.remove("show");
  }
};

module.exports = showHeaderNavBar;
