const menuButton = document.querySelector('.menu-toggle');
const navigationMenu = document.querySelector('#primary-navigation');

if (menuButton && navigationMenu) {
  const mobileView = window.matchMedia('(max-width: 767px)');

  function updateNavigation() {
    const isMobile = mobileView.matches;

    menuButton.hidden = !isMobile;
    navigationMenu.hidden = isMobile;
    menuButton.setAttribute('aria-expanded', 'false');
  }

  updateNavigation();
  mobileView.addEventListener('change', updateNavigation);

  menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';

    menuButton.setAttribute('aria-expanded', String(!isExpanded));
    navigationMenu.hidden = isExpanded;
  });
}
