// - Declarar 3 arrays de edades por ejemplo -> [10, 9, 8, 22, 55, 80, 5, 63, 29, 9] , 
// luego desarrollar las siguientes funciones:
// 1 - Funcion que reciba un array de edades y retorne el promedio 
// 2 - Funcion que reciba un array de edades y retorne el mayor elemento // 80
// 3 - Funcion que reciba un array de edades y retorne el menor elemento // 5
// 4 - Funcion que reciba un array de edades y retorne true si encuentra algun elemento repetido o false caso contrario
// 5 - Funcion que reciba un array de edades y una edada buscar, retorne el primer índice si encuentra coincidencia o 
// null caso contrario
// 6 - Funcion que reciba un array de edades y retorne un objeto literal con dos propiedades que contengan un array
//    {
//       edadesMenor : "// edades menor a 18",  
//       edadesMayor : "// edades menor a 18"
//    }

// nota : Se recomienda utilizar estructuras y conceptos vistos en la materia, pueden resolver con metodos pero 
// tambien de forma imperativa (for if)

let edades = [10, 9, 8, 22, 55, 80, 5, 63, 29, 9];
let edades1 = [7, 1, 31, 22, 24, 2, 15, 98, 60, 70];
let edades2 = [76, 65, 99, 32, 43, 20, 52, 92, 46, 18];

function promedio (array){
    let suma = 0;
    for (let i = 0; i < array.length; i++){
        suma += array[i];
    }
    let promedio = (suma / array.length);
    return promedio;
}
console.log(promedio(edades1));

function mayorNro (array){
    let mayor = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] > mayor){
            mayor = array[i];
        }
    }
    return mayor;
}
console.log(mayorNro(edades));

function menorNro (array){
    let menor = 100;
    for (let i = 0; i < array.length; i++){
        if (array[i] < menor){
            menor = array[i];
        }
    }
    return menor;
}
console.log(menorNro(edades));

function repetido (array){
    let esRepetido = false;
    if (array.indexOf(i) !== -1){
        esRepetido = true;
    }
    // for (let i = 0; i < array.length; i++){
    // }
    return esRepetido;
}
console.log(repetido(edades2));