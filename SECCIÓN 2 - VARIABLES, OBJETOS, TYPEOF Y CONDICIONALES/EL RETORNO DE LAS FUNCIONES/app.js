function obtenerAleatorio(){
    return Math.random();
}

console.log(obtenerAleatorio() + 10);

function obtenerNombre(){
    return "Juan";
}

console.log(obtenerNombre() + " Padilla");

function esMayor05(){
    if(obtenerAleatorio() > 0.5){
        return true;
    }else{
        return false;
    }
}

if(esMayor05()){
    console.log("Es mayor a 0.5");
} else {
    console.log("Es menor a 0.5");
}

function crearPersona(nombre, apellido){
    return {
        nombre: nombre,
        apellido: apellido
    }
}

var persona = crearPersona("Maria","Paz");
console.log(persona.nombre);
console.log(persona.apellido);

function creaFuncion(){
    return function(nombre){
        console.log("Me creo " + nombre);

        return function(){
            console.log("Segunda funcion");
        }
    }
}

var nuevaFuncion = creaFuncion();
var segundaFuncion = nuevaFuncion(persona.nombre);

nuevaFuncion(persona.nombre);
segundaFuncion();