//Redondear un numero mas abajo
console.log(Math.floor(45.89));

//Redondear numero arriba
console.log(Math.round());

//Obtener el maximo de una lista de numeros
console.log(`El numero Maximo es: ${Math.max(56.5,45,90,5)})`;

//Obtener el minimo 
console.log(`El numero Minimo es: ${Math.min(56.5,45,90,5)})`;

let numero = "67.87633"
console.log(numero);
numero = parseInt(numero); //devuelve el valor si era string lo convierte en entero
let decimal="456.322456";
console.log(parseFloat(decimal)); //devuelve el valor si era string lo convierte en float

//Elevar a la potencia
let base=numero

let exponente=3

console.log(`El numero ${base} elevado a la potencia ${exponente} es de ${Math.pow (base, exponente)}`)

//Calcular raiz cuadrada
console.log(Math.sqrt(64));

//Numero aleatorio
console.log(Math.round(Math.random() * 10));

//Obtener numero con dos decimales
decimal = parseFloat(decimal);

console.log(Math.round(decimal * 100 /100));

//toFixed (2)
let decimalString = parseFloat(decimal.toFixed(2));




