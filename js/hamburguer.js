export default function hamburguerMenu(menuBtn, menu) {
  const btn = document.querySelector('.menu-btnj');

  document.addEventListener('click', (e) => {
    if (e.target.matches(menuBtn) || e.target.matches(`${menuBtn} *`)) {
      document.querySelector(menu).classList.toggle('is-active');
      document.querySelector(menuBtn).classList.toggle('is-active');
    }
  });
}
