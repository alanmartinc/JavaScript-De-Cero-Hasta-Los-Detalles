function imprimir1(nombre, apellido){ // Funcion con parametros

    apellido = apellido || "xxx";

    /* if(apellido === undefined){
        apellido = "xxx";
    } */

    console.log(nombre + " " + apellido);
}

// Variable anonima
imprimir1("Juan", "Padilla");


function imprimir2(persona){
    console.log(persona.nombre + " " + persona.apellido);

    persona.nombre = "Maria";
}

// Objeto
var obj = {
    nombre: "Juan",
    apellido: "Padilla"
}

// Funcion anonima
imprimir2(obj);

console.log(obj);

function imprimir3(fn){
    fn();
}

// Objeto
var persona = {
    nombre: "Juan",
    apellido: "Padilla"
}

// Funcion anonima
imprimir3(function(){
    console.log("Funcion anonima");
});

var miFuncion = function(){
    console.log("miFuncion");
}

imprimir3(miFuncion);


