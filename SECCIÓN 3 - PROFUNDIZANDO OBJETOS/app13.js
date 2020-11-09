// var reg1 = RegExp("a");
// var reg2 = /a/;
// i = insensible
// g = todas apariciones
// m = multilinea

var texto = "Hola mundoo Hooooola de nuevoo \n Qué tál";
console.log(texto);

var arr = texto.match(/o{3,4}/g);
console.log(arr);