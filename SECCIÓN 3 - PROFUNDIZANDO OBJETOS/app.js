// Arreglos
var arr = [5,4,3,2,1];
console.log(arr);

console.log(arr[0], arr[4], arr[5]);

// Funcion invertida
arr.reverse();
console.log(arr);

// Funcion regresa un arreglo
arr = arr.map(function(elem){
    elem *= elem;
    return elem;
});

console.log(arr);

// Ejecuta la raiz cuadrada
arr = arr.map(Math.sqrt);
console.log(arr);

// Transforma el arreglo en un solo string
arr = arr.join("|");
console.log(arr);

// Regresa un arreglo de un elemento
arr = arr.split("|");
console.log(arr);

// Meter a la ultima posicion del arreglo
arr.push("6");
console.log(arr);

// Meter a la primer posicion del arreglo
arr.unshift("0");
console.log(arr);

// Poner la representacion textual del arreglo
console.log(arr.toString());

// Agarra el ultimo elemento y lo elimina
var elimine = arr.pop();
console.log(arr, elimine);

// Puede recibir "n" cantidad de parametros, el primer parametro tiene que ser un numero, nos indica la posicion del arreglo en la cual nosotros queremos trabajar
// Apunta a la posicion 1 del arreglo y elimina la posicion 1,2,3 del arreglo
// Meter elementos en una posicion
arr.splice(1, 3, "10", "20", "30");
console.log(arr);

// Funcion opuesta al splice
// Apunta al elemento 0 y corta hasta el elemento 2, el elemento 3 no se cuenta
arr = arr.slice(0, 2);
console.log(arr);


