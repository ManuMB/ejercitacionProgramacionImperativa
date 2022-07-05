function diezSiguientes (numero){
    for (i = numero ; i <= (numero+10) ; i++){
        console.log(i);
    }
}
console.log(diezSiguientes(20));

function tresEnTres(){
    for (i = 5 ; i <= 20; i += 3){
        console.log(i);
    }
}
console.log(tresEnTres());

function sumatoria(){
    let suma = 0;
    for (i = 0 ; i <= 100 ; i++){
        suma = i + suma;
    }
    return suma;
}
console.log(sumatoria());

function factorial(numero){
    let multiplicar = 1;
    for (i = 1 ; i <= numero ; i++){
        multiplicar = i * multiplicar;
    }
    return multiplicar;
}
console.log(factorial(7));

function fibonacci(numero){ //quiero morir jaja
    let anterior = 0;
    let siguiente = 1;
    let resultado;
    for (i = 0 ; i <= numero ; i++){
        resultado = anterior + siguiente;
        console.log(resultado);
        anterior = siguiente;
        siguiente = resultado;
    }
}
console.log(fibonacci(21));