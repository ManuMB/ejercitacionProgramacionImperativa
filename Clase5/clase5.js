const prompt = require("prompt-sync")({ sigint: true });

console.log("Gato"&&"Perro"); //Devuelve perro, ya que por defecto los string son true en las comparaciones, y el and devuelve la segunda comparacion.
console.log("Gato"||"Perro"); //Devuelve gato, ya que por defecto los string son true en las comparaciones, y el or devuelve la primera comparacion.
console.log('Zapato' == 'trampa' || "hola" <= "chau"); //Devuleve false, esta comparando el largo de los strings?
console.log(false | 3 == 4); //Devuelve 0, preguntar.

console.log(false||true); //Devuelve true, ya que es un or.