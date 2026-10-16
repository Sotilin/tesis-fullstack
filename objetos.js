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


// 1. Arreglo de objetos (Tesis)
const listaTesis = [
  { titulo: 'Sistema de Inventarios', completado: true },
  { titulo: 'App de Gestión Médica', completado: false },
  { titulo: 'Plataforma E-commerce', completado: true }
];

// 2. Filtrar solo las tesis completadas (.filter)
const tesisFinalizadas = listaTesis.filter(tesis => tesis.completado === true);

// 3. Recorrer y mostrar usando Desestructuración y Template Literals
tesisFinalizadas.forEach(tesis => {
  const { titulo } = tesis;
  console.log(` Tesis lista para entregar: ${titulo}`);
});




const proyectos = [{encargado : "Kevin Quishpe", proyecto : "Desarrollo Web", estado : true},
    {encargado : "Dennis Hernadez", proyecto : "Desarrollo de App Movil", estado : false},
    {encargado : "Genesis Guerra", proyecto : "Desarrollo de Sistema", estado : true}
];


const proyectosIncompletos = proyectos.filter(iteracion => iteracion.estado === false);
const listaReprobados = proyectosIncompletos.map(iteracion => iteracion.encargado);

console.log(" ======= Lista Reprobados ======= ");
listaReprobados.forEach(iteracion => {
    console.log(iteracion);
})



const listado = [{escritor : "Arthur clavijo",generoLiterario : "Poesia",ultimaObra : "El poema de los destinos",año : 2020},
    {escritor : "Leonel Messi",generoLiterario : "Poeta del gol",ultimaObra : "Mundial 2026",año : 2026},
    {escritor : "Mario Jossa",generoLiterario : "Terror",ultimaObra : "El terror de la oscuridad",año : 2024}
]

const ultimosCuatroAños = listado.filter(iteracion => iteracion.año >= 2021);


ultimosCuatroAños.forEach(iteracion => {
    // extraer informacion de un objeto 
    const {escritor,generoLiterario,ultimaObra,año} = iteracion;
    console.log(`El escritor ${escritor} genero literario ${generoLiterario} su ultima obra fue ${ultimaObra} y fue publicada en el año ${año}`);
});




const estudiantes = [{
    id : 1,
    nombre : "Carlos",
    apellido : "Quishpe",
    nivel : 1,
    paralelo : "A"
},
{
    id : 2,
    nombre : "Gabriel",
    apellido : "Hernadez",
    nivel : 1,
    paralelo : "B"},
{
    id : 3,
    nombre : "Kevin",
    apellido : "Quishpe",
    nivel : 1,
    paralelo : "A"}
]


const estudianteParaleloB = estudiantes.filter(estudiante => estudiante.paralelo === "B");



const informacionesEstudiantesB = estudianteParaleloB.forEach(informacion => {

    const {id,nombre,apellido,nivel,paralelo} = informacion;
    console.log(`ID: ${id}, Nombre: ${nombre}, Apellido: ${apellido}, Nivel: ${nivel}, Paralelo: ${paralelo}`);

}); 




const proyecto = [
  { titulo: 'Sistema de Inventarios', area: 'Software', nota: 7 },
  { titulo: 'Red Neuronal para Diagnóstico', area: 'IA', nota: 9 },
  { titulo: 'App Móvil de Mascotas', area: 'Software', nota: 5 },
  { titulo: 'Optimizador de Rutas', area: 'IA', nota: 10 },
  { titulo: 'Página Web Informativa', area: 'Software', nota: 6 }
];

/*
Filtrar (.filter): Crea una variable proyectosAprobados que guarde únicamente los proyectos cuya nota sea mayor o igual a 7 (nota >= 7).


Transformar (.map): A partir de proyectosAprobados, usa .map() y desestructuración para crear un nuevo arreglo de textos llamados resumenes. Cada elemento debe tener este formato usando Template Literals:
"El proyecto '[titulo]' ([area]) fue APROBADO con nota de [nota]"

Imprimir (.forEach): Recorre el arreglo resumenes e imprímelo en consola.


*/


const mayorSiete = proyecto.filter(iterador => iterador.nota >= 7);

const arregloAprovados = mayorSiete.map( iterador => {
    const {titulo,area,nota} = iterador;
    return `El proyecto ${titulo} ${area} fue APROBADO ${nota}`;
})

console.log(" ======= Lista de Aprovados ======= ");

arregloAprovados.forEach(iterador => {
    console.log(iterador);
})
