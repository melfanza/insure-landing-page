const hamburgerMenu = document.getElementById('hamburger-menu');
const menu = document.getElementById('menu');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('show');
  menu.classList.toggle('show');
});
