new Swiper('.roadmap__swiper', {
  spaceBetween: 20,
  slidesPerView: 'auto',
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  breakpoints: {
    550: {
      freeMode: true,
      speed: 1200,
    },
    260: {
      autoHeight: true,
      speed: 800
    }
  }
});

new Swiper('.referral__swiper', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  navigation: {
    prevEl: '.referral__btn--prev',
    nextEl: '.referral__btn--next'
  }
});

Fancybox.bind("[data-fancybox]", {});

const html = document.documentElement;
const menuBtn = document.querySelector('.menu-btn');
const headerNav = document.querySelector('.header__mobile');
const anchors = document.querySelectorAll('a.header__link.mobile');

menuBtn.addEventListener('click', () => {
  menuBtn.blur();
  html.classList.toggle('active');
  menuBtn.classList.toggle('active');
  headerNav.classList.toggle('active');
});

function scrollToTarget(targetId) {
  const targetSection = document.querySelector(targetId);
  if (targetSection) {
    html.classList.remove('active');
    headerNav.classList.remove('active');
    menuBtn.classList.remove('active');
    setTimeout(() => {
      const targetOffset = targetSection.offsetTop - 30;
      window.scrollTo({top: targetOffset, behavior: 'smooth'});
    }, 400);
  }
}

function handleAnchorClick(event) {
  event.preventDefault();
  const href = this.getAttribute('href');
  const hrefParts = href.split('#');
  if (hrefParts.length === 2) {
    const targetId = '#' + hrefParts[1];
    scrollToTarget(targetId);
  }
}

for (const anchor of anchors) {
  anchor.addEventListener('click', handleAnchorClick);
  anchor.addEventListener('touchstart', handleAnchorClick, {passive: true});
}

document.querySelectorAll(".desktop").forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const targetId = link.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY - 40;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  });
});

const marqueeContent = document.querySelector('.users__list');
const marqueeItems = document.querySelectorAll('.users__list li');

marqueeItems.forEach(item => {
  const clone = item.cloneNode(true);
  marqueeContent.appendChild(clone);
});