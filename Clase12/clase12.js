const alicia = [10, 80, 75];
const bob = [90, 20, 25];

const concurso = {
    etapas: [1,2,3],
    ganador: "",
    encontrarGanador: function (a, b){
        let puntosPrimerParticipante = 0;
        let puntosSegundoParticipante = 0;
        for(let i = 0; i < this.etapas.length; i++){
            if (a[i] > b[i]){
                puntosPrimerParticipante +=1;
            }else if (a[i] < b[i]){
                puntosSegundoParticipante += 1;
            }
        }
        if (puntosPrimerParticipante > puntosSegundoParticipante){
            this.ganador = "Alicia";
        }else{
            this.ganador = "Bob";
        }
        return this.ganador;
    }
}
console.log(concurso.encontrarGanador(alicia,bob));


function digitalHouse(num1,num2){
    for (let i = 0; i <= 100; i++){
        if (i == num1){
            console.log("Digital");
        }else if (i == num2){
            console.log("House");
        }else if ((i % num1) == 0 && (i % num2) == 0){
            console.log("Digital House");
        }else{
            console.log(i);
        }
    }
}
console.log(digitalHouse(10,3));

const arr1 = [1,2,3];
const arr2 = [10, 3, 10, 4];
const arr3 = [-5,100];
function sumArray(arr){
    let suma = 0;
    for (let i = 0; i < arr.length; i++){
        suma += arr[i];
    }
    return suma;
}
console.log(sumArray(arrString));


const arrString1 = ["h", "o", "l", "a"];
const arrString2 = ["c", "h", "a", "u"];
function newJoin(arr) {
    let string = "";
    for (let i = 0; i < arr.length; i++) {
        string += arr[i];
    }
    return string;
}
console.log(newJoin(arrString2));