try {
    throw new Error('Nombre error');

    console.log("Esta parte nunca se ejecuta");
}

catch(e){
    registroError(e);

    console.log("Parte del catch");
    console.log(e);
    console.log(e.nombreError);
    console.log(e.accion);
    console.log(e.codeError);
}

finally {
    console.log("Finalmente");
}

function registroError(e){
    var ahora = new Date();

    console.log("Se registro un error: ", e, "a las: ", ahora.getTime());
}