//Array o arreglos
//Lista

//Mutacion de un arreglo
//Metodos

let alumnos = [`Pablo`,`Fabrizio`,`Laura`,`Gabriela`];

//acceder a un elemento dentro del arreglo
alumnos[2]
//Obtener el ultimo elemento
alumnos[alumnos.length - 1]

//Concatenar todos los elementos en un string
alumnos.join()

//Iterar
for(let i=0; i<alumnos.length;i++){
    console.log(`Hola soy $ {alumnos[i]}`)
}

//Agregar elementos
alumnos.push(`Carlos`)

//Eliminar el ultimo elemento
alumnos.pop()

//Añadir un elemento al principio
alumnos.unshift(`Walter`)

//Eliminar el primer elemento
alumnos.shift()

//Encontrar el indice de un elemento
console.log(alumnos.indexOf(`Pablo`))

//Encontrar un elemento
console.log(alumnos.includes(`Gabriela`))

//Eliminar un elemento mediante su posicion
let pos=1
alumnos.splice(pos,2)
//se puede eliminar mas de un elemento primero posicion segundo la cantidad








