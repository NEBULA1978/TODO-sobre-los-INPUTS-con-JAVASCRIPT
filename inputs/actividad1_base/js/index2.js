// Seleccionar el elemento con id 'nombre' y almacenarlo en la constante INPUT
const INPUT = document.querySelector("#nombre");

// Agregar un event listener al elemento con clase 'boton' para el evento 'click' que llamará a la función 'leer'
document.querySelector(".boton").addEventListener("click", leer);

// Agregar un event listener al INPUT para el evento 'keydown' que llamará a la función 'teclado' cuando se presione la tecla 'Enter'
INPUT.addEventListener("keydown", teclado);

// Función que verifica si la tecla presionada es 'Enter' y llama a la función 'leer' en ese caso
function teclado(e) {
    e.key === "Enter" && leer();
}

// Función principal que lee el valor del INPUT, lo procesa, escribe en el select y luego vacía el INPUT
function leer() {
    const NOMBRE = INPUT.value.trim(); // Almacena el valor del INPUT después de quitar espacios en blanco
    (NOMBRE) && escribir(convertir(NOMBRE)); // Si hay un nombre, llama a escribir después de convertir el nombre
    vaciar(); // Vacía el INPUT
}

// Función que vacía el contenido del INPUT y lo enfoca
function vaciar() {
    INPUT.value = "";
    INPUT.focus();
}

// Función que convierte el primer carácter a mayúscula y el resto a minúsculas
function convertir(valor) {
    let nombreCorrecto = `${valor.substring(0, 1).toUpperCase()}${valor.substring(1).toLowerCase()}`;
    return nombreCorrecto;
}

// Función que escribe un nuevo option en el select con el nombre proporcionado
function escribir(nombre) {
    // Si no existe un select, llama a la función crearSelect
    (!document.querySelector(".resultado select")) && crearSelect();

    // Añade un nuevo option al select con el nombre proporcionado
    const select = document.querySelector(".resultado select");
    select.innerHTML += `<option>${nombre}</option>`;
    select.parentElement.innerHTML += `<button onclick="editar('${nombre}')">Editar</button>`;
}

// Función que crea un nuevo select y agrega un event listener para el evento 'click' que llama a la función 'saludo'
function crearSelect() {
    // Añade un nuevo select al elemento con clase 'resultado'
    document.querySelector(".resultado").innerHTML += `<select></select>`;
}

// Función que establece el valor del INPUT como el valor seleccionado en el select
function saludo() {
    INPUT.value = document.querySelector(".resultado select").value;
}

// Función que permite editar el nombre de un select
function editar(nombre) {
    const nuevoNombre = prompt("Ingrese el nuevo nombre:", nombre);
    if (nuevoNombre) {
        const options = document.querySelector(".resultado select").options;
        for (let i = 0; i < options.length; i++) {
            if (options[i].textContent === nombre) {
                options[i].textContent = nuevoNombre;
                break;
            }
        }
    }
}
