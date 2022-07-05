// const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

// function menores (arr){
//     const arrMenores = [];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] < 18){
//             arrMenores.push(arr[i]);
//         }
//     }
//     return arrMenores;
// }
// console.log(menores(edades));

// function mayores (arr){
//     const arrMayores = [];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] >= 18){
//             arrMayores.push(arr[i]);
//         }
//     }
//     return arrMayores;
// }
// console.log(mayores(edades));

// function igual (arr){
//     const arrIgual = [];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] == 18){
//             arrIgual.push(arr[i]);
//         }
//     }
//     return arrIgual;
// }
// console.log(igual(edades));

// function menorEdad (arr){
//     let menor = 100;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] < menor){
//             menor = arr[i];
//         }
//     }
//     return menor;
// }
// console.log(menorEdad(edades));

// function mayorEdad (arr){
//     let mayor = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > mayor){
//             mayor = arr[i];
//         }
//     }
//     return mayor;
// }
// console.log(mayorEdad(edades));

// function promedio (arr){
//     let suma = 0;
//     for (let i = 0; i < arr.length; i++){
//         suma += arr[i];
//     }
//     return (suma / arr.length);
// }
// console.log(promedio(edades));

// function incrementar (arr){
//     for (let i = 0; i < arr.length; i++){
//         arr[i] += 1;
//     }
//     return arr;
// }
// console.log(incrementar(edades));

const arrayCuentas =
    [
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: "$3,253.40",
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: "$3,229.45",
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: "$1,360.19",
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: false,
            saldo: "$3,627.12",
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: "$1,616.52",
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: "$1,408.68",
            edadTitular: 25,
            tipoCuenta: "corriente"
        }
    ]

// function cuentasMenores (arr){
//     const arrCuentasMenores = [];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i].edadTitular < 30){
//             arrCuentasMenores.push(arr[i].edadTitular);
//         }
//     }
//     return arrCuentasMenores;
// }
// console.log(cuentasMenores(arrayCuentas));

// function cuentasMayores (arr){
//     const arrcuentasMayores = [];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i].edadTitular >= 30){
//             arrcuentasMayores.push(arr[i].edadTitular);
//         }
//     }
//     return arrcuentasMayores;
// }
// console.log(cuentasMayores(arrayCuentas));

// function cuentasIguales (arr){
//     const arrcuentasIguales = [];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i].edadTitular == 30){
//             arrcuentasIguales.push(arr[i].edadTitular);
//         }
//     }
//     return arrcuentasIguales;
// }
// console.log(cuentasIguales(arrayCuentas));

// function cuentaMenorEdad (arr){
//     let menorEdad = 100;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i].edadTitular < menorEdad){
//             menorEdad = arr[i].edadTitular;
//         }
//     }
//     return menorEdad;
// }
// console.log(cuentaMenorEdad(arrayCuentas));

// function arrTipoCuenta (arr){
//     const cuentaSueldo = [];
//     const cuentaCorriente = [];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i].tipoCuenta == "sueldo"){
//             cuentaSueldo.push(arr[i]);
//         }else{
//             cuentaCorriente.push(arr[i]);
//         }
//     }
//     return [cuentaSueldo, cuentaCorriente];
// }
// console.log(arrTipoCuenta(arrayCuentas));

// function arrHabilitada (arr){
//     const cuentasHabilitadas = [];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i].estaHabilitada == true){
//             cuentasHabilitadas.push(arr[i]);
//         }
//     }
//     return cuentasHabilitadas;
// }
// console.log(arrHabilitada(arrayCuentas));

// function arrDeshabilitada (arr){
//     const cuentasDeshabilitadas = [];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i].estaHabilitada == false){
//             cuentasDeshabilitadas.push(arr[i]);
//         }
//     }
//     return cuentasDeshabilitadas;
// }
// console.log(arrDeshabilitada(arrayCuentas));

function menorSaldo (arr){
    let menor = "100000"
    const arrMenor = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i].saldo < menor){
            menor = arr[i].saldo;
            arrMenor.length = 0;
            arrMenor.push(arr[i]);
        }
    }
    return arrMenor;
}
console.log(menorSaldo(arrayCuentas));

function mayorSaldo (arr){
    let mayor = "0"
    const arrMayor = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i].saldo > mayor){
            mayor = arr[i].saldo;
            arrMayor.length = 0;
            arrMayor.push(arr[i]);
        }
    }
    return arrMayor;
}
console.log(mayorSaldo(arrayCuentas));

// Obtener la cuenta con el menor saldo.
// function menorSaldo(arr){
//     let menorSaldoPersona = arr[0];
//     for(let i = 0; i<arr.length;i++){
//         if(arr[i].saldo < menorSaldoPersona.saldo){
//             menorSaldoPersona=arr[i]
//         }
//     }
//     console.log(menorSaldoPersona);
//     return menorSaldoPersona;

// }
// menorSaldo(arrayCuentas);

// Obtener la cuenta con el mayor saldo.

// function mayorSaldo(arr){
//     let mayorSaldoPersona = arr[0];
//     for(let i = 0; i<arr.length;i++){
//         if(arr[i].saldo > mayorSaldoPersona.saldo){
//             mayorSaldoPersona=arr[i]
//         }
//     }
//     console.log(mayorSaldoPersona);
//     return mayorSaldoPersona;

// }
// mayorSaldo(arrayCuentas);