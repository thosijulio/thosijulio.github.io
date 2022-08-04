const showHeaderButtons = (showButtons) => {
  const buttons = document.querySelectorAll('header > a');
  if (showButtons) {
    Array.from(buttons).forEach((button) => button.style.display = 'inline');
  } else {
    Array.from(buttons).forEach((button) => button.style.display = 'none');
  }
}

module.exports = showHeaderButtons;
