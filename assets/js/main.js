/*----------  MENU SHOW  ----------*/

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

/*----------  REMOVE MENU MOBILE  ----------*/

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*----------  SCROLL SECTIONS ACTIVE LINK ----------*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__menu a[href*='${sectionId}']`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.nav__menu a[href*='${sectionId}']`)
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/*----------  CHANGE BACKGROUD HEADER  ----------*/

function scrollHeader() {
  const nav = document.getElementById("header");

  if (this.scrollY >= 200) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);

/*----------  SHOW SCROLL TOP  ----------*/

function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");

  if (this.scrollY >= 560) {
    scrollTop.classList.add("scroll-top-active");
  } else {
    scrollTop.classList.remove("scroll-top-active");
  }
}

window.addEventListener("scroll", scrollTop);

/*----------  DARK THEME  ----------*/

const themeButton = document.getElementById("theme-button");

const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.body.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  document.body.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

/*----------  activate / deactivate with the button  ----------*/

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // saving in the local storage
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*----------  SCROLL REVEAL ANIMATION  ----------*/

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 1000,
  reset: true,
});

scrollReveal.reveal(
  `.home__data, .home__img, 
  .about__data, .about__img, 
  .services__content, 
  .menu__content, 
  .app__data, .app__img,
  .contact__data, .contact__button,
  .footer__content`,
  {
    interval: 200,
  }
);
