var b = "Herrera";

var a = new String("Juan Carlos");
console.log(a);

console.log(a.toUpperCase());
console.log(a.toLowerCase());

var i = a.indexOf("Herrera");
console.log("La letra esta: ", i);

i = a.lastIndexOf("n");
console.log("La letra esta: ", i);

var nombre = a.substr(0, a.indexOf(" "));
console.log(nombre);

var split = a.split(" ");
console.log(split);
console.log(split.length);

document.write(a.italics());