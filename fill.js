//------- Método fill--------
/*Cambia todos los elementos de una array por un valor estático, desde el indice de inicio hasta el indice final. Retorna el array modificado
array.fill(valorEstatico,indiceInicio, indiceFinal)*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//LLenar el array con el numero 10 desde la posicion 3:
console.log(numeros.fill(10, 3));

//LLenar el array con el numero 5 desde la posicion 4 hasta la posicion 6:
console.log(numeros.fill(5, 4, 8));
