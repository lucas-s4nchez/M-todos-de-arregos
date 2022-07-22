//------- Método every --------
/*Itera el array y retorna TRUE si todos los elementos del array pasan una condicion  determinada, sino retorna FALSE */

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// toditos los productos tienen un precio mayor a 99:
const resultado = carrito.every((producto) => producto.precio > 99);
console.log(resultado);

// toditos los producto tienen un nombre 'Tablet':
const resultado2 = carrito.every((producto) => producto.nombre === "Tablet");
console.log(resultado2);
