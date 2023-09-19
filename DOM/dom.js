function holaMundo() {
  alert("Hello World");
  console.log(event);
}

function greet(name = undefined) {
  alert(`Hi there, ${name}!`);
  console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico"),
  $eventoMultiple = document.getElementById("evento-multiple"),
  $eventoRemover = document.getElementById("evento-remover");

$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function () {
  alert("Hello World Semantyc Event handler");
  console.log(e);
  console.log(event);
};

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  alert("Hello World Multiple Event Handler");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(event);
});
$eventoMultiple.addEventListener("click", (e) => {
  greet();
  greet("Gabo");
});

$eventoMultiple.addEventListener("click", greet);

const removerDobleClick = (e) => {
  alert(`Removing event type ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true;
};
$eventoRemover.addEventListener("dblclick", removerDobleClick);


const $divEventos = document.querySelectorAll(".eventos-flujo div"),
  $linkEventos = document.querySelector(".eventos-flujo a");

console.log($divEventos);


function flujoEventos(e) {
  console.log(`Hola te saluda ${this}, el click lo orginó ${e.target.className}`);
  // e.stopPropagation();b 
}
//DELEGACIÓN DE EVENTOS
document.addEventListener("click", (e) => {
  console.log(`click en ${e.target}`);

  if(e.target.matches(".eventos-flujo div")){
    flujoEventos(e);
  }
  if (e.target.matches(".eventos-flujo a")){
    alert("Hola soy tu amigo y docente digital... Jonathan MirCha");
    e.preventDefault();
  }
});
// $divEventos.forEach(div => {
  
//   div.addEventListener("click", flujoEventos);
  
// });

// $linkEventos.addEventListener("click", (e) => {
//   alert("Hola soy tu amigo y docente digital... Jonathan MirCha");
//   e.preventDefault();
//   e.stopPropagation();
// } );
// BOM 
