// Arreglo
var arr = [
    true,
    {
        nombre: "Fernando",
        apellido: "Herrera"
    },
    function(){
        console.log("Estoy viviendo en un arreglo.");
    },
    function(persona){
        console.log(persona.nombre + " " + persona.apellido);
    },
    [
        "Fernando", 
        "Carlos", 
        "Hernando", 
        "Melissa",
        function(){
            console.log(this);
        }
    ]
];

console.log(arr);
console.log(arr[0]);
console.log(arr[1].nombre + " " + arr[1].apellido);

// Invocando a la funcion anonima
arr[2]();

// Posicion 3 - arreglo 1
arr[3](arr[1]);

// Posicion 4 - ubicacion de nombre 3
console.log(arr[4][3]);