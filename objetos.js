/*const superHeroe = [
    {nombre : 'Espiderman', poder : 'Trepar paredes', edad : 25},
    {nombre : 'Iron Man', poder : 'Armadura de alta tecnologia', edad : 40},
    {nombre : 'Capitan America', poder : 'Fuerza y resistencia sobrehumana', edad : 100},    
];

// Esxtraer informacion de un objeto dentro de un arreglo


const {nombre,poder,edad} = superHeroe[1];
console.log(`Hola soy ${nombre} y mi super poder es  ${poder} y tengo ${edad} años de edad`);


const nombreSuperHeroes = superHeroe.map(i => i.nombre);
console.log(nombreSuperHeroes);

const filtro = superHeroe.filter(i => i.edad) ;
console.log(filtro);


const productos = [
  { nombre: 'Laptop', precio: 1000 },
  { nombre: 'Mouse', precio: 20 },
  { nombre: 'Teclado', precio: 50 }
];

// .map() -> Extrae solo los nombres
const nombresProductos = productos.map(p => p.nombre);
console.log(nombresProductos); // ['Laptop', 'Mouse', 'Teclado']

// .filter() -> Filtra los productos menores a $100
const productosBaratos = productos.filter(p => p.precio < 100);
console.log(productosBaratos);

*/

const proyectosTesis = [{nombreproyecto : "Desarrolo de sistema de Gestion Inventario",estudiante :"Kevin Quishpe",estado : true},
    {nombreproyecto : "Desarrolo de sistema de ventas online",estudiante :"Dennis Hernadez",estado : true},
    {nombreproyecto : "Desarrolo de sistema de CLinica Veterinaria",estudiante :"Genesis Maza",estado : false}
];

// 2. Filtrar solo las tesis completadas (.filter)

const Aprovados = proyectosTesis.filter(i => i.estado === true);

const listadoNombres = Aprovados.map(i => i.estudiante);
console.log(listadoNombres);

// Recorrer y mostrar usando Desestructuración y Template Literals
