//Estructura condicional
//switch

let numero =3

switch (numero) {
    case 10:
        //accion
        console.log(`El numero es 10`)
        break;
     case 25:
        console.log(`El numero es 25`)
        break;
     case 3:
         //accion
         console.log(`El numero es 3`)
        break;
     default:
        console.log(`El numero es otro valor`)
        //accion
        break;
}

//------------------------------
let diaNumero = new Date().getDay()
switch (diaNumero) {
    case 0:
        console.log(`Hoy es Domingo`);
        break;
     case 1:
            console.log(`Hoy es Lunes`);
            break;
     case 2:
        console.log(`Hoy es Martes`);
        break;
     case 3:
        console.log(`Hoy es Miercoles`);
        break;
     case 4:
        console.log(`Hoy es Jueves`);
        break;
     case 5:
        console.log(`Hoy es Viernes`);
        break;
    
    default:
        console.log(`Hoy es Sabado`);
        break;
}

//------------------------------
let num= 24
switch (true) {
    case num=== 10:
        console.log(`El numero es igual a 10`);
        break;
    case num % 2=== 0:
        console.log(`El numero es par`)

    default:
        console.log(`No se que mas hacer`); 
        break;
}

//-------------------
let comando= prompt(`Ingrese un comando(alerta, consola, print)`)
switch (comando) {
    case `alerta`:
        alert(`Usando switch en un alert`);
        break;
    case `consola`:
        console.log(`Usando switch en la consola`);
        break;
        case `print`:
            document.write(`Usando switch en el navegador`);
    default:
        console.error(`No existe ese comando, no sea mala persona`);
        break;
}