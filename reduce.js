//------- Método reduce --------
/*Reduce el array a un único valor*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 100 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

//Mostrar la suma de los precios
const totalPagar = carrito.reduce(
  (total, producto) => total + producto.precio,
  0
);
console.log(totalPagar);

//total: es un acumulador que va guardando la suma de todos los valores.
//producto: seria el valor del elemento del array que esta iterando en ese momento.
// 0: es el valor inical del acumulador ('total' en este caso)

//en este ejemplo se suma el total que inicialmente vale 0, con el precio del objeto actual, en la segunda iteracion total ya no vale 0, sino el precio del producto anterior, y lo suma al precio del actual y asi hasta iterar todos los elementos. En otras palabras va sumando los valores, veamos otro ejemplo (me siento esquizofrenico explicandome a mi mismo)

//sumar los numeros del array:
const sumaNumeros = numeros.reduce(
  (total, numeroActual) => total + numeroActual,
  0
);
console.log(sumaNumeros);
