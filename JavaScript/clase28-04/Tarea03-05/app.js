
// Usando métodos matemáticos
// ------------------------------------------------
// **Tarea 1 - Capitalizar el Nombre**

// - recibo un nombre y lo capitalizo
//   - nombre: josé - capitalizado: José

let nombre = "jose";
nombre.trim().replace(/^\w/,c=>c.toUpperCase());

console.log(nombre);

// **Tarea 2**

// - Ingresar 3 números
// - indicar cual es el mayor
// - indicar cual es el menor
// - obtener la raíz cuadrada del segundo número

let numero1=34;
let numero2=64;
let numero3=24;

//Obtener el maximo
console.log(`El numero Maximo es: ${Math.max(numero1,numero2,numero3)}`);

//Obtener el minimo 
console.log(`El numero Minimo es: ${Math.min(34,64,24)}`);

//Obtener la raiz del segundo numero
console.log(Math.sqrt(numero2));







