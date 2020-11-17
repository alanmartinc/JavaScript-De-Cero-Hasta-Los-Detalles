function crearCookie(nombre, valor){
    valor = escape(valor);

    var hoy = new Date();
    hoy.setMonth(hoy.getMonth() + 1);

    document.cookie = nombre +"="+ valor +";expires=" + hoy.toUTCString()+";";
}

function borrarCookie(nombre){
    var hoy = new Date();
    hoy.setMonth(hoy.getMonth() - 1);

    document.cookie = nombre +"="+ valor +";expires=" + hoy.toUTCString()+";";
}

function getCookie(nombre){
    var cookies = document.cookie;
    var cookieArr = cookies.split("; ");

    console.log(cookieArr);

    for(var i = 0; i < cookieArr.length; i++){
        var parArr = cookieArr[i].split("=");
        cookieArr[i] = parArr;

        if(parArr[0] === nombre){
            return unescape(parArr[1]);
        }
    }

    console.log(cookieArr);

    return undefined;
}

console.log(getCookie("correo"));

// crearCookie("nombre","Fernando");

// var cookies = document.cookie;
// console.log(cookies);