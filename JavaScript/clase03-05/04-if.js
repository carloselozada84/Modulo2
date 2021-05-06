// Estructura de control

// if..else


// si se cumple la condicion 
//     entonces realizar la accion 
// si no se cumple la condicion
//     entonces hacer otra cosa

let num=9;
//=== evalua tambien el tipo de dato y el valor sean iguales a esto
if(num % 2 === 0){
    console.log (`El numero es par`);

}else{
    //otra accion
    console.warn (`El numero no es par`);
}

let num = parseInt ( prompt (`Ingrese un numero`))

if (isNaN(num)){
    console.log (`Ingrese un numero`);
}else {``
    if (num ===10){
        console.log (`El numero es igual a 10`);
        }else if(num > 10){
            console.log (`El numero es mayor que 10`);
        }else {
            console.log(`El numero es menor que 10`);
        }
}

//if anidado
if(num ===10 ){
    console.log (`El numero es igual a 10`);
}else if(num > 10){
    console.log (`El numero es mayor que 10`);
}else {
    console.log(`El numero es menor que 10`);
}
// !== distinto compara valor y tipo de dato

// Fiesta
// Solo puedo entrar un mayor de edad o sea >=18
// Si no es mayor de edad debe ir acompañado de un tutor

let edad = 15
let tutor = true

if (edad >=18){
    console.log (`Bienvenido a la JODA!`);
}else if(tutor ===true){
    console.log (`Bienvenidos a la JODA! no se separe de su tutor`);
} else {
    console.log (`Salga de aqui, usted no puede disfrutar de la vida`);
}

if(edad<18 && tutor === false){
    console.log (`Salga de aqui, usted no puede disfrutar de la vida`);
}else if (edad >=18 || tutor === true){
    console.log(`Bienvenido a la JODA!`)
}
