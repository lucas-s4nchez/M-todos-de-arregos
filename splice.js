//------- Método splice--------
/*Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos*/

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

//agregar un elemento en la posicion 3:
carrito.splice(3, 0, { nombre: "Iphone", precio: 400 });
console.log(carrito);
