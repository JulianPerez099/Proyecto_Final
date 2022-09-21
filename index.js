document.querySelector(".botones-menu").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal(".muestra");
ScrollReveal().reveal(".nuevas-promos", { delay: 500 });
ScrollReveal().reveal(".cards-banner-one", { delay: 500 });
ScrollReveal().reveal(".cards-banner-two", { delay: 500 });
