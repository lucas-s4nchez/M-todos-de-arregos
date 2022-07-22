//------- Método slice--------
/*corta una parte del array y la devuelve en uno nuevo.*/

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

const nuevoCarrito = carrito.slice(1, 3); //corta desde el indice 1 hasta el 3 sin incluir al 3
console.log(nuevoCarrito);
