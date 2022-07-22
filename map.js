//------- Método map --------
/*Permite iterar el array y modificarlo, similar al forEach, pero .map guarda el resultado en un nuevo array.*/

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

const carritoMap = carrito.map(
  (producto) => `${producto.nombre} tiene un precio de: $ ${producto.precio}`
);
console.log(carritoMap);
