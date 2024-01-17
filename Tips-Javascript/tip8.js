console.group("Grupo de mensajes")
console.log("Grupo 1")
console.log("Grupo 2")
console.groupEnd()
console.warn("Warnig")
console.error("Error")

// Las constantes solo funciona con strings numeros y booleanos
// Con objeto cuidado

// ❯ node tip8.js
// Grupo de mensajes
//   Grupo 1
//   Grupo 2
// Warnig
// Error