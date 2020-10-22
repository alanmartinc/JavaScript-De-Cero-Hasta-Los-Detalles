function indentifica1(param){
    if(typeof param === "function"){
        param();
    } else {
        console.log(param);
    }
}

function Persona(){

}

var juan = new Persona();

indentifica1(function(){console.log("Soy anonima");});

function indentifica2(param){
    if(typeof param === "function"){
        param();
    } else {
        console.log(param);
    }
}

function Persona(){
    this.nombre = "Fernando";
    this.edad = 30;
}

var fernando = new Persona();

indentifica2(fernando);

function indentifica3(param){
    console.log(typeof param);
    console.log(param instanceof Persona);
}

function Persona(){
    this.nombre = "Fernando";
    this.edad = 30;
}

var fernando = new Persona();

indentifica3(fernando);