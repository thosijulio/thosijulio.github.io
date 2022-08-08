const showHeaderNavBar = (showNav) => {
  const navBar = document.getElementById('header-nav-bar');
  if (showNav) {
    navBar.style.display = 'flex';
  } else {
    navBar.style.display = 'none';
  }
}

module.exports = showHeaderNavBar;
