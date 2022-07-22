//------- Método concat --------
/*Une dos o más arrays. Este método no modifica los arrays existentes sino que devuelve uno nuevo*/

const heroes = ["Superman", "Thor", "Hulk", "Flash"];
const villanos = ["Joker", "Kang", "Mangog", "Doomsday"];

//Unir heroes y villanos en nuevo array
const todosJuntos = heroes.concat(villanos);
console.log(todosJuntos);
