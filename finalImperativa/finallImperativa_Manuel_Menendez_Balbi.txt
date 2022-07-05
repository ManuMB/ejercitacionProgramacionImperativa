//Examen Final de Programacion Imperativa 5/7/22 - Manuel Menendez Balbi
//1
let paises = [
  {
    nombre: "Argentina",
    continente: "Sudamerica",
    poblacion: 40000000,
  },
  {
    nombre: "Colombia",
    continente: "Sudamerica",
    poblacion: 50372000,
  },

  {
    nombre: "Brasil",
    continente: "Sudamerica",
    poblacion: 300000000,
  },
  {
    nombre: "Venezuela",
    continente: "Sudamerica",
    poblacion: 25000000,
  },
  {
    nombre: "Chile",
    continente: "Sudamerica",
    poblacion: 10000000,
  },
];

function nuevoArreglo(arr, cont, pobl){
    let array = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i].continente == cont && arr[i].poblacion >= pobl){
            array.push(arr[i].nombre);
        }
    }
    return array;
}
console.log(nuevoArreglo(paises, 'Sudamerica', 40000000));


//2
let arrayDeNumeros = [1,2,3, 8, 9, 104, 5, 6, 7, 15];

function bubbleSort(arr, string){
    console.log(arr);
    if (string === 'ASC'){
        for (let i = 0; i < arr.length; i++){
            for (let j = 0; j < arr.length + 1; j++){
                if (arr[j] > arr[j + 1]){
                    let temp = arr[j];
                    arr[j] = arr [j + 1];
                    arr [j + 1] = temp;
                }
            }
        }
        return arr;
    }else if (string === 'DESC'){
        for (let i = 0; i < arr.length; i++){
            for (let j = 0; j < arr.length + 1; j++){
                if (arr[j] > arr[j - 1]){
                    let temp = arr[j];
                    arr[j] = arr [j - 1];
                    arr [j - 1] = temp;
                }
            }
        }
        return arr;
    }
}
console.log(bubbleSort(arrayDeNumeros, 'DESC'));


//3
//a
let matriz = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25],
    [26,27,28,29,30],
    [31,32,33,34,35]
];

//b
function sumarFila(arr){
    let suma = 0;
    for (let i = 0; i < arr[4].length; i++){
        suma += arr[4][i];
    }
    return suma;
}
console.log(sumarFila(matriz));

//c
function arrayPares(arr){
    const array = [];
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            if ((arr[i][j] % 2) == 0){
                array.push(arr[i][j]);
            }
        }
    }
    return array;
}
console.log(arrayPares(matriz));