var inicio = new Date();

for(var i = 0; i < 15000; i++){
    console.log("Algo...");
}

var fin = new Date();

var duracion = fin.getTime() - inicio.getTime();
console.log(duracion, "milisegundos");
console.log((duracion/1000), "milisegundos");