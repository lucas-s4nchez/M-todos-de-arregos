//------- Método some --------
/*Itera el array y retorna un booleano si como mínimo uno de los elementos del array pasa una condicion  determinada */

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

//buscar si el valor 'Tablet' existe en el array carrito:
const buscadorProductos = carrito.some(
  (producto) => producto.nombre === "Tablet"
);
console.log(buscadorProductos);

//buscar si el valor 'Abril' existe en el array meses:
const buscadorMeses = meses.some((mes) => mes === "Abril");
console.log(buscadorMeses);
