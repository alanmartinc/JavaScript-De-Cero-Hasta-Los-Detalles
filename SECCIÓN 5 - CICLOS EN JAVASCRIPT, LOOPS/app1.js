var Persona = function(){
    this.nombre = "Juan";
    this.apellido = "Pineda";
    this.edad = 18;
};

var juan = new Persona();

Persona.prototype.direccion = "San José";

for(prop in juan){
    if(juan.hasOwnProperty(prop))
    continue;

    console.log(prop, ":", juan[prop]);
}

for(num in [1,2,3,4,5,6,7,8,9,10]){
    console.log(num);
}

[1,2,3,4,true,6,7,8,false,"nombre"].forEach(function(val){
    console.log(val);
});