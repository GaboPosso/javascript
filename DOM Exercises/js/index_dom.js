import hamburguerMenu from "./dom/menu_hamburger.js";
const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
});
