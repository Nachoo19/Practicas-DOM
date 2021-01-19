import hamburgerMenu from "./menuhamburguesa.js";
import {digitalClock, alarm} from"./reloj.js";
import {shortcts, moveBall} from "./teclado.js";
import countDown from "./countdown.js"
import scrollTopBtn from "./scroll.js";
import darkMode from "./darkmode.js";
import responsiveMedia from "./objeto-responsive.js";
import responsiveTester from "./prueba-responsive.js";
import userDiviceInfo from "./dispositivios.js";
import networkStatus from "./deteccion-red.js";
import webCam from "./webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilters from "./filtro-busquedas.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll-spy.js";
import smartVideo from "./video-inteligente.js";
import contactFormValidations from "./validaciones-form.js";
import speechReader from "./narrador.js";

// Menu
const d = document


d.addEventListener("DOMContentLoaded", e =>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarma.mp3","#activar-alarma", "#desactivar-alarma");
    countDown("countdown","Sep 28,2020,14:50","Feliz Cumpleaños pana");
    scrollTopBtn(".scroll-top-btn");
    
    responsiveMedia("gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/6cPWbv7FVyJKisRS6" target="_blank" rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6562873.858391774!2d-65.70885745785931!3d-36.5654860956511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaf5f5fdc667%3A0x3d2f77992af00fa8!2sArgentina!5e0!3m2!1ses-419!2sar!4v1601473810402!5m2!1ses-419!2sar" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`);
    responsiveMedia("youtube",
    "(min-width: 1024px)",
    `<a href="https://youtu.be/k3E1rugb1nQ" target="_blank" rel="noopener">Ver Mapa</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/k3E1rugb1nQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
);
responsiveTester("responsive-tester");
userDiviceInfo("user-divice");
webCam("webcam");
getGeolocation("geolocation");
searchFilters(".card-filter", ".card");
draw("#winner-btn", ".player");
slider();
scrollSpy();
smartVideo();
contactFormValidations();
});


d.addEventListener("keydown", (e) =>{
    shortcts(e);
    moveBall(e, ".ball",".stage");
})

// Funciones que cargan fuera por que contienen el DOMContentLoaded en su programacion
darkMode(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();


