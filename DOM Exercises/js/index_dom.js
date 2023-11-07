import hamburguerMenu from "./dom/menu_hamburger.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { shortcuts } from "./dom/teclado.js"; 
import { moveBall } from "./dom/teclado.js";
import { countdown } from "./dom/countdown.js";
const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock('#reloj', "#activar-reloj", '#desactivar-reloj');
  alarm("assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Nov 06, 2023 20:14", "Happy Birthday, you CodeHead 🤓!!");
});

d.addEventListener("keydown", e => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage")
})

