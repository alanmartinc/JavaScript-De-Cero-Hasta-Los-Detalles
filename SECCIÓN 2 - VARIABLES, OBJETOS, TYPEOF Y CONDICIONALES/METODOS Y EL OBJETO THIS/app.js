var nombre = "Alan";

var persona = {
    nombre: "Maria",
    apellido: "Dubon",
    imprimirNombre: function(){
        console.log(nombre);
        console.log(this.nombre + " " + this.apellido);
    },
    direccion: {
        pais: "Costa Rica",
        obtenerPais: function(){
            var self = this;

            var nuevaDireccion = function(){
                console.log(self);
                console.log("La direccion es en " + self.pais);
            }

            nuevaDireccion();
        }
    }
};

persona.nombre = "Andres";

persona.imprimirNombre();

persona.direccion.obtenerPais();