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
// Convierte todo en mayusculas
// toUpperCase()
// Convierte todo en minusculas
// toLowerCase()

// substr(obsoleto)

// Solo un trozo donde le diga en mayusculas
// substring(desde,hasta)
// "Jab"
// substring(0,2) selecciona las dos primeras letras Ja la dos no
// substring(0,3) selecciona las tres primeras letras Jab la 3 no

// Para seleccionar ab de Jab substring(1,3)
// Para seleccionar J de Jab substring(0,1)
// Para seleccionar el nº caracteres que hubieran en este caso Jab substring(0)

// substring(?).toUpperCase()
// substring(?).toLowerCase()

function leer(){
    // Trim borra espacios al principio y al final
    // nombre=document.querySelector("#campo").value.trim();
    nombre=document.querySelector("#campo").value.trim().toUpperCase();
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
