// Obtener el valor seleccionado del elemento 'select' y convertirlo a un número entero
let dto = parseInt(document.querySelector("select").value);

// Escuchar el evento 'keyup' en el elemento con id 'precio' y llamar a la función 'leer' cuando ocurra
document.querySelector("#precio").addEventListener("keyup", leer);

// Escuchar el evento 'change' en el elemento 'select' y llamar a la función 'cambio' cuando ocurra
document.querySelector("select").addEventListener("change", cambio);

// Función que actualiza la variable 'dto' con el nuevo valor seleccionado y llama a la función 'leer'
function cambio() {
    dto = parseInt(document.querySelector("select").value);
    leer();
}

// Función que verifica si el valor del elemento con id 'precio' no está vacío y llama a la función 'calcular' o 'vaciar' en consecuencia
function leer() {
    // Si el valor del elemento 'precio' no está vacío, llamar a la función 'calcular', de lo contrario, llamar a 'vaciar'
    (document.querySelector("#precio").value)
        ? calcular()
        : vaciar();
}

// Función que vacía los valores de los elementos con id 'descuento' y 'total'
function vaciar() {
    // Establecer los valores de 'descuento' y 'total' en cadena vacía
    document.querySelector("#descuento").value = "";
    document.querySelector("#total").value = "";
}

// Función que realiza el cálculo del descuento, actualiza los valores de los elementos 'descuento' y 'total'
function calcular() {
    // Obtener el valor del elemento 'precio' como un número
    let cantidad = Number(document.querySelector("#precio").value);
    
    // Calcular el descuento basado en el porcentaje seleccionado
    let descuento = Number((cantidad * (dto / 100)).toFixed(2));

    // Crear una cadena con la descripción detallada del cálculo
    let total = `${cantidad} - ${descuento} = ${Number((cantidad - descuento).toFixed(2))}`;

    // Actualizar los valores de los elementos 'descuento' y 'total'
    document.querySelector("#descuento").value = descuento;
    document.querySelector("#total").value = total;
}
