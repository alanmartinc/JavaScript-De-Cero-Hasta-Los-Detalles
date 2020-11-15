// Comentario linea simple

/* 
    Comentario multi linea
    Comentario multi linea
    Comentario multi linea
*/

var arr = ["Fernando", {
    nombre:"Fernando",
    apellido:"Herrera",
    getNombre:function() {
        return this.nombre + " " + this.apellido;
    }
}, true, function() {
    console.log(this);
}];

console.log(arr);