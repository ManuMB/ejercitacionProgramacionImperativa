const prompt = require("prompt-sync")({ sigint: true });
//comando prompt sync: npm i prompt-sync

// let nombre = prompt("Ingrese su nombre papulince: ");
// console.log(`Su nombre es ${nombre}`); //es lo mismo que ("Su nombre es " + nombre);

// let num = "1";
// let num1 = "2";
// console.log(num+num1); //dara como resultado 12 ya que lo toma como string

//ir al aeropuerto: verificar que sea el dia, ver la hora, ver la temperatura, ver si hay trafico, numero de terminal,
//cantidad de equipaje, puerta de embarque, numero de asiento
//Sala 8 - Ignacio Freyre, Manuel Menendez Balbi, Luca Carena, Anabela martin, Mereyda Garcia

let destino = prompt("Ingrese su destino: ");
let cantEquip = prompt("Ingrese cantidad de equipaje: ");
let fecha = prompt("Ingrese la fecha de viaje: ");
let hora = "20:00";
let temp = 21;
let trafico = false;
let terminal = 2;
let numVuelo = "AR1821";
let puerta = 16;
let asiento = "12A";

console.log(`El destino elegido es ${destino}, lleva ${cantEquip} valijas, su fecha es ${fecha}.`);
console.log(`Su vuelo saldra a las ${hora} horas, numero ${numVuelo}; desde la terminal ${terminal}, puerta ${puerta}. Su asiento es el ${asiento}. Hara una temperatura de ${temp} grados, con trafico ${trafico}.`)