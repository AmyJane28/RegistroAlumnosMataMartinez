
class Alumno{
    constructor(nombre,tarea1,tarea2,tarea3,asistencia, examen){
        this.nombre = nombre;
        this.tarea1 = tarea1;
        this.tarea2 = tarea2;
        this.tarea3 = tarea3;
        this.asistencia = asistencia;
        this.examen = examen;
    }     
}

let listaAlumnos;
let obtenerListaJSON = localStorage.getItem("listaAlumnos")

if(obtenerListaJSON){
    listaAlumnos = JSON.parse(obtenerListaJSON)

}
else{
    listaAlumnos = []
}

console.log(listaAlumnos);

const formulario = document.getElementById("formulario")
//El formulario espera que el usuario dé clic en el botón "Guardar"
formulario.addEventListener("submit", (e) => {
    //Cancelamos comportamiento del evento
    e.preventDefault();
    //Acceder al input y obtener valor que ingresó el usuario
    const nombre = document.getElementById("nombre").value
    const tarea1 = document.getElementById("tarea1").value
    const tarea2 = document.getElementById("tarea2").value
    const tarea3 = document.getElementById("tarea3").value
    const asistencia = document.getElementById("asistencia").value
    const examen = document.getElementById("examen").value
    
    
    //Creamos nuevo alumno
    const alumno = new Alumno(nombre,tarea1,tarea2,tarea3,asistencia, examen)
    //Añadimos el alumno al arreglo listaAlumnos
    listaAlumnos.push(alumno)
    
    const listaAlumnosJSON = JSON.stringify(listaAlumnos)
    localStorage.setItem("listaAlumnos", listaAlumnosJSON)
    
    //Reinicia formulario
    formulario.reset()
    
})

