/**
 * Crear una función que imprima todos
 * los dígitos decimales, del 0 al 9,
 * usando un ciclo For.
 */
// function imprimirDecimales(){
//     for (let i = 0; i <= 9; i++) {
//         for (let j=0; j<=9; j ++ ){
//             console.log(i + "." + j )
//         }
//     }
// }
// imprimirDecimales();

//Crear una función que imprima los números entre el 5 y el 20, saltando de
//tres en tres.
// function imprimirEntre(){
//     for (let i = 5; i <= 20; i += 3) {
//         for (let j=0; j<=9; j += 3){
//             console.log(i + "." + j )
//         }
//     }
// }
// imprimirEntre();

//Crear una función que imprima la sumatoria de todos los números entre el
//0 y el 100.
// function sumatoria(){
//     let suma = 0;
//     for (let i = 0; i <= 100; i++){
//         suma += i;
//     }
//     return suma;
// }
// console.log(sumatoria());

//Crear una función que reciba un string y luego imprimir la cantidad de
//vocales que se encuentran en dicha frase.
// function cantVocales(string){
//     const arr = string.split("");
//     let suma = 0
//     for (i = 0; i < arr.length; i++){
//         if (arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u'){
//             suma += 1;
//         }
//     }
//     return suma;
// }
// console.log(cantVocales('euforia'));

//Realizar una función que, dada una lista, devuelva una nueva lista cuyo
//contenido sea igual a la original pero invertida.
// const lista = [1,2,3,4,5,6,7,8,9];

// function invertida(arr){
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++){
//         newArr.unshift(arr[i]);
//     }
//     return newArr;
// }
// console.log(invertida(lista));

/**
*Realizar una función que escriba una pirámide del 1 al 30 de la siguiente
*forma :
*1
*22
*333
*4444
*55555
*666666
*/
// function piramide(num){
//     for (let i = 0; i <= num; i++){ //Filas: arrancan en cero y llegan hasta el numero ingresado (i <= num)
//         let string = ''
//         for (let j = 0; j < i; j++){ //Columnas: Se ponen numeros hasta llegar a i (en segunda recorrida, i = 1, asi que solo hay una columna, y asi)
//             string += i;
//         }
//         console.log(string);
//     }
// }
// piramide(6);


const numeros = [5, 12, 2, 40, 33, 2, 8];
function arrMayor(arr){
    let mayor = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > mayor){
            mayor = arr[i];
        }
    }
    return mayor;
}
console.log(arrMayor(numeros));