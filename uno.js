let etiquetaBoton=document.getElementById("boton")
etiquetaBoton.addEventListener("click",escuchar)
function escuchar(event){
    event.preventDefault()
    console.log("hizo click")
    let empanada=document.getElementById("empanada").value
    console.log(empanada)
    let Nombre=document.getElementById("Nombre").value
    console.log(Nombre)
    let Correo=document.getElementById("Correo").value
    console.log(Correo)
    let Cantidad=document.getElementById("Cantidad").value
    console.log(Cantidad)
    let Edad=document.getElementById("Edad").value
    console.log(Edad)
}
