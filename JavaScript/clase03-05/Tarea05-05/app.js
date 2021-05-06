//Tarea 1 - Números con condicionales

// Ingresan dos números
// Si el primero es mayor que el segundo mostrar en consola la suma de ambos
// Si el primero es menor que el segundo mostrar en consola la resta del segundo menos el primero.
// Si son iguales mostrar en consola la multiplicación de ambos.
// ejemplo del mensaje: 2 es menor que 5, la resta de 5 - 2 es igual a 3


// let valor1=23;
// let valor2=12;

// if(valor1 > valor2 ){
//     console.log (`El valor1 es mayor que el valor2,la suma es ${valor1 + valor2}`);
    
// }else if(valor2 > valor1){
    
//     console.log (`El valor 1 es menor que el valor2,la resta es ${valor2 - valor1}`);
// }else{
//     console.log (`El valor 1 y 2 tienen el mismo valor, la multiplicacion es ${valor1 * valor2}`);
// }

//Tarea 2 - Operaciones con condicionales**

// - Recibir dos valores y la operación a realizar (+, -, *, /)
// - Verificar que los valores ingresados no sean NaN, si son NaN convertirlos a 0
// - Con una estructura switch verificar la operación y devolver un mensaje con el resultado de la misma.
// - Si se ingresa una operación que no está contemplada devolver un mensaje de error.

let numero1=parseInt(prompt("Ingrese un numero"));
let numero2=parseInt(prompt("Ingrese otro numero"));
let operacion=prompt("Ingrese la operacion +,-,*,/")

// if(isNaN(numero1) && isNaN(numero2)) {
//     numero1 = 0;
//     numero2 = 0;

// }else if (numero1 !==NaN && isNaN(numero2)){
//     numero2 =0;
// }else if (isNaN(numero1) && numero2 !==NaN){
//     numero1 =0;
// }

if (isNaN(numero1)) {
    numero1=0;

}
if  (isNaN(numero2)) {
    numero2=0;

}


switch (operacion) {
    case "+":
        console.log(`la suma de los numeros es ${numero1+numero2}`);
        
        break;
    case "-": 
        console.log(`la resta de los numeros es ${numero1-numero2}`);
        break;
    case "*":
        console.log(`la multiplicacion de los numeros es ${numero1*numero2}`);
        break;
    case "/":
        if (numero2===0){
        console.warn(`No se puede realizar la operacion`);
        }else{
        console.log(`la division de los numeros es ${numero1/numero2}`);
            
        }
        break;
    default:
        console.log("La operacion no existe!!!!")
        break;
}
