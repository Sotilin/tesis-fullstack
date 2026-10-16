/*const obtenerdatos = async() =>{
    try{
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');
        const datos = await respuesta.json();
        datos.forEach(iteracion => {
            const {userId, id, title, completed} = iteracion;
            console.log(`User ID: ${userId}, ID: ${id}, Title: ${title}, Completed: ${completed}`);
        })
    }
    catch(error){
        console.error('Error al obtener los datos:', error);
    }
}
*/


//[https://jsonplaceholder.typicode.com/users]

const obtenerdatos = async() => {
    try{
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
        const datos = await respuesta.json();
        const datosFiltrados = datos.filter(iteracion => iteracion.id <= 5);
        const destruccion = datosFiltrados.map(iteracion => {
            const {id,name,username,email,address,phone,website,company} = iteracion;
            return `El Id : ${id}\n
                Nombre : ${name}\n
                Apodo : ${username}\n
                Correo : ${email}\n
                address : ${address}\n
                telefono : ${phone}\n
                sitio web : ${website}\n
                Compania : ${company}`;
        });

        destruccion.forEach(iteracion => {
            console.log(iteracion);
        })

        

    }
    catch(error){
        console.error(`El Error es : ${error}`);
    }
};

//obtenerdatos();

// "https://pokeapi.co/api/v2/ability/1/"


const apipokemon = async() => {

    try{

        const peticion = await fetch("https://pokeapi.co/api/v2/ability");
        const datos = await peticion.json();

        // realizar el filtro de los objetos que necesito

        const listaFiltrados = datos.filter(iteracion => iteracion.id <= 10);
        const mapeo = listaFiltrados.map(iteracion => {
            const {name,url} = iteracion;

            return `nombre : ${name}\n
            Url : ${url}`;
        });

        mapeo.forEach(iteracion =>{
            console.log(iteracion);
        })

    }
    catch(error){
        console.error("El error es clarisimo ${error}");

    }

} 

apipokemon();