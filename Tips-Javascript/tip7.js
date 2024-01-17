const persona = {
  name: "Yandrak",
  age: 20,
  hobbies: [
    { name: 'Programar' },
    { name: 'jugar a videojuegos' }
  ]
};

const newPersona = JSON.parse(JSON.stringify(persona));

newPersona.name = "New name mod.";
newPersona.hobbies[1].name = "ver anime";

console.log(persona);
console.log(newPersona);

// El script que proporcionaste crea un objeto persona con propiedades como name, age, y hobbies. Luego, crea una copia profunda de este objeto utilizando JSON.stringify y JSON.parse. Posteriormente, modifica algunas propiedades en la copia (newPersona) según tus instrucciones y finalmente imprime ambos objetos en la consola.

// Aquí está el flujo de acciones del script:

//     Se crea el objeto persona con las siguientes propiedades:
//         name con el valor "Yandrak"
//         age con el valor 20
//         hobbies que es un array con dos objetos, cada uno con una propiedad name.

//     Se realiza una copia profunda del objeto persona utilizando JSON.stringify y JSON.parse, creando así un nuevo objeto llamado newPersona.

//     Se modifican algunas propiedades en el objeto newPersona:
//         Se cambia la propiedad name a "New name mod."
//         Se cambia la propiedad name del segundo objeto en el array hobbies a "ver anime".

//     Se imprime en la consola el objeto persona original y el objeto modificado newPersona.

// Este script básicamente demuestra cómo crear una copia profunda de un objeto, modificar propiedades en la copia y visualizar ambas versiones del objeto en la consola.
