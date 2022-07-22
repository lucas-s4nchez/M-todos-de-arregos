//------- Método sort --------
/*Ordena los elementos del array y retorna el array ordenado. */

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// Ordenar de menor a mayor los precios de los productos
const resultado = carrito.sort((a, b) => a.precio - b.precio);
console.log(resultado);

// Ordenar de mayor a menor los precios de los productos
const resultado2 = carrito.sort((a, b) => b.precio - a.precio);
console.log(resultado);

//Ordenar alfabeticamente A-Z:
const resultado3 = carrito.sort((a, b) => {
  let objetoA = a.nombre.toLowerCase();
  let objetoB = b.nombre.toLowerCase();
  return objetoA > objetoB ? 1 : -1;
});
console.log(resultado3);
