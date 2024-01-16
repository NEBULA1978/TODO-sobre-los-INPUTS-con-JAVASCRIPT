let nota;
document.querySelector(".boton").addEventListener("click",leer);

function leer(){
    nota=document.querySelector("#campo").value;
    document.querySelector(".caja").innerHTML=nota+1
}