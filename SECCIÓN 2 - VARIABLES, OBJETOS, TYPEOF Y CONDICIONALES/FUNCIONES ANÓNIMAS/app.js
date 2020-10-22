// Funcion anonima
(function(){
    var a = 10;

    console.log(a);

    function cambiaA(){
        a = 20;
    }

    cambiaA();

    console.log(a);
})();

function ejecutarFuncion(fn){
    if(fn() === 1){
        return true;
    } else {
        return false;
    }
};

console.log(
    ejecutarFuncion(function(){
        console.log("Funcion anónima ejecutada!");
        return 1;
    })
);



