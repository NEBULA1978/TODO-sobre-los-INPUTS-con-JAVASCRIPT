let nombre;
document.querySelector(".boton").addEventListener("click",leer);
document.querySelector("#campo").addEventListener("keydown",teclado);
limpiar();


function teclado(e){
    // Cuando la tecla pulsada sea enter ira a funcion leer
    (e.key==="Enter") && leer();

    // Cuando nombre no es nada(abreviado nombre)
    // (nombre!=="")
    // (nombre===true)
}
function leer(){
    // Trim borra espacios al principio y al final
    nombre=document.querySelector("#campo").value.trim();
    (nombre) && (document.querySelector(".caja").innerHTML=`Hola ${nombre}`)
    limpiar();
}

function limpiar(){
    const ELEMENTO=document.querySelector("#campo");
    ELEMENTO.value="";
    // Al pulsar el boton borra contenido esrito dentro de input
    ELEMENTO.focus();
}



// Es false al convertir a booleano
// false
// undefined
// null
// 0
// -0
// NaN
// ""
