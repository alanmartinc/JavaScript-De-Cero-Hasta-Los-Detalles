function Persona(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 30;

    this.imprimirPersona = function(){
        return this.nombre + " " + this.apellido + "(" + this.edad + ")";
    }
}

var juan = new Persona("Juan", "Mendoza");

console.log(juan);
console.log(juan.nombre);
console.log(juan.imprimirPersona());