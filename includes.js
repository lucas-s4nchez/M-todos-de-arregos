//------- Método includes --------
/*Determina si un array incluye un elemento y devuelve un booleano según corresponda
A diferencia del método some, includes no funca en array de objetos*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Determinar si existe el numero 4 en el array numeros
const numerosResultado = numeros.includes(4);
console.log(numerosResultado);
