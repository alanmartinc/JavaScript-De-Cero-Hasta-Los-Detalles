var juan = {
    nombre: "Juan",
    edad: 30,
    imprimir: function(){
        var self = this;

        setTimeout(function(){
            console.log(self);
            console.log(self.nombre, self.edad);
        }, 1000);
    }
};

juan.imprimir();