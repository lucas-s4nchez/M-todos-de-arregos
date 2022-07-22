//------- Método find --------
/*Recorre el array y retorna el primer elemento que coincida con una determinada condicion*/

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 100 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// Buscar el primer producto que tenga el precio mayor a 300:

const findCarrito = carrito.find((producto) => producto.precio > 300);
console.log(findCarrito);
