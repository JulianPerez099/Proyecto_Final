/* Esta seccion nos despliega el nav (El boton de menu en dispositivos moviles) */

document.querySelector(".botones-menu").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

/* Esta seccion hace que se vayan visualizando las imagenes o el contenido conforme se va realizando un
scrool (Va bajando la web) */

ScrollReveal().reveal(".muestra");
ScrollReveal().reveal(".nuevas-promos", { delay: 500 });
ScrollReveal().reveal(".cards-banner-one", { delay: 500 });
ScrollReveal().reveal(".cards-banner-two", { delay: 500 });
