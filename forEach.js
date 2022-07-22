//------- Método forEach --------
/*Permite iterar el array, es como un ciclo for pero simplificado.
El resultado no se puede guardar en una variable*/

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

carrito.forEach((producto) => console.log(producto.nombre));
