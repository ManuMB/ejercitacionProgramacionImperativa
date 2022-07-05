const prompt = require("prompt-sync")({ sigint: true });

function tablaDeMultiplicar(numero) {
    let i = 1;
    while (i <= 10) {
        console.log(numero + "* " + i + "=" + (numero * i));
        i++;
    }
}

console.log(tablaDeMultiplicar(5));