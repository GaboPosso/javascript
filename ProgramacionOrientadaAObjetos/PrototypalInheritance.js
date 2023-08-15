function Animal(nombre, genero) {
  //Atributos
  this.nombre = nombre;
  this.genero = genero;
}
//Métodos agregados al prototipo de la función constructora

Animal.prototype.sonar = function () {
  console.log("Hago sonidos porque estoy vivo");
};
Animal.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre}`);
};
//Herencia Prototípica
function Perro(nombre, genero, tamanio) {
  this.super = Animal;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}

//Perro está heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//Sobreescritura de metódos del prototipo padre en el hijo
Perro.prototype.sonar = function () {
  console.log("Soy un perro y mi sonido es un ladrido");
};

Perro.prototype.ladrar = function () {
  console.log("Guauu Guauu");
};

const Snoopy = new Perro("Snoopy", "Macho", "Mediano");

