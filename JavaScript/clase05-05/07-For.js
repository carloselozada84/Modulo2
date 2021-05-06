//For

for(let i=0;i<10; i++){
    //acciones
    console.log(i);

}

//tarea
//ingresar la tabla que queremos calcular
//mostrar por consola la tabla

// let tabla=parseInt(prompt(`Ingrese el numero de la tabla a calcular`))

// if(isNaN(tabla)){
//     console.error(`Debe enviar un numero`);
// }else{
//  while(tabla!==NaN){

// for(let i=1;i<=10;i++){
//     console.log(`${tabla} x ${i} = ${tabla*i}`)
// }
//     tabla=parseInt(prompt(`Ingrese el numero de tabla a calcular`))
// }
// let tabla = prompt('Ingrese el numero de la tabla que desea calcular');


// if (tabla!==null){

//     tabla = parseInt(tabla);

//     while (isNaN(tabla)){
//         console.error('Debe ingresar un número.');
//         tabla = parseInt(prompt('Ingrese el número de la tabla que desea calcular'));
        
//     }

//     for(let i=1;i<=10;i++){
//         console.log(`${tabla} x ${i} = ${tabla * i}`);
//     } 
// }


//para que se puedan hacer operaciones multiples 
let tabla = parseInt(prompt("numero"));
while (tabla) {
  for (let i = 0; i <= 10; i++) 
  {
    console.log(`${tabla} x ${i} = ${tabla * i}`);
  }
  tabla = parseInt(prompt("numero"));
}
console.log(`Usuario cancelo o ingreso un dato invalido`)
