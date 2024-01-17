// Funciones Asíncronas y Promesas
async function obtenerDatos() {
  console.log("Obteniendo datos..."); // Message while waiting
  let promesa = new Promise((resolve) => setTimeout(() => resolve("Datos"), 1000));
  let resultado = await promesa;
  return resultado;
}

// Example usage
obtenerDatos().then((data) => console.log("Datos obtenidos:", data));



// // Funciones Asíncronas y Promesas
// async function obtenerDatos() {
//   let promesa = new Promise((resolve) => setTimeout(() => resolve("Datos"), 2000));
//   let resultado = await promesa;
//   return resultado;
// }

// // Example usage
// obtenerDatos().then((data) => console.log(data));
