let precio;
function totalAPagar(vehiculo, litrosConsumidos){
    if (vehiculo == "coche"){
        precio = litrosConsumidos*86;
    }else if (vehiculo == "moto"){
        precio = litrosConsumidos*70;
    }else if (vehiculo == "autobus"){
        precio = litrosConsumidos*55;
    }
    if (litrosConsumidos >=0 && litrosConsumidos <= 25){
        precio = precio+50;
    }else if (litrosConsumidos > 25){
        precio = precio+25;
    }
    return precio;
}
console.log(totalAPagar("moto", 30));

let total = 0;
function localSandwich(base,pan,queso,tomate,lechuga,cebolla,mayonesa,mostaza){
    if (base == "pollo"){
        total = total+150;
    }else if (base == "carne"){
        total = total+200;
    }else if (base == "veggie"){
        total = total+100;
    }
    if (pan == "blanco"){
        total = total+50;
    }else if (pan == "negro"){
        total = total+60;
    }else if (pan == "s/gluten"){
        total = total+75;
    }
    queso && (total += 20);
    tomate && (total += 15);
    lechuga && (total += 10);
    cebolla && (total += 15);
    mayonesa && (total += 5);
    mostaza && (total += 5);
    
    // return total;
}
console.log(localSandwich("carne","blanco",true,false));

// Lautaro Desouches
// Nico Gonella
//Manuel Menendez Balbi