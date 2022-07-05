// function loopDePares(num){
//     for (let i = 0; i <= 100; i++){
//         if ((i + num) % 2 == 0){
//             console.log(`El numero ${i + num} es par`);
//         }else{
//             console.log(i);
//         }
//     }
// }
// console.log(loopDePares(37));

// function loopDeImpares(num, string){
//     for (let i = 0; i <= 100; i++){
//         console.log(i);
//         if ((i + num) % 2 != 0){
//             console.log(string);
//         }
//     }
// }
// console.log(loopDeImpares(48,"lol"));

// function sumatoria(num){
//     let suma = 0;
//     for (let i = num; i > 0; i--){
//         suma += i;
//     }
//     return suma;
// }
// console.log(sumatoria(8));

function nuevoArreglo(num){
    const arr = [];
    for (let i = num; i > 0; i--){
        arr.unshift(i);
    }
    return arr;
}
console.log(nuevoArreglo(5));

// function split(string){
//     const arr = [];
//     for (let i = string[0]; i < string.length; i++){
//         arr.push(string[i]);
//     }
//     return arr;
// }
// console.log("hola");

// function arrayHandler(arr1, arr2){
//     for (let i = 0; i < arr1.length && i < arr2.length; i++){ //el arr2.length es al pedo, solo poniendo uno lo corre
//         console.log(`Soy ${arr1[i]} y yo soy ${arr2[i]}`);
//     }
// }
// console.log(arrayHandler([1,2,3,4], ["h","o","l","a"]));

// function palindromo(string){
//     const arr = string.split("");
//     return arr;
// }
// console.log('aaa');