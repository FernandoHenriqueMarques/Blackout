// ===============================
// MENU SANDUÍCHE
// ===============================

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu');
const menuLinks = menu.querySelectorAll('a');

let menuOpen = false;

function openMenu() {
  menu.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  menuOpen = true;
}

function closeMenu() {
  menu.style.display = 'none';
  document.body.style.overflow = '';
  menuOpen = false;
}

// Toggle botão
menuToggle.addEventListener('click', () => {
  menuOpen ? closeMenu() : openMenu();
});

// Fecha menu ao clicar em um item
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

// Fecha menu ao clicar fora (segurança UX)
menu.addEventListener('click', (event) => {
  if (event.target === menu) {
    closeMenu();
  }
});
