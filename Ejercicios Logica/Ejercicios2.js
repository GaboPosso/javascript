/*
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

// const invertString  = ( str ) => {
//   // let arr = Array.from(str);
//   let arr = [...str];
//   let reversedArray = arr.reverse();
//   // let reversedString = reversedArray.toString();
//   return console.log(reversedArray.join(''));

// }

const invertString = (str = "") =>
  !str || typeof str != "string"
    ? console.warn("Please make sure the input is a String or is not empty")
    : console.info(str.split("").reverse().join(""));

invertString("hello World");

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const countWords = (str = "", word = "") => {
  const lowerText = str.toLowerCase(),
    lowerWord = word.toLowerCase();

    const arrWords = lowerText.split(/\s+/);

    let count = 0;

    for (const currentWord of arrWords) {
      if ( currentWord === lowerWord) {
        count++;
      }
    }

    return count;
};

const longString = "This is a sample string. The string contains the word sample multiple times. Sample Word.";
const targetWord = "sample";
const occurrences = countWords(longString, targetWord);

console.log(`The word ${targetWord} appears ${occurrences} times`);

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const itsPalindrome = (word = "") => {
  if (!word || typeof word != 'string') return "Please write a string";
  const wordToLower = word.toLowerCase();
  const wordToArray = wordToLower.split('');
  const reversedWord = wordToArray.reverse().join('');
  if (word = reversedWord) return true;
  return false;
}
console.log(itsPalindrome(5));
console.log(itsPalindrome('salas'));

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const deletePattern = (str, pattern) => {
  if(!str || typeof str != 'string')  return "Please write a string";
  const wordToArray = str.split('');
  const patternToArray = pattern.split('');
  
  const newArray = wordToArray.filter( x => !patternToArray.includes(x));
  return console.log(newArray.join(""));
}

deletePattern("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");