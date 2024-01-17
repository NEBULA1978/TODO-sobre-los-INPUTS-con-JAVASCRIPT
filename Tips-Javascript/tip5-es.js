// Trucos Javascript
// Intl para traducciones

const lenguajes = ["JavaScript", "Python", "C#"];
const idioma = 'es';

// Unir los lenguajes con una coma y una barra
const lenguajesUnidos = lenguajes.join(', ');

// Utilizar Intl.ListFormat para formatear la lista de lenguajes
const formatoLista = new Intl.ListFormat(idioma).format(lenguajes);

// Imprimir el resultado
console.log(`Los lenguajes son: ${lenguajesUnidos}`);
console.log(`En ${idioma}, se escriben bien: ${formatoLista}`);
