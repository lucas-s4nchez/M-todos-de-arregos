//------- Método includes --------
/*Determina si un array incluye un elemento y devuelve un booleano según corresponda
A diferencia del método some, includes no funca en array de objetos*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Determinar si existe el numero 4 en el array numeros
const numerosResultado = numeros.includes(4);
console.log(numerosResultado);

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 100 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];
