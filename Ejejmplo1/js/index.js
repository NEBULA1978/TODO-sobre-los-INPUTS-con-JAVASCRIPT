let nota;
document.querySelector(".boton").addEventListener("click",leer);

function leer(){
    // Convertimos a numerico
    nota=Number(document.querySelector("#campo").value);
    // Con suma da problemas demas bien
    // document.querySelector(".caja").innerHTML=nota+1
    // Pongo un numero en input y al pulsar suma uno al numero
    // document.querySelector(".caja").innerHTML=++nota
    
    document.querySelector(".caja").innerHTML=nota+1
    

    
}