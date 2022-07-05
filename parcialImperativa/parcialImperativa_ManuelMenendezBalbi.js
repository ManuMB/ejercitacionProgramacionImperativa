//Manuel Menendez Balbi - Programacion Imperativa, Parcial 24/06
//Ejercicio 1
//a
function multEsPar(num1, num2){
    let mult = num1 * num2;
    if (mult % 2 == 0){
        return (`El resultado de multiplicar ${num1} y ${num2} es: ${mult} y es par`);
    }else{
        return (`El resultado de multiplicar ${num1} y ${num2} es: ${mult} y es impar`);
    }
}
console.log(multEsPar(3,47));

//b
function multiplo(num1, num2){
    if (num1 % 3 == 0 && num2 % 3 == 0){
        return (num1 + num2);
    }else{
        return (`Los numeros deben ser multiplos de 3`);
    }
}
console.log(multiplo(21,254));

//Ejercicio 2
const empleado = {
    nombre: 'Manuel',
    empresa: 'Digital House',
    sueldos: [92396,26571,180949,80001,16761,1,198671,27300,49899,74753,200000,999999],
    mayorSueldo: function(){
        let mayor = 0;
        for (let i = 0; i < this.sueldos.length; i++){
            if (this.sueldos[i] > mayor){
                mayor = this.sueldos[i];
            }
        }
        if (mayor > 80000){
            return (`El mayor sueldo de ${this.nombre} en ${this.empresa} es ${mayor}, por lo tanto pagará impuesto a las ganancias`);
        }else{
            return (`El mayor sueldo de ${this.nombre} en ${this.empresa} es ${mayor}, por lo tanto NO pagará impuesto a las ganancias`);
        }
    }

}
console.log(empleado.mayorSueldo());

//Ejercicio 3
let autos = [{
    año  : 2015,
    color : "gris",
    puertas: 5
},
{
    año  : 2010,
    color : "rojo",
    puertas: 3
},
{
    año  : 2012,
    color : "gris",
    puertas: 4
},
{
    año: 2022,
    color: "rojo",
    puertas: 3
},
{
    año: 2018,
    color: "blanco",
    puertas: 4
}]

//a, b
console.log(autos);
autos.pop();
console.log(autos);

//c, d
function esColor(arr, color){
    const arrColores = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i].color === color){
            arrColores.push(arr[i]);
        }
    }
    return arrColores;
}
console.log(esColor(autos,'rojo'));