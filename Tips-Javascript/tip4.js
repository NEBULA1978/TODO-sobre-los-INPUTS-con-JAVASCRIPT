const lenguajes = ["javascript", "python3", "c#"];

// Crear una cadena personalizada para imprimir
const formattedOutput = lenguajes.map((lang, index) => {
    if (index === lenguajes.length - 1) {
        return `y ${lang}`;
    } else {
        return lang;
    }
}).join(", ");

// Imprimir la cadena formateada
console.log(formattedOutput);