//------- Método filter --------
/*Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condicion*/

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];
//filtrar los productos que tengan un precio mayor a 400:
const filtroProductos = carrito.filter((producto) => producto.precio > 400);
console.log(filtroProductos);

//filtrar los productos que tengan un precio menor a 400:
const filtroProductos2 = carrito.filter((producto) => producto.precio < 400);
console.log(filtroProductos2);

//filtrar todos los producto excepto el que tenga nombre 'Television':
const filtroProducto3 = carrito.filter(
  (producto) => producto.nombre !== "Televisión"
);
console.log(filtroProducto3);
