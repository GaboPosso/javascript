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
