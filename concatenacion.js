
const calculoPorcentage = (valor,impuesto) => valor + impuesto;

const resultado = calculoPorcentage(100, 20);
console.log(`Utilizando la funcion obtuvimos este resultado: ${resultado}`);



const capturarInformacion = (nombreEstudiante,fechaNacimiento,carrera,ciudadOrigen) => {

    const añoActual = 2026;
    const informacion = `Hola ${nombreEstudiante}, tu edad es  ${añoActual-fechaNacimiento}, estudiante de ${carrera} originario de ${ciudadOrigen}.`;
    return informacion;
}

const probandoFucnion = capturarInformacion("Kevin", 2000, "Ingenieria de Software", "Cayambe");
console.log(probandoFucnion);


const calculoEdad = (añoActual,añoNacimiento)=> añoActual-añoNacimiento;

console.log(calculoEdad(2026,2000));
