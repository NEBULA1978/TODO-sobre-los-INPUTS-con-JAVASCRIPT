const INPUT=document.querySelector("#nombre");
document.querySelector(".boton").addEventListener("click",leer);
INPUT.addEventListener("keydown",teclado)

function teclado(e){
    e.key==="Enter" && leer();
}
function leer(){

    // const NOMBRE=document.querySelector("#nombre").value.trim();
    // Almaceno lo que ha escrito usuario dentro de mi input
    const NOMBRE=INPUT.value.trim();
    (NOMBRE) && escribir(convertir(NOMBRE))
    vaciar();
}

function vaciar(){
    // document.querySelector("#nombre");
    INPUT.value="";
    INPUT.focus();
}
// valor viene de la linea 8 con NOMBRE
function convertir(valor){
    let nombreCorrecto=`${valor.substring(0,1).toUpperCase()}${valor.substring(1).toLowerCase()}`
    return nombreCorrecto;
}

function escribir(nombre){
    // (document.querySelector("select")===null) && crearSelect()
    // Cuando no exista ira a crearlo el select
    (!document.querySelector("select")) && crearSelect()
    
    document.querySelector("select").innerHTML+=`<option>${nombre}</option>`
}

function crearSelect(){
    document.querySelector(".resultado").innerHTML+=`<select></select>`
    document.querySelector("select").addEventListener("click",saludo)
}

function saludo(){
    INPUT.value=document.querySelector("select").value;
}