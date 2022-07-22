//------- Método indexOf --------
/*Retorna el primer indice en el que se pueda encontrar un elemento, devuelve -1 si no lo encuentra.
La diferencia con el findIndex es que este último puede recibir condiciones de busqueda mas complejas, pero el indexOf solo busca valores primitivos*/

const meses = ["Enero", "Febrero", "Enero", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 100 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// Encontrar el indice del primer elemento del array meses, que tenga como valor 'Enero':
const indiceMes = meses.indexOf("Enero");
console.log(indiceMes);

//con array de objetos no funca
