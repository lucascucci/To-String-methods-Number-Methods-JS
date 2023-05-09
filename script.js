

const holaMundo = () => '¡Hola, Mundo! 🌎'
holaMundo();

//String methods:

//charAt() indexado de la posicion de la letra a buscar
let txt = "Hello World"
console.log (txt.charAt(0));
console.log (txt.charAt(3));


//Modifica tamaño de mayusculas y minusculas
//toUpperCase()
//toLowerCase()
let oracion= "Lucas"
console.log(oracion.toUpperCase());

let oracio= "LUCAS"
console.log(oracion.toLowerCase());



//concat() concatena
let frase1= "Lucas";
let frase2= "Cucci";

console.log(frase1.concat(frase2));


//valueOf() devuelve el valor primitivo de un objeto STRING como un tipo de dato cadena.
const s= new String ('test')
typeof s;

s.valueOf;
typeof s.valueOf();


//trim() metodo/ elimina los espacios en blanco de ambos extremos del string.

let str= " Messi es dios "
console.log(str.trim());


//lastIndexOf() devuelve el ultimo indice en el que un cierto elemento puede encontrarse en el arreglo, o -1 si el elemento no se encontrara.
let stu = "A dev knows a dev"
let pos = stu.lastIndexOf("dev");

console.log(pos);


//toString()
let num = 15;
console.log(num.toString());


//replace()
let abc= "Hello dev";
console.log(abc.replace("dev","world"));


//includes() response = boolean
let aei = "My name is...."
console.log(aei.includes("name"));


//search()
let aer = "Hello dev!"
console.log(aer.search("dev"));


//slice(start,end)
let esa = "Developers World!"
console.log(esa.slice(0,10));

//match()
let uiu = "loremsum loremsum loremsum";
console.log(uiu.match(/sum/g));


//split()
let kfc = "1,2,3,4,5";
console.log(kfc.split(","));


//substr(start, length)
let sub = "Javascript";
console.log(sub.substr(4,6));


//substring(start,end)
let siu = "Hello dev!";
console.log(siu.substring(0,10));