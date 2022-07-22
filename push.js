//------- Método push --------
/*Añade uno o más elementos al final de array.*/

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

//añadir un elemento
carrito.push({ nombre: "PC Gamer", precio: 600 });
console.log(carrito);

// añadir varios elementos
carrito.push(
  { nombre: "Mouse", precio: 100 },
  { nombre: "Microfono", precio: 250 }
);
console.log(carrito);
