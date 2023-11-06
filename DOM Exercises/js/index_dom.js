import hamburguerMenu from "./dom/menu_hamburger.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { shortcuts } from "./dom/teclado.js"; 
import { moveBall } from "./dom/teclado.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock('#reloj', "#activar-reloj", '#desactivar-reloj');
  alarm("assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma");
});

d.addEventListener("keydown", e => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage")
})