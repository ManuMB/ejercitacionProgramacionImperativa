const prompt = require("prompt-sync")({ sigint: true });

// 1) Escribí un programa que le pida al usuario ingresar una frase y
// la imprima en la consola.
// Recordá que para pedirle al usuario que escriba una frase
// debés utilizar el método prompt() y para escribir en la consola
// debés utilizar el método console.log().

function repetir (){
    let frase = prompt("ingrese su frase aqui: ");
    console.log(frase);
}
repetir();


// 2) Escribí un programa que le pregunte al usuario su nombre e
// imprima "Hola " seguido del nombre y un signo de
// exclamación.
// Por ejemplo, si el usuario ingresa "Pedro" el programa debe
// imprimir en la consola "Hola Pedro!".

function hola(){
    let nombre = prompt("Ingrese su nombre: ");
    console.log(`Hola ${nombre} !`);
}
hola();


// 3) Escribí un programa que le pida al usuario ingresar un número,
// luego le pida un segundo número, e imprima en la consola la
// suma de los dos números que ingresó el usuario.

function suma(){
    let num1 = prompt("Ingrese el primer numero: ");
    let num2 = prompt("Ingrese el segundo numero: ");
    console.log(parseInt(num1) + parseInt(num2));
}
suma();


// 4) Escribí un programa que le pida al usuario su año de
// nacimiento e imprima su edad actual en la consola con la frase
// "Tienes X años" (siendo X la cantidad de años).
// Por ejemplo, asumiendo que el año actual es 2019 y el usuario
// ingresa 1999, el programa debe imprimir en la consola: “Tienes
// 20 años”.

function anio(){
    let anioIngresado = prompt("Ingrese su anio de nacimiento: ");
    let anioActual = 2022;
    console.log("Tienes " + (anioActual - anioIngresado) + " años");
}
anio();


// 5) Escribí un programa que piense un número de forma aleatoria
// del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el
// número es correcto debe imprimir en la consola "Felicitaciones,
// ese era!", de lo contrario, debe imprimir "Lo siento, intenta
// nuevamente!"

function aleatorio (){
    let generado = Math.floor(Math.random()*10);
    console.log(generado);
    let ingresado = prompt("Ingrese el numero: ");
    if (ingresado == generado){
        console.log("Felicitaciones, ese era!");
    }else{
        console.log("Lo siento, intenta nuevamente!");
    }
}
aleatorio();


// 8) Construí un pseudocódigo que permita ingresar un número, si
// el número es mayor de 500, se debe calcular y mostrar en
// pantalla el 18% de este.

function porcentaje (){
    let numero = prompt("Ingrese su numero: ");
    if (numero > 500){
        let promedio = numero * 0.18;
        console.log(`El 18% ${numero} es ${promedio}`);
    }else{
        console.log(numero);
    }
}
porcentaje();


// 10) Se ingresa por teclado un número natural de hasta 2 cifras, si
// tiene una cifra que muestre lo mínimo que le falta para ser un
// número de 2 cifras; de lo contrario, que muestre lo mínimo que
// le falta para ser un número de 3 cifras. Considerar que el
// usuario ingresa números de hasta dos cifras.

function cifras(){
    let ingresado = prompt("Ingrese su numero de hasta dos cifras: ");
    let resto = 0;
    if (ingresado > 99){
        console.log("Error, ingreso un numero de mas de dos cifras");
    }else if (ingresado < 10){
        resto = 10 - ingresado;
        console.log(resto);
    }else{
        resto = 100 - ingresado;
        console.log(resto);
    }
}
cifras();


// 12) Hacer un programa que calcule la suma de los N primeros
// números naturales, dónde N es el número límite ingresado por
// teclado.

function naturales(){
    let limite = prompt("Ingrese el numero limite: ");
    let suma = 0;
    for (i = 0 ; i <= limite ; i++){
        suma = suma + i;
    }
    console.log(suma);
}
naturales();