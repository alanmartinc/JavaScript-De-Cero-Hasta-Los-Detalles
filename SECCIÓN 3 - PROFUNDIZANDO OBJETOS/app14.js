var texto = "La respuesta de la suma es: 45 + 60 = 105";
console.log(texto);

var arr = texto.match(/\d{1,}|respuesta/ig);
console.log(arr);