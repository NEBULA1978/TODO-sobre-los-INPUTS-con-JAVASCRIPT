let nombre;
document.querySelector(".boton").addEventListener("click",leer);

function leer(){

    nombre=document.querySelector("#campo").value;
    // Cuando nombre no es nada(abreviado nombre)
    // (nombre!=="")
    // (nombre===true)
    (nombre) && (document.querySelector(".caja").innerHTML=`Hola ${nombre}`)
    
    
}
// Es false al convertir a booleano
// false
// undefined
// null
// 0
// -0
// NaN
// ""
