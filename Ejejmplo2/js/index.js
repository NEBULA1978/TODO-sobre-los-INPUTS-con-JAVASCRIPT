let nombre;
document.querySelector(".boton").addEventListener("click",leer);
document.querySelector("#campo").addEventListener("keydown",teclado)

function leer(){

    nombre=document.querySelector("#campo").value;
}

function teclado(e){
    // Cuando la tecla pulsada sea enter ira a funcion leer
    (e.key==="Enter") && leer();

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
