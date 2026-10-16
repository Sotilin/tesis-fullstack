// atrapamos los datos 

const nombreEmpresa = document.getElementById("Empresa");
const descripcionTrabajo = document.getElementById("Descripcion");
const personal = document.getElementById("Personal");

const reporte = document.getElementById("btnReporte");
const lista = document.getElementById("Lista");


// escuachar y genera evento 
reporte.addEventListener('click',()=>{

  try{

    const valorNombreEmpresa = nombreEmpresa.value;
    const valorDescripcionTrabajo = descripcionTrabajo.value;
    const valorPersonal = personal.value;

    if(valorNombreEmpresa !== "" && valorDescripcionTrabajo !=="" && valorPersonal !== ""){


      const report = document.createElement('li')

      report.textContent = `El nombre de la empresa :${valorNombreEmpresa}\nSe realizara el siguiente trabajo : ${valorDescripcionTrabajo}\nSe enviara la siguiente cantidad de operarios ${valorPersonal}`;
      lista.appendChild(report);
      
      nombreEmpresa.value = "";
      descripcionTrabajo.value = "";
      personal.value =  ""; 


      
    }


    else{
      alert("Llene todos los campos por favor !");
    }


  }catch(error){

    console.log(`Existio un error ${error}`)

  }

})