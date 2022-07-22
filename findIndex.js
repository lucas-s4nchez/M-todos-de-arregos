//------- Método findIndex --------
/*Retorna el índice del primer elemento de un array que cumpla con una condicion  determinada, caso contrario devuelve -1 */

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 100 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

//Mostarme el índice del primer elemento del array meses que tenga el valor 'Mayo':
const indiceMeses = meses.findIndex((mes) => mes === "Mayo");
console.log(indiceMeses);

//Mostarme el indice del primer elemento del array carrito, que tenga un precio mayor a 200:
const indiceCarrito = carrito.findIndex((producto) => producto.precio > 200);
console.log(indiceCarrito);
