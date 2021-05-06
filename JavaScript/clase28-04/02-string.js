let nombre = "Carlos"
let apellido = "Lozada"
let frase = "Bienvenido a la clase"

console.log(nombre, apellido);
console.log(nombre+ "" + apellido);

//Template String
console.log(`Mi nombre es ${nombre} ${apellido}`);

//Metodos de los String

console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());
console.log(apellido.length);
console.log(apellido.charAt(4));
console.log(apellido.substr(0,3));
console.log(frase.trim());


//console.log(nombre.toUpperCase()); //Mostrar el texto en MAYUSCULAS.
//console.log(nombre.toLowerCase()); //Mostrar el texto en minuscula.
//console.log(apellido.length); //Mostrar la cantidad de caracteres(tambien espacios en blanco).
//console.log(apellido.charAt()); //Muestra la posicion de la letra
//console.log(apellido.substr(0,3);) // Muestra la posicion q quiere saber la letra

// traer ultima letra del apellido
console.log(apellido.charAt(apellido.length - 1));

