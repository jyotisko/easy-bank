const hamburgerMenu = () => {
  const hamburgerBtn = document.querySelector('.hamburger-icon');
  const mobileNavMenu = document.querySelector('.mobile-nav-links');

  let showHamburger = false;
  hamburgerBtn.addEventListener('click', function (e) {
    showHamburger = !showHamburger;
    e.preventDefault();
    mobileNavMenu.classList.toggle('open');
    if (showHamburger) hamburgerBtn.src = './images/close.svg';
    if (!showHamburger) hamburgerBtn.src = './images/icon-hamburger.svg';
  });
};

const init = () => {
  hamburgerMenu();
}

init();


