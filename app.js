const hamburgerMenu = () => {
  const hamburgerBtn = document.querySelector('.hamburger-icon');
  const mobileNavMenu = document.querySelector('.mobile-nav-links');

  let showHamburger = false;
  hamburgerBtn.addEventListener('click', function (e) {
    showHamburger = !showHamburger;
    e.preventDefault();
    mobileNavMenu.classList.toggle('open');
  });
};

const stickyNavBar = () => {
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');

  const observer = new IntersectionObserver(function (entries) {
    const [entry] = entries;
    if (entry.isIntersecting) nav.classList.remove('sticky');
    if (!entry.isIntersecting) nav.classList.add('sticky')

  }, {
    root: null,
    threshold: 0,
    rootMargin: '-10%',
  });

  observer.observe(header);
}

const init = () => {
  hamburgerMenu();
  // stickyNavBar();
}

init();
