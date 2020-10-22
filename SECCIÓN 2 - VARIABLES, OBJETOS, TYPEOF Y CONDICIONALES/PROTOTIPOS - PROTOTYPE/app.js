function Persona(){
    this.nombre = "Fernando";
    this.apellido = "Herrera";
    this.edad = 30;
    this.pais = "Costa Rica";

    this.imprimirInfo = function(){
        console.log(this.nombre + " " + this.apellido + "(" + this.edad +")");
    }
}

// Funcion con prototype
Persona.prototype.imprimirInfo = function(){
    console.log(this.nombre + " " + this.apellido + "(" + this.edad +")");
}

Number.prototype.esPositivo = function(){
    if(this > 0){
        return true;
    } else {
        return false;
    }
}

var fer = new Persona();

fer.imprimirInfo();

console.log(fer);
console.log(fer.imprimirInfo());