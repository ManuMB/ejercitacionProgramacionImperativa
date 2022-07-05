// Ejercicio 1: 
// Desarrollar una función para cada uno de las siguientes apartados: 
// Que reciba por parámetro un número entero y retorne su doble.
// Que reciba por parámetro dos números enteros y retorne la 
// multiplicación de ambos.  
// Que reciba por parámetro dos números enteros, verificar que sean 
// distintos de 0 y retorne la división de ambos.

function doble(num){
    return (num * 2);
}
console.log(doble(8));

function dosDobles(num1, num2){
    return (num1 * num2);
}
console.log(dosDobles(2,2));

function noCero(num1, num2){
    if (num1 !== 0 && num2 !== 0){
        return (num1 / num2);
    }
    return (`Hay cero`);
}
console.log(noCero(4,27));

// 2. Teniendo en cuenta los datos del punto número 1.
// Crear una función que reciba por parámetro el objeto y retorne un 
// string en base a las siguientes condiciones : 
// si edad es mayor o igual a 18 y tiene bici  “puede competir”
// si tiene bici y es menor a 18   “podrá competir pero con un adulto 
// acompañante”
// si no tiene bici “No podrá competir ” 
// *Deberás realizar la invocación de la función de forma que se pueda 
// ver el resultado