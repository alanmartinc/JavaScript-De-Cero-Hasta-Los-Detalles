function evento(arg){
    console.log("Me disparé");
    console.log(arg.x, arg.y);
}

var objeto = document.getElementById("objDemo");
objeto.addEventListener("click", evento);