// Ejercicio:
// Utilizando bucles for, se tiene que dibujar un árbol de navidad en pantalla.

// En una variable, se determinará la altura del árbol, por ejemplo, un árbol de altura 3 sería el siguiente:


//     *

//   ***

// *****


//   Se busca hacer un programa que, dada una altura, sea capaz de dibujar un árbol de navidad utilizando espacios y asteriscos.


//     Ejemplos:
// Árbol de altura 1:

// *


//   Árbols de altura 2:

//   *

// ***
//   con javascrip

function dibujarArbol(altura) {
  for (let i = 1; i <= altura; i++) {
    let espacios = " ".repeat(altura - i);
    let asteriscos = "*".repeat((i * 2) - 1);
    console.log(espacios + asteriscos + espacios);
  }
}

dibujarArbol(3); // dibuja un árbol de altura 3


// El código utiliza dos bucles for anidados para dibujar las líneas del árbol.El primer bucle for itera a través de cada línea del árbol, mientras que el segundo bucle for dibuja los asteriscos en cada línea.El número de espacios y asteriscos en cada línea se calcula utilizando la altura del árbol y la posición actual en el bucle.

// Este código dibujará un árbol de Navidad de la altura dada, utilizando espacios y asteriscos para darle la forma del árbol.